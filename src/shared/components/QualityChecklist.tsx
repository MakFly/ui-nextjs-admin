"use client";
import { Check, X } from "lucide-react";

interface CheckItem { label: string; passed: boolean; details?: string; }
interface QualityChecklistProps { items: CheckItem[]; title?: string; }

export function QualityChecklist({ items, title = "Quality Checks" }: QualityChecklistProps) {
  const passedCount = items.filter((i) => i.passed).length;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium">{title}</h4>
        <span className="text-xs text-muted-foreground">{passedCount}/{items.length}</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            {item.passed ? <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> : <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />}
            <div>
              <span className={`text-sm ${item.passed ? "text-foreground" : "text-red-700"}`}>{item.label}</span>
              {item.details && <p className="text-xs text-muted-foreground mt-0.5">{item.details}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
