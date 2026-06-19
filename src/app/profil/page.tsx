import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const profilePoints = [
  {
    title: 'Visi',
    text: 'Membangun marching band dengan karakter visual yang tegas, musikalitas kuat, dan disiplin latihan yang konsisten.'
  },
  {
    title: 'Misi',
    text: 'Mengembangkan setiap personel dari dasar teknik, kekompakan, sampai performa panggung yang berkelas.'
  },
  {
    title: 'Identitas',
    text: 'Enerjik, modern, dan berani. Perpaduan kuning dan hitam memberi kesan yang kuat dan mudah diingat.'
  }
];

export default function ProfilPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__backdrop hero__backdrop--one" />
        <div className="hero__backdrop hero__backdrop--two" />
        <SiteHeader />

        <div className="hero__content hero__content--reverse">
          <div className="hero__copy hero__copy--intro">
            <p className="eyebrow">Profil</p>
            <h2>Tentang MB Simphony</h2>
            <p className="hero__text">
              MB Simphony hadir sebagai identitas marching band yang solid, disiplin, dan penuh energi.
              Kami mengutamakan kualitas musik, visual, serta semangat kebersamaan dalam setiap penampilan.
            </p>
          </div>
          <div className="hero__panel hero__panel--featured">
            <Image
              src="/profile-illustration.svg"
              alt="Ilustrasi profil MB Simphony"
              width={560}
              height={420}
              className="hero__image"
            />
          </div>
        </div>
      </section>

      <section className="section-block reveal-section">
        <div className="profile-grid">
          {profilePoints.map((item, index) => (
            <article
              className={`glass-card reveal-card${index === 1 ? ' reveal-card--delay-1' : index === 2 ? ' reveal-card--delay-2' : ''}`}
              key={item.title}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
