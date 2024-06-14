import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Loader from 'components/Loader/Loader';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const DocumentPage = lazy(() => import('./pages/DocumentPage/DocumentPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const HelpRequestPage = lazy(() => import('./pages/HelpRequestPage/HelpRequestPage'));
const HelpOfferPage = lazy(() => import('./pages/HelpOfferPage/HelpOfferPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage/PrivacyPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const PanelPage = lazy(() => import('./pages/AdminPages/PanelPage/PanelPage'));
const MonoPage = lazy(() => import('./pages/AdminPages/MonoPage/MonoPage'));
const AchievementsPage = lazy(() => import('./pages/AdminPages/AchievementsPage/AchievementsPage'));
const DocsPage = lazy(() => import('./pages/AdminPages/DocsPage/DocsPage'));
const LogoPage = lazy(() => import('./pages/AdminPages/LogoPage/LogoPage'));

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/bankdetails" element={<DetailsPage/>}/>
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="/documents" element={<DocumentPage/>}/>
            <Route path='/request' element={<HelpRequestPage/>}/>
            <Route path='/offer' element={<HelpOfferPage/>}/>
            <Route path='/privacy' element={<PrivacyPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path="/admin/panel" element={<PanelPage/>}/>
              <Route path="/admin/mono/edit" element={<MonoPage/>}/>
              <Route path="/admin/achievements/edit" element={<AchievementsPage/>}/>
              <Route path="/admin/docs/edit" element={<DocsPage/>}/> 
              <Route path="/admin/logo/edit" element={<LogoPage/>}/>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;