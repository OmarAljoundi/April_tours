import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Database } from "./types/supabase";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set(
    "x-dir",
    req.nextUrl.pathname.includes("admin") ? "ltr" : "rtl"
  );
  requestHeaders.set(
    "x-lang",
    req.nextUrl.pathname.includes("admin") ? "en" : "ar"
  );

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  const isDashboard = req.nextUrl.pathname.includes("dashboard");

  if (isDashboard) {
    const supabase = createMiddlewareClient<Database>({ req, res });
    const response = await supabase.auth.getSession();
    console.log("isAuthed? ", response?.data?.session ? "TRUE" : "FALSE");
    if (response.data.session == null) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_URL!}/admin/login`,
        { headers: requestHeaders }
      );
    }
    return res;
  }

  return res;
}
