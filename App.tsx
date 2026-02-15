
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './views/Dashboard';
import Ideas from './views/Ideas';
import Calendar from './views/Calendar';
import Sponsorships from './views/Sponsorships';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'ideas':
        return <Ideas />;
      case 'calendar':
        return <Calendar />;
      case 'sponsorships':
        return <Sponsorships />;
      case 'analytics':
        return (
          <div className="flex items-center justify-center h-full text-slate-500 italic">
            Integración de analíticas pendiente de la API de YouTube...
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
