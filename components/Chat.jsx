"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faComments,
	faTimes,
	faUndo,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [options, setOptions] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const messagesEndRef = useRef(null);

	const botName = "Subinesh Bot";

	// Initial message setup
	const startChat = () => {
		setMessages([
			{
				sender: "bot",
				text: "Hello! I am Subinesh Bot. Are you looking for some help?",
				time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
			},
		]);
		setOptions([
			{ label: "Yes", action: "say_yes" },
			{ label: "No, just browsing", action: "say_no" },
		]);
	};

	useEffect(() => {
		startChat();
	}, []);

	// Scroll to bottom on new messages
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, options]);

	const handleOptionClick = (option) => {
		// Append user message
		const userMsg = {
			sender: "user",
			text: option.label,
			time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
		};

		setMessages((prev) => [...prev, userMsg]);
		setOptions([]);

		// Trigger bot response after a brief delay
		setTimeout(() => {
			respondTo(option.action);
		}, 600);
	};

	const respondTo = (action) => {
		const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		let reply = "";
		let nextOptions = [];

		switch (action) {
			case "say_yes":
				reply = "Please tell me how I can help you. Try asking about my services, projects, or contact details! Or select a category below:";
				nextOptions = [
					{ label: "Services & Skills", action: "services" },
					{ label: "Projects & Work", action: "projects" },
					{ label: "Contact Info & Resume", action: "contact" },
				];
				break;

			case "say_no":
				reply = "No problem! Enjoy exploring the site. Let me know if you change your mind!";
				nextOptions = [
					{ label: "Start Over", action: "reset" },
				];
				break;

			case "services":
				reply = "I specialize in:\n\n• Web Development (Next.js, React, Node.js, FastAPI)\n• AI & LLMs (Gemini, LangChain, FAISS, Prompt Engineering)\n• SEO & GEO (Generative Engine Optimization)\n• Blockchain / Web3 (Solidity, Smart Contracts)\n\nWhich area would you like to know more about?";
				nextOptions = [
					{ label: "AI & GEO", action: "info_ai" },
					{ label: "Web Dev & Databases", action: "info_web" },
					{ label: "Blockchain", action: "info_blockchain" },
					{ label: "Back to Menu", action: "say_yes" },
				];
				break;

			case "projects":
				reply = "I've built several notable projects, including:\n\n• Thulira: A sustainable e-commerce platform\n• Asia Tech Roofing: Rebuilt roofing firm site with GSAP animations & SEO/GEO optimization\n• Smart FAQ Bot: AI chatbot using Gemini AI, LangChain, and FAISS\n\nWhich one would you like to know about?";
				nextOptions = [
					{ label: "Thulira", action: "proj_thulira" },
					{ label: "Asia Tech Roofing", action: "proj_roofing" },
					{ label: "Smart FAQ Bot", action: "proj_faq" },
					{ label: "Back to Menu", action: "say_yes" },
				];
				break;

			case "contact":
				reply = "You can reach me at:\n\n• Email: subinesh21@proton.me\n• Phone: +91 9087352282\n• LinkedIn: linkedin.com/in/subinesh-b-92125a323\n• GitHub: github.com/Subinesh21\n\nYou can also download my resume from the button below.";
				nextOptions = [
					{ label: "Download Resume", action: "download_cv" },
					{ label: "Back to Menu", action: "say_yes" },
				];
				break;

			case "info_ai":
				reply = "I build semantic search engines and context-aware chatbots using Gemini, Llama, and DeepSeek via LangChain/FAISS. I'm also deeply interested in GEO (Generative Engine Optimization) — structuring content so AI answer engines can accurately rank and fetch it.";
				nextOptions = [
					{ label: "Back to Services", action: "services" },
					{ label: "Back to Menu", action: "say_yes" },
				];
				break;

			case "info_web":
				reply = "I build optimized web solutions with Next.js, React, TypeScript, and Tailwind CSS. On the backend, I write APIs in Python (FastAPI/Flask) and Node.js, and integrate MongoDB, Firebase, or Supabase databases.";
				nextOptions = [
					{ label: "Back to Services", action: "services" },
					{ label: "Back to Menu", action: "say_yes" },
				];
				break;

			case "info_blockchain":
				reply = "I completed a Blockchain development internship at Vodafone Intelligent Solutions (VOIS), writing smart contracts in Solidity and deploying them on the Polygon Amoy network, along with MetaMask, IPFS, and Web3.js integration.";
				nextOptions = [
					{ label: "Back to Services", action: "services" },
					{ label: "Back to Menu", action: "say_yes" },
				];
				break;

			case "proj_thulira":
				reply = "Thulira is a full-stack sustainable e-commerce platform built with Next.js, TypeScript, MongoDB, and Firebase. It includes product listings, a shopping cart, auth, and an admin dashboard.";
				nextOptions = [
					{ label: "View Thulira Details", action: "goto_thulira" },
					{ label: "Back to Projects", action: "projects" },
				];
				break;

			case "proj_roofing":
				reply = "Asia Tech Roofing is a custom client site rebuilt in Next.js from a Webflow template. It features smooth GSAP ScrollTrigger animations, structured SEO schema, and Google Reviews API integration.";
				nextOptions = [
					{ label: "View Roofing Details", action: "goto_roofing" },
					{ label: "Back to Projects", action: "projects" },
				];
				break;

			case "proj_faq":
				reply = "Smart FAQ Bot is a semantic search chatbot built with Gemini AI, LangChain, and FAISS. It retrieves and answers questions from structured data, illustrating GEO principles.";
				nextOptions = [
					{ label: "View FAQ Bot Details", action: "goto_faq" },
					{ label: "Back to Projects", action: "projects" },
				];
				break;

			case "download_cv":
				window.open("/docs/Subinesh_Resume.pdf", "_blank");
				reply = "Downloading resume... Let me know if you need any other information!";
				nextOptions = [
					{ label: "Back to Menu", action: "say_yes" },
				];
				break;

			case "goto_thulira":
				window.open("/projects/thulira", "_self");
				reply = "Navigating to Thulira project details page...";
				nextOptions = [{ label: "Back to Menu", action: "say_yes" }];
				break;

			case "goto_roofing":
				window.open("/projects/asia-tech-roofing", "_self");
				reply = "Navigating to Asia Tech Roofing project details page...";
				nextOptions = [{ label: "Back to Menu", action: "say_yes" }];
				break;

			case "goto_faq":
				window.open("/projects/smart-faq-bot", "_self");
				reply = "Navigating to Smart FAQ Bot project details page...";
				nextOptions = [{ label: "Back to Menu", action: "say_yes" }];
				break;

			case "reset":
			default:
				startChat();
				return;
		}

		setMessages((prev) => [
			...prev,
			{ sender: "bot", text: reply, time },
		]);
		setOptions(nextOptions);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;

		const userText = inputValue.trim();
		setInputValue("");

		const userMsg = {
			sender: "user",
			text: userText,
			time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
		};

		setMessages((prev) => [...prev, userMsg]);
		setOptions([]);

		setTimeout(() => {
			handleFreeTextResponse(userText);
		}, 600);
	};

	const handleFreeTextResponse = (text) => {
		const query = text.toLowerCase();
		const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		let reply = "";
		let nextOptions = [];

		if (query.includes("service") || query.includes("skill") || query.includes("tech") || query.includes("language") || query.includes("expert")) {
			reply = "I specialize in Web Development (Next.js/React), AI & LLM chatbot integrations, SEO/GEO optimization, and Solidity smart contracts. Choose a service for details:";
			nextOptions = [
				{ label: "Services & Skills", action: "services" },
				{ label: "Back to Menu", action: "say_yes" },
			];
		} else if (query.includes("project") || query.includes("work") || query.includes("portfolio") || query.includes("thulira") || query.includes("roofing") || query.includes("contractor") || query.includes("bot")) {
			reply = "I have worked on several projects like Thulira (sustainable e-commerce), Asia Tech Roofing (GSAP), and a Gemini AI Smart FAQ Bot. Check out my projects list:";
			nextOptions = [
				{ label: "Projects & Work", action: "projects" },
				{ label: "Back to Menu", action: "say_yes" },
			];
		} else if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("linkedin") || query.includes("github") || query.includes("resume") || query.includes("cv")) {
			reply = "You can contact me at subinesh21@proton.me or phone (+91 9087352282). Choose from the contact options below to access my links or download my resume:";
			nextOptions = [
				{ label: "Contact Info & Resume", action: "contact" },
				{ label: "Back to Menu", action: "say_yes" },
			];
		} else if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("help")) {
			reply = "Hello! I can help you find information about Subinesh's skills, projects, and contact info. How can I assist you today?";
			nextOptions = [
				{ label: "Services", action: "services" },
				{ label: "Projects", action: "projects" },
				{ label: "Contact & Resume", action: "contact" },
			];
		} else {
			reply = `I'm a simple assistant. You can ask me about my services, projects, or contact details! Alternatively, feel free to email me directly at subinesh21@proton.me.`;
			nextOptions = [
				{ label: "Back to Menu", action: "say_yes" },
			];
		}

		setMessages((prev) => [
			...prev,
			{ sender: "bot", text: reply, time },
		]);
		setOptions(nextOptions);
	};

	return (
		<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
			{/* Chat Window */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 50, scale: 0.9 }}
						transition={{ duration: 0.3 }}
						className="w-[90vw] sm:w-[380px] h-[500px] max-h-[70vh] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4"
					>
						{/* Header */}
						<div className="bg-gray-900 text-white px-4 py-3.5 flex justify-between items-center select-none shadow">
							<div className="flex items-center space-x-2.5">
								<div className="relative">
									<div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center font-bold text-sm border border-gray-600">
										SB
									</div>
									<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
								</div>
								<div>
									<h4 className="font-semibold text-sm leading-tight">{botName}</h4>
									<span className="text-[10px] text-gray-400">Online</span>
								</div>
							</div>
							<div className="flex items-center space-x-3 text-sm">
								<button
									onClick={startChat}
									className="text-gray-400 hover:text-white transition-colors"
									title="Start Over"
									aria-label="Restart chat"
								>
									<FontAwesomeIcon icon={faUndo} />
								</button>
								<button
									onClick={() => setIsOpen(false)}
									className="text-gray-400 hover:text-white transition-colors"
									title="Close Chat"
									aria-label="Close chat window"
								>
									<FontAwesomeIcon icon={faTimes} />
								</button>
							</div>
						</div>

						{/* Messages list */}
						<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
							{messages.map((msg, index) => (
								<div
									key={index}
									className={`flex flex-col ${
										msg.sender === "user" ? "items-end" : "items-start"
									}`}
								>
									<div
										className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed shadow-sm ${
											msg.sender === "user"
												? "bg-black text-white rounded-tr-none"
												: "bg-white text-gray-800 border border-gray-150 rounded-tl-none"
										}`}
									>
										{msg.text}
									</div>
									<span className="text-[9px] text-gray-400 mt-1 px-1">
										{msg.time}
									</span>
								</div>
							))}
							
							{/* Option Quick Replies */}
							{options.length > 0 && (
								<div className="flex flex-wrap gap-2 pt-2 justify-start">
									{options.map((opt, idx) => (
										<button
											key={idx}
											onClick={() => handleOptionClick(opt)}
											className="px-4 py-2 text-xs font-semibold bg-white border border-gray-300 hover:border-black hover:bg-gray-50 text-gray-800 hover:text-black rounded-full transition-all duration-200 shadow-sm active:scale-95"
										>
											{opt.label}
										</button>
									))}
								</div>
							)}
							<div ref={messagesEndRef} />
						</div>

						{/* Text input form */}
						<form
							onSubmit={handleFormSubmit}
							className="border-t border-gray-200 p-3 bg-white flex items-center space-x-2"
						>
							<input
								type="text"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								placeholder="Type a message..."
								className="flex-1 bg-gray-100 hover:bg-gray-50 focus:bg-white border-0 focus:ring-1 focus:ring-black rounded-full px-4 py-2.5 text-sm outline-none transition-all duration-200 text-gray-800"
							/>
							<button
								type="submit"
								disabled={!inputValue.trim()}
								className="w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center transition-colors disabled:bg-gray-200 disabled:text-gray-400 active:scale-95"
								aria-label="Send message"
							>
								<FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
							</button>
						</form>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Floating Chat Button */}
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-white transition-colors duration-350 cursor-pointer ${
					isOpen ? "bg-black hover:bg-gray-800" : "bg-gray-900 hover:bg-black"
				}`}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				aria-label="Toggle chat widget"
			>
				<FontAwesomeIcon
					icon={isOpen ? faTimes : faComments}
					className="text-2xl"
				/>
			</motion.button>
		</div>
	);
}
