# Zuzana Labs Portfolio

Personal portfolio website for my transition into data analytics and applied AI.

The site presents my background as a former SAP Basis and Security specialist, together with practical projects in machine learning, trading automation, analytics dashboards, and RAG-powered AI tools.

## Live Site

Website: [zuzanalabs.com](https://zuzanalabs.com)

## Built With

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Main Sections

- Home
- About
- Projects
- Writing
- Resume
- Contact

## Featured Work

### Investment Campaign Targeting with ML

Machine learning classification project for identifying banking clients most likely to invest in a second campaign round.

- Python
- SQL
- scikit-learn
- Streamlit
- Binary classification

### Intraday Futures Trading Bot

Event-driven trading automation project built in Python with Interactive Brokers integration.

- Python
- Real-time data processing
- API integration
- Algorithmic trading

### RAG Portfolio Assistant

LLM-powered portfolio assistant using retrieval-augmented generation over custom portfolio content.

- Python
- LangChain
- FAISS
- OpenAI
- Streamlit
- RAG

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Project Structure

```text
app/                  Next.js pages and root layout
components/layout/    Header, footer, locale provider, page intro
components/sections/  Homepage and page sections
components/ui/        Reusable UI components
lib/                  Site data and page copy
public/               Static assets and downloadable resume
scripts/              Resume PDF generation script
```

## Resume PDF

The downloadable resume is stored in:

```text
public/resume.pdf
```

The PDF is generated from:

```text
scripts/generate_resume_pdf.py
```

Regenerate it with:

```bash
python scripts/generate_resume_pdf.py
```

## Privacy Notes

This repository does not require API keys to run the portfolio website.

Environment files are ignored:

```text
.env
.env.local
.env.*.local
```

Do not commit private keys, API keys, tokens, or local environment files.

## Author

Zuzana Shivram Sami

- [LinkedIn](https://www.linkedin.com/in/zuzana-s-sami/)
- [GitHub](https://github.com/Zuzana111)
- [Medium](https://medium.com/@zuzanalabs)
