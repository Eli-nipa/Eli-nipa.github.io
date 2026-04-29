import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { region: 'Dar es Salaam', community: 45, hcf: 68, hotline: 32, media: 15 },
  { region: 'Mwanza', community: 28, hcf: 42, hotline: 18, media: 8 },
  { region: 'Arusha', community: 35, hcf: 51, hotline: 24, media: 12 },
  { region: 'Dodoma', community: 22, hcf: 38, hotline: 15, media: 6 },
  { region: 'Mbeya', community: 18, hcf: 29, hotline: 12, media: 5 },
  { region: 'Morogoro', community: 20, hcf: 33, hotline: 14, media: 7 },
  { region: 'Tanga', community: 15, hcf: 25, hotline: 10, media: 4 },
];

export function SignalsAnalysis() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Signals Analysis by Source</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar key="community" dataKey="community" stackId="a" fill="#3b82f6" name="Community" />
          <Bar key="hcf" dataKey="hcf" stackId="a" fill="#10b981" name="Health Facility" />
          <Bar key="hotline" dataKey="hotline" stackId="a" fill="#f59e0b" name="Hotline" />
          <Bar key="media" dataKey="media" stackId="a" fill="#8b5cf6" name="Media" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
