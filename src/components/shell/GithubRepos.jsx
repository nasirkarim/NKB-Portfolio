import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaStar,
  FaCodeFork,
  FaArrowUpRightFromSquare,
  FaRotateRight,
  FaCircle,
} from "react-icons/fa6";
import { githubConfig } from "../../data/portfolioData";
import { gsap, revealSectionHeading, isReducedMotion } from "../../utils/animations";

// Language color mapping
const langColors = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3776AB",
  React: "#61DAFB",
  Default: "#818cf8",
};

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadRepos() {
      try {
        const response = await fetch(githubConfig.apiUrl);
        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`);
        }
        const data = await response.json();
        if (!isCancelled) {
          const sorted = Array.isArray(data)
            ? data.slice(0, githubConfig.repoLimit)
            : [];
          setRepos(sorted);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          console.warn("GitHub API fetch fallback:", err.message);
          setError(err.message || "Failed to fetch repositories");
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => {
      isCancelled = true;
    };
  }, [reloadTrigger]);

  // GSAP Heading Reveal
  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        revealSectionHeading(headingRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Stagger cards when repos arrive
  useEffect(() => {
    if (isReducedMotion() || loading || repos.length === 0 || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".github-repo-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        overwrite: "auto",
      }
    );
  }, [loading, repos]);

  const handleRetry = () => {
    setLoading(true);
    setReloadTrigger((prev) => prev + 1);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="github-section" id="github" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">OPEN SOURCE & CODE ACTIVITY</div>
          <h2 className="section-title">
            Latest <span>GitHub Repositories</span>
          </h2>
          <p className="section-subtitle">
            Live public repositories and open-source contributions pulled directly from my GitHub profile.
          </p>
        </div>

        {/* GitHub Header Banner */}
        <div className="github-banner-card">
          <div className="github-banner-left">
            <div className="github-icon-avatar">
              <FaGithub />
            </div>
            <div>
              <h3 className="github-user-title">@{githubConfig.username}</h3>
              <p className="github-user-desc">
                Building accessible, high-performance web applications and open-source tools.
              </p>
            </div>
          </div>

          <a
            href={githubConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ flexShrink: 0 }}
          >
            <FaGithub /> View GitHub Profile <FaArrowUpRightFromSquare style={{ fontSize: "0.8rem" }} />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="github-repos-grid" ref={gridRef}>
          {loading ? (
            // Skeleton Loading State
            Array.from({ length: 6 }).map((_, idx) => (
              <div className="github-repo-card skeleton-card" key={idx}>
                <div className="skeleton-bar skeleton-title"></div>
                <div className="skeleton-bar skeleton-desc"></div>
                <div className="skeleton-bar skeleton-desc short"></div>
                <div className="skeleton-footer">
                  <div className="skeleton-bar skeleton-pill"></div>
                  <div className="skeleton-bar skeleton-pill"></div>
                </div>
              </div>
            ))
          ) : error || repos.length === 0 ? (
            // Error / Fallback State
            <div className="github-fallback-box">
              <p className="fallback-msg">
                {error ? "Unable to load live GitHub stream (rate limit or offline)." : "No public repositories found."}
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "14px" }}>
                <button onClick={handleRetry} className="btn-secondary">
                  <FaRotateRight /> Retry Fetch
                </button>
                <a
                  href={githubConfig.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FaGithub /> Open GitHub Direct
                </a>
              </div>
            </div>
          ) : (
            // Live Real Repositories
            repos.map((repo) => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-repo-card"
                key={repo.id}
                title={`Open ${repo.name} on GitHub`}
              >
                <div className="repo-top-row">
                  <h4 className="repo-name">
                    <span className="repo-folder-icon">📂</span> {repo.name}
                  </h4>
                  <FaArrowUpRightFromSquare className="repo-external-icon" />
                </div>

                <p className="repo-desc">
                  {repo.description || "Interactive web development repository and component implementations."}
                </p>

                <div className="repo-meta-row">
                  {repo.language && (
                    <span className="repo-language">
                      <FaCircle
                        style={{
                          color: langColors[repo.language] || langColors.Default,
                          fontSize: "0.6rem",
                        }}
                      />{" "}
                      {repo.language}
                    </span>
                  )}

                  <span className="repo-stat">
                    <FaStar /> {repo.stargazers_count}
                  </span>

                  <span className="repo-stat">
                    <FaCodeFork /> {repo.forks_count}
                  </span>

                  <span className="repo-updated">
                    Updated {formatDate(repo.updated_at)}
                  </span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default GithubRepos;
