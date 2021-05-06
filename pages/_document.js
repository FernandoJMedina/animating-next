import Document, { Html, Head, Main, NextScript } from "next/document";
import Scrollbar from "smooth-scrollbar";

class MyDocument extends Document {
	componentDidMount() {
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			Scrollbar.init(document.querySelector("#smooth"));
		}
	}
	render() {
		return (
			<Html>
				<Head />
				<body id="smooth">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
