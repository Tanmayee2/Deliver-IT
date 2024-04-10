
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
import AboutPage from './pages/AboutPage/AboutPage';
import ChatPage from './pages/ChatPage/ChatPage';
import OrderListPage from './pages/OrderListPage/OrderListPage';
import DynamicPage from './pages/DynamicPage/DynamicPage';
<<<<<<< Updated upstream
import TrackingPage from './pages/TrackingPage/TrackingPage';
=======
import { UserProvider } from './UserContext';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
<<<<<<< Updated upstream
      <div className="App">
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage/>}/>
          <Route path="/Dashboard" element={<HomePage/>}/>
          <Route path="/StatusDelivery" element={<MapViewPage/>}/>
          <Route path="/LandingPage" element={<LandingPage/>}/>
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/ChatPage" element={<ChatPage/>}/>
          <Route path="/OrderListPage" element={<OrderListPage/>}/>
          <Route path="/DynamicPage" element={<DynamicPage/>}/>
          <Route path="/TrackingPage" element={<TrackingPage/>}/>
        </Routes>
      </div>
=======
      <UserProvider>
        <div className="App">
          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Dashboard" element={<HomePage />} />
            <Route path="/StatusDelivery" element={<MapViewPage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/ChatPage" element={<ChatPage />} />
            <Route path="/OrderListPage" element={<OrderListPage />} />
            <Route path="/DynamicPage" element={<DynamicPage />} />
          </Routes>
        </div>
      </UserProvider>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
