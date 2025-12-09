"use client";

export default function DashboardSection() {
  return (
    <section className="relative z-10 w-full flex justify-center" style={{ marginTop: '96px', marginBottom: '0', paddingBottom: '0' }}>
      <div className="relative" style={{ maxWidth: '100%', marginBottom: '0', paddingBottom: '0' }}>
        <img
          src="/dashboard.png"
          alt="Dashboard"
          className="w-full h-auto block"
          style={{ display: 'block', objectFit: 'none', marginBottom: '0', paddingBottom: '0', verticalAlign: 'bottom' }}
        />
      </div>
    </section>
  );
}
