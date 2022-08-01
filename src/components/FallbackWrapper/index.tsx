import { Suspense, FC, ReactNode } from 'react';
import Loader from '../Loader';

const FallbackWrapper:FC<{children: ReactNode}> = ({ children }) => (
  <Suspense fallback={<Loader />}>
    {children}
  </Suspense>
);

export default FallbackWrapper;
