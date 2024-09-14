"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu"
import DarkModeToggle from "./darkmode-toggle"

export default function TitleBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {!isMenuOpen && <div className="fixed w-full flex h-16 items-center justify-between bg-white dark:bg-black"> 
        <div className="flex items-center gap-2 ml-2 ">
          Reece Campbell
        </div>

        <NavigationMenu className="hidden md:flex mr-2">        
          <DarkModeToggle  />
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#technologies" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Skills
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#experience" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <button
          className="md:hidden mr-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>}
      {isMenuOpen && (
        <div>
          <button
          className="fixed right-4 top-5 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
          <nav className="p-4 h-screen w-full bg-neutral-100 dark:bg-neutral-800 border-t fixed content-center text-center space-y-20 text-2xl">
          <Link
            href="/"
            className="block"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#technologies"
            className="block"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="block"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <DarkModeToggle  />
        </nav>
        </div>
        
      )}
    </header>
  )
}