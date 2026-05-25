import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://subinesh.dev"),
	title: "Subinesh | Portfolio",

	description:
		"Subinesh, AI & Data Science Student and Full-Stack Developer specializing in Next.js, AI/LLM integrations, and SEO/GEO optimization.",

	author: "Subinesh",
	siteUrl: "https://subinesh.dev",
	applicationName: "Subinesh",

	keywords: [
		"subinesh",
		"subinesh b",
		"subinesh dev",
		"portfolio",
		"fullstack",
		"SEO",
		"GEO",
		"Generative Engine Optimization",
		"AI & Data Science",
		"Anand Institute of Higher Technology",
	],

	openGraph: {
		type: "website",
		url: "https://subinesh.dev",
		title: "Subinesh | Portfolio",
		siteName: "Subinesh | Portfolio",
		description: "My name is Subinesh. This is my portfolio website showcasing my work in AI, Full-Stack development, and SEO/GEO.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Subinesh Portfolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Subinesh",
	url: "https://subinesh.dev",
	jobTitle: "AI & Data Science Student & Full-Stack Developer",
	worksFor: [
		{ "@type": "Organization", name: "Thulira" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Anand Institute of Higher Technology",
	},
	sameAs: [
		"https://github.com/Subinesh21",
		"https://www.linkedin.com/in/subinesh-b-92125a323",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
