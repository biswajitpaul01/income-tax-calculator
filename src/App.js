import { useState } from 'react';
import { Tab } from './components/Tab';
import { HraExemption } from './components/tabs/HraExemption';
import { OldIncomeTax } from './components/tabs/OldIncomeTax';
import { tabs } from './config/tab';

function App() {
  const [activeTab, setActiveTab] = useState('oldIncomeTax');

  return (
    <div className="container py-3">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <h1>Useful Tax Related Calculators</h1>
          <ul className="nav nav-tabs">
            {tabs.map((tab) => (
              <Tab key={tab.key} activeTab={activeTab} tab={tab} setActiveTab={setActiveTab} />
            ))}
          </ul>

          <div className="py-3">
            {activeTab === 'oldIncomeTax' && <OldIncomeTax />}
            {activeTab === 'hraExemption' && <HraExemption />}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
