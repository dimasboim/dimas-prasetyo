export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Senior Technology Leader</p>
          <h1>Hi, I'm Dimas — a senior tech leader from Jakarta.</h1>
          <p className="intro">
            I help teams build digital platforms, scale engineering organizations, and
            execute technology transformations with strong business outcomes.
          </p>
          <div className="hero-actions">
            <a className="button" href="mailto:dimasboim@gmail.com">Contact me</a>
            <a className="button button-secondary" href="#selected-work">View work</a>
          </div>
          <div className="stats-grid">
            <div>
              <span>15+</span>
              <p>Years experience</p>
            </div>
            <div>
              <span>3</span>
              <p>Executive roles</p>
            </div>
            <div>
              <span>20+</span>
              <p>Growth initiatives</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="media-shell">
            <img src="/images/image-1.jpg" alt="Dimas Prasetyo leadership" />
            <div className="media-caption">
              <p>Digital leadership for product, operations, and enterprise impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="section-intro">
          <p className="section-label">Capabilities</p>
          <h2>Leadership grounded in strategy, teams, and execution.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Strategic direction</h3>
            <p>Align technology with business goals through clear roadmaps and measurable outcomes.</p>
          </article>
          <article className="feature-card">
            <h3>Team growth</h3>
            <p>Develop high-performing engineering organizations with strong culture and accountability.</p>
          </article>
          <article className="feature-card">
            <h3>Product delivery</h3>
            <p>Turn complex initiatives into scalable digital products with speed and quality.</p>
          </article>
        </div>
      </section>

      <section className="section selected" id="selected-work">
        <div className="section-label">Selected work</div>
        <div className="project-grid">
          <article className="project-card">
            <img src="/images/image-2.jpg" alt="PadiUMKM leadership" />
            <div className="project-copy">
              <span className="badge">2025</span>
              <h3>CTO, PadiUMKM</h3>
              <p>Leading platform strategy for Indonesia’s UMKM ecosystem.</p>
            </div>
          </article>
          <article className="project-card">
            <img src="/images/image-3.jpg" alt="Campaign.com leadership" />
            <div className="project-copy">
              <span className="badge">2015</span>
              <h3>CTO, Campaign.com</h3>
              <p>Built and scaled digital campaign technologies across the region.</p>
            </div>
          </article>
          <article className="project-card">
            <img src="/images/image-4.jpg" alt="Kalbe leadership" />
            <div className="project-copy">
              <span className="badge">Enterprise</span>
              <h3>VP IT CRM, Kalbe</h3>
              <p>Oversaw CRM and engagement systems for a leading pharmaceutical group.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section contact">
        <div className="section-copy">
          <p className="section-label">Contact</p>
          <h2>Ready to shape tech, product, and people?</h2>
          <p>Let's connect on leadership, transformation, or digital strategy.</p>
          <a className="button button-primary" href="mailto:dimasboim@gmail.com">dimasboim@gmail.com</a>
        </div>
      </section>
    </main>
  );
}
