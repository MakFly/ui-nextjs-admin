import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import Database from "better-sqlite3";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  database: new Database("./auth.db"),
  emailAndPassword: { enabled: true },
  socialProviders: {
    ...(googleClientId && googleClientSecret ? {
      google: {
        clientId: googleClientId,
        clientSecret: googleClientSecret,
      },
    } : {}),
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
  },
  secret: process.env.BETTER_AUTH_SECRET || "build-placeholder-secret",
  trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"],
  plugins: [nextCookies()],
});
