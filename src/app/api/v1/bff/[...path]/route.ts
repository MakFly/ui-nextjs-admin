import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { SignJWT } from "jose";

export const runtime = "nodejs";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8020";

async function proxyToBackend(request: NextRequest, params: Promise<{ path: string[] }>) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const secret = process.env.BETTER_AUTH_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Secret not configured" }, { status: 500 });
  }

  const key = new TextEncoder().encode(secret);
  const token = await new SignJWT({
    sub: session.user.id,
    email: session.user.email,
    name: session.user.name,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1m")
    .sign(key);

  const { path } = await params;
  const backendUrl = `${BACKEND_URL}/api/v1/${path.join("/")}${request.nextUrl.search}`;

  const headers: Record<string, string> = {
    "Authorization": `Bearer ${token}`,
  };

  const init: RequestInit = {
    method: request.method,
    headers,
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    const body = await request.text();
    if (body) {
      init.body = body;
      headers["Content-Type"] = request.headers.get("content-type") || "application/json";
    }
  }

  const res = await fetch(backendUrl, init);
  const data = await res.arrayBuffer();

  return new Response(data, {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") || "application/json" },
  });
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, params);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, params);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, params);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, params);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, params);
}
