import React from "react";
import { cn } from "@/lib/utils";

interface SunsetHeroProps {
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  children?: React.ReactNode;
}

export function SunsetHero({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  children,
}: SunsetHeroProps) {
  const titleWords = title?.split(" ") || [];

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background",
        className
      )}
      role="banner"
      aria-label="Hero section"
    >
      {/* Sunset Gradient Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40" aria-hidden="true">
        <div
          className="absolute inset-[-100%]"
          style={{
            background: `
              repeating-linear-gradient(100deg, 
                #ff6b6b 10%, 
                #feca57 15%, 
                #ff9ff3 20%, 
                #ff6b6b 25%, 
                #feca57 30%)
            `,
            backgroundSize: "300% 100%",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-[-10px]"
          style={{
            background: `
              repeating-linear-gradient(100deg, 
                rgba(255, 107, 107, 0.1) 0%, 
                rgba(255, 107, 107, 0.1) 7%, 
                transparent 10%, 
                transparent 12%, 
                rgba(255, 107, 107, 0.1) 16%),
              repeating-linear-gradient(100deg, 
                #ff6b6b 10%, 
                #feca57 15%, 
                #ff9ff3 20%, 
                #ff6b6b 25%, 
                #feca57 30%)
            `,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            mixBlendMode: "difference",
          }}
        />
      </div>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content Layer */}
      {children ? (
        <div className="relative z-10 w-full">{children}</div>
      ) : (
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div
            className="max-w-5xl mx-auto"
          >
            {/* Title */}
            {title && (
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
                {titleWords.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-4 last:mr-0 mb-2">
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={`${wordIndex}-${letterIndex}`}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 cursor-default"
                        style={{
                          textShadow: "0 0 20px hsl(var(--primary) / 0.3)",
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            )}

            {/* Description */}
            {description && (
              <p
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                {description}
              </p>
            )}

            {/* Action Buttons */}
            {(primaryAction || secondaryAction) && (
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                {primaryAction && (
                  <button
                    onClick={primaryAction.onClick}
                    className="px-8 py-4 text-base sm:text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    aria-label={primaryAction.label}
                  >
                    {primaryAction.label}
                  </button>
                )}

                {secondaryAction && (
                  <button
                    onClick={secondaryAction.onClick}
                    className="px-8 py-4 text-base sm:text-lg font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
                    aria-label={secondaryAction.label}
                  >
                    {secondaryAction.label}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
