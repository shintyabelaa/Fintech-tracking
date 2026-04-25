import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <div className="text-lg bg-[#4970cc] p-2 text-white rounded font-bold">
            FN
          </div>
          <div className="text-xl text-[#4970cc] font-bold">FinTrack</div>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="/" className="px-4 py-2">
                Features
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/about" className="px-4 py-2">
                Pricing
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="px-4 py-2">
                About
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="px-4 py-2">
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
