import SiteHeader from '@/components/SiteHeader';

const steps = [
  'Isi data diri dan pilih section yang diminati.',
  'Tunggu konfirmasi panitia dan jadwal briefing.',
  'Ikuti audisi ringan, latihan dasar, dan penempatan section.'
];

export default function DaftarPage() {
  return (
    <main className="page-shell registration-page">
      <section className="registration-hero">
        <SiteHeader />

        <div className="registration-layout">
          <article className="glass-card glass-card--tall">
            <p className="eyebrow">Pendaftaran</p>
            <h2>Alur masuk anggota baru</h2>
            <ol className="step-list">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="muted-note">
              Halaman ini bisa disambungkan ke Google Form, WhatsApp admin, atau backend sendiri
              nanti.
            </p>
          </article>

          <article className="form-card">
            <p className="eyebrow">Form Singkat</p>
            <h2>Data calon anggota</h2>
            <form className="register-form">
              <label>
                Nama lengkap
                <input type="text" placeholder="Masukkan nama" />
              </label>
              <label>
                Sekolah / Instansi
                <input type="text" placeholder="Masukkan sekolah" />
              </label>
              <label>
                Section pilihan
                <select defaultValue="">
                  <option value="" disabled>
                    Pilih section
                  </option>
                  <option>Snare</option>
                  <option>T-Bass</option>
                  <option>Cymbal</option>
                  <option>Trumpet</option>
                  <option>Mellophone</option>
                  <option>Baritone</option>
                  <option>Color Guard</option>
                  <option>Pit</option>
                </select>
              </label>
              <label>
                Kontak aktif
                <input type="text" placeholder="WhatsApp / email" />
              </label>
              <label>
                Catatan singkat
                <textarea rows={4} placeholder="Pengalaman musik atau alasan bergabung" />
              </label>
              <button className="button button--primary button--full" type="button">
                Kirim Pendaftaran
              </button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}