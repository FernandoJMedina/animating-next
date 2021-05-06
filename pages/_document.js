import Document, { Html, Head, Main, NextScript } from "next/document";
import Scrollbar from "smooth-scrollbar";

if (typeof window !== "undefined" && typeof document !== "undefined") {
	Scrollbar.init(document.querySelector("#smooth"));
}
class MyDocument extends Document {
	componentDidMount() {}
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
