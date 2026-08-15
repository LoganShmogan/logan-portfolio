"use client";

import { useRef, RefObject } from "react";
import styles from "./page.module.css";

export default function Home() {
	// Refs for navigation
	const homeRef = useRef<HTMLElement>(null);
	const aboutRef = useRef<HTMLElement>(null);
	const skillsRef = useRef<HTMLElement>(null);
	const workRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	// Navigation scroll function
	const scrollToSection = (ref: RefObject<HTMLElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Education and current work
	const credentials = [
		{
			id: 1,
			tag: "Education",
			title: "Bachelor of ICT",
			meta: "Software Engineering & Web Development (Double Major)",
			description:
				"Final-semester student building practical, real-world solutions across both front-end and back-end systems.",
		},
		{
			id: 2,
			tag: "Current Role",
			title: "Full-Stack Developer",
			meta: "Save Point Limited",
			description:
				"Building and maintaining web applications, business systems and connected devices at Save Point Limited.",
		},
	];

	// Technical skills grouped by category
	const skillCategories = [
		{
			id: 1,
			title: "Languages",
			skills: ["Python", "TypeScript", "JavaScript", "C#", "SQL"],
		},
		{
			id: 2,
			title: "Frontend",
			skills: ["React", "Next.js", "HTML5 / CSS3", "Tailwind CSS"],
		},
		{
			id: 3,
			title: "Backend & Data",
			skills: ["Flask", "Next.js API Routes", "SQLite / PostgreSQL", "REST APIs"],
		},
		{
			id: 4,
			title: "Data & Machine Learning",
			skills: ["Pandas", "NumPy", "scikit-learn", "Matplotlib"],
		},
		{
			id: 5,
			title: "Tools & DevOps",
			skills: ["Git & GitHub Actions", "Docker", "Vercel", "PyInstaller"],
		},
		{
			id: 6,
			title: "IoT & Hardware",
			skills: ["Arduino", "Raspberry Pi", ".NET MAUI"],
		},
	];

	// Work portfolio items data
	type WorkItem = {
		id: number;
		title: string;
		description: string;
		imageUrl?: string;
		placeholderLabel?: string;
		placeholderVariant?: 1 | 2 | 3 | 4;
		techTags: string[];
		githubLink: string;
		liveLink?: string;
	};

	const workItems: WorkItem[] = [
		{
			id: 1,
			title: "Kiosk Sign-In System",
			description:
				"Open-source sign-in/out kiosk and web dashboard for tracking attendance, originally built for a childcare centre. Includes signature capture, caregiver email notifications, run sheets and sign-in analytics.",
			imageUrl: "/kioskSignIn.png",
			techTags: ["Python", "Flask", "Tkinter", "SQLite", "Chart.js"],
			githubLink: "https://github.com/LoganShmogan/kiosk-signin-system",
		},
		{
			id: 2,
			title: "Happy Horizons Website",
			description:
				"Contract build for a childcare business, a marketing site covering enrolment, gallery and contact handling, live at happyhorizons.nz.",
			imageUrl: "/happyHorizons.png",
			techTags: ["Next.js", "TypeScript", "EmailJS", "Vercel"],
			githubLink:
				"https://github.com/LoganShmogan/Happy-Horizons-Website",
			liveLink: "https://happyhorizons.nz",
		},
		{
			id: 3,
			title: "NutriTrack",
			description:
				"Nutrition tracking app with a 2,700+ item NZ food database, dietary intake charts and PDF/CSV reporting, built as a university software engineering project.",
			imageUrl: "/nutriTrack.png",
			techTags: ["Next.js", "TypeScript", "SQL", "Docker"],
			githubLink: "https://github.com/LoganShmogan/nextjs-nutrition-app",
		},
		{
			id: 4,
			title: "Machine Learning Techniques",
			description:
				"Data analytics coursework applying regression, clustering, classification and PCA to real-world datasets, including stock price prediction.",
			imageUrl: "/machineLearning.png",
			techTags: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
			githubLink:
				"https://github.com/LoganShmogan/Machine-learning-techniques",
			liveLink:
				"https://colab.research.google.com/github/LoganShmogan/Machine-learning-techniques/blob/main/allTasks.ipynb#scrollTo=main_title",
		},
		{
			id: 5,
			title: "Save Point Website",
			description:
				"Marketing site for my own company, Save Point, statically rendered with Next.js App Router and hand-written CSS Modules, with zero backend or client-side state.",
			imageUrl: "/savePoint.jpg",
			techTags: ["Next.js", "TypeScript", "React", "CSS Modules"],
			githubLink: "https://github.com/LoganShmogan/save-point",
			liveLink: "https://savepoint.cc",
		},
		{
			id: 6,
			title: "Portfolio Website",
			description:
				"This portfolio site itself, showcasing my projects, technical skills, education and business, styled after Save Point's branding.",
			imageUrl: "/portfolioWebsite.png",
			techTags: ["Next.js", "TypeScript", "EmailJS", "Vercel"],
			githubLink: "https://github.com/LoganShmogan/logan-portfolio",
			liveLink: "https://loganyoung.foo",
		},
		{
			id: 7,
			title: "Dice Game",
			description:
				"A .NET MAUI mobile app simulating a 2-player dice game, with turn-based rolling, random dice imagery, and a first-to-20 win condition.",
			placeholderLabel: "Dice Game",
			placeholderVariant: 3,
			techTags: ["C#", ".NET MAUI"],
			githubLink: "https://github.com/LoganShmogan/dice-game",
		},
		{
			id: 8,
			title: "To-Do List Manager",
			description:
				"A C# to-do list manager with both a WPF GUI and a command-line interface, supporting categories, due dates, priorities and labels for tasks.",
			placeholderLabel: "To-Do List Manager",
			placeholderVariant: 4,
			techTags: ["C#", "WPF", ".NET"],
			githubLink:
				"https://github.com/LoganShmogan/Todo-list-manager-app",
		},
		{
			id: 9,
			title: "Property Management Webapp",
			description:
				"A property listings webapp for New Zealand properties, with user accounts and session-based auth backed by MySQL.",
			placeholderLabel: "Property Management",
			placeholderVariant: 1,
			techTags: ["Node.js", "Express", "Handlebars", "MySQL", "Tailwind CSS"],
			githubLink:
				"https://github.com/LoganShmogan/property-management-webapp",
		},
	];

	return (
		<div className={styles.container}>
			{/* Navigation Bar */}
			<nav className={styles.navbar}>
				<div className={styles.navContent}>
					<div
						className={styles.logo}
						onClick={() =>
							scrollToSection(
								homeRef as RefObject<HTMLDivElement>,
							)
						}
					>
						<h1>Logan Young</h1>
					</div>
					<div className={styles.navLinks}>
						<button
							onClick={() =>
								scrollToSection(
									homeRef as RefObject<HTMLDivElement>,
								)
							}
							className={styles.navLink}
						>
							Home
						</button>
						<button
							onClick={() =>
								scrollToSection(
									aboutRef as RefObject<HTMLDivElement>,
								)
							}
							className={styles.navLink}
						>
							About
						</button>
						<button
							onClick={() =>
								scrollToSection(
									skillsRef as RefObject<HTMLDivElement>,
								)
							}
							className={styles.navLink}
						>
							Skills
						</button>
						<button
							onClick={() =>
								scrollToSection(
									workRef as RefObject<HTMLDivElement>,
								)
							}
							className={styles.navLink}
						>
							Work
						</button>
						<button
							onClick={() =>
								scrollToSection(
									contactRef as RefObject<HTMLDivElement>,
								)
							}
							className={styles.navLink}
						>
							Contact
						</button>
					</div>
				</div>
			</nav>

			{/* Hero/Home Section */}
			<section ref={homeRef} className={styles.hero}>
				<div className={styles.heroContent}>
					<p className={styles.heroEyebrow}>Full-Stack Developer</p>
					<h1 className={styles.heroTitle}>Logan Young</h1>
					<p className={styles.heroSubtitle}>
						I build websites, apps, business systems and connected
						devices.
					</p>
					<div className={styles.heroActions}>
						<button
							onClick={() =>
								scrollToSection(
									workRef as RefObject<HTMLDivElement>,
								)
							}
							className={styles.ctaButton}
						>
							View My Work
						</button>
						<button
							onClick={() =>
								scrollToSection(
									contactRef as RefObject<HTMLDivElement>,
								)
							}
							className={styles.ctaSecondary}
						>
							Get In Touch
						</button>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section ref={aboutRef} className={styles.section}>
				<h2 className={styles.sectionTitle}>About Me</h2>
				<div className={styles.aboutGrid}>
					<div className={styles.aboutText}>
						<p>
							I&rsquo;m Logan Young, a final-semester Bachelor of
							Information and Communication Technology (BICT)
							student, double majoring in Software Engineering
							and Web Development. I enjoy building practical,
							real-world solutions and have a strong interest in
							full-stack development, working across both
							front-end and back-end systems.
						</p>
						<p>
							Currently I&rsquo;m a Full-Stack Developer at Save
							Point Limited, building websites, applications,
							systems and electronics for businesses and sole
							traders.
						</p>
						<p>
							I&rsquo;m always looking to learn, improve, and
							take on new challenges, whether that&rsquo;s
							refining my technical skills, exploring new tools,
							or contributing to meaningful projects, which the
							Work section below should give a good insight
							into.
						</p>
					</div>
					<div className={styles.aboutImages}>
						<div className={styles.imageContainer}>
							<img
								src="/0computer.JPEG"
								alt="Computer"
								className={styles.profileImage}
							/>
						</div>
						<div className={styles.imageContainer}>
							<img
								src="/0me.JPEG"
								alt="Personal Portrait"
								className={styles.profileImage}
							/>
						</div>
						<div className={styles.imageContainer}>
							<img
								src="/1me.JPEG"
								alt="Personal Portrait"
								className={styles.profileImage}
							/>
						</div>
						<div className={styles.imageContainer}>
							<img
								src="/1computer.JPEG"
								alt="Computer"
								className={styles.profileImage}
							/>
						</div>
					</div>
				</div>

				<div className={styles.credentialsGrid} style={{ marginTop: "3rem" }}>
					{credentials.map((item) => (
						<div key={item.id} className={styles.credentialCard}>
							<span className={styles.credentialTag}>
								{item.tag}
							</span>
							<h3 className={styles.credentialTitle}>
								{item.title}
							</h3>
							<p className={styles.credentialMeta}>
								{item.meta}
							</p>
							<p className={styles.credentialDesc}>
								{item.description}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Skills Section */}
			<section ref={skillsRef} className={styles.section}>
				<h2 className={styles.sectionTitle}>Technical Skills</h2>
				<p className={styles.sectionSubtitle}>
					The languages, frameworks and tools I use to build the
					projects below, from IoT kiosks to full-stack web apps.
				</p>
				<div className={styles.skillsGrid}>
					{skillCategories.map((category) => (
						<div
							key={category.id}
							className={styles.skillCategory}
						>
							<h3 className={styles.skillCategoryTitle}>
								{category.title}
							</h3>
							<div className={styles.skillTags}>
								{category.skills.map((skill) => (
									<span
										key={skill}
										className={styles.skillTag}
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Work Section */}
			<section ref={workRef} className={styles.section}>
				<h2 className={styles.sectionTitle}>My Work</h2>
				<div className={styles.workGrid}>
					{workItems.map((item) => (
						<div key={item.id} className={styles.workCard}>
							<div className={styles.cardImage}>
								{item.imageUrl ? (
									<img
										src={item.imageUrl}
										alt={item.title}
									/>
								) : (
									<div
										className={`${styles.placeholderTile} ${
											styles[
												`placeholderTile${item.placeholderVariant ?? 1}`
											]
										}`}
									>
										{item.placeholderLabel}
									</div>
								)}
							</div>
							<div className={styles.cardContent}>
								<h3 className={styles.cardTitle}>
									{item.title}
								</h3>
								<p className={styles.cardDescription}>
									{item.description}
								</p>
								<div className={styles.techTags}>
									{item.techTags.map((tag) => (
										<span
											key={tag}
											className={styles.techTag}
										>
											{tag}
										</span>
									))}
								</div>
								<div className={styles.cardLinks}>
									<a
										href={item.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.githubLink}
									>
										View on GitHub &rarr;
									</a>
									{item.liveLink && (
										<a
											href={item.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className={styles.liveLink}
										>
											Live Site &rarr;
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Contact Section */}
			<section ref={contactRef} className={styles.section}>
				<h2 className={styles.sectionTitle}>Contact Me</h2>
				<div className={styles.contactWrap}>
					<p className={styles.contactBlurb}>
						Open to contract work, collaborations and new
						opportunities. Reach out any time and I&apos;ll
						usually get back to you within a day or two.
					</p>
					<div className={styles.contactLinks}>
						<a
							href="mailto:younglogan09@gmail.com"
							className={styles.contactLink}
						>
							younglogan09@gmail.com
						</a>
						<a
							href="tel:+64210653792"
							className={styles.contactLink}
						>
							+64 (021) 065-3792
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className={styles.footer}>
				<p>
					&copy; {new Date().getFullYear()} Logan Young. All rights
					reserved.
				</p>
			</footer>
		</div>
	);
}
