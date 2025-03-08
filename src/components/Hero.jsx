import React from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
	return (
		<div className=" dark:bg-neutral-900 min-h-screen relative overflow-hidden">
			<div className="relative z-10 p-8 md:p-16">
				{/* Hero section */}
				<div className="grid md:grid-cols-2 gap-12 mb-12">
					<div>
						<h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
							SCALING{" "}
							<span className="text-orange-500 font-serif italic font-normal">
								the
							</span>
							<br />
							FUTURE WEB3.
						</h1>
					</div>
					<div className="flex flex-col justify-center">
						<p className="text-lg mb-8 text-neutral-700 dark:text-neutral-300">
							Brickchain is a scalable and secure blockchain platform designed
							to revolutionize decentralized applications. With cutting-edge
							smart contracts, lightning-fast transactions.
						</p>
						<div>
							<button
								className=" border border-neutral-300 dark:border-neutral-700 rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
								onClick={() =>
									toast("Thank You For Visiting!", {
										description: "Explore our new blockchain app now.",
										action: {
											label: "Go",
										},
									})
								}
							>
								Let&apos;s discuss <ArrowRight size={16} />
							</button>
						</div>
					</div>
				</div>

				{/* Featured image */}
				<div className="w-full h-[500px] md:h-[600px] relative overflow-hidden rounded-sm">
					<img
						src="/image.png"
						alt="Modern interior design featuring a bright living room with colorful accents"
						fill
						className="absolute top-1/2 left-1/2 -translate-1/2 object-cover rounded-sm rotate-90"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
