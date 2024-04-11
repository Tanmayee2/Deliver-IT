
import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { UserProvider } from './UserContext';
import LandingPageCustomer from "./pages/LandingPage/LandingPageCustomer";
import LandingPageDriver from "./pages/LandingPage/LandingPageDriver";
import LandingPageManager from "./pages/LandingPage/LandingPageManager";
import MapViewPageCustomer from "./pages/MapViewPage/MapViewPageCustomer";
import MapViewPageDriver from "./pages/MapViewPage/MapViewPageDriver";
import MapViewPageManager from "./pages/MapViewPage/MapViewPageManager";
import SearchPageCustomer from "./pages/SearchPage/SearchPageCustomer";
import SearchPageManager from "./pages/SearchPage/SearchPageManager";

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/landingpage/customer" element={<LandingPageCustomer />} />
                    <Route path="/landingpage/driver" element={<LandingPageDriver />} />
                    <Route path="/landingpage/manager" element={<LandingPageManager />} />
                    <Route path="/mapview/customer" element={<MapViewPageCustomer />} />
                    <Route path="/mapview/driver" element={<MapViewPageDriver />} />
                    <Route path="/mapview/manager" element={<MapViewPageManager />} />
                    <Route path="/search/customer" element={<SearchPageCustomer />} />
                    <Route path="/search/manager" element={<SearchPageManager />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;