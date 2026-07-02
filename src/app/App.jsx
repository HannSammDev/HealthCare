import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Layout from '../Layout';
import { Dash_Board } from '../dashboard';
import { Overview } from '../pages/Dashboard/Overview/Overview';
import { Test } from '../pages/test';
import { NotFoundPage } from '../pages/NotFoundPage';

const dashboardRoutes = [
  { path: '/overview', element: <Overview /> },
  { path: '/test', element: <Test /> },
];

export const App = () => (
  <PrimeReactProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route element={<Dash_Board />}>
          {dashboardRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </PrimeReactProvider>
);

export default App;
