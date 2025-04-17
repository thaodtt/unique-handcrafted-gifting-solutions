// src/components/Header.tsx
"use client"; // Needed for NavigationMenu interaction

import * as React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle, // Style helper for links
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"; // Utility for conditional classes
import { ModeToggle } from "@/components/core/ModeToggle"; // Theme toggle component
import { SearchBar } from "@/components/core/SearchBar";

export default function Header() {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push('/');
  };
  return (
    <header className="flex items-center justify-between p-4 border-b">
      {/* <div className="container flex h-14 items-center"> */}
        <div className="ml-10 mr-10 flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
          <span className="font-bold sm:inline-block">
            <p>Unique Handcrafted</p>
            <p>Gifting Solutions</p>
          </span>
          </div>
          <div className="flex items-center">
          <SearchBar placeholder="Look for an artwork here"/>
          </div>
          <div>         
        <NavigationMenu>
          <NavigationMenuList>
            {/* Artwork Link (Home) */}
            <NavigationMenuItem>
               <Link href="/" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                     Home
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Link href="/artwork" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                     Artworks
                  </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>

            {/* About Link */}
            <NavigationMenuItem>
              <Link href="/about" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contact Link */}
            <NavigationMenuItem>
              <Link href="/contact" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-3 mr-10">
            <ModeToggle />
        </div>
      {/* </div> */}
    </header>
  );
}

// };
// return (
//   <header className="flex items-center justify-between p-4 border-b">
//     <div className="font-medium text-xl cursor-pointer" onClick={handleLogoClick}>
//       Bibo.AI
//     </div>
//     <SearchBar placeholder="Look for a story here" />
//     <div className="flex items-center gap-3">
//       <Avatar>
//         <AvatarImage src="https://github.com/shadcn.png" />
//         <AvatarFallback className="bg-gray-200 text-gray-700">CN</AvatarFallback>
//       </Avatar>
//       <div className="flex flex-col">
//         <span className="text-sm font-medium">John Doe</span>
//       </div>
//     </div>
//   </header>
// );
// }