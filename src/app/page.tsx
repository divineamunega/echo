import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";

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

			<div className="text-center  max-w-6xl py-32  mx-auto space-y-8">
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
			</div>
		</div>
	);
}
