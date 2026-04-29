import { Filter } from 'lucide-react';

interface PersonnelFiltersProps {
  hazardType: string;
  trainingType: string;
  pillar: string;
  geography: string;
  organizationType: string;
  onHazardTypeChange: (value: string) => void;
  onTrainingTypeChange: (value: string) => void;
  onPillarChange: (value: string) => void;
  onGeographyChange: (value: string) => void;
  onOrganizationTypeChange: (value: string) => void;
}

export function PersonnelFilters({
  hazardType,
  trainingType,
  pillar,
  geography,
  organizationType,
  onHazardTypeChange,
  onTrainingTypeChange,
  onPillarChange,
  onGeographyChange,
  onOrganizationTypeChange,
}: PersonnelFiltersProps) {
  return (
    <div className="bg-white border border-gray-300 p-4 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="w-4 h-4 text-gray-600" />
        <h3 className="text-sm font-semibold text-gray-800">Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Hazard Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hazard Type</label>
          <select
            value={hazardType}
            onChange={(e) => onHazardTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="vhf">VHF</option>
            <option value="mpox">Mpox</option>
            <option value="na">N/A</option>
          </select>
        </div>

        {/* Training Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Training Type</label>
          <select
            value={trainingType}
            onChange={(e) => onTrainingTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="basic">Basic Training</option>
            <option value="advanced">Advanced Training</option>
            <option value="specialized">Specialized Training</option>
            <option value="refresher">Refresher Course</option>
          </select>
        </div>

        {/* Pillar (Competency) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pillar (Competency)</label>
          <select
            value={pillar}
            onChange={(e) => onPillarChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="surveillance">Surveillance</option>
            <option value="laboratory">Laboratory</option>
            <option value="case-management">Case Management</option>
            <option value="risk-communication">Risk Communication</option>
            <option value="logistics">Logistics</option>
          </select>
        </div>

        {/* Geography */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Geography</label>
          <select
            value={geography}
            onChange={(e) => onGeographyChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="national">National</option>
            <option value="region">Region</option>
            <option value="council">Council</option>
          </select>
        </div>

        {/* Organization Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type</label>
          <select
            value={organizationType}
            onChange={(e) => onOrganizationTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="government">Government</option>
            <option value="ngo">NGO</option>
            <option value="who">WHO</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
    </div>
  );
}
