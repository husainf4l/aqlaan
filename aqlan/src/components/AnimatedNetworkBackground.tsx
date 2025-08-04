"use client";
import { useEffect, useRef } from "react";

export default function AnimatedNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;

    const animate = () => {
      time += 0.008; // Increased speed for more visible movement
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create more visible geometric patterns
      const gridSize = 100; // Reduced grid size for more density
      const offsetX = (time * 20) % gridSize; // Faster movement
      const offsetY = (time * 15) % gridSize;

      // Draw more visible grid lines
      ctx.strokeStyle = "rgba(107, 114, 128, 0.15)"; // Increased opacity from 0.08 to 0.15
      ctx.lineWidth = 0.8; // Increased line width

      // Vertical lines with better visibility
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        const opacity = 0.12 + Math.sin(time + x * 0.01) * 0.08; // Increased base opacity
        ctx.strokeStyle = `rgba(107, 114, 128, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with better visibility
      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        const opacity = 0.12 + Math.sin(time + y * 0.01) * 0.08; // Increased base opacity
        ctx.strokeStyle = `rgba(107, 114, 128, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Enhanced flowing lines (data streams) - much more visible
      ctx.strokeStyle = "rgba(59, 130, 246, 0.25)"; // Increased from 0.1 to 0.25
      ctx.lineWidth = 1.5; // Thicker lines

      for (let i = 0; i < 5; i++) {
        // Increased from 3 to 5 lines
        const waveY =
          canvas.height * (0.2 + i * 0.15) + Math.sin(time + i * 2) * 80; // More amplitude
        const waveY2 =
          canvas.height * (0.25 + i * 0.15) + Math.sin(time + i * 2 + 1) * 60;

        ctx.beginPath();
        ctx.moveTo(0, waveY);

        for (let x = 0; x < canvas.width; x += 15) {
          // Smoother curves
          const y = waveY + Math.sin((x + time * 150) * 0.008 + i) * 35; // More visible waves
          ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, waveY2);

        for (let x = 0; x < canvas.width; x += 15) {
          const y = waveY2 + Math.sin((x + time * 120) * 0.008 + i + 3) * 25;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Add diagonal flowing elements for more movement
      ctx.strokeStyle = "rgba(99, 102, 241, 0.15)";
      ctx.lineWidth = 1;

      for (let i = 0; i < 3; i++) {
        const startX = -100 + ((time * 50 + i * 200) % (canvas.width + 200));
        const startY = canvas.height * 0.2 + i * canvas.height * 0.3;

        ctx.beginPath();
        ctx.moveTo(startX, startY);

        for (let step = 0; step < 300; step += 20) {
          const x = startX + step;
          const y =
            startY + step * 0.3 + Math.sin((step + time * 100) * 0.01) * 30;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      style={{ zIndex: 2 }}
    />
  );
}

export function StaticNetworkOverlay() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* More visible professional overlay */}
      <div className="absolute inset-0 opacity-12">
        {/* More visible diagonal lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`diagonal-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-gray-400/50 to-transparent"
            style={{
              left: `${(i + 1) * 12.5}%`,
              height: "100%",
              transform: "rotate(15deg)",
              transformOrigin: "center",
            }}
          />
        ))}
      </div>

      {/* Enhanced corporate corner accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-8">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 via-transparent to-transparent" />
      </div>

      {/* Enhanced bottom left accent */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/20 via-transparent to-transparent" />
      </div>

      {/* Additional center accent for more visibility */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-transparent to-purple-500/15" />
      </div>
    </div>
  );
}
