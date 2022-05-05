// gets executed before any request is fired
// used for page protection
// protection of routes

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl.clone();

  const url = req.nextUrl.clone();
  url.pathname = "/signin";

  if (signedInPages.find((page) => page === pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.redirect(url);
    }
  }
}
