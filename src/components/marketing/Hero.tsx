import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { ROUTES } from '../../constants';
import shopImg from '../../assets/nhavagx-shop.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100" />
        <svg className="absolute -right-20 -top-20 h-[36rem] w-[36rem] text-primary-200 opacity-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.6,-63.6C61.3,-55.1,71.7,-40.6,77.5,-24.7C83.3,-8.8,84.6,9.5,78.2,24.2C71.8,38.9,57.8,49.9,43.3,59.2C28.8,68.5,14.4,76.1,-0.4,76.7C-15.2,77.3,-30.5,70.8,-44.4,61.2C-58.3,51.6,-70.8,38.9,-75.6,23.3C-80.4,7.7,-77.5,-10.8,-69.5,-25.4C-61.5,-40,-48.4,-50.7,-35,-59.8C-21.6,-68.9,-10.8,-76.3,2.2,-79.5C15.3,-82.6,30.5,-81.5,47.6,-63.6Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary-200 bg-white/70 px-3 py-1 text-xs text-primary-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              <span>Backed by Anzisha Ventures</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Invest in real shops. Grow daily. Withdraw anytime.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl">
              We run neighborhood tuck-shops. You can invest from $1. Your balance updates from real sales profits. We only charge <span className="font-semibold text-gray-900">1% of profit</span>.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-800">
              <li className="flex items-center space-x-2"><span className="h-2.5 w-2.5 rounded-full bg-primary-500" /> <span>Invest from $1</span></li>
              <li className="flex items-center space-x-2"><span className="h-2.5 w-2.5 rounded-full bg-primary-500" /> <span>Daily profit updates</span></li>
              <li className="flex items-center space-x-2"><span className="h-2.5 w-2.5 rounded-full bg-primary-500" /> <span>Withdraw anytime</span></li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link to={ROUTES.REGISTER}>
                <Button size="lg" className="w-full sm:w-auto">
                  Invest from $1
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See how it works
                </Button>
              </a>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-800">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                <span>Your money buys real shop stock</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
                <span>Withdraw anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12c0 5.247-3.806 9.5-7.5 9.5S4.5 17.247 4.5 12 8.306 2.5 12 2.5 19.5 6.753 19.5 12z"/></svg>
                <span>We only take 1% of profit</span>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: 'Neighborhoods', value: '20+' },
                { label: 'Young people engaged', value: '500+' },
                { label: 'Inventory financed', value: '$1K+' },
                { label: 'Avg. ROI to investors', value: '8-12%' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-200/40 to-transparent blur-2xl" />
              <img
                className="relative rounded-2xl shadow-2xl ring-1 ring-black/5 w-full object-cover"
                src={shopImg}
                alt="NhavaGX community retail shop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



