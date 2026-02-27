"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AsyncOperationPanel } from "../components/AsyncOperationPanel";

type Tab = "api-keys" | "llm" | "thresholds";

export function SettingsPage() {
  const [tab, setTab] = useState<Tab>("api-keys");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [settings, setSettings] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    fetch("/api/v1/settings")
      .then((r) => r.json())
      .then(setSettings)
      .catch(() => {});
  }, []);

  const saveSettings = async () => {
    setStatus("loading");
    try {
      await fetch("/api/v1/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Paramètres</h1>

      <div className="flex gap-2">
        {(["api-keys", "llm", "thresholds"] as Tab[]).map((t) => (
          <Button key={t} variant={tab === t ? "default" : "outline"} onClick={() => setTab(t)}>
            {t === "api-keys" ? "Clés API" : t === "llm" ? "LLM" : "Seuils"}
          </Button>
        ))}
      </div>

      <AsyncOperationPanel status={status} />

      <Card>
        <CardHeader><CardTitle>{tab === "api-keys" ? "Clés API" : tab === "llm" ? "Configuration LLM" : "Seuils de scoring"}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {tab === "api-keys" && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Google API Key</label>
                <Input type="password" value={settings?.googleApiKey || ""} onChange={(e) => setSettings({ ...settings, googleApiKey: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">LLM API Key</label>
                <Input type="password" value={settings?.llmApiKey || ""} onChange={(e) => setSettings({ ...settings, llmApiKey: e.target.value })} />
              </div>
            </>
          )}
          {tab === "llm" && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Provider</label>
                <Input value={settings?.llmProvider || ""} onChange={(e) => setSettings({ ...settings, llmProvider: e.target.value })} placeholder="anthropic, openai, ollama" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Modèle</label>
                <Input value={settings?.llmModel || ""} onChange={(e) => setSettings({ ...settings, llmModel: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Température</label>
                <Input type="number" step="0.1" min="0" max="2" value={settings?.llmTemperature || "0.3"} onChange={(e) => setSettings({ ...settings, llmTemperature: e.target.value })} />
              </div>
            </>
          )}
          {tab === "thresholds" && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Seuil ranking</label>
                <Input type="number" value={settings?.rankingThreshold || "70"} onChange={(e) => setSettings({ ...settings, rankingThreshold: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Seuil lead hot</label>
                <Input type="number" value={settings?.leadHotThreshold || "70"} onChange={(e) => setSettings({ ...settings, leadHotThreshold: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Seuil lead warm</label>
                <Input type="number" value={settings?.leadWarmThreshold || "40"} onChange={(e) => setSettings({ ...settings, leadWarmThreshold: e.target.value })} />
              </div>
            </>
          )}
          <Button onClick={saveSettings}>Sauvegarder</Button>
        </CardContent>
      </Card>
    </div>
  );
}
