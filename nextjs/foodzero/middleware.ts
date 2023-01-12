// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/login')) {
    request.nextUrl.pathname = '/'
    return NextResponse.redirect(request.nextUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:function*',
}
