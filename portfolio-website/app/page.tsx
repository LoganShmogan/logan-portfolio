"use client";

import { useState, useRef, FormEvent, RefObject } from "react";
import emailjs from "@emailjs/browser";
import styles from "./page.module.css";

// Initialize EmailJS with your public key
emailjs.init("pq07HrJkk-lgFXmi1");

export default function Home() {
  // Refs for navigation
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const businessRef = useRef<HTMLElement>(null);

  // State for contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  // Navigation scroll function
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("idle");

    try {
      await emailjs.send(
        "service_xm7z2vd", // EmailJS service ID
        "template_1046f4c", // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "younglogan09@gmail.com",
        },
      );

      setSendStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Work portfolio items data
  const workItems = [
    {
      id: 1,
      title: "Contract Work",
      description: "Web application built with Next.js",
      imageUrl: "/happyHorizons.png",
      githubLink: "https://github.com/LoganShmogan/Happy-Horizons-Website",
    },
    {
      id: 2,
      title: "Save Point Limited website",
      description: "Web application built with Next.js",
      imageUrl: "/savePoint.png",
      githubLink: "https://github.com/LoganShmogan/save-point",
    },
    {
      id: 3,
      title: "Machine Learning Techniques",
      description:
        "Python notebook porving understanding of machine learning techniques",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubLink:
        "https://github.com/LoganShmogan/ml-techniques-stocks-clusters-asignment",
    },
    {
      id: 4,
      title: "Temperature Console App",
      description: "Build with C# .NET and IOT devices",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubLink: "https://github.com/LoganShmogan/temperature-console-app",
    },
    {
      id: 5,
      title: "Tuck Shop App",
      description: "A mobile C# .NET MAUI shopping app",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubLink: "https://github.com/LoganShmogan/tuck-box-shop-app",
    },
    {
      id: 6,
      title: "Movie Application",
      description: "C# .NET Movie viewing/manage application",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubLink: "https://github.com/LoganShmogan/Movie-Application-APA1",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div
            className={styles.logo}
            onClick={() =>
              scrollToSection(homeRef as RefObject<HTMLDivElement>)
            }
          >
            <h1>Logan Young</h1>
          </div>
          <div className={styles.navLinks}>
            <button
              onClick={() =>
                scrollToSection(homeRef as RefObject<HTMLDivElement>)
              }
              className={styles.navLink}
            >
              Home
            </button>
            <button
              onClick={() =>
                scrollToSection(aboutRef as RefObject<HTMLDivElement>)
              }
              className={styles.navLink}
            >
              About
            </button>
            <button
              onClick={() =>
                scrollToSection(businessRef as RefObject<HTMLDivElement>)
              }
              className={styles.navLink}
            >
              Save Point
            </button>
            <button
              onClick={() =>
                scrollToSection(workRef as RefObject<HTMLDivElement>)
              }
              className={styles.navLink}
            >
              Work
            </button>
            <button
              onClick={() =>
                scrollToSection(contactRef as RefObject<HTMLDivElement>)
              }
              className={styles.navLink}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero/Home Section */}
      <section ref={homeRef} className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to My Portfolio</h1>
          <p className={styles.heroSubtitle}>
            Enjoy a more enhanced look on what I do
          </p>
          <button
            onClick={() =>
              scrollToSection(workRef as RefObject<HTMLDivElement>)
            }
            className={styles.ctaButton}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                I’m Logan Young, a final-year Bachelor of Information and
                Communication Technology student double majoring in Software
                Engineering and Web Development. I enjoy building practical,
                real-world solutions and have a strong interest in full-stack
                development, working across both front-end and back-end systems.
              </p>
              <p>
                I also work part-time as an OSCAR Supervisor, which has
                strengthened my communication, leadership, and problem-solving
                skills. Balancing work, study, and contract projects has taught
                me how to manage my time effectively while delivering consistent
                results.
              </p>
              <p>
                I’m always looking to learn, improve, and take on new
                challenges, whether that’s refining my technical skills,
                exploring new tools, or contributing to meaningful projects.
              </p>
            </div>
            <div className={styles.aboutImages}>
              <div className={styles.imageContainer}>
                <img
                  src="/0computer.JPEG"
                  alt="Computer"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.imageContainer}>
                <img
                  src="/0me.JPEG"
                  alt="Personal Portrail"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.imageContainer}>
                <img
                  src="/1me.JPEG"
                  alt="Personal Portrail"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.imageContainer}>
                <img
                  src="/1computer.JPEG"
                  alt="Computer"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section
        ref={businessRef}
        className={`${styles.section} ${styles.businessSection}`}
      >
        <div className={styles.sectionContent}>
          <div className={styles.businessCard}>
            <div className={styles.businessHeader}>
              <div className={styles.businessLogo}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoText}>SP</span>
                </div>
              </div>
              <div className={styles.businessInfo}>
                <h2 className={styles.businessName}>Save Point Limited</h2>
                <p className={styles.businessWebsite}>
                  <a
                    href="https://savepoint.cc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.websiteLink}
                  >
                    savepoint.cc
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.businessDescription}>
              <p>
                We specialize in modernizing and optimizing your digital
                infrastructure with customized solutions that drive growth and
                efficiency.
              </p>
            </div>

            <div className={styles.businessContacts}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span className={styles.contactText}>contact@savepoint.cc</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span className={styles.contactText}>+64 (021) 065-3792</span>
              </div>
            </div>

            <div className={styles.businessCta}>
              <a
                href="https://savepoint.cc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.businessButton}
              >
                Visit Website
              </a>
              <button
                onClick={() =>
                  scrollToSection(contactRef as RefObject<HTMLDivElement>)
                }
                className={`${styles.businessButton} ${styles.secondaryButton}`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section ref={workRef} className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>My Work</h2>
          <div className={styles.workGrid}>
            {workItems.map((item) => (
              <div key={item.id} className={styles.workCard}>
                <div className={styles.cardImage}>
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactSubtitle}>Get in Touch</h3>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <p className={styles.contactValue}>
                      younglogan09@gmail.com
                    </p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📱</span>
                  <div>
                    <p className={styles.contactLabel}>Phone</p>
                    <p className={styles.contactValue}>+64 (021) 065-3792</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {sendStatus === "success" && (
                  <p className={styles.successMessage}>
                    Message sent successfully!
                  </p>
                )}

                {sendStatus === "error" && (
                  <p className={styles.errorMessage}>
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Logan Young. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
