import React from 'react';

const metrics = [
  { label: 'Shops activated', value: '20+' },
  { label: 'Community investors', value: '100+' },
  { label: 'Youth shifts funded', value: '90+' },
  { label: 'On-time payouts', value: '99.2%' },
];

const ImpactGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-primary-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary-200/50 bg-white/70 backdrop-blur p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">{m.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;



