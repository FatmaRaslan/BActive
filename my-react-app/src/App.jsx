import { useState } from 'react'
import './App.css'

const logoUrl = 'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fbe7a7c657d8c47f58aeb881dbdb975c7?format=webp&width=800&height=1200'
const whatsappUrl = 'https://wa.me/201201763362'

const providedPhotos = [
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F24329520220d4ab3a88097edebeba3d2?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fe2c1cbe7e9384296b1f694034289661f?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fdcf0cf6f948046f3b872c63e324b0ff7?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fc64bbdff406344bab82dba5780991b0b?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F26cb189c6d5f444590b5180aa9d5d1e9?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fb82f9debc3034b10b4632b9977fd97c8?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F4590448ac0574b15bd92e730551e1248?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fd50c25cc3b6f49008f838de8b46f190b?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F457296742ce84a8e8542cf7dce7c7cfc?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Ffd972dd82c634f5c98b98b97e3cb5b24?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F0e327558baae48f28af0f9dba1b76db9?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fd32bef18163b4a938c6dc302e6b868e5?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fdd7bd61c40444ddc8353b0639b295e7f?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fec414e448a8b4cb792dfa13b4638f927?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fac16fd1ca2c0478cb4c84c4526fc4817?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Ff16f2cf698be4528b30b47672a4e3b57?format=webp&width=800&height=1200',
  'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fab357d1ced4d45f4975d3a39968b19eb?format=webp&width=800&height=1200',
]

const workspaces = [
  {
    title: 'Office B',
    type: 'Private furnished office',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F70c0d654732c4541b6cfba28909409b9?format=webp&width=800&height=1200',
    details: ['Accommodates 1 person', 'Sidi Gaber branch'],
    prices: [{ label: 'Monthly', value: '6,000 EGP', previous: '6,500 EGP' }],
    offer: 'Limited-time offer',
  },
  {
    title: 'Office C',
    type: 'Private furnished office',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F04e1f685d0d14ae0a7efa046684dd4ba?format=webp&width=800&height=1200',
    details: ['Air conditioned', 'Has a window', 'Accommodates up to 2 people'],
    prices: [{ label: 'Monthly', value: '6,500 EGP' }],
  },
  {
    title: 'Office D',
    type: 'Private furnished office',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F638cb15bb3c94519b90087806c224a95?format=webp&width=800&height=1200',
    details: ['Air conditioned', 'Has a window', 'Accommodates up to 4 people', 'Sidi Gaber branch'],
    prices: [{ label: 'Monthly offer', value: '7,500 EGP', previous: '8,500 EGP' }],
    offer: 'Limited-time offer',
  },
  {
    title: 'Office E',
    type: 'Private furnished office',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F1961ca88a4d449e581d4bb8d48e2f3c0?format=webp&width=800&height=1200',
    details: ['Air conditioned', 'Accommodates up to 5 people', 'Sidi Gaber branch'],
    prices: [{ label: 'Monthly offer', value: '8,500 EGP', previous: '9,500 EGP' }],
    offer: 'Summer offer / limited-time offer',
  },
  {
    title: 'Office F',
    type: 'Private furnished office',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Ffbed853288a1489cabd9e3bd1eb3351d?format=webp&width=800&height=1200',
    details: ['Air conditioned', 'Accommodates up to 5 people', 'Sidi Gaber branch'],
    prices: [{ label: 'Monthly offer', value: '8,500 EGP', previous: '9,500 EGP' }],
    offer: 'Summer offer / limited-time offer',
  },
  {
    title: 'Hourly / Daily Office',
    type: 'Private air-conditioned office',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2Fd21bcc0f2c044f1f8e36def04bd9a96c?format=webp&width=800&height=1200',
    details: ['Accommodates up to 4 people'],
    prices: [
      { label: 'Hourly', value: '200 EGP / hour' },
      { label: 'Daily', value: '750 EGP / day' },
    ],
  },
]

