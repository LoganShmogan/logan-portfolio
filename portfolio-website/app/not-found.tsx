import Link from "next/link";
import page from "@/app/shared/page.module.css";
import buttons from "@/app/shared/button.module.css";

export default function NotFound() {
  return (
    <div className={page.message}>
      <p className={page.sectionEyebrow}>Error 404</p>
      <h1 className={page.messageTitle}>Game over: page not found</h1>
      <p>
        This page doesn&apos;t exist. Head back to your last save point and
        try again.
      </p>
      <div className={page.actions}>
        <Link href="/" className={buttons.button}>
          Back to home
        </Link>
        <Link href="/projects" className={buttons.buttonDark}>
          See my projects
        </Link>
      </div>
    </div>
  );
}
