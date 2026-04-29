interface ActivityProgress {
  category: string;
  planned: number;
  implemented: number;
  percentage: number;
}

const hazardData: ActivityProgress[] = [
  { category: 'Cholera', planned: 45, implemented: 38, percentage: 84.4 },
  { category: 'Malaria', planned: 52, implemented: 41, percentage: 78.8 },
  { category: 'Measles', planned: 38, implemented: 35, percentage: 92.1 },
  { category: 'Ebola', planned: 28, implemented: 22, percentage: 78.6 },
  { category: 'Typhoid', planned: 32, implemented: 26, percentage: 81.3 },
];

const regionData: ActivityProgress[] = [
  { category: 'Dar es Salaam', planned: 65, implemented: 58, percentage: 89.2 },
  { category: 'Mwanza', planned: 48, implemented: 39, percentage: 81.3 },
  { category: 'Arusha', planned: 52, implemented: 44, percentage: 84.6 },
  { category: 'Dodoma', planned: 42, implemented: 35, percentage: 83.3 },
  { category: 'Mbeya', planned: 38, implemented: 30, percentage: 78.9 },
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
          className="h-5 bg-blue-600 transition-all duration-500 flex items-center justify-end pr-2"
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

export function ContingencyActivities() {
  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-3 text-gray-800">Contingency Activities</h3>

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
