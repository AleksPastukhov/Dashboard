import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import GlobalStyle from '../../GlobalStyle';
import { getData } from '../../services/vindevApi';

const SingUp = lazy(() => import('../../views/SingUp/SingUp'));
const Home = lazy(() => import('../../views/Home/Home'));
const LogIn = lazy(() => import('../../views/LogIn/LogIn'));
const NotFound = lazy(() => import('../../views/NotFound/NotFound'));

export const App = () => {
  getData().then(console.log);
  return (
    <>
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
