import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Subinesh",
  description:
    "AI & Data Science Student and Full-Stack Developer specializing in Next.js, AI/LLM integrations, and SEO/GEO optimization.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
