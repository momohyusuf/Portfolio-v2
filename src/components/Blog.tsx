import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Blog.module.css";

const placeholderPosts = [
  {
    id: 1,
    tag: "Backend",
    title: "Article coming soon",
    desc: "Insights on building scalable backend systems, APIs, and real-world architecture decisions.",
  },
  {
    id: 2,
    tag: "Frontend",
    title: "Article coming soon",
    desc: "Notes on building performant, accessible, and beautiful user interfaces with React.",
  },
  {
    id: 3,
    tag: "Engineering",
    title: "Article coming soon",
    desc: "Thoughts on fullstack engineering, product building, and the craft of software.",
  },
];

export default function Blog() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" ref={ref} className={`${styles.blog} section`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">
            <span>Blog</span>
          </div>
          <h2 className={styles.heading}>
            Writing about
            <br />
            <span className="accent">things I understand.</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {placeholderPosts.map((post, i) => (
            <motion.div
              key={post.id}
              className={styles.card}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.cardTop}>
                <span className="tag">{post.tag}</span>
                <div className={styles.comingSoon}>Coming Soon</div>
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardDesc}>{post.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.readMore}>
                  Stay tuned <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
