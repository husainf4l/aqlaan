import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={clsx("py-24 px-6", className)}>
      {children}
    </section>
  );
}