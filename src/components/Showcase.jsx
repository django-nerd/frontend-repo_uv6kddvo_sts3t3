import { Play, Download } from 'lucide-react';

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    alt: 'AI generated futuristic cityscape'
  },
  {
    src: 'https://images.unsplash.com/photo-1750088292550-5893193a7def?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGZ1dHVyaXN0aWMlMjBjaXR5c2NhcGV8ZW58MHwwfHx8MTc2MzQwNDU1N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Portrait with dramatic lighting'
  },
  {
    src: 'https://images.unsplash.com/photo-1759664301269-e7ac58fe307b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3J0cmFpdCUyMHdpdGglMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDB8MHx8fDE3NjM0MDQ1NTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Minimal product photography'
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    alt: 'Surreal nature composition'
  }
];

export default function Showcase() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">See what’s possible</h2>
            <p className="mt-3 text-gray-600">A glimpse at the range — from photo‑real portraits to abstract art and product shots.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Play className="mr-2 h-4 w-4" /> Watch demo
            </button>
            <button className="inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-semibold hover:bg-gray-800">
              <Download className="mr-2 h-4 w-4" /> Try sample
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((g, i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-200">
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
