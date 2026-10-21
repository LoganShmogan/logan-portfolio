"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/components/navBar.module.css";
import buttons from "@/app/shared/button.module.css";
import PixelFlag from "@/app/components/pixelFlag";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/save-point", label: "Save Point" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.outer}>
      <a href="#main" className={styles.skipLink}>
        Skip to main content
      </a>
      <nav className={styles.container} aria-label="Main">
        <Link href="/" className={styles.brand}>
          <PixelFlag className={styles.flag} />
          Logan Young
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.link}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`${buttons.button} ${styles.cta}`}
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact me
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
