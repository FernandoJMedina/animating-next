import { useEffect } from "react";
import { gsap } from "gsap";

export default function Snap() {
	useEffect(() => {
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			const { ScrollTrigger } = require("gsap/ScrollTrigger");
			const { ScrollToPlugin } = require("gsap/ScrollToPlugin");
			gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

			const sections = document.querySelectorAll("section");
			function goToSection(section) {
				gsap.to(window, {
					scrollTo: { y: section, autoKill: false },
					duration: 1,
				});
			}
			sections.forEach((section) => {
				ScrollTrigger.create({
					trigger: section,
					end: "bottom top+=1",
					onEnter: () => goToSection(section),
					onEnterBack: () => goToSection(section),
				});
			});
		}
	}, []);

	return (
		<>
			<section id="landing-page" className="hero-story hero hero1">
				<div className="full-col width-100">
					<h1>Landing Screen</h1>
				</div>
			</section>
			<section id="rooms" className="hero-story hero second-hero hero2">
				<div className="left-col width-100">
					<h2>Des chambres pour vous</h2>
				</div>
			</section>
			<section id="you" className="hero-story hero second-hero hero3">
				<div className="middle-col width-100">
					<h2>Proche de vous</h2>
				</div>
			</section>
			<section id="near" className="hero-story hero second-hero hero4">
				<div className="left-col width-100 delayed">
					<h2>Contenu pour proche de tout</h2>
				</div>
			</section>
			<footer className="hero-story hero second-hero hero5">
				<h2>Contenu du footer</h2>
			</footer>
		</>
	);
}
