import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/gsp-logo.jpg';
import NavbarWave from './NavbarWave';

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const [normalizedX, setNormalizedX] = useState(0);

  useEffect(() => {
    if (!navRef.current) return;

    const links = Array.from(navRef.current.querySelectorAll('.nav-link')) as HTMLElement[];
    const activeLink = links.find(link => link.dataset.path === location.pathname);

    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const containerRect = navRef.current.getBoundingClientRect();
      const centerX = rect.left - containerRect.left + rect.width / 2;

      // Normalize to 1440 width (your SVG viewBox width)
      const normalized = (centerX / containerRect.width) * 1440;
      setNormalizedX(normalized);
    }
  }, [location.pathname]);

  return (
    <nav ref={navRef} className="relative h-20 bg-black text-white overflow-hidden">
      {/* ✅ Pass normalizedX, not raw activeX */}
      <NavbarWave activeX={normalizedX}/>

      <div className="relative z-10 flex items-center justify-between h-full px-12 font-sans">

        {/* Left: Logo + Title */}
        <Link
          to="/"
          className="nav-link flex items-center space-x-4 min-w-[250px]"
          data-path="/"
        >
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          <div className="leading-tight">
            <div className="text-xl font-bold">GSP Reinforcement</div>
            <div className="text-xs text-gray-400 tracking-wide">We see the sound. We hear the light.</div>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-12 text-base font-semibold uppercase tracking-wide">
            <Link
              to="/about"
              className={`nav-link w-24 text-center ${location.pathname === "/about" ? "active" : ""}`}
              data-path="/about"
            >
              Giới thiệu
            </Link>

            <Link
              to="/solutions"
              className={`nav-link w-24 text-center ${location.pathname === "/solutions" ? "active" : ""}`}
              data-path="/solutions"
            >
              Dịch vụ
            </Link>

            <Link
              to="/blog"
              className={`nav-link w-24 text-center ${location.pathname === "/blog" ? "active" : ""}`}
              data-path="/blog"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className="min-w-[250px] flex justify-end">
          <Link
            to="/contact"
            className="border border-white px-6 py-2 rounded-full text-sm font-semibold uppercase hover:bg-white hover:text-black transition"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </nav>
  );
}