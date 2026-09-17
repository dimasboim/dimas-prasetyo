'use client';

import React from 'react';
import { motion, easeOut, easeInOut } from 'framer-motion';
import { skillGroups } from './skills';
import {
  Briefcase, Building2, GraduationCap, Mail, ArrowRight, Cpu,
  ClipboardList, Users, Terminal, Camera, Link, ChevronDown,
} from 'lucide-react';
import CountUp from './components/CountUp';
import Carousel from './components/Carousel';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const skillIcon = (title: string) => {
  if (title === 'Leadership') return <Users size={18} />;
  if (title === 'Delivery') return <ClipboardList size={18} />;
  if (title === 'Architecture & Platform') return <Cpu size={18} />;
  return <Terminal size={18} />;
};

const experience = [
  {
    period: 'Dec 2022 – Present',
    role: 'Chief Technology Officer',
    org: 'PadiUMKM — PT Telkom Indonesia (Tribe SMB), Jakarta',
    desc: 'Progressed from Head of Engineering (2022–2023) to VP Engineering (2024) to CTO in three years. Accountable for the full engineering organization, architecture, delivery, security, and technology roadmap of Telkom’s B2B marketplace serving Indonesian MSMEs and state-enterprise procurement. Leads the applied-AI agenda (LLM → SQL → BigQuery conversational analytics), zero-downtime microservices modernization, and information security governance.',
  },
  {
    period: 'Nov 2022 – Dec 2022',
    role: 'Vice President of IT',
    org: 'PT Eden Pangan Indonesia (Edenfarm), Jakarta',
    desc: 'Led the IT and engineering function of a B2B agritech supply-chain platform, covering team management, systems ownership, and technology planning during a leadership transition.',
  },
  {
    period: 'Nov 2021 – Nov 2022',
    role: 'Head of IT & Product',
    org: 'PT Cakra Radha Mustika — Kalbe Group, Jakarta',
    desc: 'Set technology strategy for the distribution arm of one of Southeast Asia’s largest pharmaceutical groups. Led both IT engineering and product management teams, and managed vendor selection, budget, and enterprise integration.',
  },
  {
    period: 'Sep 2020 – Nov 2021',
    role: 'Head of IT — Klik Dokter & Hallobumil',
    org: 'PT Medika Komunika Teknologi — Kalbe Group, Jakarta',
    desc: 'Owned technology strategy and delivery for two consumer healthtech platforms through the peak of pandemic-driven digital health demand. Rebuilt infrastructure and systems foundations for scale and availability.',
  },
  {
    period: '2016 – Sep 2020',
    role: 'Chief Technology Officer, Campaign.com',
    org: 'PT Uni Tokopo Teknologi, Jakarta',
    desc: 'Defined and executed technology strategy for a regional digital campaign platform. Built and led the full technology team across web, mobile, and backend, and partnered directly with the CEO on product and go-to-market technology enablement.',
  },
  {
    period: '2011 – 2016',
    role: 'Project Leader, Tokopo.com · Country Head Indonesia, Campaign.com',
    org: 'PT Uni Tokopo Teknologi & Pratu Pte Ltd, Jakarta / Singapore',
    desc: 'Led development of web and mobile products and ran IT project management for a Singapore-headquartered venture, then took country-level accountability for Indonesia as the delivery bridge to regional headquarters.',
  },
];

const highlights = [
  {
    title: 'Head of Engineering → VP → CTO',
    desc: 'Promoted through three roles in three years at PadiUMKM, now accountable for engineering, architecture, information security, and platform strategy of a national MSME marketplace inside Indonesia’s largest telecommunications group.',
  },
  {
    title: 'Applied AI in daily operations',
    desc: 'Embedded a natural-language-to-SQL assistant over BigQuery that lets non-technical commercial stakeholders self-serve GMV and revenue analysis, plus automated classification and triage of inbound bug reports.',
  },
  {
    title: 'End-to-end QA transformation',
    desc: 'Led contract-first API development, a shared engineering process commitment across squads, and a TypeScript/Playwright automation stack for a live microservices marketplace, cutting production defect escape rate.',
  },
  {
    title: 'Reliability & security posture',
    desc: 'Raised platform resilience through zero-downtime deployment patterns for NestJS microservices, centralized secret and certificate management with HashiCorp Vault, transport-security hardening, and CCU-to-DAU capacity planning.',
  },
  {
    title: 'Incident command & post-mortems',
    desc: 'Acted as incident commander for severity-level production incidents, then institutionalized the response with a severity classification framework, structured 5-Whys post-mortems, and enforced corrective-action follow-through.',
  },
  {
    title: 'Two mandates at Kalbe Group',
    desc: 'Held two consecutive leadership mandates — Head of IT for Klik Dokter and Hallobumil, then Head of IT & Product at Cakra Radha Mustika — covering regulated healthtech platforms and nationwide pharmaceutical distribution.',
  },
];

