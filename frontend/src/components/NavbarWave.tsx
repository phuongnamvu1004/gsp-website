import { useEffect, useRef } from 'react';

interface NavbarWaveProps {
  activeX: number;
}

export default function NavbarWave({ activeX }: NavbarWaveProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const frameRef = useRef<number>(0);
  const phaseRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!pathRef.current) return;

      const path = generateWavePath(activeX, phaseRef.current);
      pathRef.current.setAttribute('d', path);

      phaseRef.current += 0.1;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [activeX]);

  return (
    <svg
      className="w-full h-full absolute top-0 left-0 z-20 pointer-events-none"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
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