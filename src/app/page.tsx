import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const registrationLink = 'https://simphonyaw.pythonanywhere.com/';

const highlights = [
  'Tampil modern dengan visual yang bersih dan berani.',
  'Latihan disiplin, formasi rapi, dan musik yang solid.',
  'Satu identitas: kuning dan hitam yang kuat dan berkesan.'
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__backdrop hero__backdrop--one" />
        <div className="hero__backdrop hero__backdrop--two" />
        <div className="hero__ring hero__ring--one" />
        <div className="hero__ring hero__ring--two" />
        <SiteHeader />

        <div className="hero__content">
          <div className="hero__copy hero__copy--intro">
            <p className="eyebrow">Kuning · Hitam · Energi</p>
            <h2>Identitas marching band yang kuat, rapi, dan siap tampil maksimal.</h2>
            <p className="hero__text">
              Jelajahi profil, section, dan informasi pendaftaran MB Simphony melalui halaman yang
              telah dipisahkan agar lebih fokus dan mudah dibaca.
            </p>

            <div className="hero__actions">
              <a href={registrationLink} className="button button--primary" target="_blank" rel="noreferrer">
                Buka Link Pendaftaran
              </a>
              <a href="/section" className="button button--ghost">
                Lihat Section
              </a>
            </div>
          </div>

          <aside className="hero__panel hero__panel--featured" aria-label="Ringkasan program">
            <Image
              src="/profile-illustration.svg"
              alt="Ilustrasi MB Simphony"
              width={560}
              height={420}
              className="hero__image"
            />
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
    </main>
  );
}