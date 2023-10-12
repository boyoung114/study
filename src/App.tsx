import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Layout = lazy(() => import('./Layout'));
const PageLogin = lazy(() => import('./page/PageLogin'));
const PageScroll = lazy(() => import('./page/PageTimer'));
const PageTimer = lazy(() => import('./page/PageScroll'));
const PageCart = lazy(() => import('./page/PageCart'));
const PageCalculator = lazy(() => import('./page/PageCalculator'));
const PagePromise = lazy(() => import('./page/PagePromise'));

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<PageLogin />} />
          <Route path='/scroll' element={<PageScroll />} />
          <Route path='/timer' element={<PageTimer />} />
          <Route path='/calculator' element={<PageCalculator />} />
          <Route path='/cart' element={<PageCart />} />
          <Route path='/promise' element={<PagePromise />} />
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
