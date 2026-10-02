export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Still Point Yoga</span>
        <a href="#cta" className="bg-fuchsia-600 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition">
          Join a Class
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-fuchsia-600 font-semibold mb-4">Yoga & Breathwork</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Find your stillness, on and off the mat</h1>
        <p className="text-lg text-slate-600 mb-10">Small classes, experienced instructors, and a studio built for beginners and lifelong practitioners alike.</p>
        <a href="#cta" className="inline-block bg-fuchsia-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-fuchsia-700 transition">
          Try Your First Class Free
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">All Levels Welcome</h3>
          <p className="text-slate-600">Classes paced for beginners through advanced.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Small Class Sizes</h3>
          <p className="text-slate-600">Never more than 12 people, for real attention.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Flexible Memberships</h3>
          <p className="text-slate-600">Drop in, or commit monthly — your choice.</p>
        </div>
      </section>

      <section id="cta" className="bg-fuchsia-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Your first class is on us</h2>
        <p className="mb-8 text-fuchsia-100">No experience or equipment needed.</p>
        <a href="#" className="inline-block bg-white text-fuchsia-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Try Your First Class Free
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Still Point Yoga. All rights reserved.
      </footer>
    </div>
  )
}
