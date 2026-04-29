import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { trainingType: 'Basic Training', personnel: 842, percentage: 29.6 },
  { trainingType: 'Advanced Training', personnel: 685, percentage: 24.1 },
  { trainingType: 'Specialized Training', personnel: 578, percentage: 20.3 },
  { trainingType: 'Refresher Course', personnel: 742, percentage: 26.0 },
];

export function TrainingDistribution() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Training Distribution by Type</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: 'Number of Personnel', position: 'insideBottom', offset: -5 }} />
          <YAxis dataKey="trainingType" type="category" width={150} />
          <Tooltip />
          <Bar key="personnel" dataKey="personnel" fill="#3b82f6" name="Personnel Trained">
            {data.map((entry, index) => (
              <text key={`label-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.trainingType} className="text-center">
            <div className="text-2xl font-semibold text-blue-600">{item.personnel}</div>
            <div className="text-xs text-gray-600">{item.trainingType}</div>
            <div className="text-xs text-gray-500">{item.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
