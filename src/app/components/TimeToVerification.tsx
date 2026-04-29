import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { source: 'Community', darEsSalaam: 3.2, mwanza: 4.1, arusha: 3.8, dodoma: 4.5 },
  { source: 'Health Facility', darEsSalaam: 2.1, mwanza: 2.8, arusha: 2.5, dodoma: 3.2 },
  { source: 'Hotline', darEsSalaam: 1.8, mwanza: 2.3, arusha: 2.0, dodoma: 2.7 },
  { source: 'Media', darEsSalaam: 4.5, mwanza: 5.2, arusha: 4.8, dodoma: 5.6 },
];

export function TimeToVerification() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Time to Verification</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="source" />
          <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar key="darEsSalaam" dataKey="darEsSalaam" fill="#3b82f6" name="Dar es Salaam" />
          <Bar key="mwanza" dataKey="mwanza" fill="#10b981" name="Mwanza" />
          <Bar key="arusha" dataKey="arusha" fill="#f59e0b" name="Arusha" />
          <Bar key="dodoma" dataKey="dodoma" fill="#8b5cf6" name="Dodoma" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
