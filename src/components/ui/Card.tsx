import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("bg-gray-900 p-6 rounded-xl border border-gray-800", className)}>
      {children}
    </div>
  );
}