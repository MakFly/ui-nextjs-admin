"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TrendChartProps {
  title?: string;
  data: Record<string, unknown>[];
  lines: { dataKey: string; color: string; label?: string }[];
  xKey?: string;
  height?: number;
}

export function TrendChart({ title, data, lines, xKey = "date", height = 300 }: TrendChartProps) {
  return (
    <Card>
      {title && <CardHeader><CardTitle>{title}</CardTitle></CardHeader>}
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))", fontSize: "12px" }} />
            {lines.map((line) => (
              <Line key={line.dataKey} type="monotone" dataKey={line.dataKey} name={line.label || line.dataKey} stroke={line.color} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
