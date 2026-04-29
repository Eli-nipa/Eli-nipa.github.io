import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { facility: 'Muhimbili Hospital', icu: 12, isolation: 45, general: 120 },
  { facility: 'Mwanza Regional', icu: 8, isolation: 28, general: 85 },
  { facility: 'KCMC', icu: 10, isolation: 35, general: 95 },
  { facility: 'Dodoma Regional', icu: 6, isolation: 22, general: 68 },
  { facility: 'Mbeya Regional', icu: 5, isolation: 18, general: 55 },
  { facility: 'Morogoro Regional', icu: 7, isolation: 25, general: 72 },
  { facility: 'Tanga Regional', icu: 4, isolation: 15, general: 48 },
];

export function BedOccupancy() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Bed Occupancy</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="facility" angle={-45} textAnchor="end" height={120} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar key="icu" dataKey="icu" stackId="a" fill="#ef4444" name="ICU Beds" />
          <Bar key="isolation" dataKey="isolation" stackId="a" fill="#f59e0b" name="Isolation Beds" />
          <Bar key="general" dataKey="general" stackId="a" fill="#3b82f6" name="General Beds" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
