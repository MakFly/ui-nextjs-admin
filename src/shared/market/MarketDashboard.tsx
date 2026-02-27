"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AsyncOperationPanel } from "../components/AsyncOperationPanel";

type Tab = "keywords" | "trends" | "competitors" | "niches";

export function MarketDashboard() {
  const [tab, setTab] = useState<Tab>("keywords");
  const [query, setQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fetchMarket = async (endpoint: string) => {
    if (!query) return;
    setStatus("loading");
    try {
      const response = await fetch(`/api/v1/market/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: query, domain: query }),
      });
      const json = await response.json();
      setData(json);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Intelligence Marché</h1>

      <div className="flex gap-2">
        {(["keywords", "trends", "competitors", "niches"] as Tab[]).map((t) => (
          <Button key={t} variant={tab === t ? "default" : "outline"} onClick={() => setTab(t)}>
            {t === "keywords" ? "Mots-clés" : t === "trends" ? "Tendances" : t === "competitors" ? "Concurrents" : "Niches"}
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        <Input placeholder="Mot-clé ou domaine..." value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-md" />
        <Button onClick={() => fetchMarket(tab)}>Analyser</Button>
      </div>

      <AsyncOperationPanel status={status} />

      {data && status === "success" && (
        <Card>
          <CardHeader><CardTitle>Résultats</CardTitle></CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg overflow-auto max-h-96">
              {JSON.stringify(data, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
