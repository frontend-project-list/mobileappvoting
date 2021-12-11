import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Candidates from './pages/Candidates';
import Report from './pages/Report';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account222', element: <Account /> },
      { path: 'students', element: <CustomerList /> },
      // { path: 'dashboard', element: <Dashboard /> },
      { path: 'results', element: <ProductList /> },
      { path: 'settingsjj', element: <Settings /> },
      { path: 'candidates', element: <Candidates /> },
      { path: 'report', element: <Report />},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register2', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/students" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
