import type { Metadata } from "next";
import page from "@/app/shared/page.module.css";
import PageHero from "@/app/components/pageHero";
import ProjectCard from "@/app/components/projectCard";
import { categories, projects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client websites, full-stack apps, Raspberry Pi builds and university projects by Logan Young.",
};

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Level select"
        title="Projects"
        lead="Client work, apps, hardware builds and coursework. Some repos are private because they belong to clients or are still in development."
      />

      <div className={page.content}>
        {/* Jump links */}
        <nav className={page.section} aria-labelledby="jump-title">
          <h2 id="jump-title" className={page.sectionTitle}>
            Jump to
          </h2>
          <ol className={page.contents}>
            {categories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`} className={page.inlineLink}>
                  {category.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {categories.map((category) => (
          <section key={category.id} aria-labelledby={`${category.id}-title`}>
            <div id={category.id} className={page.groupHeader}>
              <h2 id={`${category.id}-title`} className={page.groupTitle}>
                {category.title}
              </h2>
              <p className={page.groupLead}>{category.lead}</p>
            </div>
            <div className={page.projectGrid}>
              {projects
                .filter((project) => project.category === category.id)
                .map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
