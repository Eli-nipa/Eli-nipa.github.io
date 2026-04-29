import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Apr 1', cases: 12 },
  { date: 'Apr 2', cases: 18 },
  { date: 'Apr 3', cases: 24 },
  { date: 'Apr 4', cases: 31 },
  { date: 'Apr 5', cases: 28 },
  { date: 'Apr 6', cases: 22 },
  { date: 'Apr 7', cases: 19 },
  { date: 'Apr 8', cases: 26 },
  { date: 'Apr 9', cases: 35 },
  { date: 'Apr 10', cases: 42 },
  { date: 'Apr 11', cases: 48 },
  { date: 'Apr 12', cases: 55 },
  { date: 'Apr 13', cases: 51 },
  { date: 'Apr 14', cases: 46 },
  { date: 'Apr 15', cases: 52 },
  { date: 'Apr 16', cases: 58 },
  { date: 'Apr 17', cases: 64 },
  { date: 'Apr 18', cases: 71 },
  { date: 'Apr 19', cases: 68 },
  { date: 'Apr 20', cases: 62 },
  { date: 'Apr 21', cases: 58 },
  { date: 'Apr 22', cases: 54 },
  { date: 'Apr 23', cases: 48 },
  { date: 'Apr 24', cases: 42 },
  { date: 'Apr 25', cases: 38 },
  { date: 'Apr 26', cases: 35 },
  { date: 'Apr 27', cases: 31 },
];

export function EpiCurve() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Epidemic Curve</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" angle={-45} textAnchor="end" height={80} interval={2} />
          <YAxis label={{ value: 'Number of Cases', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar key="cases" dataKey="cases" fill="#3b82f6" name="Cases" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
