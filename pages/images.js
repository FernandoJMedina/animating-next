import { gsap } from "gsap";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
	const { ScrollTrigger } = require("gsap/ScrollTrigger");
	gsap.registerPlugin(ScrollTrigger);
}

const images = [
	{
		image: "https://assets.codepen.io/16327/before.jpg",
	},
	{
		image: "https://assets.codepen.io/16327/after.jpg",
	},
];

export default function Images() {
	useEffect(() => {
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			animate();
		}
	}, []);

	function animate() {
		gsap.utils.toArray(".comparisonSection").forEach((section) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "center center",
					// makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
					end: () => "+=" + section.offsetWidth,
					scrub: true,
					pin: true,
					anticipatePin: 1,
				},
				defaults: { ease: "none" },
			});
			// animate the container one way...
			tl.fromTo(
				section.querySelector(".afterImage"),
				{ xPercent: 100, x: 0 },
				{ xPercent: 0 }
			)
				// ...and the image the opposite way (at the same time)
				.fromTo(
					section.querySelector(".afterImage img"),
					{ xPercent: -100, x: 0 },
					{ xPercent: 0 },
					0
				);
		});
	}
	return (
		<>
			<div style={{ height: "100vh" }}>
				<h1 className="header-section">Calate esta pa</h1>
			</div>

			<section className="comparisonSection">
				<div className="comparisonImage beforeImage">
					<img src={images[0].image} alt="before" />
				</div>
				<div className="comparisonImage afterImage">
					<img src={images[1].image} alt="after" />
				</div>
			</section>

			<div style={{ height: "100vh" }}>
				<h1 className="header-section">Puto el que lee</h1>
			</div>
		</>
	);
}
