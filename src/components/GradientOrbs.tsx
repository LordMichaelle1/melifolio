'use client';

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary orb - uses CSS animation for better performance */}
      <div className="orb orb-1" />

      {/* Secondary orb */}
      <div className="orb orb-2" />

      {/* Tertiary orb */}
      <div className="orb orb-3" />

      <style jsx>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          will-change: transform;
          transform: translateZ(0);
        }

        .orb-1 {
          top: -10%;
          right: -10%;
          width: 40vw;
          height: 40vw;
          max-width: 500px;
          max-height: 500px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          opacity: 0.2;
          animation: float1 15s ease-in-out infinite;
        }

        .orb-2 {
          bottom: -10%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          max-width: 600px;
          max-height: 600px;
          background: radial-gradient(circle, var(--cta) 0%, transparent 70%);
          opacity: 0.15;
          animation: float2 20s ease-in-out infinite;
        }

        .orb-3 {
          top: 40%;
          left: 30%;
          width: 30vw;
          height: 30vw;
          max-width: 400px;
          max-height: 400px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          opacity: 0.1;
          animation: float3 18s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.05); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.1); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 20px) rotate(180deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .orb { animation: none; }
        }
      `}</style>
    </div>
  );
}
