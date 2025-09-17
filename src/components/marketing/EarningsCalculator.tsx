import React, { useMemo, useState } from 'react';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const EarningsCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('5');
  const EXAMPLE_DAILY_RATE_PERCENT = 30;

  const parsed = useMemo(() => {
    const a = clamp(parseFloat(amount || '0') || 0, 0, 1000000);
    return { a };
  }, [amount]);

  const result = useMemo(() => {
    const dailyRate = EXAMPLE_DAILY_RATE_PERCENT / 100;
    const grossDailyProfit = parsed.a * dailyRate;
    const fee = grossDailyProfit * 0.01; // 1% of profit only
    const netDailyProfit = Math.max(grossDailyProfit - fee, 0);
    return {
      grossDailyProfit,
      fee,
      netDailyProfit,
    };
  }, [parsed]);

  const format = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">How much could I earn per day?</h3>
              <p className="mt-2 text-gray-600">Use the bar to pick an amount. This is just an estimate; your balance updates from real shop sales.</p>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={parsed.a}
                    onChange={(e) => setAmount(String(e.target.value))}
                    className="w-full"
                  />
                  <div className="mt-1 text-sm text-gray-800">${format(parsed.a)}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-primary-200 bg-primary-50 p-6 text-center">
                <div className="text-sm text-gray-600">Estimated profit per day</div>
                <div className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">${format(result.netDailyProfit)}</div>
                <p className="mt-3 text-xs text-gray-600">Based on an example shop profit rate of {EXAMPLE_DAILY_RATE_PERCENT}% per day, after our 1% of profit fee. This is just an estimate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;


