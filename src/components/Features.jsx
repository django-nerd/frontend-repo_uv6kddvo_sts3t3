import { Camera, Sparkles, Rocket, Shield, Image as ImageIcon, Settings2 } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Unlimited generations',
    desc: 'Create as much as you want. No caps, no credits — just pure creativity.'
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: 'Photorealistic quality',
    desc: 'Stunning, crisp images with studio-grade color and detail.'
  },
  {
    icon: <Settings2 className="h-6 w-6" />,
    title: 'Creative controls',
    desc: 'Aspect ratios, styles, seeds, and more to fine-tune every result.'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Ultra-fast',
    desc: 'Generate in seconds with our optimized inference pipeline.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Safe by default',
    desc: 'Built-in safeguards and moderation to keep creations responsible.'
  },
  {
    icon: <ImageIcon className="h-6 w-6" />,
    title: '4K upscaling',
    desc: 'One-tap upscales for print-ready outputs and large displays.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Designed for limitless creativity</h2>
          <p className="mt-3 text-gray-600">Everything you need to go from idea to gallery‑worthy images — in moments.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-sm">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
