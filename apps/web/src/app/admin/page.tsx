const adminPortalUrl = process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL ?? 'http://localhost:3001';

export default function AdminEntryPage() {
  return (
    <main className="login-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <section className="login-card" aria-label="Admin access helper">
        <p className="badge">🔐 Admin Access</p>
        <h1>Halaman Admin</h1>
        <p className="subtitle">
          Jika Anda admin, lanjutkan ke portal admin terpisah. Jika tombol tidak bekerja di lingkungan
          produksi, set variabel <code>NEXT_PUBLIC_ADMIN_PORTAL_URL</code> ke URL admin yang benar.
        </p>

        <a href={adminPortalUrl} className="admin-entry" aria-label="Buka login admin">
          Buka Login Admin
        </a>
      </section>
    </main>
  );
}
