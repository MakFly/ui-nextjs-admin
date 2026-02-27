"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendChart } from "../components/TrendChart";
import { KpiCard } from "../components/KpiCard";

type Tab = "dashboard" | "pages" | "queries";

export function GscDashboard() {
  const [tab, setTab] = useState<Tab>("dashboard");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (endpoint: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/v1/gsc/${endpoint}`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.error("GSC fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Google Search Console</h1>
      </div>

      <div className="flex gap-2">
        {(["dashboard", "pages", "queries"] as Tab[]).map((t) => (
          <Button key={t} variant={tab === t ? "default" : "outline"} onClick={() => { setTab(t); fetchData(t === "dashboard" ? "performance" : t); }}>
            {t === "dashboard" ? "Performance" : t === "pages" ? "Pages" : "Requêtes"}
          </Button>
        ))}
      </div>

      {loading && <p className="text-muted-foreground">Chargement...</p>}

      {!loading && data && tab === "dashboard" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <KpiCard label="Clics" value={data.totalClicks ?? 0} />
            <KpiCard label="Impressions" value={data.totalImpressions ?? 0} />
            <KpiCard label="CTR moyen" value={`${((data.avgCtr ?? 0) * 100).toFixed(1)}%`} />
            <KpiCard label="Position moy." value={(data.avgPosition ?? 0).toFixed(1)} />
          </div>
          {data.rows && (
            <TrendChart
              title="Évolution"
              data={data.rows}
              lines={[
                { dataKey: "clicks", color: "#3b82f6", label: "Clics" },
                { dataKey: "impressions", color: "#8b5cf6", label: "Impressions" },
              ]}
              xKey="date"
            />
          )}
        </div>
      )}

      {!loading && data && (tab === "pages" || tab === "queries") && (
        <Card>
          <CardHeader><CardTitle>{tab === "pages" ? "Top Pages" : "Top Requêtes"}</CardTitle></CardHeader>
          <CardContent>
            {Array.isArray(data) && data.length > 0 ? (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">{tab === "pages" ? "Page" : "Requête"}</th>
                    <th className="text-right py-2">Clics</th>
                    <th className="text-right py-2">Impressions</th>
                    <th className="text-right py-2">CTR</th>
                    <th className="text-right py-2">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row: Record<string, unknown>, i: number) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-2 truncate max-w-xs">{String(row.page || row.query)}</td>
                      <td className="text-right py-2">{String(row.clicks)}</td>
                      <td className="text-right py-2">{String(row.impressions)}</td>
                      <td className="text-right py-2">{((row.ctr ?? 0) as number * 100).toFixed(1)}%</td>
                      <td className="text-right py-2">{((row.position ?? 0) as number).toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-muted-foreground">Aucune donnée</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
