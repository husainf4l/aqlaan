import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div 
      className={clsx("bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--card-border)] transition-colors duration-300", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}