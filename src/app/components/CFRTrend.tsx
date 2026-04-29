import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', cholera: 7.2, malaria: 2.1, measles: 1.8, ebola: 42.5 },
  { week: 'Week 2', cholera: 6.8, malaria: 2.3, measles: 1.6, ebola: 45.2 },
  { week: 'Week 3', cholera: 7.5, malaria: 2.0, measles: 2.1, ebola: 41.8 },
  { week: 'Week 4', cholera: 8.2, malaria: 2.4, measles: 1.9, ebola: 43.6 },
  { week: 'Week 5', cholera: 7.9, malaria: 2.2, measles: 2.3, ebola: 44.1 },
  { week: 'Week 6', cholera: 8.5, malaria: 2.1, measles: 2.0, ebola: 42.9 },
  { week: 'Week 7', cholera: 8.1, malaria: 2.5, measles: 1.7, ebola: 43.8 },
  { week: 'Week 8', cholera: 8.8, malaria: 2.3, measles: 2.2, ebola: 45.5 },
];

export function CFRTrend() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Case Fatality Rate (CFR) Trend</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis label={{ value: 'CFR (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line key="cholera" type="monotone" dataKey="cholera" stroke="#f59e0b" strokeWidth={2} name="Cholera" />
          <Line key="malaria" type="monotone" dataKey="malaria" stroke="#10b981" strokeWidth={2} name="Malaria" />
          <Line key="measles" type="monotone" dataKey="measles" stroke="#ec4899" strokeWidth={2} name="Measles" />
          <Line key="ebola" type="monotone" dataKey="ebola" stroke="#ef4444" strokeWidth={2} name="Ebola" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
