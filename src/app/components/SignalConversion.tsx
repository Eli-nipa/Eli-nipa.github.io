import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { region: 'Dar es Salaam', signals: 160, converted: 35, rate: 21.9 },
  { region: 'Mwanza', signals: 96, converted: 18, rate: 18.8 },
  { region: 'Arusha', signals: 122, converted: 22, rate: 18.0 },
  { region: 'Dodoma', signals: 81, converted: 15, rate: 18.5 },
  { region: 'Mbeya', signals: 64, converted: 12, rate: 18.8 },
  { region: 'Morogoro', signals: 74, converted: 14, rate: 18.9 },
  { region: 'Tanga', signals: 54, converted: 11, rate: 20.4 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 rounded p-3 shadow-lg">
        <p className="font-semibold">{data.region}</p>
        <p className="text-sm">Signals: {data.signals}</p>
        <p className="text-sm">Converted: {data.converted}</p>
        <p className="text-sm text-green-600">Rate: {data.rate}%</p>
      </div>
    );
  }
  return null;
};

export function SignalConversion() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Signal to Event Conversion</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar key="signals" yAxisId="left" dataKey="signals" fill="#94a3b8" name="Total Signals" />
          <Bar key="converted" yAxisId="left" dataKey="converted" fill="#10b981" name="Converted to Events" />
          <Bar key="rate" yAxisId="right" dataKey="rate" fill="#3b82f6" name="Conversion Rate %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
