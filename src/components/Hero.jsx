import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            <span className="text-gray-100">Unlimited image generation</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Create anything you imagine, instantly.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-200/90">
            Turn ideas into stunning visuals in seconds. High‑res, fast, and endlessly creative — powered by cutting‑edge AI.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100 transition">
              Start free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
