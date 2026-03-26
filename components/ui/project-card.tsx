type ProjectCardProps = {
  title: string;
  description: string;
  type: string;
  stack: readonly string[];
};

export function ProjectCard({ title, description, type, stack }: ProjectCardProps) {
  return (
    <article className="border-t border-border pt-6">
      <p className="text-sm font-medium text-accent-deep">{type}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-foreground/70">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/50">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
