import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const drumline = [
  {
    name: 'Snare',
    description: 'Penyusun pulse utama dengan presisi, stamina, dan timing yang kuat.'
  },
  {
    name: 'T-Bass',
    description: 'Menyuplai kekuatan groove dan dasar ritmis yang penuh tenaga.'
  },
  {
    name: 'Cymbal',
    description: 'Memberi aksen visual dan impact yang tajam di setiap transisi.'
  }
];

const brass = [
  {
    name: 'Trumpet',
    description: 'Melodi yang terang dan tajam untuk menonjolkan karakter show.'
  },
  {
    name: 'Mellophone',
    description: 'Warna mid-brass yang hangat, serasi, dan stabil untuk harmoni.'
  },
  {
    name: 'Baritone',
    description: 'Fondasi suara yang tebal, kuat, dan mendukung keseluruhan aransemen.'
  }
];

export default function SectionPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__backdrop hero__backdrop--one" />
        <div className="hero__backdrop hero__backdrop--two" />
        <SiteHeader />

        <div className="hero__content">
          <div className="hero__copy hero__copy--intro">
            <p className="eyebrow">Section</p>
            <h2>Komposisi tim inti MB Simphony</h2>
            <p className="hero__text">
              Setiap section memiliki peran penting untuk membentuk ritme, warna suara, dan visual permainan yang solid.
            </p>
          </div>
          <div className="hero__panel hero__panel--featured">
            <Image
              src="/section-illustration.svg"
              alt="Ilustrasi section MB Simphony"
              width={560}
              height={420}
              className="hero__image"
            />
          </div>
        </div>
      </section>

      <section className="section-block reveal-section">
        <div className="section-group">
          <div className="section-group__header">
            <h4>Drumline</h4>
            <p>Menjadi pondasi ritmis yang kuat dan stabil.</p>
          </div>
          <div className="cards-grid">
            {drumline.map((item) => (
              <article className="section-card reveal-card" key={item.name}>
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
            <p>Memberi warna suara dan power di setiap bagian penampilan.</p>
          </div>
          <div className="cards-grid">
            {brass.map((item) => (
              <article className="section-card reveal-card" key={item.name}>
                <span>Brass</span>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="special-grid">
          <article className="special-card reveal-card">
            <p className="eyebrow">Color Guard</p>
            <h4>Menambah warna visual dan cerita pada penampilan.</h4>
            <p>Gerak, bendera, dan ekspresi panggung mengikat musik dengan visual yang kuat.</p>
          </article>
          <article className="special-card reveal-card reveal-card--delay-1">
            <p className="eyebrow">Pit</p>
            <h4>Menambahkan tekstur dan kedalaman suara yang lebih hidup.</h4>
            <p>Instrumen pit memberi sentuhan detail yang membuat show terasa lebih lengkap.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
