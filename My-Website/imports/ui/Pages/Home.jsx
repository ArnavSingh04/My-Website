import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Home = () => (
  <main className="home-container">
    <section className="intro-section">
      <h1>Welcome to My Portfolio</h1>
      <p className="tagline">
        Passionate and self-driven software engineering student.
      </p>
    </section>

    <section className="bio-section">
      <p>
        Passionate and self-driven software engineering student with over 5
        years of hands-on programming experience, spanning web development, OOP
        Design, Game Development, Android App Development, Machine Learning,
        working with IoT systems and API endpoint development.
      </p>
      <p>
        From getting a perfect 100 score in CS in secondary certification to
        developing a diverse portfolio of personal and collaborative tech
        projects-ranging from full-stack web apps to mobile apps for smart
        telemetry and tracking.
      </p>
      <p>
        Demonstrates strong communication and leadership skills, cultivated
        through roles such as Head Boy in high school and further honed through
        industry internships and university-based team projects. Experienced in
        Agile and Waterfall workflows, including cross-functional collaboration,
        stakeholder communication, and documentation.
      </p>
      <p>
        Currently seeking opportunities to gain deeper industry exposure; eager
        to contribute to innovative teams while strengthening skills in scalable
        systems and end-to-end software development.
      </p>
    </section>

    <section className="links-section">
      <h2>Connect with Me</h2>
      <div className="links-grid">
        <a
          href="https://www.linkedin.com/in/arnav-singh-sethi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/ArnavSingh04"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub /> GitHub
        </a>
        <a href="mailto:arnavsingh.sethi@gmail.com" className="social-link">
          <FaEnvelope /> arnavsingh.sethi@gmail.com
        </a>
      </div>
    </section>
  </main>
);
