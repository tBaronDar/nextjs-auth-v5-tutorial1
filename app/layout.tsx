import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "../components/layout/app-bar";
import Providers from "@/components/layout/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<AppBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
