import jsonData from "@/json/data.json";

export function generateStaticParams() {
	return jsonData.Projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = jsonData.Projects.find((item) => item.slug === slug);

	if (!project) {
		return { title: "Not Found | Subinesh" };
	}

	return {
		title: `${project.title} | Subinesh`,
		description: project.desc[0]?.slice(0, 160),
	};
}

export default function Layout({ children }) {
	return children;
}
