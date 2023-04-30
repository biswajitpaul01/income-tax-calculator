import { lazy } from 'react';

export const OldIncomeTax = lazy(() => import('./components/tabs/OldIncomeTax'));
export const NewIncomeTax = lazy(() => import('./components/tabs/NewIncomeTax'));
export const HraExemption = lazy(() => import('./components/tabs/HraExemption'));
