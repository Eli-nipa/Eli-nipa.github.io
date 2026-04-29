interface ActivityProgress {
  category: string;
  planned: number;
  implemented: number;
  percentage: number;
}

const hazardData: ActivityProgress[] = [
  { category: 'Cholera', planned: 58, implemented: 52, percentage: 89.7 },
  { category: 'Malaria', planned: 64, implemented: 55, percentage: 85.9 },
  { category: 'Measles', planned: 42, implemented: 39, percentage: 92.9 },
  { category: 'Ebola', planned: 35, implemented: 28, percentage: 80.0 },
  { category: 'Typhoid', planned: 38, implemented: 33, percentage: 86.8 },
];

const regionData: ActivityProgress[] = [
  { category: 'Dar es Salaam', planned: 78, implemented: 71, percentage: 91.0 },
  { category: 'Mwanza', planned: 62, implemented: 54, percentage: 87.1 },
  { category: 'Arusha', planned: 58, implemented: 51, percentage: 87.9 },
  { category: 'Dodoma', planned: 52, implemented: 45, percentage: 86.5 },
  { category: 'Mbeya', planned: 45, implemented: 38, percentage: 84.4 },
];

function ProgressBar({ item }: { item: ActivityProgress }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{item.category}</span>
        <span className="text-sm text-gray-600">
          {item.implemented}/{item.planned} ({item.percentage.toFixed(1)}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 h-5 relative overflow-hidden">
        <div
          className="h-5 bg-green-600 transition-all duration-500 flex items-center justify-end pr-2"
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

export function ResponseActivities() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-3 text-gray-800">Response Activities</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
}
