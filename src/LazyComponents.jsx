import { lazy } from 'react';

const componentMap = {
    oldIncomeTax: lazy(() => import('./components/tabs/OldIncomeTax')),
    newIncomeTax: lazy(() => import('./components/tabs/NewIncomeTax')),
    hraExemption: lazy(() => import('./components/tabs/HraExemption')),
};

const getComponent = (componentName) => {
    const Component = componentMap[componentName];
    return <Component />;
};

export default getComponent;