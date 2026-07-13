import type { PropsWithChildren } from "react";

interface HeroOrbitProps {
  size: number;
  rotation: number;
  orbitDuration?: number; // seconds
}

export const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration = 40,
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start animate-orbit"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          "--rotation": `${rotation}deg`,
          "--duration": `${orbitDuration}s`,
        } as React.CSSProperties}
      >
        <div
          className="inline-flex animate-counter-orbit"
          style={
            {
              "--duration": `${orbitDuration}s`,
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};