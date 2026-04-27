export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Senior Technology Leader</p>
          <h1>Hi, I'm Dimas — a senior tech leader from Jakarta.</h1>
          <p className="intro">
            I build and lead technology teams that deliver digital products with strong
            business impact. My experience spans scaling engineering organizations, defining
            product strategy, and transforming enterprise systems for growth.
          </p>
          <div className="hero-actions">
            <a className="button" href="mailto:dimasboim@gmail.com">Get in touch</a>
            <a className="button button-secondary" href="#selected-work">Selected work</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <p className="hero-role">Current Role</p>
            <h2>CTO, PadiUMKM</h2>
            <p className="hero-date">2025</p>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="section-copy">
          <p className="section-label">About</p>
          <h2>Technology, leadership, and execution</h2>
          <p>
            I help organizations turn digital ambition into scalable reality. From corporate
            transformation to startup product execution, my focus is on people, process, and technology.
          </p>
        </div>
      </section>

      <section className="section roles">
        <div className="section-label">Selected work</div>
        <div id="selected-work" className="grid">
          <article className="card">
            <span className="badge">2025</span>
            <h3>CTO</h3>
            <p>PadiUMKM</p>
            <p>Leading platform strategy and delivering digital operations for Indonesia's growing UMKM ecosystem.</p>
          </article>
          <article className="card">
            <span className="badge">2015</span>
            <h3>CTO</h3>
            <p>Campaign.com</p>
            <p>Built and scaled marketing technology solutions for high-impact digital campaigns.</p>
          </article>
          <article className="card">
            <span className="badge">Enterprise</span>
            <h3>VP IT CRM</h3>
            <p>Kalbe</p>
            <p>Oversaw CRM and digital engagement systems for one of Indonesia’s leading pharmaceutical companies.</p>
          </article>
        </div>
      </section>

      <section className="section contact">
        <div className="section-copy">
          <p className="section-label">Contact</p>
          <h2>Let’s build with clarity and momentum.</h2>
          <p>Reach out to discuss leadership, technology strategy, or product execution.</p>
          <a className="button button-primary" href="mailto:dimasboim@gmail.com">dimasboim@gmail.com</a>
        </div>
      </section>
    </main>
  );
}
