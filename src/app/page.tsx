import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { CloudCheck, Code2, TimerIcon } from "lucide-react";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="h-screen w-screen fixed top-0 -z-10">
				<Aurora
					colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
					blend={0.5}
					amplitude={1.0}
					speed={0.5}
				/>
			</div>

			<section className="text-center  max-w-6xl py-32  mx-auto space-y-8">
				<div className="space-y-4">
					<h1 className="text-7xl font-black">
						Build, Write, and Publish — Anywhere.
					</h1>
					<div className="max-w-4xl mx-auto">
						<p className="text-2xl font-bold">
							A markdown-powered blog platform that lets you write once and
							publish everywhere.
						</p>
					</div>
				</div>
				<div className="space-x-4">
					<Button size="lg">Get Started</Button>
					<Button size="lg" variant="ghost">
						See How it Works
					</Button>
				</div>
			</section>

			<section className="lg:px-20">
				{/* Todo */}
				<h2 className="text-center text-5xl font-bold">Features</h2>

				<div className="grid grid-cols-3 gap-10 py-24">
					<SpotlightCard className="hover:scale-105 duration-500">
						<div className="flex items-center justify-center flex-col gap-3">
							<div className="p-5 rounded-full bg-[#3b29ff25]">
								<CloudCheck size={50} />
							</div>
							<h3 className="text-3xl font-bold">Multi-PlatformSync</h3>
							<p className="text-center">
								Publish and update across Hashnode, Dev.to, Medium
							</p>
						</div>
					</SpotlightCard>
					<SpotlightCard className="hover:scale-105 duration-500">
						<div className="flex items-center justify-center flex-col gap-3 text-center">
							<div className="p-5 rounded-full bg-[#ff323228]">
								<TimerIcon size={50} />
							</div>
							<h3 className="text-3xl font-bold">Post Anywhere Anytime</h3>
							<p>
								Schedule your post and we’ll publish it for you — no need to be
								online.
							</p>
						</div>
					</SpotlightCard>
					<SpotlightCard className="hover:scale-105 duration-500">
						<div className="flex items-center justify-center flex-col gap-3 text-center">
							<div className="p-5 rounded-full bg-[#ff94b427]">
								<Code2 size={50} />
							</div>
							<h3 className="text-3xl font-bold text-center">
								Public Post Feed
							</h3>
							<p>Expose your blog posts to other platforms with an API</p>
						</div>
					</SpotlightCard>
				</div>
			</section>
		</div>
	);
}
