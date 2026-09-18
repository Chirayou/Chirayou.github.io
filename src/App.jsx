import React, { useState, useEffect } from 'react';
import {
  Brain,
  Activity,
  Mail,
  Sun,
  Moon,
  Copy,
  Check,
  Sparkles,
  Database,
  GraduationCap
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activePage, setActivePage] = useState('home');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('chirayoubista@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const researchAreas = [
    {
      icon: <Brain style={{ width: 22, height: 22 }} />,
      title: 'Biosignal Processing',
      description: 'Applying deep learning models to physiological signals including ECG, EEG, and wearable sensors.'
    },
    {
      icon: <Activity style={{ width: 22, height: 22 }} />,
      title: 'Clinical AI & EHR',
      description: 'Predictive modeling on electronic health records for patient outcome forecasting and risk stratification.'
    },
    {
      icon: <Database style={{ width: 22, height: 22 }} />,
      title: 'Multimodal Health AI',
      description: 'Integrating structured clinical data, medical text, and biometric sensor streams.'
    }
  ];

  const educationList = [
    {
      institution: 'North Dakota State University',
      degree: 'M.S. in Computer Science',
      period: '2026 – Present',
      details: 'Specialization in Machine Learning for Digital Healthcare'
    },
    {
      institution: 'Jain University, Bangalore, India',
      degree: 'B.Tech. in Information Science and Engineering',
      period: 'Grad. June 2024',
      grade: 'CGPA: 8.5 / 10'
    },
    {
      institution: 'St. Thomas Secondary School, Nepal',
      degree: '12th Grade – NEB Plus Two',
      period: 'Grad. July 2020',
      grade: 'CGPA: 3.45 / 4'
    }
  ];

  const renderEducationSection = (showHeaderIcon = true) => (
    <section id="education" className="section">
      <div className="section-header">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {showHeaderIcon && <GraduationCap style={{ width: 24, height: 24, color: 'var(--accent-cyan)' }} />}
          Education
        </h2>
        {activePage === 'education' && (
          <p className="section-subtitle">Academic degrees and educational qualifications.</p>
        )}
      </div>

      <div className="education-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {educationList.map((edu, idx) => (
          <div key={idx} className="info-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{edu.institution}</h3>
                <p className="info-sub" style={{ fontSize: '0.95rem', marginTop: '0.2rem' }}>{edu.degree}</p>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{edu.period}</span>
            </div>
            {edu.grade && (
              <p className="info-text" style={{ fontWeight: 500, color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                {edu.grade}
              </p>
            )}
            {edu.details && (
              <p className="info-text" style={{ marginTop: '0.4rem' }}>
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="content-wrapper nav-content">
          <div className="brand-logo-text" onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
            Chirayou Bista
          </div>

          <div className="nav-actions">
            <button 
              onClick={() => setActivePage('home')} 
              className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Home
            </button>
            <button 
              onClick={() => setActivePage('education')} 
              className={`nav-link ${activePage === 'education' ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Education
            </button>
            <button className="icon-btn" onClick={toggleTheme} title="Toggle Dark/Light Mode">
              {theme === 'dark' ? <Sun style={{ width: 16, height: 16 }} /> : <Moon style={{ width: 16, height: 16 }} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main View Container */}
      <main className="content-wrapper" style={{ flex: 1 }}>
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="hero-simple">
              <div className="hero-text">
                <h1 className="hero-title">Chirayou Bista</h1>
                <p className="hero-lead">
                  Master’s Student in Computer Science specializing in <strong>Machine Learning</strong> with a focus on <strong>Digital Healthcare</strong> applications.
                </p>

                <div className="tags-row">
                  <span className="tag-badge"><Brain style={{ width: 13, height: 13 }} /> Machine Learning</span>
                  <span className="tag-badge"><Activity style={{ width: 13, height: 13 }} /> Digital Healthcare</span>
                  <span className="tag-badge"><Sparkles style={{ width: 13, height: 13 }} /> Biosignal AI</span>
                  <span className="tag-badge"><Database style={{ width: 13, height: 13 }} /> EHR Analytics</span>
                </div>

                <div className="cta-row">
                  <button onClick={copyEmail} className="btn-primary">
                    {copiedEmail ? <Check style={{ width: 16, height: 16 }} /> : <Mail style={{ width: 16, height: 16 }} />}
                    {copiedEmail ? 'Email Copied!' : 'Contact via Email'}
                  </button>
                  <a href="https://github.com/Chirayou" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <GithubIcon style={{ width: 16, height: 16 }} /> GitHub Profile
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <LinkedinIcon style={{ width: 16, height: 16 }} /> LinkedIn
                  </a>
                </div>
              </div>
            </section>

            {/* Research Focus Overview */}
            <section className="section">
              <div className="section-header">
                <h2 className="section-title">Research Focus</h2>
                <p className="section-subtitle">
                  Leveraging machine learning algorithms to solve core challenges in biomedical computing and healthcare systems.
                </p>
              </div>

              <div className="grid-3">
                {researchAreas.map((area, idx) => (
                  <div key={idx} className="card-simple">
                    <div className="card-icon">{area.icon}</div>
                    <h3 className="card-title">{area.title}</h3>
                    <p className="card-desc">{area.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section (Also visible on Home) */}
            {renderEducationSection(true)}

            {/* Contact Footer Banner */}
            <section className="contact-banner">
              <h2>Connect & Collaborate</h2>
              <p>Interested in machine learning research or healthcare AI projects? Feel free to reach out.</p>
              <button onClick={copyEmail} className="btn-primary" style={{ marginTop: '0.5rem' }}>
                {copiedEmail ? <Check style={{ width: 16, height: 16 }} /> : <Copy style={{ width: 16, height: 16 }} />}
                {copiedEmail ? 'Email Copied!' : 'chirayoubista@gmail.com'}
              </button>
            </section>
          </>
        )}

        {activePage === 'education' && (
          <div style={{ paddingTop: '2rem' }}>
            {renderEducationSection(true)}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="content-wrapper">
          <p>© {new Date().getFullYear()} Chirayou Bista • Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
