import React from 'react';

export default function CVPage() {
  return (
    <main className="site-shell">
      <section className="section">
        <div className="section-intro">
          <p className="section-label">Resume / CV</p>
          <h2>Download and view CV</h2>
          <p className="intro">You can download the CV as PDF or view it inline below.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <a className="button" href="/cv/dimas-prasetyo-cv.pdf" download>
            Download CV (PDF)
          </a>
          <a className="button button-secondary" href="/cv/dimas-prasetyo-cv.pdf" target="_blank" rel="noopener noreferrer">
            Open in new tab
          </a>
        </div>
        <iframe
          src="/cv/dimas-prasetyo-cv.pdf"
          title="Dimas Prasetyo CV"
          style={{ width: '100%', height: '80vh', border: '1px solid var(--color-border)', borderRadius: '12px' }}
        />
      </section>
    </main>
  );
}
