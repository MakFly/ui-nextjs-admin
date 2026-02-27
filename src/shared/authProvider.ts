import { AuthProvider } from "ra-core";
import { authClient } from "@/lib/auth-client";

export const authProvider: AuthProvider = {
  login: async ({ email, password }: { email: string; password: string }) => {
    const result = await authClient.signIn.email({ email, password });
    if (result.error) throw new Error(result.error.message);
  },
  logout: async () => {
    await authClient.signOut();
  },
  checkError: async ({ status }: { status?: number }) => {
    if (status === 401 || status === 403) {
      throw new Error("Session expired");
    }
  },
  checkAuth: async () => {
    const session = await authClient.getSession();
    if (!session.data?.session) throw new Error("Not authenticated");
  },
  getIdentity: async () => {
    const session = await authClient.getSession();
    if (!session.data?.user) throw new Error("Not authenticated");
    const user = session.data.user;
    return { id: user.id, fullName: user.name, avatar: user.image ?? undefined };
  },
  getPermissions: async () => "admin",
};
