import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all";
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-700 text-gray-200 hover:bg-gray-800",
  };
  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}