import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className={`${styles.projects} section`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">
            <span>Projects</span>
          </div>
          <h2 className={styles.heading}>
            Things I've built
            <br />
            <span className="accent">that are live.</span>
          </h2>
          <p className={styles.sub}>Real products. Real users. Real impact.</p>
        </motion.div>

        <div className={styles.list}>
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className={styles.cardInner}
                style={{ background: project.gradient }}
              >
                <div className={styles.cardNumber}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.roleBadge}>{project.role}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLink}
                  >
                    <span>Visit Site</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 13L13 3M13 3H7M13 3V9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
