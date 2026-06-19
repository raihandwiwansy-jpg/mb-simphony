import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="topbar">
      <Link href="/" className="brand" aria-label="MB Simphony">
        <div className="brand__mark">
          <Image src="/logo.svg" alt="Logo MB Simphony" width={62} height={62} />
        </div>
        <div className="brand__text">
          <p className="brand__tag">Marching Band</p>
          <h1>MB Simphony</h1>
        </div>
      </Link>
      <nav className="nav-links">
        <Link href="/profil">Profil</Link>
        <Link href="/section">Section</Link>
        <Link href="/daftar">Pendaftaran</Link>
      </nav>
    </header>
  );
}