const benefits = [
  ['✦', 'Ready to Work', 'Walk in and start immediately. Every workspace is fully furnished and set up — no delays.'],
  ['◊', 'Professional Environment', 'Clean, quiet, well-maintained. Make the right impression on yourself and your clients.'],
  ['▤', 'Flexible Options', 'Hourly, daily, or monthly — choose what works today and grow at your own pace.'],
  ['▦', 'Fully Equipped', 'High-speed internet, air conditioning, utilities and cleaning — all included.'],
  ['◎', 'Prime Alexandria Locations', 'Two conveniently located branches in Alexandria — accessible and easy to reach.'],
  ['□', 'Focus on Your Business', 'We handle the office. You handle the work. No management headaches.'],
]

const locations = [
  {
    name: 'B Active – Sidi Gaber',
    shortName: 'Sidi Gaber',
    image: providedPhotos[8],
    address: '322 El Horreya Road (Abou Qir Street), Sidi Gaber, Alexandria, Egypt.',
    directions: ['Opposite Sami Semaan Car Showroom & Suzuki Cars Dealership', 'White Building / Cafe White', 'Entrance B — the entrance on the left', '3rd Floor — Apartment 8'],
    gallery: providedPhotos.slice(8, 17),
  },
  {
    name: 'B Active – Rushdy',
    shortName: 'Rushdy',
    image: providedPhotos[0],
    address: '456–458 Abou Qir Street, Rushdy, Alexandria, Egypt.',
    directions: ['Saraya Rushdy Building', 'Next to Andalusia Hospital', 'Opposite Hossam Clothing Store', '12th Floor'],
    gallery: providedPhotos.slice(0, 8),
  },
]

function BrandMark({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="B Active home">
      {light ? <><span className="brand-b">B</span><span>Active</span><small>OFFICE SPACE</small></> : <span className="brand-logo-crop"><img className="brand-logo" src={logoUrl} alt="B Active Office Space" /></span>}
    </a>
  )
}

function Arrow() {
  return <span aria-hidden="true">→</span>
}

function Button({ children, variant = 'primary', href = '#contact', onClick, className = '', target, rel }) {
  return (
    <a className={`button button-${variant} ${className}`} href={href} onClick={onClick} target={target} rel={rel}>
      {children} <Arrow />
    </a>
  )
}

function Photo({ src, alt, className = '', position = 'center' }) {
  return <img className={`photo ${className}`} src={src} alt={alt} style={{ objectPosition: position }} />
}

