import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Services from './pages/Services.tsx'
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/solutions/*" element={<Services />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}