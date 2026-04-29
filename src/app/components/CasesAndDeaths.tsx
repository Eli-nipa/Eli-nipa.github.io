import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    region: 'Dar es Salaam',
    cholera_suspected: 145,
    cholera_confirmed: 98,
    malaria_suspected: 234,
    malaria_confirmed: 189,
    measles_suspected: 56,
    measles_confirmed: 42
  },
  {
    region: 'Mwanza',
    cholera_suspected: 87,
    cholera_confirmed: 62,
    malaria_suspected: 198,
    malaria_confirmed: 156,
    measles_suspected: 34,
    measles_confirmed: 28
  },
  {
    region: 'Arusha',
    cholera_suspected: 102,
    cholera_confirmed: 74,
    malaria_suspected: 167,
    malaria_confirmed: 134,
    measles_suspected: 45,
    measles_confirmed: 38
  },
  {
    region: 'Dodoma',
    cholera_suspected: 68,
    cholera_confirmed: 51,
    malaria_suspected: 142,
    malaria_confirmed: 112,
    measles_suspected: 28,
    measles_confirmed: 22
  },
  {
    region: 'Mbeya',
    cholera_suspected: 54,
    cholera_confirmed: 39,
    malaria_suspected: 123,
    malaria_confirmed: 98,
    measles_suspected: 22,
    measles_confirmed: 18
  },
];

export function CasesAndDeaths() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Cases by Disease and Classification</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar key="cholera_suspected" dataKey="cholera_suspected" fill="#fcd34d" name="Cholera (Suspected)" />
          <Bar key="cholera_confirmed" dataKey="cholera_confirmed" fill="#f59e0b" name="Cholera (Confirmed)" />
          <Bar key="malaria_suspected" dataKey="malaria_suspected" fill="#86efac" name="Malaria (Suspected)" />
          <Bar key="malaria_confirmed" dataKey="malaria_confirmed" fill="#10b981" name="Malaria (Confirmed)" />
          <Bar key="measles_suspected" dataKey="measles_suspected" fill="#f9a8d4" name="Measles (Suspected)" />
          <Bar key="measles_confirmed" dataKey="measles_confirmed" fill="#ec4899" name="Measles (Confirmed)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
