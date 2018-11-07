import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';

const withLazyLoad = (dynamicImportCallback) => {
  if (typeof dynamicImportCallback !== 'function') {
    throw new Error('A callback which returns a dynamic import should be passed to withLazyLoad');
  }

  const Component = lazy(dynamicImportCallback);

  return props => (
    <Suspense fallback={<Loading {...props} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withLazyLoad;
