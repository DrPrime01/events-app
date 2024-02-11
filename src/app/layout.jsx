import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Events",
	description: "An app for showing events around the world",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} max-w-screen-xl mx-auto md:px-6 flex flex-col gap-y-10`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
