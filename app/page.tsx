import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <motion.main className="site-shell" initial="hidden" animate="visible" variants={stagger}>
      <motion.section className="hero" variants={fadeUp} transition={{ duration: 0.8, ease: 'easeOut' }}>
        <motion.div className="hero-copy" variants={fadeUp}>
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
          <motion.div className="stats-grid" variants={stagger}>
            <motion.div variants={card}>
              <span>15+</span>
              <p>Years experience</p>
            </motion.div>
            <motion.div variants={card}>
              <span>3</span>
              <p>Executive roles</p>
            </motion.div>
            <motion.div variants={card}>
              <span>20+</span>
              <p>Growth initiatives</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={fadeUp} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <motion.div className="media-shell" whileHover={{ y: -6 }}>
            <motion.img
              src="/images/image-1.jpg"
              alt="Dimas Prasetyo leadership"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <div className="media-caption">
              <p>Digital leadership for product, operations, and enterprise impact.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="section features" variants={fadeUp} transition={{ duration: 0.8 }}>
        <div className="section-intro">
          <p className="section-label">Capabilities</p>
          <h2>Leadership grounded in strategy, teams, and execution.</h2>
        </div>
        <motion.div className="feature-grid" variants={stagger}>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Strategic direction</h3>
            <p>Align technology with business goals through clear roadmaps and measurable outcomes.</p>
          </motion.article>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Team growth</h3>
            <p>Develop high-performing engineering organizations with strong culture and accountability.</p>
          </motion.article>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Product delivery</h3>
            <p>Turn complex initiatives into scalable digital products with speed and quality.</p>
          </motion.article>
        </motion.div>
      </motion.section>

      <motion.section className="section selected" id="selected-work" variants={fadeUp} transition={{ duration: 0.8 }}>
        <div className="section-label">Selected work</div>
        <motion.div className="project-grid" variants={stagger}>
          <motion.article className="project-card" variants={card} whileHover={{ y: -4 }}>
            <motion.img src="/images/image-2.jpg" alt="PadiUMKM leadership" />
            <div className="project-copy">
              <span className="badge">2025</span>
              <h3>CTO, PadiUMKM</h3>
              <p>Leading platform strategy for Indonesia’s UMKM ecosystem.</p>
            </div>
          </motion.article>
          <motion.article className="project-card" variants={card} whileHover={{ y: -4 }}>
            <motion.img src="/images/image-3.jpg" alt="Campaign.com leadership" />
            <div className="project-copy">
              <span className="badge">2015</span>
              <h3>CTO, Campaign.com</h3>
              <p>Built and scaled digital campaign technologies across the region.</p>
            </div>
          </motion.article>
          <motion.article className="project-card" variants={card} whileHover={{ y: -4 }}>
            <motion.img src="/images/image-4.jpg" alt="Kalbe leadership" />
            <div className="project-copy">
              <span className="badge">Enterprise</span>
              <h3>VP IT CRM, Kalbe</h3>
              <p>Oversaw CRM and engagement systems for a leading pharmaceutical group.</p>
            </div>
          </motion.article>
        </motion.div>
      </motion.section>

      <motion.section className="section contact" variants={fadeUp} transition={{ duration: 0.8 }}>
        <motion.div className="section-copy" variants={card}>
          <p className="section-label">Contact</p>
          <h2>Ready to shape tech, product, and people?</h2>
          <p>Let's connect on leadership, transformation, or digital strategy.</p>
          <a className="button button-primary" href="mailto:dimasboim@gmail.com">dimasboim@gmail.com</a>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
