'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Leadership', href: '/#signature' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Publication', href: '/#publication' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner site-shell">
        <a href="/" className="site-header-brand" onClick={() => setOpen(false)}>
          <span className="site-header-badge">D</span>
          Dimas Prasetyo
        </a>

        <nav className="site-header-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a className="button button-secondary site-header-cv" href="/cv">CV</a>
          <button
            type="button"
            className="site-header-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="site-header-mobile-nav site-shell" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a href="/cv" onClick={() => setOpen(false)}>CV</a>
        </nav>
      )}
    </header>
  );
}
