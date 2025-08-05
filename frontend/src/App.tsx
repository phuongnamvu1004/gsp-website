import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Services from './pages/Services.tsx';
import Courses from './pages/Courses.tsx';

export default function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/solutions/*" element={<Services />} />
          <Route path="/courses/*" element={<Courses />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}