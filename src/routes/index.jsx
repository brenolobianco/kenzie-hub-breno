
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';

const RoutesMain = () => (
    <Routes>
    <Route path="*" element={ <Login/> } />
    <Route path="/register" element={ <Register/> } />
   
    <Route path="/dashboard" element={ <Dashboard/> } />
    

  </Routes>
);

export default RoutesMain;

