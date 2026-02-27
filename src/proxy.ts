import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!login|register|api/auth|api/users|api/v1/bff|_next/static|_next/image|favicon.ico).*)"],
};

export async function proxy(request: NextRequest) {
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("__Secure-better-auth.session_token")?.value;

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
