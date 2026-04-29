import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { pillar: 'Surveillance', vhf: 285, mpox: 232, na: 168 },
  { pillar: 'Laboratory', vhf: 245, mpox: 198, na: 142 },
  { pillar: 'Case Management', vhf: 312, mpox: 254, na: 185 },
  { pillar: 'Risk Communication', vhf: 198, mpox: 162, na: 118 },
  { pillar: 'Logistics', vhf: 268, mpox: 218, na: 158 },
];

export function PersonnelByHazard() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Personnel by Hazard Type</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pillar" angle={-45} textAnchor="end" height={100} />
          <YAxis label={{ value: 'Number of Personnel', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar key="vhf" dataKey="vhf" stackId="a" fill="#ef4444" name="VHF" />
          <Bar key="mpox" dataKey="mpox" stackId="a" fill="#f59e0b" name="Mpox" />
          <Bar key="na" dataKey="na" stackId="a" fill="#6b7280" name="N/A" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 flex justify-center gap-8">
        <div className="text-center">
          <div className="text-3xl font-semibold text-red-600">1,308</div>
          <div className="text-sm text-gray-600">VHF Personnel</div>
          <div className="text-xs text-gray-500">45.9%</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold text-orange-600">1,064</div>
          <div className="text-sm text-gray-600">Mpox Personnel</div>
          <div className="text-xs text-gray-500">37.4%</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-600">771</div>
          <div className="text-sm text-gray-600">N/A Personnel</div>
          <div className="text-xs text-gray-500">27.1%</div>
        </div>
      </div>
    </div>
  );
}
