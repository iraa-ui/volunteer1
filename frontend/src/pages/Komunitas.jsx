import React from "react";
import { useNavigate } from "react-router-dom";

export default function Komunitas() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-left">
      {/* Hero Section */}
      <section className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wider">
          Tentang Kami
        </span>
        <h1 className="text-4xl font-display font-extrabold text-emerald-950 leading-tight">
          AmalSholeh Foundation
        </h1>
        <p className="text-gray-500 text-base leading-relaxed">
          AmalSholeh Foundation adalah organisasi sosial nirlaba keagamaan yang berdedikasi untuk mendorong kolaborasi, aksi kepedulian nyata, dan penyaluran program kebaikan yang berkelanjutan di tengah masyarakat.
        </p>
      </section>

      {/* Grid: Visi & Misi */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl space-y-3 border-emerald-100 bg-gradient-to-br from-white/80 to-emerald-50/10">
          <span className="text-3xl">👁️‍🗨️</span>
          <h3 className="text-xl font-display font-bold text-emerald-950">Visi Kami</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Menjadi wadah penggerak amal sholeh terdepan yang menginspirasi individu untuk beraksi kebaikan, menumbuhkan kepedulian sosial, dan membangun ekosistem masyarakat yang berkah dan harmonis.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-3xl space-y-3 border-teal-100 bg-gradient-to-br from-white/80 to-teal-50/10">
          <span className="text-3xl">🚀</span>
          <h3 className="text-xl font-display font-bold text-emerald-950">Misi Kami</h3>
          <ul className="text-gray-600 text-sm leading-relaxed space-y-2 list-disc list-inside">
            <li>Menyelenggarakan program aksi amal nyata yang inklusif dan berdampak langsung bagi masyarakat.</li>
            <li>Mengembangkan kapasitas pemuda melalui edukasi dan kepemimpinan yang berakhlak mulia.</li>
            <li>Membangun kolaborasi dengan berbagai pihak untuk menyalurkan sedekah, wakaf, dan santunan secara amanah.</li>
          </ul>
        </div>
      </section>

      {/* Fokus Gerakan */}
      <section className="space-y-6">
        <h3 className="text-2xl font-display font-bold text-emerald-950 text-center">Fokus Program Amal Sholeh</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🕌", title: "Wakaf & Pembangunan", desc: "Pembangunan masjid, mushola, sarana wudhu, dan fasilitas umum." },
            { icon: "📚", title: "Pendidikan & Dakwah", desc: "Kelas mengajar gratis, literasi anak yatim, dakwah islam." },
            { icon: "🍲", title: "Sedekah & Pangan", desc: "Berbagi makanan gratis, tebar sembako keluarga dhuafa." },
            { icon: "🤝", title: "Kemanusiaan & Bencana", desc: "Aksi kemanusiaan darurat, santunan anak yatim & dhuafa." },
          ].map((fokus, index) => (
            <div key={index} className="glass-card p-5 rounded-2xl flex flex-col items-center text-center space-y-2 hover:border-emerald-200">
              <span className="text-3xl mb-1">{fokus.icon}</span>
              <h4 className="font-bold text-sm text-emerald-950">{fokus.title}</h4>
              <p className="text-[11px] text-gray-400 leading-snug">{fokus.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profil Kontak */}
      <section className="glass-panel p-8 rounded-3xl space-y-6 bg-gradient-to-br from-white/80 to-emerald-50/20 border-emerald-100">
        <h3 className="text-xl font-display font-bold text-emerald-950">Hubungi Kantor Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <div>
                <strong className="block text-emerald-950">Alamat Kantor</strong>
                <span>Jl. Dago No. 10, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">✉️</span>
              <div>
                <strong className="block text-emerald-950">Email Resmi</strong>
                <span>kontak@amalsholeh.id</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <div>
                <strong className="block text-emerald-950">Telepon & WhatsApp</strong>
                <span>+62 812-3456-7890</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">⏰</span>
              <div>
                <strong className="block text-emerald-950">Jam Operasional Kantor</strong>
                <span>Senin - Jumat · 09:00 - 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="text-center">
        <button
          onClick={() => navigate("/events")}
          className="btn-pill-primary px-8 py-3.5 text-sm font-bold shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-transform"
        >
          Ikut Beramal Bersama Kami
        </button>
      </section>
    </div>
  );
}
