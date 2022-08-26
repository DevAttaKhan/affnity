import Intro from "./pages/SplashScreen/Intro";


import "./App.scss";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ProtectedRoute from "./ProtectedRoutes";

function App() {


  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route element={<ProtectedRoute/>}>

        <Route path="dashboard/*" element={<AppRoutes />} />

        </Route>
    
   
      </Routes>
    </div>
  );
}

export default App;
