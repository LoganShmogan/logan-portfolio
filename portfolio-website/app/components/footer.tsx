import Link from "next/link";
import styles from "@/app/components/footer.module.css";
import PixelFlag from "@/app/components/pixelFlag";

const Footer = () => {
  return (
    <footer className={styles.outer}>
      <div className={styles.container}>
        {/* Column 1: Brand */}
        <div className={styles.brandColumn}>
          <p className={styles.brand}>
            <PixelFlag className={styles.flag} />
            Logan Young
          </p>
          <p className={styles.brandTagline}>
            Software Engineer and founder of{" "}
            <a
              href="https://savepoint.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Save Point
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            .
          </p>
        </div>

        {/* Column 2: Contact */}
        <div className={styles.column}>
          <h2 className={styles.columnHeader}>Contact</h2>
          <a href="mailto:younglogan09@gmail.com" className={styles.link}>
            younglogan09@gmail.com
          </a>
          <a href="tel:+64210653792" className={styles.link}>
            +64 21 065 3792
          </a>
          <a
            href="https://github.com/LoganShmogan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>

        {/* Column 3: Legal */}
        <div className={styles.column}>
          <h2 className={styles.columnHeader}>Legal</h2>
          <Link href="/legal#privacy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/legal#cookies" className={styles.link}>
            Cookie Policy
          </Link>
          <Link href="/legal#terms" className={styles.link}>
            Website Terms
          </Link>
          <Link href="/legal#disclaimer" className={styles.link}>
            Disclaimer
          </Link>
        </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Logan Young
      </p>
    </footer>
  );
};

export default Footer;
