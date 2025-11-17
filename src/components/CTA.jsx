export default function CTA() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Unlimited creativity starts here</h2>
          <p className="mt-3 text-gray-300">Generate without limits. Cancel anytime.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-gray-300">Great for trying ideas</p>
              <p className="mt-4 text-3xl font-bold">Free</p>
              <p className="text-xs text-gray-400">50 images/day</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white p-6 text-gray-900 shadow-lg">
              <h3 className="text-lg font-semibold">Unlimited</h3>
              <p className="mt-1 text-sm text-gray-600">Best for creators</p>
              <p className="mt-4 text-3xl font-bold">$19</p>
              <p className="text-xs text-gray-500">Truly unlimited</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Studio</h3>
              <p className="mt-1 text-sm text-gray-300">Teams and brands</p>
              <p className="mt-4 text-3xl font-bold">$49</p>
              <p className="text-xs text-gray-400">Unlimited + priority</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100 transition">Start free</a>
            <span className="text-xs text-gray-400">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
