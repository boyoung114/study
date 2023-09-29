import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageLogin from './PageLogin';
import PageTimer from './PageTimer';
import PageScroll from './PageScroll';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<PageLogin />} />
          <Route path='/scroll' element={<PageScroll />} />
          <Route path='/timer' element={<PageTimer />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
