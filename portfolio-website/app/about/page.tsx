import Link from "next/link";
import type { Metadata } from "next";
import page from "@/app/shared/page.module.css";
import styles from "@/app/about/about.module.css";
import buttons from "@/app/shared/button.module.css";
import PageHero from "@/app/components/pageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Logan Young: software engineer, founder of Save Point, and Bachelor of ICT graduate in Software Engineering and Web Development.",
};

const credentials = [
  {
    tag: "Current Role",
    title: "Software Engineer & Founder",
    meta: "Save Point Limited",
    description:
      "I founded Save Point and run it day to day: scoping projects with clients, then designing, building and supporting their websites, apps, business systems and connected devices.",
  },
  {
    tag: "Education",
    title: "Bachelor of ICT",
    meta: "Software Engineering & Web Development (Double Major), graduated July 2026",
    description:
      "Graduated with a focus on building practical, real-world solutions across both front-end and back-end systems.",
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Dart", "C#", "SQL"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "Flutter", ".NET MAUI", "HTML / CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js / Express", "Flask", "Convex", "SQLite / MySQL / PostgreSQL", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Claude & OpenAI APIs", "scikit-learn", "Pandas", "NumPy", "On-device AI"],
  },
  {
    title: "Testing & DevOps",
    skills: ["Vitest", "pytest", "flutter_test", "GitHub Actions", "Docker", "Vercel"],
  },
  {
    title: "Infrastructure & IoT",
    skills: ["Raspberry Pi", "Arduino", "Linux", "Cloudflare Tunnel", "Caddy", "3D printing"],
  },
];

const photos = [
  { src: "/0computer.JPEG", alt: "Logan's computer setup", position: "center" },
  { src: "/0me.JPEG", alt: "Portrait of Logan Young", position: "center" },
  { src: "/1me.JPEG", alt: "Logan Young at his desk", position: "65% 60%" },
  { src: "/1computer.JPEG", alt: "Logan's computer setup", position: "center" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="Hi, I'm Logan"
        lead="Software engineer, founder of Save Point, and someone who enjoys making technology feel less like a chore."
      />

      <div className={page.content}>
        {/* Story + photos */}
        <section className={`${page.section} ${styles.story}`}>
          <div className={page.sectionBody}>
            <h2 className={page.sectionTitle}>My story</h2>
            <p>
              I&rsquo;m Logan Young, a software engineer from New Zealand
              who graduated in July 2026 with a Bachelor of Information and
              Communication Technology, double majoring in Software
              Engineering and Web Development. I
              enjoy building practical, real-world solutions and work across
              the whole stack, from the interface people tap on to the
              servers and devices underneath.
            </p>
            <p>
              While studying I kept seeing businesses held back by slow,
              uncooperative software and the devices it ran on. So I founded{" "}
              <Link href="/save-point" className={page.inlineLink}>
                Save Point
              </Link>
              , a company that brings software, systems and devices together
              into one place that just works.
            </p>
            <p>
              Outside of client work I&rsquo;m usually building something for
              myself: a Raspberry Pi gadget, a self-hosted server, or an app
              that scratches my own itch. I&rsquo;m always looking to learn,
              improve, and take on new challenges.
            </p>
          </div>
          <div className={styles.photos}>
            {photos.map((photo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={styles.photo}
                style={{ objectPosition: photo.position }}
              />
            ))}
          </div>
        </section>

        {/* Role + education */}
        <div className={page.grid2}>
          {credentials.map((item) => (
            <section key={item.tag} className={page.section}>
              <span className={page.tag}>{item.tag}</span>
              <h2 className={page.cardTitle}>{item.title}</h2>
              <p className={page.cardMeta}>{item.meta}</p>
              <p>{item.description}</p>
            </section>
          ))}
        </div>

        {/* Skills */}
        <div className={page.groupHeader}>
          <p className={page.sectionEyebrow}>Inventory</p>
          <h2 className={page.groupTitle}>Technical skills</h2>
          <p className={page.groupLead}>
            The languages, frameworks and tools behind my projects.
          </p>
        </div>
        <div className={page.grid3}>
          {skillCategories.map((category) => (
            <section key={category.title} className={page.section}>
              <h3 className={styles.skillTitle}>{category.title}</h3>
              <ul className={page.chips}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className={page.actions}>
          <Link href="/projects" className={buttons.buttonDark}>
            See what I&rsquo;ve built
          </Link>
          <Link href="/contact" className={buttons.button}>
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
}
