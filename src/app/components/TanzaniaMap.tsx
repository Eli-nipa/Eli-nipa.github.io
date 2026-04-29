import { useState } from 'react';

interface District {
  id: string;
  name: string;
  path: string;
  disease?: string;
  cases?: number;
  status: 'new' | 'ongoing' | 'closed' | 'none';
}

const districts: District[] = [
  // Northern Zone - Top regions
  { id: 'mara', name: 'Mara', path: 'M 145 45 L 165 42 L 182 48 L 188 62 L 180 75 L 162 78 L 148 72 L 142 58 Z', disease: 'Typhoid', cases: 33, status: 'new' },
  { id: 'kagera', name: 'Kagera', path: 'M 95 55 L 118 52 L 135 60 L 138 78 L 128 92 L 108 95 L 92 88 L 88 68 Z', status: 'none' },
  { id: 'arusha', name: 'Arusha', path: 'M 195 52 L 218 48 L 238 58 L 245 75 L 238 92 L 218 98 L 200 92 L 192 75 Z', disease: 'Malaria', cases: 102, status: 'new' },
  { id: 'kilimanjaro', name: 'Kilimanjaro', path: 'M 248 58 L 268 55 L 282 65 L 285 82 L 275 95 L 258 98 L 245 88 L 242 72 Z', disease: 'Measles', cases: 42, status: 'closed' },
  { id: 'tanga', name: 'Tanga', path: 'M 258 102 L 278 98 L 295 108 L 298 128 L 288 145 L 268 148 L 255 138 L 252 118 Z', disease: 'Cholera', cases: 73, status: 'ongoing' },

  // Lake Zone
  { id: 'mwanza', name: 'Mwanza', path: 'M 128 98 L 148 95 L 165 105 L 168 122 L 158 138 L 138 142 L 122 132 L 118 115 Z', disease: 'Cholera', cases: 87, status: 'ongoing' },
  { id: 'geita', name: 'Geita', path: 'M 102 98 L 120 95 L 135 105 L 138 122 L 128 138 L 108 142 L 95 132 L 92 115 Z', status: 'none' },
  { id: 'simiyu', name: 'Simiyu', path: 'M 165 108 L 185 105 L 202 115 L 205 132 L 195 148 L 175 152 L 162 142 L 158 125 Z', status: 'none' },
  { id: 'shinyanga', name: 'Shinyanga', path: 'M 138 145 L 158 142 L 175 152 L 178 168 L 168 185 L 148 188 L 132 178 L 128 162 Z', disease: 'Malaria', cases: 45, status: 'closed' },
  { id: 'manyara', name: 'Manyara', path: 'M 205 95 L 225 92 L 242 102 L 248 118 L 238 138 L 218 142 L 202 132 L 198 115 Z', disease: 'Malaria', cases: 58, status: 'new' },

  // Central Zone
  { id: 'tabora', name: 'Tabora', path: 'M 132 188 L 152 185 L 168 195 L 172 212 L 162 228 L 142 232 L 128 222 L 125 205 Z', disease: 'Malaria', cases: 61, status: 'new' },
  { id: 'singida', name: 'Singida', path: 'M 175 188 L 195 185 L 212 195 L 215 212 L 205 228 L 185 232 L 172 222 L 168 205 Z', status: 'none' },
  { id: 'dodoma', name: 'Dodoma', path: 'M 215 195 L 235 192 L 252 202 L 258 218 L 248 238 L 228 242 L 212 232 L 208 215 Z', disease: 'Cholera', cases: 68, status: 'ongoing' },

  // Western Zone
  { id: 'kigoma', name: 'Kigoma', path: 'M 82 125 L 102 122 L 118 132 L 122 148 L 112 165 L 92 168 L 78 158 L 75 142 Z', disease: 'Cholera', cases: 38, status: 'ongoing' },
  { id: 'katavi', name: 'Katavi', path: 'M 95 188 L 115 185 L 132 195 L 135 212 L 125 228 L 105 232 L 92 222 L 88 205 Z', status: 'none' },

  // Eastern Zone
  { id: 'pwani', name: 'Pwani (Coast)', path: 'M 252 205 L 272 202 L 288 215 L 295 235 L 285 255 L 265 258 L 248 248 L 245 228 Z', disease: 'Typhoid', cases: 92, status: 'ongoing' },
  { id: 'dar', name: 'Dar es Salaam', path: 'M 268 235 L 282 232 L 292 242 L 295 255 L 288 265 L 275 268 L 265 258 L 262 245 Z', disease: 'Cholera', cases: 145, status: 'new' },
  { id: 'morogoro', name: 'Morogoro', path: 'M 215 232 L 235 228 L 252 238 L 258 255 L 248 272 L 228 275 L 212 265 L 208 248 Z', disease: 'Malaria', cases: 91, status: 'new' },

  // Southern Highlands
  { id: 'rukwa', name: 'Rukwa', path: 'M 105 235 L 125 232 L 142 242 L 145 258 L 135 275 L 115 278 L 102 268 L 98 252 Z', disease: 'Cholera', cases: 29, status: 'ongoing' },
  { id: 'songwe', name: 'Songwe', path: 'M 115 280 L 135 278 L 152 288 L 155 305 L 145 322 L 125 325 L 112 315 L 108 298 Z', status: 'none' },
  { id: 'mbeya', name: 'Mbeya', path: 'M 142 275 L 162 272 L 178 282 L 182 298 L 172 315 L 152 318 L 138 308 L 135 292 Z', disease: 'Measles', cases: 54, status: 'closed' },
  { id: 'iringa', name: 'Iringa', path: 'M 185 265 L 205 262 L 222 272 L 225 288 L 215 305 L 195 308 L 182 298 L 178 282 Z', status: 'none' },
  { id: 'njombe', name: 'Njombe', path: 'M 195 310 L 215 308 L 232 318 L 235 335 L 225 352 L 205 355 L 192 345 L 188 328 Z', disease: 'Measles', cases: 34, status: 'closed' },

  // Southern Zone
  { id: 'ruvuma', name: 'Ruvuma', path: 'M 225 318 L 245 315 L 262 325 L 268 342 L 258 362 L 238 365 L 222 355 L 218 338 Z', disease: 'Cholera', cases: 45, status: 'ongoing' },
  { id: 'lindi', name: 'Lindi', path: 'M 248 275 L 268 272 L 285 282 L 292 298 L 282 318 L 262 322 L 245 312 L 242 295 Z', disease: 'Measles', cases: 29, status: 'closed' },
  { id: 'mtwara', name: 'Mtwara', path: 'M 262 325 L 282 322 L 298 332 L 302 348 L 292 365 L 272 368 L 258 358 L 255 342 Z', disease: 'Malaria', cases: 52, status: 'new' },
];

