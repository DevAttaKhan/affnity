import Intro from './pages/SplashScreen/Intro';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getEmployee } from './store/feature/employee/employee';

function App() {
  const dispatch = useDispatch();

  const emp = useSelector((state) => state.employee);
  console.log(emp);
  useEffect(() => {
    dispatch(getEmployee());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="dashboard/*" element={<AppRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
