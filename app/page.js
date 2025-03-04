export default function Home() {
  return (
      <div>
          <nav>
              <a href="/">🏠 Home</a>
              <a href="/projects">📂 Projects</a>
              <a href="/about">👤 About</a>
              <a href="/contact">📧 Contact</a>
          </nav>

          <div className="container">
              {/* Full-Width Hero Section */}
              <div className="hero">
                  <h1>Building the Future, One Line of Code at a Time.</h1>
                  <p>Creating seamless, high-performance web experiences.</p>
                  <button>Explore My Work</button>
              </div>

              {/* Column-based Sections */}
              <div className="section">
                  <h2>🚀 Featured Projects</h2>
                  <p>Some of my best projects showcasing UI/UX excellence.</p>
              </div>

              <div className="section">
                  <h2>💡 About Me</h2>
                  <p>A passionate frontend developer with a keen eye for design.</p>
              </div>

              <div className="section">
                  <h2>📩 Let's Connect</h2>
                  <p>Have a project in mind? Let’s collaborate.</p>
              </div>

              <div className="section">
                  <h2>🛠 Tech Stack</h2>
                  <p>Proficient in React, Next.js, JavaScript, and UI/UX design.</p>
              </div>
          </div>
      </div>
  );
}
