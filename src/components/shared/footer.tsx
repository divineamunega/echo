import Link from "next/link";

const Footer = () => {
	return (
		<footer className="border-t border-neutral-200 dark:border-[oklch(0.18_0.010_265)] bg-white dark:bg-[oklch(0.09_0.012_265)]">
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
					<div>
						<h3 className="font-semibold mb-4">Product</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="#pricing"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="/docs"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Documentation
								</Link>
							</li>
							<li>
								<Link
									href="/changelog"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Changelog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Company</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Legal</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/privacy"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Privacy
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Terms
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Social</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="https://twitter.com"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="https://github.com"
									className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-neutral-200 dark:border-[oklch(0.18_0.010_265)]">
					<p className="text-sm text-neutral-600 dark:text-[oklch(0.55_0.008_265)]">
						© 2025 Echo. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
