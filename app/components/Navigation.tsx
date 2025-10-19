import Link from 'next/link'
import { HomeIcon, PlusIcon, LogInIcon } from 'lucide-react'
import UserEmail from './UserEmail'
import { Suspense } from 'react'
import NavLink from './NavLink'
import { SignedOut, SignInButton, SignedIn, UserButton, SignUpButton } from '@clerk/nextjs'
import HamburgerMenu from './HamburgerMenu'

export default function Navigation() {
  return (
    <aside className="fixed inset-y-0 left-0 w-16 md:w-64 bg-gray-50 dark:bg-[#1A1A1A] border-r border-gray-200 dark:border-dark-border-subtle flex flex-col py-4 px-2 md:px-4">
      <div className="flex items-center justify-center md:justify-start mb-8 px-2">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span className="hidden md:inline">StarterKit</span>
          <span className="md:hidden">SK</span>
        </Link>
      </div>

      <nav className="flex-1 flex flex-col space-y-1">
        <NavLink
          href="/dashboard"
          icon={<HomeIcon size={20} />}
          label="Dashboard"
        />

      </nav>



      <div className="pt-4 border-t border-gray-200 dark:border-dark-border-subtle">
      <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center space-x-4">
              <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Sign in
                </button>
              </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <HamburgerMenu />
          </div>
        <Suspense
          fallback={
            <NavLink
              href="/signin"
              icon={<LogInIcon size={20} />}
              label="Sign In"
            />
          }
        >
          {/* <UserEmail /> */}
        </Suspense>
      </div>
    </aside>
  )
}
