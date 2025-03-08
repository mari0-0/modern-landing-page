import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, MoveUpRight, ToyBrick, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { motion } from "framer-motion";

const menuLinks = [
	{ path: "#", label: "Home" },
	{ path: "#features", label: "Features" },
	{ path: "#contact", label: "Contact" },
];
const fadeIn = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleUp = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1, ease: "easeOut" },
	},
};
const Navbar = () => {
	const container = useRef();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const tl = useRef();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			gsap.set(".menu-link-item-holder", { y: 75 });

			tl.current = gsap
				.timeline({ paused: true })
				.to(".menu-overlay", {
					duration: 1,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
				})
				.to(".menu-link-item-holder", {
					y: 0,
					duration: 0.75,
					stagger: 0.1,
					ease: "power4.inOut",
					delay: -0.75,
				});
		},
		{ scope: container }
	);

	useEffect(() => {
		if (isMenuOpen) {
			tl.current.play();
		} else {
			tl.current.reverse();
		}
	}, [isMenuOpen]);

	return (
		<motion.div initial="hidden" animate="visible">
			<div
				className="menu-container bg-white dark:bg-neutral-900"
				ref={container}
			>
				<div className="menu-bar-wrapper">
					<div className="menu-bar">
						<div className="menu-logo">
							<div className="flex justify-center items-center gap-2">
								<h3 className="text-xl font-fraunces font-medium flex items-center gap-1">
									<ToyBrick /> BrickChain
								</h3>
							</div>
						</div>

						<div className="menu-open  flex justify-center items-center gap-3">
							<ModeToggle />
							<p onClick={toggleMenu}>
								<Menu />
							</p>
						</div>
					</div>
				</div>

				<div className="menu-overlay font-fraunces bg-white dark:bg-neutral-900">
					<div className="menu-overlay-bar">
						<div className="menu-logo">
							<div className="flex justify-center items-center gap-2">
								<h1 className="text-black dark:text-white text-xl flex items-center gap-1 font-semibold">
									<ToyBrick className="" color="#fff" /> BrickChain
								</h1>
							</div>
						</div>
					</div>
					<div className="menu-close-icon">{/* <p>&#x2715;</p> */}</div>
					<div className="menu-copy">
						<div className="menu-links">
							{menuLinks.map((link, index) => (
								<div className="menu-link-item" key={index}>
									<div className="menu-link-item-holder" onClick={toggleMenu}>
										<a href={link.path} className="menu-link pr-14">
											{link.label}
										</a>
									</div>
								</div>
							))}
						</div>
						<div className="menu-info pb-12 text-black dark:text-white">
							<div className="menu-info-col">
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="flex gap-2"
								>
									<span>Instagram</span>
									<span>
										<MoveUpRight size={16} />
									</span>
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="flex gap-2"
								>
									<span>Twitter</span>
									<span>
										<MoveUpRight size={16} />
									</span>
								</a>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="flex gap-2"
								>
									<span>Discord</span>
									<span>
										<MoveUpRight size={16} />
									</span>
								</a>
								<p>info@brickchain.com</p>
								<p>+12 3456 89010</p>
							</div>
						</div>
					</div>
					<div className="menu-preview">
						<div className="menu-close" onClick={toggleMenu}>
							<p className="text-black dark:text-white font-poppins font-medium">
								<X />
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
