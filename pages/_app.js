import { useEffect } from "react";
import "../styles/globals.css";
import Scrollbar from "smooth-scrollbar";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			Scrollbar.init(document.querySelector("#test"));
		}
	}, []);
	return (
		<div id="test">
			<Component {...pageProps} />;
		</div>
	);
}

export default MyApp;
