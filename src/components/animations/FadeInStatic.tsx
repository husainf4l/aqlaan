import React from "react";

interface FadeInStaticProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInStatic({ 
  children, 
  delay = 0,
  className = "" 
}: FadeInStaticProps) {
  const delayClass = delay > 0 ? `stagger-${Math.round(delay * 10)}` : "";
  
  return (
    <div className={`animate-fade-in ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
