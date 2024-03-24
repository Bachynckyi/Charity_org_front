import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Footer from 'components/Footer/Footer';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage/ProjectPage'));
const DocumentPage = lazy(() => import('./pages/DocumentPage/DocumentPage'));

const UserRoutes = () => {
  return (
    <>
      <SharedLayout/>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/contacts" element={<ContactsPage/>}></Route>
          <Route path="/details" element={<DetailsPage/>}></Route>
          <Route path="/news" element={<NewsPage/>}></Route>
          <Route path="/projects" element={<ProjectPage/>}></Route>
          <Route path="/documents" element={<DocumentPage/>}></Route>
        </Routes>
        <Footer/>
      </Suspense>

    </>
  );
};

export default UserRoutes;