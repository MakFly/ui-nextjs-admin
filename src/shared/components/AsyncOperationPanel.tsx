"use client";
import { Loader2 } from "lucide-react";

interface AsyncOperationPanelProps {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  className?: string;
}

export function AsyncOperationPanel({ status, message, className = "" }: AsyncOperationPanelProps) {
  if (status === "idle") return null;
  return (
    <div className={`rounded-lg border p-4 ${status === "loading" ? "border-blue-200 bg-blue-50" : status === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"} ${className}`}>
      <div className="flex items-center gap-3">
        {status === "loading" && <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />}
        <span className={`text-sm font-medium ${status === "loading" ? "text-blue-700" : status === "success" ? "text-green-700" : "text-red-700"}`}>
          {message || (status === "loading" ? "Opération en cours..." : status === "success" ? "Opération terminée" : "Une erreur est survenue")}
        </span>
      </div>
    </div>
  );
}
