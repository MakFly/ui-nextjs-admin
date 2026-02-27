"use client";
import { Badge } from "@/components/ui/badge";

interface SeverityBadgeProps { severity: "critical" | "warning" | "info"; }

const variants: Record<string, "destructive" | "default" | "secondary"> = {
  critical: "destructive", warning: "default", info: "secondary",
};

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  return <Badge variant={variants[severity]}>{severity}</Badge>;
}
