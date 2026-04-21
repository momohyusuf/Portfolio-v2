import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

const WORDS = ["Fullstack", "Engineer."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUp = {
    hidden: { y: 24, opacity: 0 },
    visible: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <div className={styles.gridBg} />

      {/* Neon glow blob */}
      <div className={styles.glowBlob} />

      <motion.div className={styles.content} style={{ y, opacity }}>
        <motion.div
          className={styles.badge}
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className={styles.badgeDot} />
          <span>Available for opportunities</span>
        </motion.div>

        <div className={styles.headingWrap}>
          <div className={styles.headingLine}>
            <motion.h1
              className={styles.name}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {["Momoh", "Yusuf"].map((w) => (
                <span key={w} className={styles.wordClip}>
                  <motion.span variants={wordVariants} className={styles.word}>
                    {w === "Yusuf" ? (
                      <>
                        <span className={styles.accent}>{w}</span>
                        <span className={styles.period}>.</span>
                      </>
                    ) : (
                      w
                    )}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </div>

          <div className={styles.subtitleLine}>
            <motion.p
              className={styles.subtitle}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {WORDS.map((w) => (
                <span key={w} className={styles.wordClip}>
                  <motion.span
                    variants={wordVariants}
                    className={styles.subtitleWord}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </motion.p>
          </div>
        </div>

        <motion.p
          className={styles.description}
          custom={0.7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          I don't just write code — I build things I deeply understand.
          <br />
          From APIs that scale to UIs that feel alive.
        </motion.p>

        <motion.div
          className={styles.actions}
          custom={0.9}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a href="#projects" className={styles.btnPrimary}>
            See My Work
            <span className={styles.btnArrow}>→</span>
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          custom={1.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>Live Products</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Years Building</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Full</span>
            <span className={styles.statLabel}>Stack Coverage</span>
          </div>
        </motion.div>
      </motion.div>

      <div className={styles.scrollHint}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className={styles.scrollDot}
        />
      </div>
    </section>
  );
}
