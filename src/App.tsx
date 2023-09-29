import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
//import Layout from './Layout';
// import PageLogin from './PageLogin';
// import PageTimer from './PageTimer';
// import PageScroll from './PageScroll';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PageCalculator from './PageCalculator';

const Layout = lazy(() => import('./Layout'));
const PageLogin = lazy(() => import('./PageLogin'));
const PageScroll = lazy(() => import('./PageTimer'));
const PageTimer = lazy(() => import('./PageScroll'));

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
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
