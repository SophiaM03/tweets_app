import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';
export const App = () => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
