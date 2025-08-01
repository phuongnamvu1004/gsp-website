import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}