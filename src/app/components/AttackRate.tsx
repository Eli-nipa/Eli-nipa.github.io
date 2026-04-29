import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { district: 'Ilala', attackRate: 142.5, population: 1017000, cases: 145 },
  { district: 'Kinondoni', attackRate: 128.3, population: 1823000, cases: 234 },
  { district: 'Mwanza Urban', attackRate: 98.7, population: 881000, cases: 87 },
  { district: 'Arusha Urban', attackRate: 87.2, population: 1170000, cases: 102 },
  { district: 'Morogoro Urban', attackRate: 76.4, population: 1191000, cases: 91 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 rounded p-3 shadow-lg">
        <p className="font-semibold">{data.district}</p>
        <p className="text-sm">Population: {data.population.toLocaleString()}</p>
        <p className="text-sm">Cases: {data.cases}</p>
        <p className="text-sm text-red-600 font-semibold">Attack Rate: {data.attackRate} per 100,000</p>
      </div>
    );
  }
  return null;
};

export function AttackRate() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Attack Rate</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: 'Attack Rate per 100,000', position: 'insideBottom', offset: -5 }} />
          <YAxis dataKey="district" type="category" width={120} />
          <Tooltip content={<CustomTooltip />} />
          <Bar key="attackRate" dataKey="attackRate" fill="#ef4444" name="Attack Rate" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
