import styles from "@/app/shared/page.module.css";

const PageHero = ({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.heroTitle}>{title}</h1>
        {lead && <p className={styles.heroLead}>{lead}</p>}
      </div>
    </div>
  );
};

export default PageHero;
