import type { Metadata } from "next";
import page from "@/app/shared/page.module.css";
import PageHero from "@/app/components/pageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Logan Young about contract work, collaborations or new opportunities.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Continue?"
        title="Contact me"
        lead="Open to contract work, collaborations and new opportunities. I usually reply within a day or two."
      />

      <div className={page.content}>
        <div className={page.grid2}>
          <section className={page.section}>
            <h2 className={page.sectionTitle}>Personal</h2>
            <dl className={page.contactList}>
              <div className={page.contactRow}>
                <dt className={page.contactLabel}>Email</dt>
                <dd>
                  <a href="mailto:younglogan09@gmail.com" className={page.inlineLink}>
                    younglogan09@gmail.com
                  </a>
                </dd>
              </div>
              <div className={page.contactRow}>
                <dt className={page.contactLabel}>Phone</dt>
                <dd>
                  <a href="tel:+64210653792" className={page.inlineLink}>
                    +64 21 065 3792
                  </a>
                </dd>
              </div>
              <div className={page.contactRow}>
                <dt className={page.contactLabel}>GitHub</dt>
                <dd>
                  <a
                    href="https://github.com/LoganShmogan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={page.inlineLink}
                  >
                    LoganShmogan
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className={page.section}>
            <h2 className={page.sectionTitle}>Business enquiries</h2>
            <p>
              Need a website, app or system built? Contact Save Point directly
              and it will come straight to me.
            </p>
            <dl className={page.contactList}>
              <div className={page.contactRow}>
                <dt className={page.contactLabel}>Email</dt>
                <dd>
                  <a href="mailto:contact@savepoint.co.nz" className={page.inlineLink}>
                    contact@savepoint.co.nz
                  </a>
                </dd>
              </div>
              <div className={page.contactRow}>
                <dt className={page.contactLabel}>Website</dt>
                <dd>
                  <a
                    href="https://savepoint.co.nz/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={page.inlineLink}
                  >
                    savepoint.co.nz
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </>
  );
}
