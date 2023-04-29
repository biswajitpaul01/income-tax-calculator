import { Suspense, useState } from 'react';
import styles from './App.module.scss';
import Loader from './components/Loader';
import { Tab } from './components/Tab';
import HraExemption from './components/tabs/HraExemption';
import OldIncomeTax from './components/tabs/OldIncomeTax';
import { tabs } from './config/tab';

function App() {
  const [activeTab, setActiveTab] = useState('oldIncomeTax');

  return (
    <div className="container mx-auto py-3">
      <div className="flex justify-center">
        <div className='w-11/12 lg:w-2/4'>
          <h1 className={`${styles.heading} text-teal-500 text-4xl font-semibold text-center`}>Useful Tax Related Calculators</h1>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              {tabs.map((tab) => (
                <Tab key={tab.key} activeTab={activeTab} tab={tab} setActiveTab={setActiveTab} />
              ))}
            </ul>
          </div>

          <div className="py-3">
            <Suspense fallback={<Loader />}>
              {activeTab === 'oldIncomeTax' && <OldIncomeTax />}
            </Suspense>
            <Suspense fallback={<Loader />}>
              {activeTab === 'hraExemption' && <HraExemption />}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
