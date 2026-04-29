const kpis = [
  { label: 'Active Events', value: '127', color: 'text-orange-700' },
  { label: 'New Events', value: '23', color: 'text-red-700' },
  { label: 'Signals Received', value: '456', color: 'text-blue-700' },
  { label: 'Signals Verified', value: '289', color: 'text-green-700' },
  { label: 'Events Under Investigation', value: '45', color: 'text-gray-700' },
  { label: 'Events Closed', value: '82', color: 'text-gray-600' },
  { label: 'Total Cases', value: '1,834', color: 'text-blue-700' },
  { label: 'Total Deaths', value: '156', color: 'text-red-700' },
  { label: 'CFR', value: '8.5%', color: 'text-gray-700' },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-2">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="bg-white border border-gray-300 p-2.5">
          <div className="text-xs text-gray-600 mb-0.5">{kpi.label}</div>
          <div className={`text-2xl font-semibold ${kpi.color}`}>{kpi.value}</div>
        </div>
      ))}
    </div>
  );
}
