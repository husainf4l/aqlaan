"use client";

import { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    // Initialize dots in a grid pattern
    const initDots = () => {
      const dots: Dot[] = [];
      const spacing = 40;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
      dotsRef.current = dots;
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const repelDistance = 120;
      const returnSpeed = 0.1;
      const repelStrength = 2;

      dotsRef.current.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Repel from mouse
        if (distance < repelDistance) {
          const force = (repelDistance - distance) / repelDistance;
          dot.vx -= (dx / distance) * force * repelStrength;
          dot.vy -= (dy / distance) * force * repelStrength;
        }

        // Return to base position
        dot.vx += (dot.baseX - dot.x) * returnSpeed;
        dot.vy += (dot.baseY - dot.y) * returnSpeed;

        // Apply friction
        dot.vx *= 0.85;
        dot.vy *= 0.85;

        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'; // blue-500 with opacity
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  );
}
