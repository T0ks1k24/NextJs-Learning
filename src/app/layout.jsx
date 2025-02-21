import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import MenuBar from "@/components/layout/MenuBar/MenuBar";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<MenuBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
