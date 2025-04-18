'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/core/ModeToggle';
import { SearchBar } from '@/components/core/SearchBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleLogoClick = () => {
    router.push('/');
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 bg-background z-50 w-full border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer mb-2 md:mb-0" // Added mb-2 for mobile layout
          onClick={handleLogoClick}
        >
          <span className="font-bold text-sm sm:text-base">
            <p className="text-xs sm:text-sm">Unique Handcrafted</p>
            <p className="text-xs sm:text-sm">Gifting Solutions</p>
          </span>
        </div>

        {/* Search Bar (Visible on Mobile) */}
        <div className="w-full md:w-auto mb-3 md:mb-0">
          {' '}
          {/* Adjusted width for mobile */}
          <SearchBar placeholder="Look for an artwork here" />
        </div>

        <div className="flex items-center md:space-x-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-ring focus-offset-1"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation and Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/artwork" className={navigationMenuTriggerStyle()}>
                      Artworks
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className={navigationMenuTriggerStyle()}>
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className={navigationMenuTriggerStyle()}>
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation (Conditional Rendering) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background shadow-md rounded-md py-2 mt-1 z-50 md:hidden">
            <nav className="flex flex-col items-center space-y-2">
              <Link
                href="/"
                className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground w-full text-center"
              >
                Home
              </Link>
              <Link
                href="/artwork"
                className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground w-full text-center"
              >
                Artworks
              </Link>
              <Link
                href="/about"
                className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground w-full text-center"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground w-full text-center"
              >
                Contact
              </Link>
              <div className="mt-2">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
