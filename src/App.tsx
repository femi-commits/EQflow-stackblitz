import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { DailyChallenge } from './components/DailyChallenge';
import { Scenarios } from './components/Scenarios';
import { ReflectionJournal } from './components/ReflectionJournal';
import { EventsBriefing } from './components/EventsBriefing';
import { ProgressTracking } from './components/ProgressTracking';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  // Mock user data - in a real app, this would come from an API/database
  const userData = {
    streak: 7,
    level: 3,
    todayCompleted: false,
    weeklyScore: 85,
    totalScenarios: 23
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard currentView={currentView} setCurrentView={setCurrentView} userData={userData} />;
      case 'challenge':
        return <DailyChallenge setCurrentView={setCurrentView} />;
      case 'scenarios':
        return <Scenarios setCurrentView={setCurrentView} />;
      case 'journal':
        return <ReflectionJournal setCurrentView={setCurrentView} />;
      case 'events':
        return <EventsBriefing setCurrentView={setCurrentView} />;
      case 'progress':
        return <ProgressTracking setCurrentView={setCurrentView} />;
      default:
        return <Dashboard currentView={currentView} setCurrentView={setCurrentView} userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 p-8">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;