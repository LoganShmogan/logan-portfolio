import type { Metadata } from "next";
import page from "@/app/shared/page.module.css";
import styles from "@/app/save-point/savePoint.module.css";
import buttons from "@/app/shared/button.module.css";
import PageHero from "@/app/components/pageHero";
import ProjectCard from "@/app/components/projectCard";
import { projects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Save Point",
  description:
    "Logan Young founded Save Point, a New Zealand software company building custom software, websites, kiosks and connected IoT systems.",
};

// Mirrors the service lines on savepoint.co.nz
const services = [
  {
    title: "Websites & Web Apps",
    description: "Fast, accessible sites and web apps that are easy to keep up to date.",
  },
  {
    title: "Apps & Custom Software",
    description: "Business software shaped around how a team already works.",
  },
  {
    title: "Kiosks & Self-Service",
    description: "Sign-in kiosks, dashboards and self-service stations on real hardware.",
  },
  {
    title: "Automation & AI",
    description: "Taking repetitive work off people's plates, with AI where it actually helps.",
  },
  {
    title: "Connected Systems",
    description: "Software, devices and the tools a business already pays for, all talking to each other.",
  },
];

const roleDuties = [
  "Founded the company and set its direction, brand and values",
  "Meet with clients, scope projects and write proposals and contracts",
  "Design, build, test and deploy every website, app and system",
  "Run the company's servers, domains and infrastructure on savepoint.co.nz",
  "Support clients after launch, with documentation so their systems keep working",
];

export default function SavePoint() {
  const clientWork = projects.filter((project) => project.category === "client");

  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="Save Point"
        lead="The New Zealand software company I founded: intelligent connected systems built with you."
      />

      <div className={page.content}>
        {/* Founding story */}
        <section className={`${page.section} ${styles.story}`}>
          <div className={styles.logoTile}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/savePointFlag.jpg" alt="Save Point logo: a pixel-art flag" />
          </div>
          <div className={page.sectionBody}>
            <h2 className={page.sectionTitle}>Why I started it</h2>
            <p>
              I founded Save Point while studying Software Engineering. I kept
              seeing businesses and their staff brought down by slow,
              uncooperative software, when it could be helping them enjoy
              their day-to-day work.
            </p>
            <p>
              The software wasn&rsquo;t the only problem. So were the devices
              and systems it ran on. That&rsquo;s where the name comes from:
              in a game, a save point is the one safe place where everything
              is kept together. Save Point is that place for a business, where
              software, systems and devices all work in one cohesive space.
            </p>
            <p>
              Today Save Point Limited is a registered New Zealand company
              working with small businesses through to enterprise, with a
              focus on plain-English communication, strong documentation, and
              systems clients can keep running without us.
            </p>
            <div className={page.actions}>
              <a
                href="https://savepoint.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className={buttons.button}
              >
                Visit savepoint.co.nz
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              <a
                href="https://savepoint.co.nz/contact"
                target="_blank"
                rel="noopener noreferrer"
                className={buttons.buttonDark}
              >
                Start a project
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Role */}
        <section className={page.section}>
          <span className={page.tag}>My role</span>
          <h2 className={page.sectionTitle}>Software Engineer &amp; Founder</h2>
          <ul className={page.pixelList}>
            {roleDuties.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <div className={page.groupHeader}>
          <p className={page.sectionEyebrow}>What we do</p>
          <h2 className={page.groupTitle}>Save Point services</h2>
        </div>
        <div className={page.grid3}>
          {services.map((service) => (
            <section key={service.title} className={page.section}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </section>
          ))}
        </div>

        {/* Client work */}
        <div className={page.groupHeader}>
          <p className={page.sectionEyebrow}>Shipped</p>
          <h2 className={page.groupTitle}>Client work</h2>
        </div>
        <div className={page.projectGrid}>
          {clientWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
