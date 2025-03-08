const cards = [
  {
    image: "/f2.png",
    title: "Decentralized Security",
    description: "Ensuring trustless and tamper-proof transactions with blockchain encryption.",
  },
  {
    image: "/f1.jpg",
    title: "Custom Smart Contracts",
    description: "Automate agreements with flexible, self-executing smart contracts tailored to your needs.",
  },
  {
    image: "/f3.jpg",
    title: "Scalability & Speed",
    description: "Optimized for high-performance transactions without compromising security.",
  },
  {
    image: "/f3.jpg",
    title: "Transparent Ledger",
    description: "Every transaction is publicly verifiable, enhancing trust and accountability.",
  },
  {
    image: "/f1.jpg",
    title: "Interoperability",
    description: "Seamlessly connect with other blockchain networks for enhanced functionality.",
  },
  {
    image: "/f2.png",
    title: "Low-Cost Transactions",
    description: "Minimize fees while maximizing efficiency with Brickchain’s optimized architecture.",
  },
];


function ImageCard({ image, title, description }) {
	return (
		<div className="relative overflow-hidden rounded-lg group aspect-[4/5] h-full">
			<div className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:blur-sm">
				<img
					src={image || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/70 to-transparent">
				<h3 className="text-xl font-bold text-white mb-2">{title}</h3>
				<p className="text-sm text-white/90">{description}</p>
			</div>
		</div>
	);
}

export default function Features() {
	return (
		<div className="dark:bg-neutral-900 p-8 md:p-16 container mx-auto px-4 py-12" id="features">
			<h1 className="mb-12 text-center text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
				OUR{" "}
				<span className="text-orange-500 font-serif italic font-normal">
					spotlight
				</span>
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card, index) => (
					<ImageCard
						key={index}
						image={card.image}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</div>
	);
}
