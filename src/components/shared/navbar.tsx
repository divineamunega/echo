"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = function () {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
			<div
				className={`max-w-7xl mx-auto transition-all duration-300 ${
					scrolled
						? "bg-white/70 dark:bg-[oklch(0.13_0.02_265)]/80"
						: "bg-white/50 dark:bg-[oklch(0.13_0.02_265)]/50"
				} backdrop-blur-xl border border-neutral-200/50 dark:border-[oklch(0.25_0.03_265)]/50 rounded-2xl`}
			>
				<div className="px-6 py-3 flex items-center justify-between">
					<Link href="/" className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
						echo
					</Link>

					<div className="hidden md:flex items-center gap-6">
						<Link
							href="#pricing"
							className="text-sm font-medium text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
						>
							Pricing
						</Link>
						<Link
							href="/docs"
							className="text-sm font-medium text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
						>
							Docs
						</Link>
						<button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-[oklch(0.13_0.012_265)] dark:text-[oklch(0.75_0.008_265)] transition-colors"
							aria-label="Toggle theme"
						>
							{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
						</button>
						<Button size="sm" className="bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 transition-colors" asChild>
							<Link href="/signup">Sign up</Link>
						</Button>
					</div>

					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{isMenuOpen && (
					<div className="md:hidden border-t border-neutral-200/50 dark:border-[oklch(0.20_0.015_265)] backdrop-blur-xl rounded-b-2xl dark:bg-[oklch(0.11_0.012_265)]">
						<div className="px-6 py-4 flex flex-col gap-4">
							<Link
								href="#pricing"
								className="text-sm font-medium text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Pricing
							</Link>
							<Link
								href="/docs"
								className="text-sm font-medium text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Docs
							</Link>
							<button
								onClick={() => {
									setTheme(theme === "dark" ? "light" : "dark");
									setIsMenuOpen(false);
								}}
								className="text-sm font-medium text-neutral-700 dark:text-neutral-400 text-left hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
							>
								{theme === "dark" ? "Light mode" : "Dark mode"}
							</button>
							<Button size="sm" className="bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-200 text-white dark:text-neutral-900" asChild>
								<Link href="/signup">Sign up</Link>
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
