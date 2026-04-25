import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <div className="text-xl border bg-[#4848B8] p-2 text-white rounded  font-bold">
                    FN
                </div>

                {/* Desktop Menu */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href="/" className="px-4 py-2">Home</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="/about" className="px-4 py-2">About</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="/contact" className="px-4 py-2">Contact</a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Side */}
                <div className="flex items-center gap-2">
                    <Button variant="outline">Login</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </nav>
    )
}