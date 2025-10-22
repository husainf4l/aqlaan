"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/** Hook: keep u_resolution synced with canvas size */
function useResolution(uniforms: { u_resolution?: { value: THREE.Vector2 } }) {
  const { size } = useThree();
  useEffect(() => {
    if (!uniforms?.u_resolution) return;
    uniforms.u_resolution.value.set(size.width, size.height);
  }, [size, uniforms]);
}

/** Fullscreen plane with animated "neural flow" shader */
function NeuralPlane() {
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(1, 1) },
      u_intensity: { value: 1.0 },
    }),
    []
  );

  useResolution(uniforms);
  useFrame((_, d) => (uniforms.u_time.value += d));

  const fragment = /* glsl */ `
    precision highp float;
    uniform float u_time;
    uniform vec2  u_resolution;
    uniform float u_intensity;

    vec2 hash(vec2 p){
      p = vec2(dot(p, vec2(127.1,311.7)), dot(p, vec2(269.5,183.3)));
      return -1. + 2.*fract(sin(p)*43758.5453123);
    }
    float noise(in vec2 p){
      const float K1 = 0.366025404;
      const float K2 = 0.211324865;
      vec2 i = floor(p + (p.x+p.y)*K1);
      vec2 a = p - i + (i.x+i.y)*K2;
      vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
      vec2 b = a - o + K2;
      vec2 c = a - 1.0 + 2.0*K2;
      vec3 h = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
      vec3 n = h*h*h*h * vec3(
        dot(a, hash(i+0.0)),
        dot(b, hash(i+o)),
        dot(c, hash(i+1.0))
      );
      return dot(n, vec3(70.0));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p  = (uv - 0.5) * vec2(u_resolution.x/u_resolution.y, 1.0);

      float t = u_time * 0.25;
      float n = 0.0;
      n += 0.55 * noise(p*1.6 + vec2( t, -t*0.7));
      n += 0.30 * noise(p*3.3 + vec2(-t*0.6,  t*0.8));
      n += 0.15 * noise(p*6.0 + vec2( t*0.3,  t*0.2));

      // Dark → indigo → electric cyan with a whisper of magenta
      vec3 base   = vec3(0.03, 0.05, 0.10);  // #090D1A-ish
      vec3 indigo = vec3(0.10, 0.18, 0.40);  // #1A2E66-ish
      vec3 cyan   = vec3(0.02, 0.78, 0.88);  // electric cyan
      vec3 mag    = vec3(0.84, 0.36, 0.98);  // subtle accent

      vec3 col = mix(base, indigo, smoothstep(-0.35, 0.65, n));
      col = mix(col, cyan,   smoothstep(0.45, 0.90, n));
      col = mix(col, mag,    smoothstep(0.80, 0.95, n) * 0.12);

      // Vignette + slight breathing
      float v = smoothstep(0.95, 0.2, length(p));
      col *= v * (0.88 + 0.12 * sin(t*0.9)) * u_intensity;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `void main(){ gl_Position = vec4(position,1.0); }`,
        fragmentShader: fragment,
      }),
    [uniforms, fragment]
  );

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial args={[material]} />
    </mesh>
  );
}

/** The hero section (background WebGL + overlay + content) */
function HeroAICanvasInner() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="hero">
      {/* Animated background OR reduced-motion fallback */}
      {prefersReducedMotion ? (
        <div className="hero__fallback" />
      ) : (
        <Canvas
          className="hero__canvas"
          style={{ position: "absolute", inset: 0 }}
          camera={{ position: [0, 0, 1], fov: 50 }}
        >
          <NeuralPlane />
        </Canvas>
      )}

      {/* Soft top overlay for contrast */}
      <div className="hero__overlayTop" />

      {/* Ambient color glows */}
      <div className="hero__ambient" />

      {/* Content */}
      <div className="hero__contentWrap">
        <div className="container hero__content">
          {/* Headline */}
          <div className="hero__header">
            <h1 className="hero__title">Breakthrough AI from<br />Data to Deployment</h1>
            <p className="hero__subtitle">
              Transform your business with cutting-edge AI solutions that deliver real results. From intelligent automation to predictive analytics, we power the future of enterprise.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">12+</div>
              <div className="hero__stat-label">Enterprise Clients</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">99%</div>
              <div className="hero__stat-label">Accuracy Rate</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">24/7</div>
              <div className="hero__stat-label">Support Available</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="hero__cta">
            <a className="btn btn--primary" href="#start">Get Started</a>
            <a className="btn btn--ghost" href="#docs">Docs</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Disable SSR for the WebGL canvas to avoid hydration issues */
const HeroAICanvas = dynamic(async () => HeroAICanvasInner, { ssr: false });
export default HeroAICanvas;
