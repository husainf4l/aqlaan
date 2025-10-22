import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({ children, variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const base = "rounded-lg font-semibold transition-all";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-700 text-gray-200 hover:bg-gray-800",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };
  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}