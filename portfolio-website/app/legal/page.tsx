import type { Metadata } from "next";
import page from "@/app/shared/page.module.css";
import PageHero from "@/app/components/pageHero";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy policy, cookie policy, website terms and disclaimer for Logan Young's portfolio, governed by New Zealand law.",
};

const LAST_UPDATED = "22 October 2026";

const contents = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "cookies", label: "Cookie Policy" },
  { id: "terms", label: "Website Terms" },
  { id: "disclaimer", label: "Disclaimer" },
];

const ContactEmail = () => (
  <a href="mailto:younglogan09@gmail.com" className={page.inlineLink}>
    younglogan09@gmail.com
  </a>
);

export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="Fine print"
        title="Legal"
        lead="Privacy, cookies, website terms and disclaimer, all in one place."
      />

      <div className={page.content}>
        {/* Table of contents */}
        <nav className={page.section} aria-labelledby="contents-title">
          <h2 id="contents-title" className={page.sectionTitle}>
            On this page
          </h2>
          <ol className={page.contents}>
            {contents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={page.inlineLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1. Privacy Policy */}
        <section id="privacy" className={page.section}>
          <h2 className={page.sectionTitle}>1. Privacy Policy</h2>
          <div className={page.sectionBody}>
            <p className={page.updated}>
              Last updated: {LAST_UPDATED}. Governed by the New Zealand
              Privacy Act 2020.
            </p>

            <h3 className={page.subHeadPart}>1.1 Who I am</h3>
            <p>
              This is the personal portfolio of Logan Young (&ldquo;I&rdquo;,
              &ldquo;me&rdquo;, &ldquo;my&rdquo;), a software engineer based
              in New Zealand. This policy explains what personal information I
              collect through this website and how I look after it. You can
              contact me about privacy at <ContactEmail />.
            </p>
            <p>
              This website is separate from Save Point Limited. If you work
              with Save Point, its own{" "}
              <a
                href="https://savepoint.co.nz/legal#privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={page.inlineLink}
              >
                privacy policy
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>{" "}
              applies to that work.
            </p>

            <h3 className={page.subHeadPart}>1.2 Information you give me</h3>
            <p>
              This website has no forms and no accounts. I only receive
              personal information if you choose to contact me by email or
              phone, in which case I receive your name, contact details and
              anything you include in your message.
            </p>

            <h3 className={page.subHeadPart}>
              1.3 Information collected by this website
            </h3>
            <p>
              This website does not use cookies, analytics, advertising or
              tracking tools. Like all websites, the hosting provider (Vercel,
              based in the United States) may automatically record basic
              technical information, such as your IP address, browser type and
              the pages you requested, in server logs. These logs are used only
              to keep the site running and secure.
            </p>

            <h3 className={page.subHeadPart}>1.4 How I use your information</h3>
            <p>
              I use your information only to reply to you and to follow up on
              anything you ask about. I will never sell or trade it, or add you
              to a mailing list without your permission. My email is provided
              by Google, which may store messages outside New Zealand.
            </p>

            <h3 className={page.subHeadPart}>1.5 How long I keep it</h3>
            <p>
              I keep messages for as long as they are useful for our
              conversation, and delete them on request unless the law requires
              me to keep them.
            </p>

            <h3 className={page.subHeadPart}>1.6 Your rights</h3>
            <p>
              You can ask to see the personal information I hold about you,
              ask me to correct it, or ask me to delete it. Email{" "}
              <ContactEmail /> and I will respond within 20 working days. If
              you are not happy with my response, you can contact the Office
              of the Privacy Commissioner at{" "}
              <a
                href="https://www.privacy.org.nz"
                target="_blank"
                rel="noopener noreferrer"
                className={page.inlineLink}
              >
                www.privacy.org.nz
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        </section>

        {/* 2. Cookie Policy */}
        <section id="cookies" className={page.section}>
          <h2 className={page.sectionTitle}>2. Cookie Policy</h2>
          <div className={page.sectionBody}>
            <p className={page.updated}>Last updated: {LAST_UPDATED}.</p>

            <h3 className={page.subHeadPart}>2.1 What cookies are</h3>
            <p>
              Cookies are small files that a website can save in your
              browser. They are often used to remember logins or preferences,
              or to track what you do across websites.
            </p>

            <h3 className={page.subHeadPart}>
              2.2 This website does not use cookies
            </h3>
            <p>
              This website does not set any cookies. It does not use
              analytics, advertising or tracking tools, and its fonts and
              images are served from this website rather than from third
              parties. Because of this, there is no cookie banner or consent
              prompt.
            </p>

            <h3 className={page.subHeadPart}>2.3 Links to other websites</h3>
            <p>
              This website links to other sites, such as GitHub, Google Colab,
              Save Point and the live sites of my projects. If you follow one
              of those links, that website may set its own cookies under its
              own cookie policy.
            </p>

            <h3 className={page.subHeadPart}>2.4 Managing cookies</h3>
            <p>
              You can view, block or delete cookies at any time in your
              browser settings. Because this website sets none, blocking them
              will not affect how it works.
            </p>
          </div>
        </section>

        {/* 3. Website Terms */}
        <section id="terms" className={page.section}>
          <h2 className={page.sectionTitle}>3. Website Terms</h2>
          <div className={page.sectionBody}>
            <p className={page.updated}>Last updated: {LAST_UPDATED}.</p>

            <h3 className={page.subHeadPart}>3.1 Using this website</h3>
            <p>
              By using this website you agree to these terms. You may browse
              and share links to it freely. Please don&apos;t try to disrupt
              it, or use it for anything unlawful.
            </p>

            <h3 className={page.subHeadPart}>3.2 Content and copyright</h3>
            <p>
              Unless stated otherwise, the text, design and photos on this
              website belong to me. Client names, logos, screenshots and
              websites belong to their respective owners and are shown as
              examples of my work. Source code in my public
              GitHub repositories is covered by the licence in each
              repository.
            </p>

            <h3 className={page.subHeadPart}>3.3 Changes</h3>
            <p>
              I may update this website and these terms at any time. The
              &ldquo;last updated&rdquo; date shows when they last changed.
            </p>

            <h3 className={page.subHeadPart}>3.4 Governing law</h3>
            <p>
              These terms are governed by the laws of New Zealand, and the
              New Zealand courts have exclusive jurisdiction.
            </p>
          </div>
        </section>

        {/* 4. Disclaimer */}
        <section id="disclaimer" className={page.section}>
          <h2 className={page.sectionTitle}>4. Disclaimer</h2>
          <div className={page.sectionBody}>
            <p>
              This website is a portfolio. Project descriptions are a summary
              of my work and are not an offer of services. Any work with Save
              Point is covered by Save Point&apos;s own terms and a written
              agreement.
            </p>
            <p>
              I take care to keep this website accurate, but it is provided
              &ldquo;as is&rdquo;. I am not responsible for the content of
              external websites I link to. Nothing in this disclaimer limits
              any rights you have under the Consumer Guarantees Act 1993 or
              the Fair Trading Act 1986.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
