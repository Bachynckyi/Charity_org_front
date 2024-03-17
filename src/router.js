import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Footer from 'components/Footer/Footer';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));

const UserRoutes = () => {
  return (
    <>
      <SharedLayout/>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
};

export default UserRoutes;