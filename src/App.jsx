import churn from './images/churn.png'
import printease from './images/printease.jpeg'
import lost from './images/lost.png'
import temperature from './images/dt2.jpeg'
import profilePhoto from './images/Praveen Samarasekara.jpeg'

function App() {
  const projects = [
    {
      title: 'Customer Churn Prediction ',
      description: 'Built a machine learning model to predict customer churn using a Kaggle dataset. Performed data preprocessing, feature engineering, and exploratory analysis before training and optimizing a Random Forest classifier to identify customers at risk of leaving.',
      image: churn
    },
    {
      title: 'PrintEase Solutions – Automated Self-Service Printing Kiosk',
      description: 'Designed an automated printing kiosk that allows users to upload documents, make secure online payments, and print without staff assistance. Integrated a React frontend, Django backend, and ESP32 hardware for a seamless printing workflow. Designed a lightweight embedded camera solution for real-time image processing on constrained hardware.',
      image: printease
    },
    {
      title: 'University Lost and Found System',
      description: 'Designed a full-stack web application that enables students to report, search for, and reclaim lost items. Implemented RESTful APIs and connected the frontend with backend services to provide an efficient campus-wide lost and found platform',
      image: lost
    },
    {
      title: 'Multichannel Temperature Data Logger for Vaccine Cold Chain Transport',
      description: 'Engineered an embedded IoT system to monitor vaccine storage temperatures across multiple channels during transport. The device logs timestamped data, issues alerts for temperature excursions, and supports wireless monitoring to ensure cold chain integrity',
      image: temperature
    }
  ]

  return (
    <main className="app-shell">
      <section className="intro-section">
        <div className="intro-content">
          <div className="intro-text">
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
          </div>
          <div className="intro-photo-card">
            <img className="intro-photo" src={profilePhoto} alt="Praveen Samarasekara" />
          </div>
        </div>
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
  Skilled in machine learning, data analysis, embedded systems.
  Experienced with Python, C/C++, Embedded C, MATLAB, Java, React, Django, and Node.js.
  Proficient in microcontrollers, signal processing, computer vision, 
  database systems, and developing intelligent hardware-software solutions.
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
            <p className="journey-value">4 Semesters Completed • CGPA 3.59</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Selected work and proof of concept for  AI/ML, and embedded systems.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img className="project-photo" src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-card contact-details-card">
            <p className="contact-label">Get in Touch</p>
            <ul className="contact-list">
              <li><strong>GitHub:</strong> <a href="https://github.com/RavPraveen" target="_blank" rel="noreferrer">github.com/RavPraveen</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/praveen-samarasekara-879913368?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">linkedin.com/in/praveen-samarasekara-879913368</a></li>
              <li><strong>CV:</strong> <a href="/docs/CV.pdf" target="_blank" rel="noreferrer">View CV</a></li>
              <li><strong>Email:</strong> ravinpraveen416@gmail.com</li>
              <li><strong>Phone:</strong> +94 77 125 6731</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
