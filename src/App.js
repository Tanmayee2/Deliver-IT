
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';
import MapViewPage from './pages/MapViewPage/MapViewPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage/>}/>
          <Route path="/Dashboard" element={<HomePage/>}/>
          <Route path="/StatusDelivery" element={<MapViewPage/>}/>
          <Route path="/LandingPage" element={<LandingPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
