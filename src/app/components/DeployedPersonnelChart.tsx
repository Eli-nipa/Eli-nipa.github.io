import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { region: 'Dar es Salaam', vhf: 168, mpox: 135, na: 92, total: 395 },
  { region: 'Mwanza', vhf: 125, mpox: 98, na: 68, total: 291 },
  { region: 'Arusha', vhf: 142, mpox: 112, na: 78, total: 332 },
  { region: 'Dodoma', vhf: 118, mpox: 92, na: 62, total: 272 },
  { region: 'Mbeya', vhf: 105, mpox: 82, na: 56, total: 243 },
  { region: 'Morogoro', vhf: 98, mpox: 78, na: 52, total: 228 },
  { region: 'Tanga', vhf: 88, mpox: 68, na: 46, total: 202 },
];

export function DeployedPersonnelChart() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Deployed Personnel by Region</h3>
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
