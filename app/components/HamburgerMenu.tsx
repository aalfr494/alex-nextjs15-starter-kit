'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-dark-base shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-border-subtle">
                <Link 
                  href="/" 
                  className="text-xl font-bold"
                  onClick={closeMenu}
                >
                  Starter Kit
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-4">
                  <Link
                    href="/features"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-400 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-sky-400 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={closeMenu}
                  >
                    Features
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-400 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-sky-400 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={closeMenu}
                  >
                    FAQ
                  </Link>
                </div>
              </nav>

              <div className="px-4 py-6 border-t border-gray-200 dark:border-dark-border-subtle">
                <div className="space-y-3">
                  <SignedOut>
                  <SignInButton mode="modal">
                    <button
                      className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
                      onClick={closeMenu}
                    >
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button
                      className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-purple-700 rounded-md hover:bg-purple-900 transition-colors"
                      onClick={closeMenu}
                    >
                      Sign up
                    </button>
                  </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

