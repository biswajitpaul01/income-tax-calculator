import { initFlowbite } from 'flowbite';
import { Suspense, useEffect, useState } from 'react';
import styles from './App.module.scss';
import getComponent from './LazyComponents';
import Loader from './components/Loader';
import { Tab } from './components/slices/Tab';
import { tabs } from './config/tab';

function App() {
  const [activeTab, setActiveTab] = useState('oldIncomeTax');

  useEffect(() => {
    initFlowbite();
  }, [activeTab]);

  return (
    <div className="container mx-auto py-3">
      <div className="flex justify-center">
        <div className='w-11/12 md:max lg:10/12 xl:w-3/4 2xl:w-3/5'>
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
              {getComponent(activeTab)}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
