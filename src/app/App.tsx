import { useState } from 'react';
import { TopNavigation } from './components/TopNavigation';
import { LeftSidebar } from './components/LeftSidebar';
import { KPICards } from './components/KPICards';
import { EventsOverview } from './components/EventsOverview';
import { SignalsAnalysis } from './components/SignalsAnalysis';
import { SignalConversion } from './components/SignalConversion';
import { CasesAndDeaths } from './components/CasesAndDeaths';
import { CFRTrend } from './components/CFRTrend';
import { TanzaniaMap } from './components/TanzaniaMap';
import { BedOccupancy } from './components/BedOccupancy';
import { AverageLengthOfStay } from './components/AverageLengthOfStay';
import { AttackRate } from './components/AttackRate';
import { EpiCurve } from './components/EpiCurve';
import { TimeToVerification } from './components/TimeToVerification';
import { ContingencyActivities } from './components/ContingencyActivities';
import { ResponseActivities } from './components/ResponseActivities';
import { RecoveryActivities } from './components/RecoveryActivities';
import { PillarMeetings } from './components/PillarMeetings';
import { PersonnelFilters } from './components/PersonnelFilters';
import { PersonnelKPICards } from './components/PersonnelKPICards';
import { TrainedPersonnelChart } from './components/TrainedPersonnelChart';
import { DeployedPersonnelChart } from './components/DeployedPersonnelChart';
import { TrainingDistribution } from './components/TrainingDistribution';
import { PersonnelByHazard } from './components/PersonnelByHazard';

type TabType = 'surveillance' | 'activities' | 'personnel';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('surveillance');

  // Personnel filters state
  const [hazardType, setHazardType] = useState('all');
  const [trainingType, setTrainingType] = useState('all');
  const [pillar, setPillar] = useState('all');
  const [geography, setGeography] = useState('region');
  const [organizationType, setOrganizationType] = useState('all');

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Top Navigation - Fixed */}
      <TopNavigation />

      {/* Main Layout: Sidebar + Content - Account for fixed navbar */}
      <div className="flex flex-1 overflow-hidden pt-14">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto bg-white">
          <div className="p-5">
            {/* Page Title */}
            <div className="mb-4">
              <h1 className="text-lg font-semibold text-gray-800">PHEOC General Dashboard</h1>
            </div>

            {/* Tab Navigation - Pill Style */}
            <div className="mb-5">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('surveillance')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    activeTab === 'surveillance'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Surveillance
                </button>
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    activeTab === 'activities'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Activities & Finance
                </button>
                <button
                  onClick={() => setActiveTab('personnel')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    activeTab === 'personnel'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Commodities & Personnel
                </button>
              </div>
            </div>

            {/* Surveillance Tab */}
            {activeTab === 'surveillance' && (
              <div className="space-y-3">
                {/* KPI Panels */}
                <KPICards />

                {/* Row 1: Map and CFR Trend */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <TanzaniaMap />
                  <CFRTrend />
                </div>

                {/* Row 2: Events and Signals */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <EventsOverview />
                  <SignalsAnalysis />
                </div>

                {/* Row 3: Cases and Epi Curve */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <CasesAndDeaths />
                  <EpiCurve />
                </div>

                {/* Row 4: Bed Occupancy and Attack Rate */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <BedOccupancy />
                  <AttackRate />
                </div>

                {/* Row 5: Signal Conversion and Time to Verification */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <SignalConversion />
                  <TimeToVerification />
                </div>

                {/* Row 6: Length of Stay */}
                <div className="grid grid-cols-1 gap-3">
                  <AverageLengthOfStay />
                </div>
              </div>
            )}

            {/* Activities & Finance Tab */}
            {activeTab === 'activities' && (
              <div className="space-y-3">
                {/* Row 1: Contingency and Response */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <ContingencyActivities />
                  <ResponseActivities />
                </div>

                {/* Row 2: Recovery Activities */}
                <div className="grid grid-cols-1 gap-3">
                  <RecoveryActivities />
                </div>

                {/* Row 3: Pillar Meetings */}
                <div className="grid grid-cols-1 gap-3">
                  <PillarMeetings />
                </div>
              </div>
            )}

            {/* Commodities & Personnel Tab */}
            {activeTab === 'personnel' && (
              <div className="space-y-3">
                {/* Filters */}
                <PersonnelFilters
                  hazardType={hazardType}
                  trainingType={trainingType}
                  pillar={pillar}
                  geography={geography}
                  organizationType={organizationType}
                  onHazardTypeChange={setHazardType}
                  onTrainingTypeChange={setTrainingType}
                  onPillarChange={setPillar}
                  onGeographyChange={setGeography}
                  onOrganizationTypeChange={setOrganizationType}
                />

                {/* KPI Panels */}
                <PersonnelKPICards />

                {/* Row 1: Trained and Deployed Personnel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <TrainedPersonnelChart />
                  <DeployedPersonnelChart />
                </div>

                {/* Row 2: Supporting Visuals */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <TrainingDistribution />
                  <PersonnelByHazard />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
