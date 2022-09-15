import Intro from './pages/SplashScreen/Intro';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
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
