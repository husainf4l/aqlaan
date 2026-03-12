import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | AQLAAN",
  description: "Explore AQLAAN's comprehensive suite of AI products and platforms designed for enterprise-scale deployment and innovation.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
