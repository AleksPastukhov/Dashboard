import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import GlobalStyle from '../../GlobalStyle';
import { getData } from '../../services/vindevApi';

const SingUp = lazy(() => import('../../views/SingUp'));
const Home = lazy(() => import('../../views/Home/Home'));
const LogIn = lazy(() => import('../../views/LogIn'));
const NotFound = lazy(() => import('../../views/NotFound/NotFound'));

getData().then(console.log);

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<SingUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};
