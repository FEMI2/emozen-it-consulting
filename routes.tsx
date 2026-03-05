import { createBrowserRouter } from 'react-router';
import { MainSite } from './pages/MainSite';
import { PortalPage } from './pages/PortalPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainSite,
  },
  {
    path: '/portal',
    Component: PortalPage,
  },
  {
    path: '*',
    Component: MainSite,
  },
]);