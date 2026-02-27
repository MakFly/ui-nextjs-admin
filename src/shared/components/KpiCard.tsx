"use client";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KpiCardProps {
  label: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
}

export function KpiCard({ label, value, delta, deltaLabel }: KpiCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {delta !== undefined && (
          <div className="flex items-center gap-1 mt-2">
            {delta >= 0 ? <ArrowUp className="h-3.5 w-3.5 text-green-600" /> : <ArrowDown className="h-3.5 w-3.5 text-red-600" />}
            <span className={`text-xs font-medium ${delta >= 0 ? "text-green-600" : "text-red-600"}`}>
              {delta > 0 ? "+" : ""}{delta}%
            </span>
            {deltaLabel && <span className="text-xs text-muted-foreground ml-1">{deltaLabel}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
