import styles from "@/app/components/projectCard.module.css";
import type { Project } from "@/app/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.imageUrl} alt="" loading="lazy" />
        ) : (
          <div className={`${styles.tile} ${styles[project.category]}`}>
            <span>{project.placeholderLabel ?? project.title}</span>
          </div>
        )}
        {project.status && (
          <span className={styles.status}>{project.status}</span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags} aria-label="Built with">
          {project.techTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {(project.githubLink || project.liveLink) && (
          <div className={styles.links}>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {project.liveLabel ?? "Live site"} &rarr;
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub &rarr;
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
