import styles from "./page.module.css";
import svgPaths from "./imports/svg-n79gbezeop";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      {/* Header / Landing Section */}
      <section className={styles.landing}>
        <div className={styles.decorativeArt}>
          <DecorativePolygon rotation={45} top="8%" left="3%" />
          <DecorativePolygon rotation={-30} top="30%" left="10%" />
          <DecorativePolygon rotation={60} top="60%" left="5%" />
          <div className={styles.artText} style={{ top: "15%", left: "5%" }}>
            SKRRR!
          </div>
          <div className={styles.artText} style={{ top: "50%", left: "20%" }}>
            VEERM!
          </div>
        </div>

        <div className={styles.decorativeArtRight}>
          <DecorativePolygon rotation={-45} top="5%" right="10%" />
          <DecorativePolygon rotation={30} top="25%" right="5%" />
          <DecorativePolygon rotation={-60} top="50%" right="15%" />
          <DecorativePolygon rotation={45} top="75%" right="8%" />
          <div className={styles.artText} style={{ top: "30%", right: "12%" }}>
            VRMM!
          </div>
          <div className={styles.artText} style={{ top: "80%", right: "10%" }}>
            VROOM!
          </div>
        </div>

        <div className={styles.header}>
          <div className={styles.titleBox}>
            <h1>Logan Young</h1>
          </div>
          <nav className={styles.nav}>
            <a href="#home" className={styles.navItem}>
              Home
            </a>
            <a href="#about" className={styles.navItem}>
              About
            </a>
            <a href="#work" className={styles.navItem}>
              Work
            </a>
            <a href="#contact" className={styles.navItem}>
              Contact
            </a>
          </nav>
        </div>

        <div className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>About me</h2>
        </div>

        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <div className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>Something</h3>
              <p>
                woiua;difkjas fsdkol jfaskldfasdlk wfwffw asdilf;weaijfiwaljf
                ewalfailwejf eilf hewaihg hwalg j;wij gwlj;gmdklsjafilw jfoiwdj
                fiowjaf iwadj flkawj fiwaof jwdai jiowadh;iowahg iowahg
              </p>
            </div>
          </div>

          <div className={styles.infoCardReverse}>
            <div className={styles.cardContent}>
              <h3>Something</h3>
              <p>
                woiua;difkjas fsdkol jfaskldfasdlk wfwffw asdilf;weaijfiwaljf
                ewalfailwejf eilf hewaihg hwalg j;wij gwlj;gmdklsjafilw jfoiwdj
                fiowjaf iwadj flkawj fiwaof jwdai jiowadh;iowahg
              </p>
            </div>
            <div className={styles.cardImage} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className={styles.projectsSection}>
        <div className={styles.decorativeArt}>
          <DecorativePolygon rotation={45} top="10%" left="5%" />
          <DecorativePolygon rotation={-30} top="30%" left="15%" />
          <DecorativePolygon rotation={60} top="60%" left="10%" />
          <div className={styles.artText} style={{ top: "25%", left: "10%" }}>
            SKRRR!
          </div>
          <div className={styles.artText} style={{ top: "55%", left: "20%" }}>
            VEERM!
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Check these out!</h2>

        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectInner}>
              <span>proj/work</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectInner}>
              <span>proj/work</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectInner}>
              <span>proj/work</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectInner}>
              <span>proj/work</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectInner}>
              <span>proj/work</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectInner}>
              <span>proj/work</span>
            </div>
          </div>
        </div>

        <div className={styles.githubSection}>
          <p className={styles.githubText}>Find more at my GitHub</p>
          <p className={styles.githubLink}>https://github.com/LoganShmogan</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Get in contact!</h2>

        <div className={styles.contactCards}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon} />
            <h3>Phone</h3>
            <p className={styles.contactInfo}>+64 021 065 3792</p>
            <p className={styles.contactHours}>6:30 - 22:30 7 days a week</p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon} />
            <h3>Email</h3>
            <p className={styles.contactInfo}>contact@loganyoung.foo</p>
            <p className={styles.contactHours}>6:30 - 22:30 7 days a week</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h4>Something</h4>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Something</h4>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Something</h4>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
            <a href="mailto:contact@loganyoung.foo">contact@loganyoung.foo</a>
          </div>
        </div>
      </footer>

      {/* Large decorative vector at the bottom */}
      <div className={styles.largeDecorativeArt}>
        <svg
          className={styles.vectorArt}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1719.97 1048.42"
        >
          <g>
            <path d={svgPaths.p277d7e00} fill="#006809" />
            <path d={svgPaths.pf917100} fill="#006809" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DecorativePolygon({
  rotation,
  top,
  left,
  right,
}: {
  rotation: number;
  top?: string;
  left?: string;
  right?: string;
}) {
  return (
    <div
      className={styles.polygon}
      style={{
        transform: `rotate(${rotation}deg)`,
        top,
        left,
        right,
      }}
    >
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 155.12 147.974">
        <path d={svgPaths.p17077e80} fill="#006008" />
      </svg>
    </div>
  );
}
