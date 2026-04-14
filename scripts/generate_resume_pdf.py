from __future__ import annotations

from pathlib import Path
from textwrap import wrap


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"

PAGE_WIDTH = 595
PAGE_HEIGHT = 842
MARGIN_X = 50
MARGIN_TOP = 54
MARGIN_BOTTOM = 48
CONTENT_WIDTH = PAGE_WIDTH - (MARGIN_X * 2)


def pdf_escape(text: str) -> bytes:
    encoded = text.encode("cp1252", errors="replace")
    encoded = encoded.replace(b"\\", b"\\\\").replace(b"(", b"\\(").replace(b")", b"\\)")
    return b"(" + encoded + b")"


class ResumePdf:
    def __init__(self) -> None:
        self.pages: list[bytes] = []
        self.commands: list[bytes] = []
        self.y = PAGE_HEIGHT - MARGIN_TOP

    def finish_page(self) -> None:
        if self.commands:
            self.pages.append(b"\n".join(self.commands))
            self.commands = []
            self.y = PAGE_HEIGHT - MARGIN_TOP

    def ensure_space(self, amount: float) -> None:
        if self.y - amount < MARGIN_BOTTOM:
            self.finish_page()

    def text(self, value: str, x: float, y: float, size: float = 10.5, font: str = "F1", color: str = "0 0 0") -> None:
        self.commands.append(
            b"BT /"
            + font.encode()
            + f" {size} Tf {color} rg {x:.2f} {y:.2f} Td ".encode()
            + pdf_escape(value)
            + b" Tj ET"
        )

    def line(self, x1: float, y1: float, x2: float, y2: float, color: str = "0.90 0.87 0.88", width: float = 1) -> None:
        self.commands.append(f"{color} RG {width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S".encode())

    def paragraph(self, value: str, size: float = 10.2, leading: float = 14.5, indent: float = 0, color: str = "0.23 0.19 0.22") -> None:
        max_chars = max(35, int((CONTENT_WIDTH - indent) / (size * 0.46)))
        lines = wrap(value, width=max_chars)
        self.ensure_space((len(lines) * leading) + 4)
        for line in lines:
            self.text(line, MARGIN_X + indent, self.y, size=size, color=color)
            self.y -= leading

    def heading(self, title: str) -> None:
        self.ensure_space(38)
        self.line(MARGIN_X, self.y + 8, PAGE_WIDTH - MARGIN_X, self.y + 8)
        self.text(title.upper(), MARGIN_X, self.y - 10, size=12.8, font="F2", color="0.42 0.31 0.36")
        self.y -= 28

    def small_caps(self, value: str) -> None:
        self.text(value.upper(), MARGIN_X, self.y, size=8.5, font="F2", color="0.55 0.42 0.48")
        self.y -= 13

    def bullet(self, value: str, indent: float = 12) -> None:
        max_chars = max(35, int((CONTENT_WIDTH - indent - 10) / (9.8 * 0.48)))
        lines = wrap(value, width=max_chars)
        self.ensure_space((len(lines) * 13.5) + 2)
        self.text("-", MARGIN_X + indent, self.y, size=9.8, color="0.42 0.31 0.36")
        self.text(lines[0], MARGIN_X + indent + 12, self.y, size=9.8, color="0.23 0.19 0.22")
        self.y -= 13.5
        for line in lines[1:]:
            self.text(line, MARGIN_X + indent + 12, self.y, size=9.8, color="0.23 0.19 0.22")
            self.y -= 13.5

    def job(self, title: str, period: str, bullets: list[str]) -> None:
        estimated = 34 + sum(max(1, len(b) // 90 + 1) * 13.5 for b in bullets)
        self.ensure_space(estimated)
        self.text(title, MARGIN_X, self.y, size=11.2, font="F2", color="0.16 0.13 0.15")
        self.y -= 13
        self.small_caps(period)
        for bullet in bullets:
            self.bullet(bullet)
        self.y -= 5

    def build(self) -> bytes:
        self.finish_page()

        objects: list[bytes] = []
        font1_id = 3
        font2_id = 4
        page_ids: list[int] = []
        content_ids: list[int] = []

        objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
        objects.append(b"")  # pages placeholder
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")

        next_id = 5
        for page in self.pages:
            page_id = next_id
            content_id = next_id + 1
            next_id += 2
            page_ids.append(page_id)
            content_ids.append(content_id)
            objects.append(
                f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {PAGE_WIDTH} {PAGE_HEIGHT}] "
                f"/Resources << /Font << /F1 {font1_id} 0 R /F2 {font2_id} 0 R >> >> "
                f"/Contents {content_id} 0 R >>".encode()
            )
            objects.append(b"<< /Length " + str(len(page)).encode() + b" >>\nstream\n" + page + b"\nendstream")

        kids = b" ".join(f"{page_id} 0 R".encode() for page_id in page_ids)
        objects[1] = b"<< /Type /Pages /Kids [" + kids + b"] /Count " + str(len(page_ids)).encode() + b" >>"

        pdf = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        offsets = [0]
        for index, obj in enumerate(objects, start=1):
            offsets.append(len(pdf))
            pdf.extend(f"{index} 0 obj\n".encode())
            pdf.extend(obj)
            pdf.extend(b"\nendobj\n")

        xref_pos = len(pdf)
        pdf.extend(f"xref\n0 {len(objects) + 1}\n".encode())
        pdf.extend(b"0000000000 65535 f \n")
        for offset in offsets[1:]:
            pdf.extend(f"{offset:010d} 00000 n \n".encode())
        pdf.extend(
            f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode()
        )
        return bytes(pdf)


def main() -> None:
    pdf = ResumePdf()

    pdf.text("Zuzana Shivram Sami", MARGIN_X, pdf.y, size=27, font="F2", color="0.16 0.13 0.15")
    pdf.y -= 25
    pdf.text(
        "Data Analytics & Applied AI - Former SAP Basis & Security Specialist",
        MARGIN_X,
        pdf.y,
        size=11.5,
        font="F2",
        color="0.42 0.31 0.36",
    )
    pdf.y -= 22
    pdf.paragraph(
        "trnkovaz@gmail.com | +420 774 888 074 | linkedin.com/in/zuzana-s-sami | "
        "github.com/Zuzana111 | medium.com/@zuzanalabs",
        size=8.8,
        leading=12,
        color="0.34 0.28 0.31",
    )
    pdf.y -= 5

    pdf.heading("Professional Summary")
    pdf.paragraph(
        "Former SAP Basis and Security specialist with 10+ years of experience across enterprise environments, "
        "including Accenture, Skoda Auto, CETIN, and freelance work. Currently transitioning into data analytics and "
        "applied AI after completing an intensive data science bootcamp. Building practical projects in SQL, Python, "
        "machine learning, and decision-support tools, with a growing focus on trading analytics and real-world AI applications."
    )

    pdf.heading("Core Skills")
    for line in [
        "Languages: Python, SQL, ABAP",
        "Data & ML: pandas, NumPy, Matplotlib, Plotly, Keras, ETL, regression, decision trees, random forest, AdaBoost, NLP",
        "Analytics: dashboards, exploratory analysis, feature engineering, model evaluation",
        "Enterprise / IT: SAP Basis, SAP Security, transport management, monitoring, user management, release management",
        "Tools: GitHub, Jupyter, Dash",
    ]:
        pdf.bullet(line, indent=0)

    pdf.heading("Experience")
    jobs = [
        (
            "Freelance SAP Consultant | Gavrit Consulting (Remote, project-based)",
            "May 2021 - Nov 2025",
            [
                "Provided SAP Basis and Security support across project-based remote engagements.",
                "Supported enterprise SAP operations, administration, and technical coordination.",
                "Contributed to ongoing SAP-related work while later transitioning toward data analytics and applied AI.",
            ],
        ),
        (
            "SAP Consultant, SAP Competence Center / Basis Team - CETIN",
            "Oct 2017 - Apr 2021",
            [
                "Managed SAP environments including Solution Manager, Portal, Oracle, ECC, and SRM.",
                "Supported transport management, monitoring, batch management, user management, and system maintenance.",
                "Participated in SAP upgrade planning and Oracle database administration.",
                "Troubleshot performance and operational issues across enterprise systems.",
            ],
        ),
        (
            "SAP Software Engineer - Accenture",
            "May 2015 - Jan 2018",
            [
                "Worked on release management, cutover coordination, conflict analysis, and landscape synchronization.",
                "Contributed to SAP security and architecture work across large international environments, with project experience in Geneva, Stuttgart, Bratislava, and Prague.",
                "Supported design and implementation of support processes including monitoring, incident handling, and job scheduling.",
                "Participated in security guideline design for more than 35 SAP systems.",
            ],
        ),
        (
            "SAP Consultant, FI/CO - Skoda Auto",
            "Jan 2014 - May 2015",
            [
                "Supported Volkswagen SAP FI systems and related CO/MM processes.",
                "Worked on incident management, change management, authorization management, and upgrade planning.",
                "Communicated across English- and German-speaking environments.",
            ],
        ),
        (
            "SAP System Analyst - Skoda Auto",
            "Aug 2012 - Dec 2013",
            [
                "Supported cross-functional SAP process delivery and rollout activities.",
                "Managed upgrade planning, testing, innovation initiatives, and authorization work.",
                "Led training and support-related activities for end users and key users.",
            ],
        ),
        (
            "SAP Basis Trainee - RWE",
            "Earlier role",
            ["Built early SAP operations experience through technical support, system work, and practical enterprise delivery."],
        ),
    ]
    for title, period, bullets in jobs:
        pdf.job(title, period, bullets)

    pdf.heading("Education")
    pdf.bullet("Master's Degree, Informatics / Information Systems - Masaryk University Brno", indent=0)
    pdf.bullet("Bachelor's Degree, Applied Informatics - Masaryk University Brno", indent=0)

    pdf.heading("Languages")
    for item in ["Czech - native", "English - professional", "German - basic"]:
        pdf.bullet(item, indent=0)

    pdf.heading("Certifications & Training")
    for item in [
        "Data science bootcamp covering Python, SQL, machine learning, ETL, NLP, dashboards, and model tuning",
        "ITIL Foundation V3",
        "ITIL Intermediate Service Strategy",
        "ITIL Intermediate Service Transition",
        "SAP technical and reporting trainings",
    ]:
        pdf.bullet(item, indent=0)

    pdf.heading("Interests")
    pdf.paragraph("Pilates / yoga / tennis | Travelling | Financial markets | Self-education", size=10.2)

    OUTPUT.write_bytes(pdf.build())


if __name__ == "__main__":
    main()
