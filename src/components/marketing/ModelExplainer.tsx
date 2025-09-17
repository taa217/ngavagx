import React from 'react';

const steps = [
  {
    title: 'Own and activate local tuck-shops',
    description:
      'We operate neighborhood tuck-shops and retrofit them as community investment nodes, ready to host inventory and participation.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6m8 2v6a2 2 0 01-2 2h-3m-4 0H7a2 2 0 01-2-2v-6"/></svg>
    ),
  },
  {
    title: 'Community invests from $1',
    description:
      'Anyone can co-invest directly in shop inventory. Contributions are pooled, tracked transparently, and deployed into fast-moving goods.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12c0 5.247-3.806 9.5-7.5 9.5S4.5 17.247 4.5 12 8.306 2.5 12 2.5 19.5 6.753 19.5 12z"/></svg>
    ),
  },
  {
    title: 'Profits shared daily; 1% fee on profit',
    description:
      'As goods sell, profits update balances daily. Investors share the upside; we charge only 1% of profit. Youth gain paid experience in operations.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3m0 8a4 4 0 104 4H7a4 4 0 104-4z"/></svg>
    ),
  },
];

const ModelExplainer: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Financial inclusion powered by grassroots innovation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our model helps communities invest in what they already understand: local retail inventory. We make it simple, transparent, and rewarding.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                {step.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelExplainer;



