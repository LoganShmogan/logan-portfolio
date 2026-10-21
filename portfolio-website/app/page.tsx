import Link from "next/link";
import styles from "@/app/home.module.css";
import page from "@/app/shared/page.module.css";
import buttons from "@/app/shared/button.module.css";
import ProjectCard from "@/app/components/projectCard";
import { projects } from "@/app/data/projects";

// "Player select" stats shown beside the hero
const playerStats = [
  { label: "Class", value: "Software Engineer" },
  { label: "Guild", value: "Save Point, Founder" },
  { label: "Base", value: "New Zealand" },
  { label: "Builds", value: "Web · Mobile · IoT" },
];

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <p className={page.eyebrow}>Software Engineer &amp; Founder</p>
            <h1 className={styles.heroTitle}>Logan Young</h1>
            <p className={styles.heroLead}>
              I&rsquo;m a software engineer and the founder of Save Point. I
              build websites, apps, business systems and connected devices
              for New Zealand businesses.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projects" className={buttons.button}>
                See my projects
              </Link>
              <Link href="/contact" className={buttons.buttonOutline}>
                Get in touch
              </Link>
            </div>
          </div>

          <aside className={styles.playerCard} aria-label="Quick facts">
            <p className={styles.playerHeading}>Player 1</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/0me.JPEG"
              alt="Portrait of Logan Young"
              className={styles.playerPhoto}
            />
            <dl className={styles.playerStats}>
              {playerStats.map((stat) => (
                <div key={stat.label} className={styles.playerRow}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <div className={page.content}>
        {/* Save Point teaser */}
        <section className={`${page.section} ${styles.savePoint}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/savePointFlag.jpg"
            alt="Save Point logo: a pixel-art flag"
            className={styles.savePointLogo}
          />
          <div>
            <p className={page.sectionEyebrow}>My company</p>
            <h2 className={page.sectionTitle}>I founded Save Point</h2>
            <p>
              Save Point is a New Zealand software company I started while
              studying Software Engineering. We build custom software,
              websites and IoT systems for small businesses through to
              enterprise, explained in plain English and built around the way
              people already work.
            </p>
            <div className={page.actions}>
              <Link href="/save-point" className={buttons.buttonDark}>
                The Save Point story
              </Link>
              <a
                href="https://savepoint.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className={buttons.button}
              >
                Visit savepoint.co.nz
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <div className={page.groupHeader}>
          <p className={page.sectionEyebrow}>Selected work</p>
          <h2 className={page.groupTitle}>Featured projects</h2>
          <p className={page.groupLead}>
            A few highlights. The{" "}
            <Link href="/projects" className={page.inlineLink}>
              projects page
            </Link>{" "}
            has everything, from client sites to Raspberry Pi builds.
          </p>
        </div>
        <div className={page.projectGrid}>
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className={styles.moreProjects}>
          <Link href="/projects" className={buttons.buttonDark}>
            View all {projects.length} projects
          </Link>
        </div>
      </div>
    </>
  );
}
