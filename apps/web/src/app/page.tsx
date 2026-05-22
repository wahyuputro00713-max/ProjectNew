import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="login-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <section className="login-card" aria-label="Login form">
        <p className="badge">✨ Welcome back</p>
        <h1>Masuk ke Akun Anda</h1>
        <p className="subtitle">
          Kelola proyek Anda dengan pengalaman UI modern, cepat, dan aman.
        </p>

        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="nama@perusahaan.com"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Masukkan password"
            autoComplete="current-password"
            required
          />

          <div className="form-row">
            <label className="remember">
              <input type="checkbox" name="remember" />
              Ingat saya
            </label>
            <a href="#" className="link">
              Lupa password?
            </a>
          </div>

          <button type="submit">Masuk</button>
        </form>

        <p className="signup">
          Belum punya akun? <a href="#">Daftar sekarang</a>
        </p>

        <Link href="/admin" className="admin-entry" aria-label="Buka login admin">
          Login Admin
        </Link>
      </section>
    </main>
  );
}
