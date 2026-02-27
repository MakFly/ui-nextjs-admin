"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";

const TEST_ACCOUNTS = [
  { name: "Admin", email: "admin@test.com", password: "admin123" },
  { name: "User", email: "user@test.com", password: "user1234" },
  { name: "Demo", email: "demo@demo.com", password: "demo1234" },
];

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await authClient.signIn.email({
        email: form.email,
        password: form.password,
      });
      if (result.error) throw new Error(result.error.message);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary mb-4">
            <LogIn className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold">SEO Ultimate</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Connectez-vous pour accéder au tableau de bord
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Connexion</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">Connexion rapide</label>
              <div className="flex gap-2 flex-wrap">
                {TEST_ACCOUNTS.map((account) => (
                  <Button
                    key={account.email}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setForm({ email: account.email, password: account.password })}
                  >
                    {account.name}
                  </Button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="vous@example.com"
                  value={form.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mot de passe</label>
                <PasswordInput
                  placeholder="Votre mot de passe"
                  value={form.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, password: e.target.value })}
                  required
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Chargement..." : "Se connecter"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-2 text-muted-foreground">ou</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={handleGoogleLogin} type="button">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Se connecter avec Google
            </Button>

            <div className="mt-4 text-center">
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => router.push("/register")}
              >
                Pas de compte ? S&apos;inscrire
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
