import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MeetingProgress {
  category: string;
  planned: number;
  conducted: number;
  percentage: number;
}

const hazardData: MeetingProgress[] = [
  { category: 'Cholera', planned: 24, conducted: 22, percentage: 91.7 },
  { category: 'Malaria', planned: 28, conducted: 25, percentage: 89.3 },
  { category: 'Measles', planned: 20, conducted: 19, percentage: 95.0 },
  { category: 'Ebola', planned: 16, conducted: 14, percentage: 87.5 },
  { category: 'Typhoid', planned: 18, conducted: 16, percentage: 88.9 },
];

const regionData: MeetingProgress[] = [
  { category: 'Dar es Salaam', planned: 32, conducted: 30, percentage: 93.8 },
  { category: 'Mwanza', planned: 28, conducted: 25, percentage: 89.3 },
  { category: 'Arusha', planned: 26, conducted: 24, percentage: 92.3 },
  { category: 'Dodoma', planned: 24, conducted: 21, percentage: 87.5 },
  { category: 'Mbeya', planned: 22, conducted: 19, percentage: 86.4 },
];

const pillarData: MeetingProgress[] = [
  { category: 'Surveillance', planned: 45, conducted: 42, percentage: 93.3 },
  { category: 'Laboratory', planned: 38, conducted: 35, percentage: 92.1 },
  { category: 'Case Management', planned: 42, conducted: 38, percentage: 90.5 },
  { category: 'Risk Communication', planned: 36, conducted: 32, percentage: 88.9 },
  { category: 'Logistics', planned: 40, conducted: 36, percentage: 90.0 },
];

const trendData = [
  { month: 'Jan', completion: 78.5 },
  { month: 'Feb', completion: 82.3 },
  { month: 'Mar', completion: 85.7 },
  { month: 'Apr', completion: 87.2 },
  { month: 'May', completion: 88.9 },
  { month: 'Jun', completion: 90.1 },
  { month: 'Jul', completion: 91.5 },
];

function ProgressBar({ item }: { item: MeetingProgress }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{item.category}</span>
        <span className="text-sm text-gray-600">
          {item.conducted}/{item.planned} ({item.percentage.toFixed(1)}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 h-5 relative overflow-hidden">
        <div
          className="h-5 bg-orange-600 transition-all duration-500 flex items-center justify-end pr-2"
          style={{ width: `${item.percentage}%` }}
        >
          {item.percentage > 15 && (
            <span className="text-xs font-semibold text-white">{item.percentage.toFixed(1)}%</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function PillarMeetings() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-3 text-gray-800">Pillar Meetings</h3>

      {/* Progress Bars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* By Hazard Type */}
        <div>
          <h4 className="text-xs font-semibold mb-3 text-gray-700 uppercase">By Hazard Type</h4>
          {hazardData.map((item) => (
            <ProgressBar key={item.category} item={item} />
          ))}
        </div>

        {/* By Region */}
        <div>
          <h4 className="text-xs font-semibold mb-3 text-gray-700 uppercase">By Region</h4>
          {regionData.map((item) => (
            <ProgressBar key={item.category} item={item} />
          ))}
        </div>

        {/* By Pillar */}
        <div>
          <h4 className="text-xs font-semibold mb-3 text-gray-700 uppercase">By Pillar</h4>
          {pillarData.map((item) => (
            <ProgressBar key={item.category} item={item} />
          ))}
        </div>
      </div>

      {/* Trend Chart */}
      <div className="border-t border-gray-300 pt-4">
        <h4 className="text-xs font-semibold mb-3 text-gray-700 uppercase">Completion Trend Over Time</h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis label={{ value: 'Completion (%)', angle: -90, position: 'insideLeft' }} domain={[70, 100]} />
            <Tooltip />
            <Legend />
            <Line
              key="completion"
              type="monotone"
              dataKey="completion"
              stroke="#f97316"
              strokeWidth={3}
              name="Meeting Completion Rate (%)"
              dot={{ fill: '#f97316', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
