import { NextResponse } from "next/server";
import Database from "better-sqlite3";

export async function GET() {
  try {
    const db = new Database("./auth.db");
    
    const users = db.prepare(`
      SELECT id, name, email FROM "user"
      WHERE email LIKE '%@test.com' OR email LIKE '%@demo.com'
      ORDER BY createdAt DESC
      LIMIT 10
    `).all() as { id: string; name: string | null; email: string }[];
    
    db.close();
    
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
