import React from 'react';

const faqs = [
  {
    q: 'Is my money safe? ',
    a: 'Funds are allocated to real inventory across our owned shops. Balances reflect actual sales performance. While there is business risk, we diversify across fast-moving goods and manage stock actively.',
  },
  {
    q: 'What returns can I expect?',
    a: 'Returns vary by shop and demand. Balances update daily from realized profits. We do not promise fixed or guaranteed rates.',
  },
  {
    q: 'When can I withdraw?',
    a: 'Anytime. We maintain liquidity buffers and manage replenishment cycles to facilitate on-demand withdrawals.',
  },
  {
    q: 'Minimum to start?',
    a: 'You can start from as little as $1 and add more at any time.',
  },
  {
    q: 'How does NhavaGX earn?',
    a: 'We charge 1% of profit only when shops make money. No management or hidden fees.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-600">If you have other questions, we’re a message away.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


