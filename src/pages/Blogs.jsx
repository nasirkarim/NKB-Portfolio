import { useEffect, useState } from "react";
import { FaArrowRight, FaClock } from "react-icons/fa6";
import { blogsData } from "../data/portfolioData";
import Freelancing from "../components/shell/Freelancing";

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Career", "Frontend", "Architecture", "Best Practices", "Tools", "Roadmap"];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((b) => b.category === selectedCategory);

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container page-banner">
        <div className="section-eyebrow">THOUGHTS & INSIGHTS</div>
        <h1 className="page-banner-title">
          Web Dev <span>Articles & Insights</span>
        </h1>
        <p className="page-banner-desc">
          Sharing lessons learned, modern frontend techniques, and my journey as a developer.
        </p>
      </div>

      <div className="container" style={{ paddingBottom: "60px" }}>
        {/* Category Tabs */}
        <div className="skills-filter-tabs" style={{ marginBottom: "40px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="blogs-grid-list">
          {filteredBlogs.map((blog) => (
            <article className="blog-post-card" key={blog.id}>
              <div className="blog-meta-row">
                <span className="blog-tag-pill">{blog.category}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <FaClock style={{ fontSize: "0.75rem" }} /> {blog.readTime}
                </span>
              </div>

              <h2 className="blog-post-title">{blog.title}</h2>
              <p className="blog-post-desc">{blog.description}</p>

              <button
                className="blog-read-more-btn"
                onClick={() =>
                  alert(`Reading article: "${blog.title}". Article detail view can be integrated here.`)
                }
              >
                Read Full Article <FaArrowRight />
              </button>
            </article>
          ))}
        </div>
      </div>

      <Freelancing />
    </div>
  );
}

export default Blogs;