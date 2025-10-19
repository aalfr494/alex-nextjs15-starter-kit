import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Restrict admin route to users with specific role
  if (isAdminRoute(req)) {
    const { userId, has } = await auth()
    if (!userId || !has({ role: 'admin' })) {
      return Response.redirect(new URL('/unauthorized', req.url))
    }
  }

  // Restrict dashboard routes to signed in users
  if (isDashboardRoute(req)) {
    const { userId } = await auth()
    if (!userId) {
      return Response.redirect(new URL('/sign-in', req.url))
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
