"use client";

interface ScoreGaugeProps {
  score: number;
  size?: number;
  label?: string;
}

function getColor(score: number): string {
  if (score < 40) return "#ef4444";
  if (score < 70) return "#f59e0b";
  return "#22c55e";
}

export function ScoreGauge({ score, size = 120, label }: ScoreGaugeProps) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = getColor(score);

  return (
    <div className="relative flex flex-col items-center gap-2">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-500" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ width: size, height: size }}>
        <span className="text-2xl font-bold" style={{ color }}>{score}</span>
      </div>
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
    </div>
  );
}
