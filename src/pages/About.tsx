import React from 'react';
import shopImg from '../assets/nhavagx-shop.jpg';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About NhavaGX</h1>
          <p className="mt-4 text-xl text-gray-600">
            NhavaGX is a community-owned retail investment platform. We turn underused tuck-shops/spaza stores
            into transparent micro‑investment hubs where anyone can fund inventory cycles, earn fair returns from
            real sales, and build resilient savings.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-extrabold text-gray-900">What is NhavaGX?</h2>
              <p className="mt-4 text-gray-700">
                NhavaGX connects community investors to everyday retail demand. By financing fast‑moving inventory in
                neighborhood shops, we enable shared upside: investors earn, operators grow, and customers access
                reliable goods at fair prices.
              </p>
              <p className="mt-4 text-gray-700">
                We partner with trusted local operators and youth associates to run store operations using simple mobile
                tools. Performance, payouts, and impact are visible in real time—building trust, accountability, and
                long‑term wealth creation where it matters most.
              </p>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-900">How it works</h3>
                <ul className="list-disc pl-6 mt-3 text-gray-700">
                  <li>Onboard a shop and baseline demand for essential products.</li>
                  <li>Community funds rotating inventory pools with clear terms and timelines.</li>
                  <li>Operators sell inventory; youth associates support operations and reporting.</li>
                  <li>Profits are shared on schedule; investors can withdraw or reinvest.</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                <p className="mt-2 text-gray-600">Build community wealth by making everyday commerce investable, transparent, and rewarding for all participants.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">Approach</h3>
                <p className="mt-2 text-gray-600">Data‑led inventory financing, shared upside with clear terms, and youth‑led operations with rigorous accountability.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-primary-200/40 blur-xl" />
              <img
                className="relative w-full rounded-2xl shadow-2xl ring-1 ring-black/5 object-cover"
                src={shopImg}
                alt="NhavaGX community retail activation"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Values</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: 'Inclusion',
              desc: 'Designing with and for the community, lowering barriers to participate and benefit.'
            }, {
              title: 'Transparency',
              desc: 'Clear terms, visible performance, on-time payouts. Trust is our currency.'
            }, {
              title: 'Dignified Work',
              desc: 'Creating pathways for youth to gain paid experience and leadership in operations.'
            }].map(v => (
              <div key={v.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="h-10 w-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
