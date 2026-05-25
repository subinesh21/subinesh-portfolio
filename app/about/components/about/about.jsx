import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpeg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me2.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Subinesh"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Subinesh"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Subinesh"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Subinesh
					</h2>
					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						I&rsquo;m <span className="text-black font-medium">Subinesh</span>, an AI & Data Science student at <span className="text-black font-medium">Anand Institute of Higher Technology</span> (CGPA: 7.8) with hands-on experience building full-stack applications, optimizing for search engines, and integrating AI/LLM capabilities.
						<br />
						<br />
						I bridge the gap between technical AI/ML knowledge and practical product development. My stack includes Next.js, React, Python, Firebase, MongoDB, and Google Cloud. I&rsquo;m particularly passionate about <span className="text-black font-medium">Generative Engine Optimization (GEO)</span> — understanding how AI answer engines (ChatGPT, Gemini, Perplexity) retrieve and rank content, then structuring digital products accordingly.
						<br />
						<br />
						Currently, I am building <span className="text-black font-medium">Thulira</span>, a full-stack sustainable e-commerce platform, freelancing for Singapore-based clients, and developing AI chatbots and GEO-optimized content strategies. I believe great products are built at the intersection of technology, user intent, and search visibility.
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
