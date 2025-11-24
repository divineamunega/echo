"use client";

import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import PlatformShowcase from "@/components/blocks/card-stack";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
	return (
		<div className="relative bg-white dark:bg-[oklch(0.06_0.005_265)] text-neutral-900 dark:text-neutral-50">
			<SmoothScroll />
			<Navbar />

			{/* Hero Section */}
			<section className="relative overflow-hidden px-8 pt-40 pb-32 md:pt-48 md:pb-40">
				<div className="relative mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						>
							<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
								Write once.
								<br />
								Publish <span className="text-neutral-400 dark:text-neutral-600">everywhere</span>.
							</h1>
							<p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 max-w-xl">
								Cross-post your content to Hashnode, Dev.to, and Medium with a single click.
							</p>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
							>
								<Button 
									size="lg" 
									className="bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-8 h-14 text-base font-medium transition-colors" 
									asChild
								>
									<Link href="/signup">
										Start publishing <ArrowRight className="ml-2" size={18} />
									</Link>
								</Button>
							</motion.div>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
							className="flex justify-center lg:justify-end"
						>
							<PlatformShowcase />
						</motion.div>
					</div>
				</div>
			</section>

			{/* What is Echo */}
			<section className="relative px-8 py-32 border-t border-neutral-200 dark:border-neutral-800">
				<div className="mx-auto max-w-4xl">
					<p className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
						Echo is a publishing platform for developers. Write your content once in markdown, 
						and we'll distribute it across multiple platforms automatically.
					</p>
					<div className="grid md:grid-cols-3 gap-16 mt-24">
						<div>
							<div className="text-sm font-medium text-neutral-400 dark:text-neutral-600 mb-3">01</div>
							<h3 className="text-xl font-semibold mb-3">Write</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Markdown editor with live preview
							</p>
						</div>
						<div>
							<div className="text-sm font-medium text-neutral-400 dark:text-neutral-600 mb-3">02</div>
							<h3 className="text-xl font-semibold mb-3">Connect</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Link platform accounts via OAuth
							</p>
						</div>
						<div>
							<div className="text-sm font-medium text-neutral-400 dark:text-neutral-600 mb-3">03</div>
							<h3 className="text-xl font-semibold mb-3">Publish</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								One click distributes everywhere
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="relative px-8 py-32 border-t border-neutral-200 dark:border-neutral-800">
				<div className="relative mx-auto max-w-6xl">
					<h2 className="text-4xl md:text-5xl font-bold mb-20">
						Everything you need
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
						<div>
							<h3 className="text-lg font-semibold mb-2">Markdown first</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Write in plain markdown. Live preview. Export anytime.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Smart scheduling</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Queue your posts and publish at optimal times.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Analytics</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Track performance across all platforms in one dashboard.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Version history</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Every edit saved. Roll back to any version with one click.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Developer API</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								REST API for automation and custom integrations.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Cross-platform</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Publish to Hashnode, Dev.to, and Medium simultaneously.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section className="relative px-8 py-32 border-t border-neutral-200 dark:border-neutral-800">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
					<p className="text-xl text-neutral-600 dark:text-neutral-400 mb-20">
						Simple pricing. No hidden fees.
					</p>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
							<div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">Free</div>
							<div className="text-5xl font-bold mb-8">$0</div>
							<ul className="space-y-4 mb-10">
								<li className="text-neutral-600 dark:text-neutral-400">10 posts per month</li>
								<li className="text-neutral-600 dark:text-neutral-400">2 platforms</li>
								<li className="text-neutral-600 dark:text-neutral-400">Basic analytics</li>
							</ul>
							<Button variant="outline" className="w-full h-12" asChild>
								<Link href="/signup">Get started</Link>
							</Button>
						</div>

						<div className="border-2 border-neutral-900 dark:border-neutral-50 rounded-2xl p-8 relative">
							<div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">Pro</div>
							<div className="text-5xl font-bold mb-8">$12</div>
							<ul className="space-y-4 mb-10">
								<li className="text-neutral-600 dark:text-neutral-400">Unlimited posts</li>
								<li className="text-neutral-600 dark:text-neutral-400">All platforms</li>
								<li className="text-neutral-600 dark:text-neutral-400">Advanced analytics</li>
								<li className="text-neutral-600 dark:text-neutral-400">Smart scheduling</li>
								<li className="text-neutral-600 dark:text-neutral-400">API access</li>
							</ul>
							<Button className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-200 text-white dark:text-neutral-900" asChild>
								<Link href="/signup">Get started</Link>
							</Button>
						</div>

						<div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
							<div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">Team</div>
							<div className="text-5xl font-bold mb-8">$39</div>
							<ul className="space-y-4 mb-10">
								<li className="text-neutral-600 dark:text-neutral-400">Everything in Pro</li>
								<li className="text-neutral-600 dark:text-neutral-400">5 team members</li>
								<li className="text-neutral-600 dark:text-neutral-400">Shared workspaces</li>
								<li className="text-neutral-600 dark:text-neutral-400">Priority support</li>
							</ul>
							<Button variant="outline" className="w-full h-12" asChild>
								<Link href="/signup">Get started</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="relative px-8 py-32 border-t border-neutral-200 dark:border-neutral-800">
				<div className="mx-auto max-w-4xl">
					<h2 className="text-4xl md:text-5xl font-bold mb-16">Questions</h2>
					<div className="space-y-12">
						<div>
							<h3 className="text-xl font-semibold mb-3">
								How does Echo connect to my accounts?
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								We use OAuth for secure authentication. You grant Echo permission to
								publish on your behalf. You can revoke access anytime.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-3">
								Can I edit published posts?
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Yes. Edit in Echo and we sync changes across all platforms. Version
								history keeps track of everything.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-3">
								What if I want to cancel?
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Cancel anytime. Your posts remain published, and you can export
								everything as markdown.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-3">
								Do you support other platforms?
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								Currently Hashnode, Dev.to, and Medium. We're adding Ghost and
								Substack based on user feedback.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="relative px-8 py-32 border-t border-neutral-200 dark:border-neutral-800">
				<div className="relative mx-auto max-w-3xl text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
						Ready to streamline your publishing?
					</h2>
					<Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 px-8 h-14 text-base font-medium" asChild>
						<Link href="/signup">
							Start free trial <ArrowRight className="ml-2" size={18} />
						</Link>
					</Button>
					<p className="text-sm text-neutral-500 dark:text-neutral-500 mt-6">
						14-day free trial · No credit card required
					</p>
				</div>
			</section>

			<Footer />
		</div>
	);
}
