import React from 'react';

const items = [
  {
    title: 'Fund from $1',
    desc: 'Start small and scale up anytime. Your contribution finances essential shop inventory in your neighborhood.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12c0 5.247-3.806 9.5-7.5 9.5S4.5 17.247 4.5 12 8.306 2.5 12 2.5 19.5 6.753 19.5 12z"/></svg>
    ),
  },
  {
    title: 'We buy stock daily',
    desc: 'Funds are pooled and deployed into fast-moving goods. Inventory choices are driven by local demand data.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v13a2 2 0 002 2h10a2 2 0 002-2V7M9 7V5a3 3 0 016 0v2"/></svg>
    ),
  },
  {
    title: 'You earn daily',
    desc: 'As inventory sells, profits update your balance daily based on shop performance. No fixed return promises.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3m0 8a4 4 0 104 4H7a4 4 0 104-4z"/></svg>
    ),
  },
  {
    title: 'Withdraw anytime',
    desc: 'No lock-ins. Request a withdrawal whenever you like. We prioritize liquidity while keeping shops stocked.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
    ),
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How it works</h2>
          <p className="mt-4 text-lg text-gray-600">Simple, transparent, and designed for community prosperity.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


