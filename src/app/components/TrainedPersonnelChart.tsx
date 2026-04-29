import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { region: 'Dar es Salaam', vhf: 245, mpox: 198, na: 142, total: 585 },
  { region: 'Mwanza', vhf: 186, mpox: 152, na: 108, total: 446 },
  { region: 'Arusha', vhf: 204, mpox: 165, na: 118, total: 487 },
  { region: 'Dodoma', vhf: 172, mpox: 138, na: 95, total: 405 },
  { region: 'Mbeya', vhf: 158, mpox: 125, na: 88, total: 371 },
  { region: 'Morogoro', vhf: 145, mpox: 118, na: 82, total: 345 },
  { region: 'Tanga', vhf: 132, mpox: 106, na: 70, total: 308 },
];

export function TrainedPersonnelChart() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Trained Personnel by Region</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
          <YAxis label={{ value: 'Number of Personnel', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar key="vhf" dataKey="vhf" stackId="a" fill="#ef4444" name="VHF" />
          <Bar key="mpox" dataKey="mpox" stackId="a" fill="#f59e0b" name="Mpox" />
          <Bar key="na" dataKey="na" stackId="a" fill="#6b7280" name="N/A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
