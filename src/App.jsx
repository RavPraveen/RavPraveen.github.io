function App() {
  return (
    <main className="app-shell">
      <section className="intro-section">
        <p className="eyebrow">Hello, I am</p>
        <h1>Praveen</h1>
        <p className="headline">
          Electronics & Telecommunication engineer with a passion for machine vision,
          image processing, AI/ML, and embedded systems.
        </p>
        <p className="description">
          I design intelligent systems that sense, analyze, and act in real time.
          My work bridges hardware and software to build reliable solutions for
          automation, robotics, and edge computing.
        </p>
      </section>

      <section className="focus-section">
        <h2>Core Focus Areas</h2>
        <div className="focus-grid">
          <article>
            <h3>Machine Vision</h3>
            <p>Developing vision pipelines for object detection, inspection, and guidance.</p>
          </article>
          <article>
            <h3>Image Processing</h3>
            <p>Transforming images into actionable data with filtering, segmentation, and feature extraction.</p>
          </article>
          <article>
            <h3>AI / ML</h3>
            <p>Training models for classification, prediction, and intelligent decision-making.</p>
          </article>
          <article>
            <h3>Embedded Systems</h3>
            <p>Building efficient firmware and edge applications for constrained hardware.</p>
          </article>
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-card">
          <p className="skills-label">Skills Board</p>
          <p className="skills-description">
            Add your skills here: machine vision, image processing, AI/ML, embedded systems,
            Python, C/C++, MATLAB, embedded Linux, and other areas you want to highlight.
          </p>
        </div>
      </section>

      <section className="journey-section">
        <h2>Academic Journey</h2>
        <div className="journey-graphic">
          <div className="journey-card">
            <p className="journey-label">GCE Ordinary Level</p>
            <p className="journey-value">9 Distinctions</p>
          </div>
          <div className="journey-card journey-highlight">
            <p className="journey-label">GCE Advanced Level</p>
            <p className="journey-value">3 Distinctions • Z-score 2.5034</p>
          </div>
          <div className="journey-card journey-highlight">
            <p className="journey-label">University of Moratuwa</p>
            <p className="journey-value">4 Semesters Completed • CGPA 3.67</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Selected work and proof of concept for machine vision, AI/ML, and embedded systems.</p>
        </div>
        <div className="project-grid">
          <article className="project-card">
            <div className="project-photo">Photo 1</div>
            <div className="project-content">
              <h3>Project Title 1</h3>
              <p>Short description of the project, highlighting objectives and technologies used.</p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-photo">Photo 2</div>
            <div className="project-content">
              <h3>Project Title 2</h3>
              <p>Short description of the project, highlighting objectives and technologies used.</p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-photo">Photo 3</div>
            <div className="project-content">
              <h3>Project Title 3</h3>
              <p>Short description of the project, highlighting objectives and technologies used.</p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-photo">Photo 4</div>
            <div className="project-content">
              <h3>Project Title 4</h3>
              <p>Short description of the project, highlighting objectives and technologies used.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-card contact-photo-card">
            <p className="contact-label">Upload Your Photo</p>
            <div className="photo-placeholder">Your photo here</div>
          </div>

          <div className="contact-card contact-details-card">
            <p className="contact-label">Get in Touch</p>
            <ul className="contact-list">
              <li><strong>GitHub:</strong> github.com/your-username</li>
              <li><strong>LinkedIn:</strong> linkedin.com/in/your-profile</li>
              <li><strong>CV:</strong> link to your CV</li>
              <li><strong>Email:</strong> your.email@example.com</li>
              <li><strong>Phone:</strong> +94 77 123 4567</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
