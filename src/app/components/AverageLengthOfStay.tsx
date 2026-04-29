import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { disease: 'Cholera', recovered: 6.2, deceased: 4.8 },
  { disease: 'Malaria', recovered: 8.5, deceased: 6.1 },
  { disease: 'Measles', recovered: 5.8, deceased: 5.2 },
  { disease: 'Ebola', recovered: 18.3, deceased: 12.7 },
  { disease: 'Typhoid', recovered: 9.2, deceased: 7.5 },
  { disease: 'Dengue', recovered: 7.4, deceased: 6.8 },
];

export function AverageLengthOfStay() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Average Length of Stay</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: 'Days', position: 'insideBottom', offset: -5 }} />
          <YAxis dataKey="disease" type="category" width={100} />
          <Tooltip />
          <Legend />
          <Bar key="recovered" dataKey="recovered" fill="#10b981" name="Recovered" />
          <Bar key="deceased" dataKey="deceased" fill="#ef4444" name="Deceased" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
