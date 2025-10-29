import Link from 'next/link';
import { PropsWithChildren } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import { SignInButton, SignUpButton, ClerkProvider, SignedOut, SignedIn, UserButton } from '@clerk/nextjs';


const MarketingLayout = ({children}: PropsWithChildren) => {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
    >
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <HamburgerMenu />
            <Link href="/" className="text-xl font-bold">
              StarterKit
            </Link>
            <nav>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center"></div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-8">
                    <Link
                      href="#features"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Features
                    </Link>
                    <Link
                      href="#pricing"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="#about"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="#contact"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Contact
                    </Link>
                  </div>


                </div>
              </div>
            </nav>
          </div>
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
              <SignUpButton mode="modal">
                <button
                  type="button"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Sign up
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Mode</h3>
              <p className="text-sm text-gray-600">
                A modern project management tool built with Next.js.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/yourusername/mode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; Alex Starter Kit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </ClerkProvider>
  );
}

export default MarketingLayout;
