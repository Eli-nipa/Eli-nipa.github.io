import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { region: 'Dar es Salaam', active: 35, new: 8, closed: 12, investigating: 5 },
  { region: 'Mwanza', active: 18, new: 3, closed: 7, investigating: 4 },
  { region: 'Arusha', active: 22, new: 4, closed: 9, investigating: 3 },
  { region: 'Dodoma', active: 15, new: 2, closed: 8, investigating: 2 },
  { region: 'Mbeya', active: 12, new: 3, closed: 6, investigating: 3 },
  { region: 'Morogoro', active: 14, new: 2, closed: 5, investigating: 2 },
  { region: 'Tanga', active: 11, new: 1, closed: 4, investigating: 1 },
];

export function EventsOverview() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Events Overview by Region</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar key="new" dataKey="new" stackId="a" fill="#ef4444" name="New" />
          <Bar key="active" dataKey="active" stackId="a" fill="#f97316" name="Active" />
          <Bar key="investigating" dataKey="investigating" stackId="a" fill="#8b5cf6" name="Under Investigation" />
          <Bar key="closed" dataKey="closed" stackId="a" fill="#6b7280" name="Closed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
