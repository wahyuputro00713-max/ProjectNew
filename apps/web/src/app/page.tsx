export default function AdminLoginPage() {
  return (
    <main className="login-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <section className="login-card" aria-label="Admin login form">
        <p className="badge">🔐 Admin Portal</p>
        <h1>Masuk Admin WebApp</h1>
        <p className="subtitle">
          Halaman ini hanya untuk administrator. Gunakan akun admin Anda untuk mengelola pengguna,
          konten, dan pengaturan sistem.
        </p>

        <form className="login-form">
          <label htmlFor="adminId">Admin ID</label>
          <input
            id="adminId"
            name="adminId"
            type="text"
            placeholder="admin.supervisor"
            autoComplete="username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Masukkan password admin"
            autoComplete="current-password"
            required
          />

          <label htmlFor="otp">Kode Verifikasi (OTP)</label>
          <input
            id="otp"
            name="otp"
            type="text"
            placeholder="6 digit OTP"
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            required
          />

          <div className="form-row">
            <label className="remember">
              <input type="checkbox" name="trustedDevice" />
              Perangkat terpercaya
            </label>
            <a href="#" className="link">
              Hubungi super admin
            </a>
          </div>

          <button type="submit">Masuk ke Dashboard Admin</button>
        </form>

        <p className="signup warning-text">
          Akses tidak sah akan dicatat oleh sistem keamanan.
        </p>
      </section>
    </main>
  );
}
