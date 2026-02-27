"use client";
import { useGetList } from "ra-core";
import { KpiCard } from "../components/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Dashboard() {
  const { data: rankings, total: rankingsTotal } = useGetList("rankings", {
    pagination: { page: 1, perPage: 5 },
    sort: { field: "createdAt", order: "DESC" },
  });

  const { data: audits, total: auditsTotal } = useGetList("audits", {
    pagination: { page: 1, perPage: 5 },
    sort: { field: "createdAt", order: "DESC" },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { total: contentTotal } = useGetList("content", {
    pagination: { page: 1, perPage: 5 },
    sort: { field: "createdAt", order: "DESC" },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { total: leadsTotal } = useGetList("leads", {
    pagination: { page: 1, perPage: 5 },
    sort: { field: "createdAt", order: "DESC" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tableau de bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label="Prédictions" value={rankingsTotal ?? 0} />
        <KpiCard label="Contenus" value={contentTotal ?? 0} />
        <KpiCard label="Audits" value={auditsTotal ?? 0} />
        <KpiCard label="Leads" value={leadsTotal ?? 0} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Dernières prédictions</CardTitle></CardHeader>
          <CardContent>
            {rankings && rankings.length > 0 ? (
              <ul className="space-y-2">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {rankings.map((r: any) => (
                  <li key={r.id as string} className="flex justify-between text-sm">
                    <span className="font-medium truncate mr-2">{r.keyword as string}</span>
                    <span className="text-muted-foreground">{r.predictedPosition ? `#${r.predictedPosition}` : "En cours..."}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Aucune prédiction récente</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Derniers audits</CardTitle></CardHeader>
          <CardContent>
            {audits && audits.length > 0 ? (
              <ul className="space-y-2">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {audits.map((a: any) => (
                  <li key={a.id as string} className="flex justify-between text-sm">
                    <span className="font-medium truncate mr-2">{a.url as string}</span>
                    <span className="text-muted-foreground">{a.score != null ? `${a.score}/100` : String(a.status)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Aucun audit récent</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
