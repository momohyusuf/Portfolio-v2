import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import styles from "./GitHubContributions.module.css";

const USERNAME = "momohyusuf";

const fadeUp = (delay = 0) => ({
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

const theme = {
  dark: ["#1a1a1a", "#2a3000", "#4d5a00", "#7a8f00", "#e8ff00"],
};

interface RepoStat {
  name: string;
  url: string;
  count: number;
}

interface ActivityGroup {
  type: "commits" | "prs" | "reviews";
  label: string;
  total: number;
  repos: RepoStat[];
}

interface MonthActivity {
  month: string; // e.g. "April 2026"
  groups: ActivityGroup[];
}

function formatMonth(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function parseEvents(events: unknown[]): MonthActivity[] {
  // month key → type → repo → count
  const monthMap = new Map<
    string,
    {
      commits: Map<string, { url: string; count: number }>;
      prs: Map<string, { url: string; count: number }>;
      reviews: Map<string, { url: string; count: number }>;
    }
  >();

  const getMonth = (date: string) => {
    const d = new Date(date);
    // key for ordering
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  };

  for (const event of events) {
    const date: string = (event as { created_at: string }).created_at ?? "";
    const repoFull: string =
      (event as { repo: { name: string } }).repo?.name ?? "";
    const repoUrl = `https://github.com/${repoFull}`;
    const repoName = repoFull.split("/")[1] ?? repoFull;
    const monthKey = getMonth(date);

    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, {
        commits: new Map(),
        prs: new Map(),
        reviews: new Map(),
      });
    }
    const m = monthMap.get(monthKey)!;

    const type = (event as { type: string }).type;

    if (type === "PushEvent") {
      const n = (
        (event as { payload: { commits: unknown[] } }).payload?.commits ?? []
      ).length;
      const existing = m.commits.get(repoName);
      m.commits.set(repoName, {
        url: repoUrl,
        count: (existing?.count ?? 0) + n,
      });
    } else if (type === "PullRequestEvent") {
      const action = (event as { payload: { action: string } }).payload?.action;
      if (action === "opened") {
        const existing = m.prs.get(repoName);
        m.prs.set(repoName, {
          url: repoUrl,
          count: (existing?.count ?? 0) + 1,
        });
      }
    } else if (type === "PullRequestReviewEvent") {
      const existing = m.reviews.get(repoName);
      m.reviews.set(repoName, {
        url: repoUrl,
        count: (existing?.count ?? 0) + 1,
      });
    }
  }

  // Sort months descending
  const sortedKeys = Array.from(monthMap.keys()).sort((a, b) =>
    b.localeCompare(a),
  );

  return sortedKeys
    .map((key) => {
      const m = monthMap.get(key)!;
      const monthLabel = formatMonth(`${key}-01`);
      const groups: ActivityGroup[] = [];

      if (m.commits.size > 0) {
        const repos = Array.from(m.commits.entries())
          .map(([name, v]) => ({ name, url: v.url, count: v.count }))
          .sort((a, b) => b.count - a.count);
        const total = repos.reduce((s, r) => s + r.count, 0);
        const maxCount = repos[0].count;
        groups.push({
          type: "commits",
          label: `Created ${total} commit${total !== 1 ? "s" : ""} in ${repos.length} repositor${repos.length !== 1 ? "ies" : "y"}`,
          total: maxCount,
          repos,
        });
      }

      if (m.prs.size > 0) {
        const repos = Array.from(m.prs.entries())
          .map(([name, v]) => ({ name, url: v.url, count: v.count }))
          .sort((a, b) => b.count - a.count);
        const total = repos.reduce((s, r) => s + r.count, 0);
        groups.push({
          type: "prs",
          label: `Opened ${total} pull request${total !== 1 ? "s" : ""} in ${repos.length} repositor${repos.length !== 1 ? "ies" : "y"}`,
          total,
          repos,
        });
      }

      if (m.reviews.size > 0) {
        const repos = Array.from(m.reviews.entries())
          .map(([name, v]) => ({ name, url: v.url, count: v.count }))
          .sort((a, b) => b.count - a.count);
        const total = repos.reduce((s, r) => s + r.count, 0);
        groups.push({
          type: "reviews",
          label: `Reviewed ${total} pull request${total !== 1 ? "s" : ""} in ${repos.length} repositor${repos.length !== 1 ? "ies" : "y"}`,
          total,
          repos,
        });
      }

      return { month: monthLabel, groups };
    })
    .filter((m) => m.groups.length > 0);
}

const TYPE_ICONS: Record<ActivityGroup["type"], string> = {
  commits: "⬡",
  prs: "⇄",
  reviews: "◎",
};

export default function GitHubContributions() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activity, setActivity] = useState<MonthActivity[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}/events?per_page=100`)
      .then((r) => r.json())
      .then((events: unknown) => {
        if (!Array.isArray(events)) return;
        setActivity(parseEvents(events));
      })
      .catch(() => {});
  }, []);

  return (
    <section
      id="contributions"
      ref={ref}
      className={`${styles.contributions} section`}
    >
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.inner}
        >
          <motion.div variants={fadeUp(0)} className={styles.header}>
            <span className={styles.label}>Open Source</span>
            <h2 className={styles.title}>GitHub Contributions</h2>
            <p className={styles.sub}>
              A year of commits, pull requests, and code reviews.
            </p>
          </motion.div>

          <motion.div variants={fadeUp(0.15)} className={styles.calendarWrap}>
            <GitHubCalendar
              username={USERNAME}
              theme={theme}
              colorScheme="dark"
              blockSize={13}
              blockMargin={4}
              fontSize={13}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </motion.div>

          {activity.length > 0 && (
            <motion.div variants={fadeUp(0.25)} className={styles.activityWrap}>
              <h3 className={styles.activityTitle}>Contribution Activity</h3>
              <div className={styles.timeline}>
                {activity.map((month) => (
                  <div key={month.month} className={styles.monthBlock}>
                    <div className={styles.monthHeading}>
                      <span className={styles.monthLabel}>{month.month}</span>
                      <div className={styles.monthLine} />
                    </div>
                    <div className={styles.groupList}>
                      {month.groups.map((group) => {
                        const maxCount = Math.max(
                          ...group.repos.map((r) => r.count),
                        );
                        return (
                          <div key={group.type} className={styles.group}>
                            <div className={styles.groupHeader}>
                              <span
                                className={`${styles.groupIcon} ${styles[group.type]}`}
                              >
                                {TYPE_ICONS[group.type]}
                              </span>
                              <span className={styles.groupLabel}>
                                {group.label}
                              </span>
                            </div>
                            <ul className={styles.repoList}>
                              {group.repos.map((repo) => (
                                <li key={repo.name} className={styles.repoRow}>
                                  <a
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.repoName}
                                  >
                                    {repo.url.replace(
                                      "https://github.com/",
                                      "",
                                    )}
                                  </a>
                                  <span className={styles.repoCount}>
                                    {repo.count}{" "}
                                    {group.type === "commits" ? "commit" : "PR"}
                                    {repo.count !== 1 ? "s" : ""}
                                  </span>
                                  <div className={styles.barTrack}>
                                    <div
                                      className={styles.barFill}
                                      style={{
                                        width: `${(repo.count / maxCount) * 100}%`,
                                      }}
                                    />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
