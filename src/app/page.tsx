import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import Navbar from "@/components/shared/navbar";

export default function Home() {
	return (
		<div className="w-screen">
			<Navbar />
			<div className="w-screen h-screen fixed top-0 -z-10">
				<Aurora
					colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
					blend={0.5}
					amplitude={1.0}
					speed={0.5}
				/>
			</div>

			<div className="text-center  max-w-7xl py-24  mx-auto">
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
				<div></div>
			</div>
		</div>
	);
}
