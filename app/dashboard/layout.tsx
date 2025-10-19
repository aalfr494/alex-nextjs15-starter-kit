import { PropsWithChildren } from 'react'
import { Suspense } from 'react'
import Navigation from '../components/Navigation'
import DashboardSkeleton from '../components/DashboardSkeleton'
import { ClerkProvider } from '@clerk/nextjs'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
    >
      <div className="min-h-screen">
        <Navigation />
        <main className="pl-16 md:pl-64 pt-0 min-h-screen">
          <div className="max-w-6xl mx-auto p-4 md:p-8">
            <Suspense fallback={<DashboardSkeleton />}>{children}</Suspense>
          </div>
        </main>
      </div>
    </ClerkProvider>
  )
}

export default DashboardLayout
