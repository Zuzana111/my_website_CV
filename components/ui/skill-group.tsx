type SkillGroupProps = {
  title: string;
  items: readonly string[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="border-t border-border pt-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-foreground/72">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
