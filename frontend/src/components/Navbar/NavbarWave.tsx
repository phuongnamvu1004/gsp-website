import styles from './Navbar.module.scss';
import { useEffect, useRef } from 'react';

interface NavbarWaveProps {
  activeX: number;
}

export default function NavbarWave({ activeX }: NavbarWaveProps) {
  const pathRefs = useRef<SVGPathElement[]>([]);
  const frameRef = useRef<number>(0);
  const phaseRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!pathRefs.current) return;

      pathRefs.current.forEach((pathRef, index) => {
        if (!pathRef) return;
        const delayedPhase = phaseRef.current - index * 0.4;
        const path = generateWavePath(activeX, delayedPhase);
        pathRef.setAttribute('d', path);
      });

      phaseRef.current += 0.05;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [activeX]);

  return (
    <svg
      className={styles.wave}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <path
          key={i}
          ref={(el) => {
            if (el) pathRefs.current[i] = el;
          }}
          opacity={0.3 - i * 0.08}
        />
      ))}    </svg>
  );
}

function generateWavePath(activeX: number, phase: number): string {
  const width = 1440;
  const baseY = 50;
  const points = 100;
  const segment = width / points;
  const maxAmplitude = 12;

  let path = `M 0 ${baseY}`;
  for (let i = 0; i <= points; i++) {
    const x = i * segment;
    const distanceToActive = Math.abs(x - activeX);
    const falloff = Math.max(0.1, 1 / (1 + (distanceToActive / 60) ** 2));
    const amplitude = maxAmplitude * falloff;
    const y = baseY + Math.sin(i * 0.5 + phase) * amplitude;
    path += ` L ${x} ${y}`;
  }

  return path;
}