const statusColors = {
  new: '#ef4444',
  ongoing: '#f97316',
  closed: '#10b981',
  none: '#e5e7eb'
};

const statusLabels = {
  new: 'New Event',
  ongoing: 'Ongoing Event',
  closed: 'Closed Event',
  none: 'No Active Event'
};

export function TanzaniaMap() {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  return (
    <div className="bg-white border border-gray-300 p-3">
      <h3 className="text-xs font-semibold mb-2 text-gray-800">Geographic Distribution</h3>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-3 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3" style={{ backgroundColor: statusColors.new }}></div>
          <span>New Event</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3" style={{ backgroundColor: statusColors.ongoing }}></div>
          <span>Ongoing Event</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3" style={{ backgroundColor: statusColors.closed }}></div>
          <span>Closed Event</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3" style={{ backgroundColor: statusColors.none }}></div>
          <span>No Event</span>
        </div>
      </div>

      <div className="relative">
        <svg viewBox="0 0 380 420" className="w-full h-auto bg-gray-50 rounded-lg">
          {/* Tanzania mainland outline */}
          <path
            d="M 88 50 L 140 38 L 190 42 L 245 52 L 285 68 L 302 95 L 305 130 L 298 165 L 295 200 L 302 240 L 305 280 L 298 320 L 285 355 L 258 375 L 220 385 L 180 378 L 145 365 L 115 345 L 95 315 L 85 280 L 82 240 L 88 200 L 92 160 L 88 120 L 85 85 Z"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
          />

          {/* Lake Victoria */}
          <ellipse cx="125" cy="88" rx="35" ry="32" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5" />

          {/* Lake Tanganyika (western border) */}
          <path d="M 72 145 Q 68 180 72 215 Q 75 250 80 285" fill="none" stroke="#60a5fa" strokeWidth="8" />
          <path d="M 72 145 Q 68 180 72 215 Q 75 250 80 285" fill="none" stroke="#bfdbfe" strokeWidth="6" />

          {/* Lake Nyasa (southwestern) */}
          <path d="M 140 335 Q 145 350 148 365 Q 150 380 148 390" fill="none" stroke="#60a5fa" strokeWidth="6" />
          <path d="M 140 335 Q 145 350 148 365 Q 150 380 148 390" fill="none" stroke="#bfdbfe" strokeWidth="4" />

          {/* Indian Ocean (eastern border) */}
          <rect x="305" y="95" width="75" height="285" fill="#dbeafe" opacity="0.3" />

          {/* District shapes */}
          {districts.map((district) => (
            <path
              key={district.id}
              d={district.path}
              fill={statusColors[district.status]}
              stroke="#9ca3af"
              strokeWidth="1"
              opacity={hoveredDistrict === district.id ? 1 : 0.85}
              onMouseEnter={() => setHoveredDistrict(district.id)}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all hover:stroke-gray-700 hover:stroke-2"
            />
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredDistrict && (
          <div className="absolute top-2 right-2 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-4 max-w-xs z-10">
            {districts
              .filter((d) => d.id === hoveredDistrict)
              .map((district) => (
                <div key={district.id}>
                  <p className="font-semibold text-lg mb-2">{district.name}</p>
                  {district.disease && district.cases ? (
                    <>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="text-gray-600">Disease:</span>{' '}
                          <span className="font-medium">{district.disease}</span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Cases:</span>{' '}
                          <span className="font-medium">{district.cases}</span>
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Status:</span>{' '}
                          <span
                            className="font-semibold px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: statusColors[district.status] + '20',
                              color: statusColors[district.status]
                            }}
                          >
                            {statusLabels[district.status]}
                          </span>
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No active disease events</p>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
