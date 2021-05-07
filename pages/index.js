import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { forwardRef, useEffect, useRef, useState } from "react";

const icon = {
	hidden: {
		opacity: 0,
		pathLength: 0,

		fill: "rgba(255, 255, 255, 0)",
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		fill: "rgba(0, 0, 0, 1)",
	},
};
export default function Home() {
	const [active, setActive] = useState(false);
	const animSection = useRef();

	useEffect(() => {
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			const { ScrollTrigger } = require("gsap/ScrollTrigger");
			gsap.registerPlugin(ScrollTrigger);

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: animSection.current,
					start: "top top",
					pin: true,
					scrub: 1,
					end: "+=8000",
					onToggle: (self) => {
						setActive(self.isActive);
					},
				},
			});
			tl.from("#firstP p", {
				y: 160,
				stagger: 0.08,
				duration: 3,
			});
			tl.to("#firstP p", {
				y: -160,
				stagger: 0.08,
				duration: 3,
			});
			tl.from("#secondP p", {
				y: 160,
				stagger: 0.08,
				duration: 3,
			});
			tl.to("#secondP p", {
				y: -160,
				stagger: 0.08,
				duration: 3,
			});
			tl.from(
				"#btn",
				{
					y: 400,
					stagger: 0.08,
					duration: 3,
				},
				"-=5"
			);
			tl.to("#btn", {
				y: -400,
				stagger: 0.08,
				duration: 3,
				opacity: 0,
			});

			return () => {
				console.log("kjasdf");
				tl.kill();
			};
		}
	}, []);

	function animate() {}

	return (
		<>
			<div className={styles.container}>asd</div>
			<div className={styles.container}>asd</div>
			<div ref={animSection} className={styles.container}>
				<SvgComponent style={{ marginBottom: 100 }} active={active} />

				<div
					id="firstP"
					style={{
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						gap: 10,
					}}
				>
					<p style={{ fontSize: 40, color: "black" }}>20</p>
					<p style={{ fontSize: 40, color: "black" }}>años</p>
					<p style={{ fontSize: 40, color: "black" }}>creando</p>
				</div>
				<div
					id="firstP"
					style={{
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						gap: 10,
						marginBottom: -102,
					}}
				>
					<p style={{ fontSize: 40, color: "black" }}>proyectos</p>
					<p style={{ fontSize: 40, color: "black" }}>unicos</p>
				</div>

				<div
					id="secondP"
					style={{
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						gap: 10,
					}}
				>
					<p style={{ fontSize: 40, color: "black" }}>En</p>
					<p style={{ fontSize: 40, color: "black" }}>delparque</p>
					<p style={{ fontSize: 40, color: "black" }}>nos</p>
					<p style={{ fontSize: 40, color: "black" }}>apasiona</p>
					<p style={{ fontSize: 40, color: "black" }}>crear</p>
				</div>
				<div
					id="secondP"
					style={{
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						gap: 10,
					}}
				>
					<p style={{ fontSize: 40, color: "black" }}>experiencias</p>
					<p style={{ fontSize: 40, color: "black" }}>sin</p>
					<p style={{ fontSize: 40, color: "black" }}>complicaciones</p>
					<p style={{ fontSize: 40, color: "black" }}>y</p>
					<p style={{ fontSize: 40, color: "black" }}>crear</p>
				</div>

				<div
					id="secondP"
					style={{
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						gap: 10,
					}}
				>
					<p style={{ fontSize: 40, color: "black" }}>transparentes</p>
				</div>
				<button style={{ marginTop: 100 }} id="btn">
					Aloooooooooo
				</button>
			</div>
			<div className={styles.container}>asd</div>
			<div className={styles.container}>asd</div>
		</>
	);
}

const SvgComponent = forwardRef((props, ref) => {
	return (
		<motion.svg
			ref={ref}
			width={103}
			height={109}
			viewBox="0 0 703 709"
			xmlns="http://www.w3.org/2000/svg"
			className="item"
			{...props}
		>
			<motion.path
				// d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
				d="M350.965 0C203.386 0 122.422 20.925 71.575 72.255 20.728 123.585 0 205.32 0 354.301s20.728 230.717 71.575 282.046c39.862 40.242 97.973 61.704 192.225 69.215.177 0 .354 0 .708.179h1.418c25.689 1.967 53.858 2.862 85.217 2.862 31.358 0 59.527-.895 85.216-2.862h1.418c.177 0 .354 0 .708-.179 94.252-7.511 152.363-28.973 192.225-69.215 50.847-51.329 71.575-133.064 71.575-282.046S681.557 123.585 630.71 72.255C579.509 20.925 498.544 0 350.965 0zm85.571 675.515h-.885c-21.437 1.431-40.217-4.471-52.619-16.275-11.338-10.731-17.008-25.933-17.008-45.428v-.536c0-13.056 6.378-25.397 17.008-32.909l99.39-70.288c5.847-4.113 8.327-11.983 5.493-18.6-3.898-9.121-14.882-11.804-22.501-6.439l-76.889 54.371c-9.39 6.617-22.501-.179-22.501-11.804V370.219c0-8.227-6.023-15.56-14.173-15.918-8.681-.536-15.768 6.439-15.768 15.203v68.141c0 11.626-12.933 18.422-22.5 11.804l-76.181-53.833c-6.732-4.65-16.122-3.935-21.083 2.504-5.315 6.975-3.72 16.811 3.189 21.819l99.568 70.467c10.629 7.512 17.007 19.673 17.007 32.908v90.856c0 19.316-5.669 34.697-17.007 45.428-12.402 11.804-31.182 17.527-52.619 16.275h-.886C76.536 660.85 29.941 586.091 29.941 354.301c0-263.445 60.06-324.075 321.024-324.075 260.965 0 321.025 60.63 321.025 324.075 0 231.79-46.595 306.549-235.454 321.214z"
				variants={icon}
				initial="hidden"
				animate={props.active ? "visible" : "hidden"}
				transition={{
					default: { duration: 1, ease: "easeInOut" },
					fill: { duration: 1, ease: [1, 0, 0.8, 1], delay: 1 },
				}}
			/>
		</motion.svg>
	);
});
