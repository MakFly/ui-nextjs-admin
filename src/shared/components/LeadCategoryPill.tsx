"use client";
import { Badge } from "@/components/ui/badge";

interface LeadCategoryPillProps { category: "hot" | "warm" | "cold"; }

const variants: Record<string, "destructive" | "default" | "secondary"> = {
  hot: "destructive", warm: "default", cold: "secondary",
};

export function LeadCategoryPill({ category }: LeadCategoryPillProps) {
  return <Badge variant={variants[category]}>{category.charAt(0).toUpperCase() + category.slice(1)}</Badge>;
}
