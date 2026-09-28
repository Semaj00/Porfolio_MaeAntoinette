import './style.css'

const email = 'maeantoinetteelevazolibag08@gmail.com'
const emailLink = `mailto:${email}?subject=${encodeURIComponent('Virtual Assistant Inquiry')}&body=${encodeURIComponent('Hi Mae,\n\nI would like to learn more about your virtual assistant services.\n\nHere is a little about what I need:\n\nThank you!')}`

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Mae Antoinette home">
      <span class="brand-mark">M</span>
      <span>Mae Antoinette<br><small>Virtual Assistant</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span></button>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#about">About</a><a href="#services">Services</a><a href="#toolkit">Toolkit</a>
      <a class="nav-cta" href="#contact">Let's work together <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-grid">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span></span> Your calm behind-the-scenes partner</p>
        <h1>Making busy<br /><em>feel beautifully</em><br />organized.</h1>
        <p class="hero-intro">I’m Mae, a detail-driven virtual assistant helping growing brands stay visible, responsive, and a step ahead.</p>
        <div class="hero-actions"><a class="button button-dark" href="#contact">Start a conversation <span>↗</span></a><a class="text-link" href="#services">Explore my services <span>↓</span></a></div>
        <div class="hero-note"><span class="note-line"></span><span>Currently based in Tacurong City<br />Available for remote work</span></div>
      </div>
      <div class="hero-visual reveal">
        <div class="portrait-frame"><img src="/profile.jpg" alt="Mae Antoinette Libag in a black blazer" /><div class="portrait-label">MAE<br />ANTOINETTE<br /><span>LIBAG</span></div></div>
        <div class="orbit-word">ORGANIZED · PRESENT · READY ·</div>
        <div class="visual-stamp"><span>✦</span><strong>Let's make<br />space for<br /><i>growth.</i></strong></div>
      </div>
    </section>

    <section class="trust-band"><p>Helping you make room for what matters</p><div class="trust-items"><span>Social media</span><i>✦</i><span>Admin support</span><i>✦</i><span>Digital organization</span><i>✦</i><span>Content care</span></div></section>

    <section id="about" class="about section-grid section-pad">
      <div class="section-kicker reveal"><span>01</span><span class="kicker-rule"></span><span>About me</span></div>
      <div class="about-copy reveal"><h2>Good work starts with <em>good support.</em></h2><p>I’m a passionate and adaptable virtual assistant specializing in social media management. I bring a fast-learning mindset, thoughtful organization, and the focus needed to keep many moving parts on track.</p><p>From your inbox to your content calendar, I help create the consistency and breathing room your business needs to show up at its best.</p><a class="text-link coral-link" href="#contact">Tell me what you need <span>↗</span></a></div>
      <div class="about-facts reveal"><div><strong>01</strong><span>Thoughtful<br />communication</span></div><div><strong>02</strong><span>Fast-learning<br />mindset</span></div><div><strong>03</strong><span>Detail-led<br />delivery</span></div></div>
    </section>

    <section id="services" class="services section-pad">
      <div class="section-heading reveal"><div class="section-kicker"><span>02</span><span class="kicker-rule"></span><span>What I can do</span></div><h2>Support that keeps<br /><em>things moving.</em></h2></div>
      <div class="service-list">
        <article class="service-card reveal"><span class="service-number">01</span><div><h3>Inbox management</h3><p>Organize emails and handle replies so your inbox stays clear, useful, and under control.</p></div><span class="service-arrow">↗</span></article>
        <article class="service-card reveal"><span class="service-number">02</span><div><h3>Calendar management</h3><p>Book meetings, protect your focus time, and keep your daily schedule working for you.</p></div><span class="service-arrow">↗</span></article>
        <article class="service-card reveal"><span class="service-number">03</span><div><h3>Data entry & spreadsheets</h3><p>Handle records, reports, and data accurately so you can make decisions with confidence.</p></div><span class="service-arrow">↗</span></article>
        <article class="service-card reveal"><span class="service-number">04</span><div><h3>Social media support</h3><p>Plan content, write captions, create graphics, and nurture an engaged online community.</p></div><span class="service-arrow">↗</span></article>
      </div>
    </section>

    <section id="toolkit" class="toolkit section-grid section-pad">
      <div class="section-kicker reveal"><span>03</span><span class="kicker-rule"></span><span>My toolkit</span></div>
      <div class="toolkit-content reveal"><h2>Ready for the<br /><em>everyday details.</em></h2><p>The tools may be simple. The difference is in how intentionally they’re used.</p><div class="tool-tags"><span>Gmail</span><span>Google Calendar</span><span>Google Docs</span><span>Google Sheets</span><span>Google Drive</span><span>Canva</span></div></div>
    </section>

    <section id="contact" class="contact section-pad"><div class="contact-inner reveal"><p class="eyebrow"><span></span> Have something in mind?</p><h2>Let’s make<br /><em>it happen.</em></h2><p class="contact-copy">Tell me a little about what you’re building, and let’s find the support that fits.</p><a class="button button-light" href="${emailLink}">Send me an email <span>↗</span></a><div class="contact-details"><a href="${emailLink}">${email}</a><span>Tacurong City, Sultan Kudarat</span><a href="https://www.linkedin.com/in/mae-antoinette-elevazo-libag" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div class="contact-curve" aria-hidden="true">MAE · MAE · MAE ·</div></section>
  </main>

  <footer class="site-footer"><span>© <span id="year"></span> Mae Antoinette Libag</span><span>Virtual Assistant · Social Media Support</span><a href="#top">Back to top ↑</a></footer>
`

document.querySelector('#year').textContent = new Date().getFullYear()
const menuButton = document.querySelector('.menu-toggle')
const nav = document.querySelector('.site-nav')
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open')
  menuButton.setAttribute('aria-expanded', String(open))
})
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')))
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }), { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
