"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Link from "next/link";

/** Sync canvas resolution */
function useResolution(uniforms: { u_resolution?: { value: THREE.Vector2 } }) {
  const { size } = useThree();
  useEffect(() => {
    if (!uniforms?.u_resolution) return;
    uniforms.u_resolution.value.set(size.width, size.height);
  }, [size, uniforms]);
}

/** Scale-style dark nebula shader — near-black with subtle depth */
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
  useFrame((_, d) => (uniforms.u_time.value += d * 0.4));

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

      float t = u_time * 0.18;
      float n = 0.0;
      n += 0.55 * noise(p*1.8 + vec2( t, -t*0.6));
      n += 0.30 * noise(p*3.6 + vec2(-t*0.5,  t*0.7));
      n += 0.15 * noise(p*7.0 + vec2( t*0.2,  t*0.15));

      // Scale palette: #00000f base with very subtle depth
      vec3 base  = vec3(0.0, 0.0, 0.059);   // #00000f
      vec3 deep  = vec3(0.02, 0.02, 0.09);  // barely-blue dark
      vec3 glow  = vec3(0.04, 0.05, 0.12);  // subtle depth highlight

      vec3 col = mix(base, deep, smoothstep(-0.3, 0.5, n));
      col = mix(col, glow, smoothstep(0.4, 0.85, n) * 0.6);

      // Vignette — pulls edges to #00000f
      float v = smoothstep(1.0, 0.15, length(p * 0.9));
      col = mix(base, col, v);
      col *= (0.92 + 0.08 * sin(t * 0.7)) * u_intensity;

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

function HeroContent() {
  return (
    <div className="hero__contentWrap">
      <div className="container hero__content">
        <p className="hero__overline">Enterprise AI Platform</p>

        <h1 className="hero__title">
          Breakthrough AI from<br />Data to Deployment
        </h1>

        <p className="hero__subtitle">
          Transform your business with precision AI solutions that deliver measurable results.
          From intelligent automation to predictive analytics — enterprise-grade, at scale.
        </p>

        <div className="hero__cta">
          <Link href="/get-started">
            <div className="glass-btn-wrap">
              <span className="glass-btn">Get Started →</span>
            </div>
          </Link>
          <Link href="/demo" className="text-btn">
            Book a Demo →
          </Link>
        </div>

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
      </div>
    </div>
  );
}

export default function HeroAICanvas() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (!isClient) {
    return (
      <section className="hero">
        <div className="hero__fallback" />
        <div className="hero__overlayTop" />
        <HeroContent />
      </section>
    );
  }

  return (
    <section className="hero">
      {prefersReducedMotion ? (
        <div className="hero__fallback" />
      ) : (
        <Canvas
          style={{ position: "absolute", inset: 0 }}
          camera={{ position: [0, 0, 1], fov: 50 }}
        >
          <NeuralPlane />
        </Canvas>
      )}
      <div className="hero__overlayTop" />
      <div className="hero__ambient" />
      <HeroContent />
    </section>
  );
}
