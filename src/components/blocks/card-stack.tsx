"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function PlatformShowcase() {
	return (
		<div className="w-full max-w-[700px]">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				className="relative"
			>
				{/* Main Content Box */}
				<div className="flex items-center gap-8">
					{/* Echo Source */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="flex-shrink-0"
					>
						<div className="w-32 h-32 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
							<div className="text-center">
								<div className="text-2xl font-bold mb-1">echo</div>
								<div className="text-xs text-neutral-500">Your content</div>
							</div>
						</div>
					</motion.div>

					{/* Arrow */}
					<motion.div
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
						className="flex-shrink-0"
					>
						<ArrowRight className="w-8 h-8 text-neutral-400 dark:text-neutral-600" strokeWidth={1.5} />
					</motion.div>

					{/* Platform Grid */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="flex-1"
					>
						<div className="grid grid-cols-3 gap-4">
							{/* Hashnode */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
								className="aspect-square rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col items-center justify-center gap-2 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
							>
								<svg viewBox="0 0 337 337" fill="none" className="w-12 h-12 text-[#2962ff]">
									<rect width="337" height="337" rx="168.5" fill="currentColor" />
									<path
										d="M168.5 69.5L238.5 139.5L168.5 209.5L98.5 139.5L168.5 69.5Z"
										fill="white"
										stroke="white"
										strokeWidth="25"
										strokeLinejoin="round"
									/>
								</svg>
								<span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Hashnode</span>
							</motion.div>

							{/* Dev.to */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
								className="aspect-square rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col items-center justify-center gap-2 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
							>
								<svg viewBox="0 0 132 65" fill="none" className="w-12 h-12 text-[#0a0a0a] dark:text-white">
									<path
										d="M0 33C0 15.3269 14.3269 1 32 1H100C117.673 1 132 15.3269 132 33C132 50.6731 117.673 65 100 65H32C14.3269 65 0 50.6731 0 33Z"
										fill="currentColor"
									/>
									<path
										d="M37.8 44.4H29.2L28.4 43.2V21.6L29.2 20.4H37.8C41.6 20.4 44 22.8 44 26.4V38.4C44 42 41.6 44.4 37.8 44.4ZM33.2 24V40.8H37.8C38.8 40.8 39.6 40 39.6 38.4V26.4C39.6 24.8 38.8 24 37.8 24H33.2Z"
										className="fill-white dark:fill-[#0a0a0a]"
									/>
									<path
										d="M58 35.2C58 36.8 57.2 37.6 56 37.6H50.4V40.8H58.4L59.2 42V44L58.4 45.2H49.6L48.8 44.4V21.6L49.6 20.4H58.4L59.2 21.6V23.6L58.4 24.8H50.4V28H56C57.2 28 58 28.8 58 30.4V35.2Z"
										className="fill-white dark:fill-[#0a0a0a]"
									/>
									<path
										d="M72.8 44.4L72 45.2H69.6L68.8 44.4L64.4 32.4L64 44.4L63.2 45.2H61.2L60.4 44.4V21.6L61.2 20.4H63.6L64.4 21.2L68.8 33.2L69.2 21.6L70 20.4H72L72.8 21.6V44.4Z"
										className="fill-white dark:fill-[#0a0a0a]"
									/>
									<path d="M76.5 25.5H79.5V26.5H76.5V25.5Z" className="fill-white dark:fill-[#0a0a0a]" />
									<path d="M83.5 25.5H86.5V26.5H83.5V25.5Z" className="fill-white dark:fill-[#0a0a0a]" />
									<path d="M90 31.5H99V34.5H90V31.5Z" className="fill-white dark:fill-[#0a0a0a]" />
								</svg>
								<span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Dev.to</span>
							</motion.div>

							{/* Medium */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
								className="aspect-square rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col items-center justify-center gap-2 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
							>
								<svg viewBox="0 0 195 195" fill="none" className="w-12 h-12 text-[#000000] dark:text-white">
									<rect width="195" height="195" rx="97.5" fill="currentColor" />
									<path
										d="M46.5 65C46.5 54.5066 54.5066 46.5 65 46.5H130C140.493 46.5 148.5 54.5066 148.5 65V130C148.5 140.493 140.493 148.5 130 148.5H65C54.5066 148.5 46.5 140.493 46.5 130V65Z"
										className="fill-white dark:fill-[#000000]"
									/>
									<ellipse cx="78" cy="97.5" rx="18" ry="32.5" fill="currentColor" />
									<ellipse cx="106.5" cy="97.5" rx="9" ry="32.5" fill="currentColor" />
									<ellipse cx="120" cy="97.5" rx="6" ry="32.5" fill="currentColor" />
								</svg>
								<span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Medium</span>
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Caption */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.2 }}
					className="text-center text-sm text-neutral-500 dark:text-neutral-500 mt-8"
				>
					One source, three destinations
				</motion.p>
			</motion.div>
		</div>
	);
}