export default function HomePage() {
  return (
    <motion.main className="site-shell" initial="hidden" animate="visible" variants={stagger}>
      {/* Hero Section */}
      <motion.section className="hero" variants={fadeUp}>
        <motion.div className="hero-copy" variants={stagger}>
          <motion.p className="eyebrow" variants={card}>
            Chief Technology Officer · VP Engineering · Head of IT &amp; Product
          </motion.p>
          <motion.h1 variants={card}>
            Dimas Prasetyo Tegar Asmoro
          </motion.h1>
          <motion.p className="intro" variants={card}>
            Technology executive with two decades in software engineering and more than a decade
            leading technology and product functions at C-level. Currently CTO of PadiUMKM, PT Telkom
            Indonesia&rsquo;s national B2B marketplace for the MSME ecosystem — hands-on enough to review
            architecture and code, senior enough to own budget, vendor strategy, org design, and the
            board conversation.
          </motion.p>
          <motion.div className="hero-actions" variants={stagger}>
            <motion.a className="button" href="mailto:dimasboim@gmail.com" variants={card} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Mail size={18} strokeWidth={2.5} />
              Contact me
            </motion.a>
            <motion.a className="button button-secondary" href="#experience" variants={card} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              View experience
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.a>
            <motion.a className="button button-secondary" href="/cv" variants={card} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              View CV
            </motion.a>
            <motion.a className="button button-secondary" href="https://www.linkedin.com/in/dimasprasetyotegar" variants={card} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} target="_blank" rel="noopener noreferrer">
              <Link size={16} /> LinkedIn
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div className="stats-grid" variants={stagger}>
            <motion.div className="stat-card" variants={card} whileHover={{ y: -4 }}>
              <div className="stat-icon">
                <Briefcase size={26} strokeWidth={2} />
              </div>
              <span className="stat-number"><CountUp to={20} suffix="+" /></span>
              <p className="stat-label">Years in software engineering</p>
            </motion.div>
            <motion.div className="stat-card" variants={card} whileHover={{ y: -4 }}>
              <div className="stat-icon">
                <Building2 size={26} strokeWidth={2} />
              </div>
              <span className="stat-number"><CountUp to={6} /></span>
              <p className="stat-label">C-level & Head mandates held</p>
            </motion.div>
            <motion.div className="stat-card" variants={card} whileHover={{ y: -4 }}>
              <div className="stat-icon">
                <GraduationCap size={26} strokeWidth={2} />
              </div>
              <span className="stat-number"><CountUp to={19} suffix="+" /></span>
              <p className="stat-label">Years lecturing computer science</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div className="hero-visual" variants={fadeUp} transition={{ duration: 1, ease: easeOut }}>
          <motion.div
            className="media-shell"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.img
              src="/images/image-1.jpg"
              alt="Dimas Prasetyo Tegar Asmoro"
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: easeInOut }}
            />
            <div className="media-caption">
              <p>Jakarta, Indonesia — technology leadership for platform, product, and people.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.a href="#signature" className="scroll-indicator" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} whileHover={{ y: -2 }}>
          <ChevronDown size={18} />
        </motion.a>
      </motion.section>

      {/* Leadership Signature */}
      <motion.section id="signature" className="section features" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <div className="section-intro">
          <p className="section-label">Leadership signature</p>
          <h2>Operator CTO with a track record of shipping, scaling, and transforming.</h2>
        </div>
        <motion.div className="feature-grid" variants={stagger}>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Strategy to impact</h3>
            <p>Translate commercial goals into a sequenced technology roadmap with explicit bets, boundaries, and measurable outcomes across product, platform, and data.</p>
          </motion.article>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Systems over heroes</h3>
            <p>Build standards, tooling, and platform foundations that make the right thing easy — so delivery velocity survives team changes.</p>
          </motion.article>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Scaling teams</h3>
            <p>Grow accountable, high-trust engineering organizations with real leadership pipelines, pragmatic process, and coaching that produces successors.</p>
          </motion.article>
        </motion.div>
      </motion.section>

      {/* Selected Career Highlights */}
      <motion.section className="section features" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <div className="section-intro">
          <p className="section-label">Selected career highlights</p>
          <h2>Ownership of the messy middle — legacy, delivery, reliability, and applied AI.</h2>
        </div>
        <motion.div className="feature-grid" variants={stagger}>
          {highlights.map((h) => (
            <motion.article key={h.title} className="feature-card" variants={card} whileHover={{ y: -4 }}>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* Career at a glance — Carousel */}
      <motion.section className="section selected" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <div className="section-intro">
          <p className="section-label">Career at a glance</p>
          <h2>Three chapters across telco, healthtech, and digital media.</h2>
        </div>
        <Carousel
          slides={[
            {
              image: '/images/image-2.jpg',
              badge: 'Dec 2022 – Present',
              title: 'CTO, PadiUMKM — PT Telkom Indonesia',
              description: 'Leading engineering, architecture, and platform strategy for Indonesia’s national MSME marketplace.',
            },
            {
              image: '/images/image-4.jpg',
              badge: '2020 – 2022',
              title: 'Head of IT & Product, Kalbe Group',
              description: 'Led technology for regulated healthtech platforms and nationwide pharmaceutical distribution.',
            },
            {
              image: '/images/image-3.jpg',
              badge: '2016 – 2020',
              title: 'CTO, Campaign.com',
              description: 'Built and scaled the engineering and mobile platform behind a regional digital campaign business.',
            },
          ]}
          autoPlayMs={5500}
          ariaLabel="Career at a glance"
        />
      </motion.section>

      {/* Professional Experience Timeline */}
      <motion.section id="experience" className="section features" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <div className="section-intro">
          <p className="section-label">Professional experience</p>
          <h2>Two decades of progressive technology leadership.</h2>
        </div>
        <motion.div className="timeline" variants={stagger}>
          {experience.map((e) => (
            <motion.div className="timeline-item" key={e.role} variants={card}>
              <div className="timeline-period">{e.period}</div>
              <div>
                <h3 className="timeline-role">{e.role}</h3>
                <p className="timeline-org">{e.org}</p>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="section features" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <div className="section-intro">
          <p className="section-label">Capabilities & technology</p>
          <h2>Leadership, delivery, architecture, and hands-on craft.</h2>
        </div>
        <motion.div className="skills-groups" variants={stagger}>
          {skillGroups.map((group) => (
            <motion.div key={group.title} className="skills-group" variants={card}>
              <div className="skills-heading-row">
                <div className="skills-heading-left">
                  <span className="skills-heading-icon">{skillIcon(group.title)}</span>
                  <h3 className="skills-heading">{group.title}</h3>
                </div>
                <span className="skills-count" aria-label={`${group.items.length} skills`}>
                  {group.items.length}
                </span>
              </div>
              <div className="skills-grid">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Academic & Advisory */}
      <motion.section className="section features" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <div className="section-intro">
          <p className="section-label">Academic & advisory</p>
          <h2>Teaching, advising, and mentoring alongside a full-time executive career.</h2>
        </div>
        <motion.div className="feature-grid" variants={stagger}>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Lecturer (Lektor), 2007 – present</h3>
            <p>ITB Swadharma (2007–2020) and STMIK Jayakarta (2021–present). Teaching software development and computer science to undergraduate cohorts.</p>
          </motion.article>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Advisory</h3>
            <p>Advisor to founders and operators from seed to Series B on product–market fit, first-generation platforms, and early engineering hiring; enterprise transformation guidance and technical due diligence for investors.</p>
          </motion.article>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>Speaking & mentoring</h3>
            <p>Talks on engineering leadership, platform building, and organizational design at Southeast Asian technology events; ongoing 1:1 mentoring of engineering managers and staff engineers.</p>
          </motion.article>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section className="section features" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <div className="section-intro">
          <p className="section-label">Education</p>
          <h2>Cum laude, Best Graduate — both degrees.</h2>
        </div>
        <motion.div className="feature-grid" variants={stagger}>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>M.Sc. Computer Science</h3>
            <p>Universitas Bunda Mulia, 2009–2012. Specialization in software development and e-commerce. Cum laude, GPA 3.73/4.00. Best Graduate, 2012.</p>
          </motion.article>
          <motion.article className="feature-card" variants={card} whileHover={{ y: -4 }}>
            <h3>B.Sc. Computer Science</h3>
            <p>STMIK Swadharma, 2003–2007. Specialization in software development. Cum laude, GPA 3.71/4.00. Best Graduate, 2007.</p>
          </motion.article>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="section contact" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="section-copy" variants={fadeUp}>
          <p className="section-label">Contact</p>
          <h2>Ready to shape technology, product, and people?</h2>
          <p>Let&rsquo;s connect on leadership, transformation, or digital strategy.</p>
          <motion.a
            className="button button-primary"
            href="mailto:dimasboim@gmail.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} strokeWidth={2.5} />
            dimasboim@gmail.com
          </motion.a>
          <motion.a
            className="button button-secondary"
            href="/cv/dimas-prasetyo-cv.pdf"
            download
            style={{ marginLeft: '0.75rem' }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
          </motion.a>
          <motion.div className="social-links" variants={stagger}>
            <a className="social-link" href="https://www.linkedin.com/in/dimasprasetyotegar" target="_blank" rel="noopener noreferrer">
              <Link size={16} /> in/dimasprasetyotegar
            </a>
            <a className="social-link" href="https://instagram.com/dimasboim" target="_blank" rel="noopener noreferrer">
              <Camera size={16} /> @dimasboim
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
