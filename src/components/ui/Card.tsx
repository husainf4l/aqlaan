import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--card-border)] transition-colors duration-300", className)}>
      {children}
    </div>
  );
}