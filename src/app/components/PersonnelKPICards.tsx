export function PersonnelKPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      {/* Total Trained Personnel */}
      <div className="bg-white border border-gray-300 p-4">
        <p className="text-xs text-gray-600 mb-1">Total Trained Personnel</p>
        <p className="text-4xl font-semibold text-blue-700 mb-2">2,847</p>
        <p className="text-xs text-gray-600 mb-2">Across all programs and regions</p>
        <div className="pt-2 border-t border-gray-200">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">vs. Last Month</span>
            <span className="font-semibold text-green-700">+12.5%</span>
          </div>
        </div>
      </div>

      {/* Total Deployed Personnel */}
      <div className="bg-white border border-gray-300 p-4">
        <p className="text-xs text-gray-600 mb-1">Total Deployed Personnel</p>
        <p className="text-4xl font-semibold text-green-700 mb-2">1,923</p>
        <p className="text-xs text-gray-600 mb-2">Currently active in field operations</p>
        <div className="pt-2 border-t border-gray-200">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Deployment Rate</span>
            <span className="font-semibold text-blue-700">67.5%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
