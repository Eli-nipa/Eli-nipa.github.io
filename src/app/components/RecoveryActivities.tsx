interface ActivityProgress {
  category: string;
  planned: number;
  implemented: number;
  percentage: number;
}

const hazardData: ActivityProgress[] = [
  { category: 'Cholera', planned: 32, implemented: 26, percentage: 81.3 },
  { category: 'Malaria', planned: 38, implemented: 29, percentage: 76.3 },
  { category: 'Measles', planned: 28, implemented: 24, percentage: 85.7 },
  { category: 'Ebola', planned: 22, implemented: 16, percentage: 72.7 },
  { category: 'Typhoid', planned: 25, implemented: 20, percentage: 80.0 },
];

const regionData: ActivityProgress[] = [
  { category: 'Dar es Salaam', planned: 48, implemented: 41, percentage: 85.4 },
  { category: 'Mwanza', planned: 38, implemented: 30, percentage: 78.9 },
  { category: 'Arusha', planned: 42, implemented: 35, percentage: 83.3 },
  { category: 'Dodoma', planned: 35, implemented: 28, percentage: 80.0 },
  { category: 'Mbeya', planned: 32, implemented: 24, percentage: 75.0 },
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
          className="h-5 bg-gray-600 transition-all duration-500 flex items-center justify-end pr-2"
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

export function RecoveryActivities() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-3 text-gray-800">Recovery Activities</h3>

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
