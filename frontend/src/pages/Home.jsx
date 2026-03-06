import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
  Star,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.3),transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse" />
            Sistem Reservasi No. 1 di Indonesia
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-slate-400">
            Pesan Lapangan Favoritmu <br className="hidden md:block" /> Dengan
            Lebih Mudah
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
            Platform reservasi modern yang memberikan kemudahan pencarian
            jadwal, pembayaran instan, dan jaminan ketersediaan lapangan secara
            real-time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-indigo-600 hover:bg-indigo-700 h-12 text-lg shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105"
            >
              <Link to="/reservasi">
                Mulai Reservasi <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Animated Orbs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
              Mengapa Memilih Reservasi?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Keunggulan utama layanan kami untuk kenyamanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-amber-500" />}
              title="Booking Instan"
              description="Proses cepat tanpa menunggu lama, langsung konfirmasi jadwal dalam hitungan detik."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-indigo-500" />}
              title="Real-time Schedule"
              description="Jadwal yang selalu terupdate otomatis untuk menghindari double booking."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8 text-emerald-500" />}
              title="Keamanan Terjamin"
              description="Setiap transaksi dan data pribadi Anda dilindungi dengan sistem keamanan tingkat tinggi."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
                Cara Kerja Kami Sangat Sederhana
              </h2>
              <div className="space-y-8">
                <StepItem
                  number="01"
                  title="Pilih Lokasi & Tanggal"
                  text="Cari ketersediaan lapangan berdasarkan lokasi terdekat dan waktu luangmu."
                />
                <StepItem
                  number="02"
                  title="Tentukan Lapangan"
                  text="Pilih tipe lapangan yang sesuai dengan kebutuhan pertandingan atau latihanmu."
                />
                <StepItem
                  number="03"
                  title="Konfirmasi & Selesai"
                  text="Lakukan pembayaran dan tunjukkan bukti reservasi saat tiba di lokasi."
                />
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl bg-indigo-600/5 border border-indigo-500/10 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 w-32 rounded-2xl bg-indigo-500/10 animate-pulse delay-75 shadow-inner" />
                  <div className="h-32 w-32 rounded-2xl bg-indigo-500/20 animate-pulse delay-150 shadow-inner translate-y-8" />
                  <div className="h-32 w-32 rounded-2xl bg-indigo-500/15 animate-pulse delay-300 shadow-inner -translate-y-8" />
                  <div className="h-32 w-32 rounded-2xl bg-indigo-500/5 animate-pulse delay-500 shadow-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-11.5 -10.23174 23 20.46348"
                  className="h-8 w-8 text-indigo-500"
                >
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <span className="text-xl font-bold tracking-tight">
                  Reservasi
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Platform reservasi terdepan untuk memudahkan aktivitas olahraga
                dan produktivitas Anda setiap hari.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Layanan</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    to="/reservasi"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Pesan Lapangan
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Member Eksklusif
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Kerjasama Mitra
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Perusahaan</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Karir
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">
              © 2024 Reservasi App. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex gap-6 text-xs">
              <Link to="#" className="hover:text-white transition-colors">
                Ketentuan Layanan
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700 transition-colors group-hover:bg-slate-200 dark:group-hover:bg-slate-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StepItem({ number, title, text }) {
  return (
    <div className="flex gap-6">
      <div className="flex-none flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white font-bold">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Home;
