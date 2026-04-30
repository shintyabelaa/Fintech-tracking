'use client';

import { Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border">
            <div className="mx-auto px-4 sm:px-6 lg:px-32  py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="font-bold text-lg text-[#4970cc] flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#4970cc] rounded-lg flex items-center justify-center text-sidebar-accent font-bold">
                                FT
                            </div>
                            FinTrack
                        </div>
                        <p className="text-sm text-sidebar-foreground/70">
                            Take control of your finances and build better money habits.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold text-sidebar-foreground mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-sidebar-foreground mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-sidebar-foreground mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-sidebar-border pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-sidebar-foreground/70">
                            &copy; {currentYear} FinTrack. All rights reserved.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
