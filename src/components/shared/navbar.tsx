import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = function () {
	return (
		<nav
			// style="cursor: auto;"
			className="glass-nav sticky left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
		>
			<div className="glass-nav flex items-center justify-between px-5 py-5">
				{/* todo check this out later */}
				{/* <span
					className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
					// style="opacity: 0; transform: scale(0) translateX(-50%) translateY(-50%); top: 53px; left: 364px;"
				>
					<svg
						stroke="currentColor"
						fill="none"
						strokeWidth="2"
						viewBox="0 0 24 24"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="text-white"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line x1="7" y1="17" x2="17" y2="7"></line>
						<polyline points="7 7 17 7 17 17"></polyline>
					</svg>
				</span> */}
				<div className="hidden items-center gap-2 md:flex">
					<Button variant="ghost">
						<Link href="/">Features </Link>
					</Button>
					<Button variant="ghost">
						<Link href="blog">Blog</Link>
					</Button>
					<Button variant="ghost">
						<Link href="/about">About</Link>
					</Button>
					<Button variant="ghost">
						<Link href="/dashboard">Dashboard</Link>
					</Button>
				</div>
				<span className="pointer-events-none relative left-0 top-[50%] z-10 text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
					echo
				</span>
				<div className="flex items-center gap-4">
					<div className="hidden md:block">
						<Button variant="ghost">Sign in</Button>
					</div>
					<Button>Try free</Button>
					<button className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden">
						<svg
							stroke="currentColor"
							fill="none"
							strokeWidth="2"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line x1="3" y1="12" x2="21" y2="12"></line>
							<line x1="3" y1="6" x2="21" y2="6"></line>
							<line x1="3" y1="18" x2="21" y2="18"></line>
						</svg>
					</button>
				</div>
			</div>
			<div
				className="block overflow-hidden md:hidden"
				// style="height: 0px;"
			>
				<div className="flex items-center justify-between px-4 pb-4">
					<div className="flex items-center gap-4">
						<a
							href="#"
							className="text-white/90 transition-colors hover:text-white"
						>
							Products
						</a>
						<a
							href="#"
							className="text-white/90 transition-colors hover:text-white"
						>
							History
						</a>
						<a
							href="#"
							className="text-white/90 transition-colors hover:text-white"
						>
							Contact
						</a>
					</div>
					<button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
						<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
							Sign in
						</span>
						<span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