function SectionIntro({ eyebrow, title, children, dark = false }) {
  return (
    <div className={`section-intro ${dark ? 'section-intro-dark' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {children && <p className="intro-copy">{children}</p>}
    </div>
  )
}

function Header({ menuOpen, setMenuOpen }) {
  const links = [
    ['About', '#about'],
    ['Workspaces', '#workspaces'],
    ['Services', '#services'],
    ['Locations', '#locations'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <Button className="mobile-nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a Visit</Button>
        </nav>
        <Button className="header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a Visit</Button>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Photo src="https://cdn.builder.io/api/v1/image/assets%2F59d6c340c3c447589072b47b1fe6a83f%2F3551a0c1f2a045cb891dc443907dc8b9?format=webp&width=800&height=1200" alt="B Active professional workspace" className="hero-image" position="center center" />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="hero-pill"><span /> Flexible · Professional · Ready for you</p>
        <h1>Your Space to<br /><em>Work, Focus</em><br />&amp; Grow.</h1>
        <p className="hero-copy">Professional workspaces and private offices designed for freelancers, startups, teams and businesses in Alexandria.</p>
        <div className="hero-actions">
          <Button variant="white" href="#workspaces">Explore Workspaces</Button>
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a Visit</Button>
        </div>
      </div>
      <div className="stats-bar container">
        <div><strong>2</strong><span>Locations in Alexandria</span></div>
        <div><strong>100%</strong><span>Ready to Use</span></div>
        <div><strong>Day 1</strong><span>Move In Immediately</span></div>
      </div>
    </section>
  )
}

function About() {
  const bullets = ['Ready-to-use offices — move in immediately', 'High-speed internet included', 'Air conditioning & climate control', 'Daily cleaning & maintenance', 'All utilities included (monthly offices)', 'Professional, productive environment']
  return (
    <section className="about section" id="about">
      <div className="about-grid container">
        <div className="about-media">
          <Photo src={providedPhotos[2]} alt="Furnished B Active office" position="left center" />
          <div className="about-thumb"><Photo src={providedPhotos[3]} alt="B Active meeting room" position="center" /></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">About B Active</p>
          <h2>More Than<br /><em>Just an Office.</em></h2>
          <p>B Active provides ready-to-use professional workspaces and private offices in Alexandria, Egypt. We handle everything — so you can focus entirely on your work, your clients, and your growth.</p>
          <p>Whether you’re a freelancer who needs a quiet space to focus, a startup ready for its first office, or a growing team needing flexible room to expand — B Active is built for you.</p>
          <ul className="check-list">
            {bullets.map((bullet) => <li key={bullet}><span>✓</span>{bullet}</li>)}
          </ul>
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a Visit</Button>
        </div>
      </div>
    </section>
  )
}

function Workspaces() {
  return (
    <section className="workspaces section" id="workspaces">
      <div className="container">
        <SectionIntro eyebrow="B Active – Sidi Gaber" title="OFFICES" />
        <div className="workspace-grid">
          {workspaces.map((workspace) => (
            <article className="workspace-card" key={workspace.title}>
              <div className="workspace-image-wrap">
                <Photo src={workspace.image} alt={`${workspace.title} at B Active Sidi Gaber`} position="center top" />
                {workspace.offer && <span className="card-label">{workspace.offer}</span>}
              </div>
              <div className="workspace-card-body">
                <h3>{workspace.title}</h3>
                <p className="office-type">{workspace.type}</p>
                <ul className="office-details">
                  {workspace.details.map((detail) => <li key={detail}><span>✓</span>{detail}</li>)}
                </ul>
                <div className="office-pricing">
                  {workspace.prices.map((price) => (
                    <div className="office-price-row" key={price.label}>
                      <span>{price.label}</span>
                      <strong>{price.value}</strong>
                      {price.previous && <small>Previous price <s>{price.previous}</s></small>}
                    </div>
                  ))}
                </div>
                <div className="card-footer office-card-footer">
                  <span>{workspace.offer || workspace.type}</span>
                  <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book an Office</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionIntro dark eyebrow="Why B Active" title="Everything Your Business<br /><em>Needs in One Place.</em>">We built B Active so you never have to think about your workspace again.</SectionIntro>
        <div className="benefit-grid">
          {benefits.map(([icon, title, copy]) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience section">
      <div className="experience-grid container">
        <div><p className="eyebrow">The Experience</p><h2>Work Better.<br /><em>Feel Better.</em></h2></div>
        <div className="experience-copy"><p>Your environment shapes your output. At B Active, every detail is considered — ergonomic furniture, clean professional spaces, and a productive atmosphere that helps you stay in flow for longer.</p><p>Whether you need absolute silence for deep work or a professional setting for client meetings — we have the right atmosphere for you.</p></div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="gallery section" aria-label="B Active workspace gallery">
      <div className="gallery-grid container">
        <div className="gallery-large"><Photo src={providedPhotos[6]} alt="B Active workspace" position="center top" /></div>
        <div className="gallery-tall"><Photo src={providedPhotos[7]} alt="B Active private office" position="center top" /></div>
        <div><Photo src={providedPhotos[8]} alt="B Active workspace detail" position="center" /></div>
        <div><Photo src={providedPhotos[9]} alt="B Active office interior" position="center" /></div>
        <div className="gallery-message"><span className="benefit-icon">✦</span><strong>Work. Focus. Grow.</strong><small>Alexandria, Egypt</small></div>
      </div>
    </section>
  )
}

function LocationCard({ location, onNotice }) {
  return (
    <article className="location-card">
      <div className="location-photo">
        <Photo src={location.image} alt={location.name} position="center top" />
        <div className="location-title"><span>⌖ Alexandria, Egypt</span><strong>{location.name}</strong></div>
      </div>
      <div className="map-strip"><span className="map-pin">●</span><small>B Active</small><button type="button" onClick={() => onNotice('Directions are available by contacting the B Active team.')}>Open in Maps ↗</button></div>
      <div className="location-details">
        <div className="detail-block"><h4>⌖ <span>Address</span></h4><p>{location.address}</p></div>
        <div className="detail-block"><h4>⌂ <span>How to Find Us</span></h4><ul>{location.directions.map((direction) => <li key={direction}>{direction}</li>)}</ul></div>
        <div className="branch-photos"><div className="detail-heading"><h4>▱ <span>Branch Photos</span></h4><small>{location.gallery.length} photos</small></div><div className="photo-grid">{location.gallery.map((photo, photoIndex) => <Photo key={photo} src={photo} alt={`${location.shortName} workspace ${photoIndex + 1}`} position="center" />)}</div></div>
        <div className="location-actions"><button type="button" className="button button-outline" onClick={() => onNotice('Directions are available by contacting the B Active team.')}>⌁ &nbsp; Get Directions</button><Button href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contact Us</Button></div>
      </div>
    </article>
  )
}

function Locations({ onNotice }) {
  return (
    <section className="locations section" id="locations">
      <div className="container">
        <SectionIntro eyebrow="Our Locations" title="Find Your <em>B Active</em>">Two convenient locations in Alexandria, designed to give you the right space to work, focus and grow.</SectionIntro>
        <div className="locations-grid">{locations.map((location) => <LocationCard key={location.name} location={location} onNotice={onNotice} />)}</div>
        <p className="location-note">Not sure which location suits you best? <a href="#contact">Book a visit</a> and we’ll help you choose.</p>
      </div>
    </section>
  )
}

function Testimonials() {
  const people = [['A.M.', 'Ahmed M.', 'Freelance Designer'], ['S.K.', 'Sara K.', 'Startup Founder'], ['O.R.', 'Omar R.', 'Remote Worker']]
  return (
    <section className="testimonials section">
      <div className="container">
        <SectionIntro eyebrow="Testimonials" title="Trusted by People Who<br /><em>Get Work Done.</em>"><span className="placeholder-note">△ Placeholder content — to be replaced with verified customer reviews.</span></SectionIntro>
        <div className="testimonial-grid">{people.map(([initials, name, role]) => <article className="testimonial" key={name}><div className="stars">★★★★★</div><p>“Placeholder — replace with a real verified customer review.”</p><div className="person"><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></div></article>)}</div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta section" id="contact">
      <div className="container">
        <p className="eyebrow">Ready to Start?</p>
        <h2>Ready for Your Next<br /><em>Workspace?</em></h2>
        <p>Tell us what you need, and we’ll help you find the right workspace in Alexandria.</p>
        <div className="cta-actions"><Button variant="white" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a Visit</Button><Button variant="ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contact Us</Button></div>
        <div className="cta-meta"><span>⌖ Sidi Gaber &amp; Rushdy, Alexandria</span><span>◷ Saturday – Thursday, 9 AM – 9 PM</span></div>
        <a className="cta-phone" href="tel:01201763362">01201763362</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div><BrandMark light /><p>Professional workspaces and private offices in Alexandria, Egypt. Everything your business needs in one place.</p><small>Alexandria, Egypt</small></div>
        <div><h4>Quick Links</h4><a href="#workspaces">Workspaces</a><a href="#services">Services</a><a href="#locations">Locations</a><a href="#contact">Contact</a></div>
        <div><h4>Follow B Active</h4><div className="socials"><a href="https://www.instagram.com/b.activeofficespace?stkn=MXhreXl4d2d3aGk2Nw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a><a href="https://www.linkedin.com/company/b-active-office-space/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a><a href="https://www.facebook.com/share/1EQKBkkA8M/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a></div><h5>Our Locations</h5><small>Sidi Gaber — 322 El Horreya Road<br />Rushdy — 456–458 Abou Qir Street</small></div>
      </div>
      <div className="footer-bottom container"><span>© 2024 B Active Office Space. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
    </footer>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 3600)
  }

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Workspaces />
        <Services />
        <Experience />
        <Gallery />
        <Locations onNotice={showNotice} />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      {notice && <div className="notice" role="status">{notice}</div>}
    </div>
  )
}

export default App
