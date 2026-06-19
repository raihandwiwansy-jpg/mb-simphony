const drumline = [
  {
    name: 'Snare',
    description: 'Penyusun pulse utama dengan teknik presisi, stamina, dan transisi rapat.'
  },
  {
    name: 'T-Bass',
    description: 'Lapisan low-end yang memberi tenaga, groove, dan efek cinematic saat tampil.'
  },
  {
    name: 'Cymbal',
    description: 'Aksen visual dan aksen ritmis yang memberi impact di setiap drop dan ending.'
  }
];

const brass = [
  {
    name: 'Trumpet',
    description: 'Karakter terang dan tajam untuk melodi yang menonjol di arena.'
  },
  {
    name: 'Mellophone',
    description: 'Warna mid-brass yang hangat untuk membawa harmoni dan power.'
  },
  {
    name: 'Baritone',
    description: 'Fondasi brass yang tebal, stabil, dan penuh energi.'
  }
];

const highlights = [
  'Tampil modern dengan visual yang bersih dan berani.',
  'Latihan disiplin, formasi rapi, dan musik yang solid.',
  'Satu identitas: kuning, biru, dan hitam yang tegas.'
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__backdrop hero__backdrop--one" />
        <div className="hero__backdrop hero__backdrop--two" />

        <header className="topbar">
          <div>
            <p className="eyebrow">Marching Band</p>
            <h1>MB Simphony</h1>
          </div>
          <nav className="nav-links">
            <a href="#profil">Profil</a>
            <a href="#section">Section</a>
            <a href="/daftar" className="nav-links__cta">
              Pendaftaran
            </a>
          </nav>
        </header>

        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">Kuning · Biru · Hitam</p>
            <h2>Identitas marching band yang modern, kuat, dan siap tampil mencolok.</h2>
            <p className="hero__text">
              Website ini menampilkan profil band, section utama drumline, brass, color guard,
              pit, serta jalur pendaftaran yang mudah diakses.
            </p>

            <div className="hero__actions">
              <a href="/daftar" className="button button--primary">
                Daftar Sekarang
              </a>
              <a href="#section" className="button button--ghost">
                Lihat Section
              </a>
            </div>
          </div>

          <aside className="hero__panel" aria-label="Ringkasan program">
            <div className="hero__badge">Open Recruitment</div>
            <p>Latihan terstruktur untuk musik, visual, dan formasi show.</p>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-block" id="profil">
        <div className="section-heading">
          <p className="eyebrow">Profil</p>
          <h3>Tentang MB Simphony</h3>
        </div>
        <div className="profile-grid">
          <article className="glass-card">
            <h4>Visi</h4>
            <p>
              Membangun marching band dengan karakter visual yang tegas, musikalitas kuat, dan
              disiplin latihan yang konsisten.
            </p>
          </article>
          <article className="glass-card">
            <h4>Misi</h4>
            <p>
              Mengembangkan setiap personel dari dasar teknik, kekompakan, sampai performa panggung
              yang berkelas.
            </p>
          </article>
          <article className="glass-card glass-card--accent">
            <h4>Identitas</h4>
            <p>
              Enerjik, modern, dan berani. Perpaduan kuning, biru, dan hitam membentuk citra yang
              mudah diingat.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block" id="section">
        <div className="section-heading">
          <p className="eyebrow">Section</p>
          <h3>Komposisi tim inti</h3>
        </div>

        <div className="section-group">
          <div className="section-group__header">
            <h4>Drumline</h4>
            <p>Snare, T-Bass, dan Cymbal membentuk tenaga ritmis dan visual yang solid.</p>
          </div>
          <div className="cards-grid">
            {drumline.map((item) => (
              <article className="section-card" key={item.name}>
                <span>Drumline</span>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-group">
          <div className="section-group__header">
            <h4>Brass</h4>
            <p>Trumpet, Mellophone, dan Baritone memberi warna melody dan power ke seluruh show.</p>
          </div>
          <div className="cards-grid">
            {brass.map((item) => (
              <article className="section-card" key={item.name}>
                <span>Brass</span>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="special-grid">
          <article className="special-card">
            <p className="eyebrow">Color Guard</p>
            <h4>Gerakan yang memperkuat cerita show.</h4>
            <p>
              Visual, bendera, dan ekspresi panggung dirancang untuk mengikat musik dengan narasi
              yang kuat.
            </p>
          </article>
          <article className="special-card">
            <p className="eyebrow">Pit</p>
            <h4>Lapisan warna musik yang detail.</h4>
            <p>
              Instrument pit menambah tekstur, ambience, dan transisi harmonis agar aransemen lebih
              hidup.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block registration-strip" id="pendaftaran">
        <div>
          <p className="eyebrow">Pendaftaran</p>
          <h3>Siap bergabung?</h3>
          <p>
            Klik halaman pendaftaran untuk mengisi data dan melihat alur masuk anggota baru.
          </p>
        </div>
        <a href="/daftar" className="button button--primary">
          Buka Pendaftaran
        </a>
      </section>
    </main>
  );
}