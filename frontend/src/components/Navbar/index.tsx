import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/gsp-logo.jpg';
import NavbarWave from './NavbarWave.tsx';
import NavbarDropdown from './NavbarDropdown';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const [normalizedX, setNormalizedX] = useState(0);

  useEffect(() => {
    if (!navRef.current) return;

    const links = Array.from(navRef.current.querySelectorAll('.nav-link')) as HTMLElement[];
    const activeLink = links.find(link =>
      location.pathname === link.dataset.path || location.pathname.startsWith(link.dataset.path + "/")
    );
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const containerRect = navRef.current.getBoundingClientRect();
      const centerX = rect.left - containerRect.left + rect.width / 2;
      console.log(`Active link: ${activeLink.dataset.path}, Center X: ${centerX}`);

      // Normalize to 1440 width (your SVG viewBox width)
      const normalized = (centerX / containerRect.width) * 1440;
      setNormalizedX(normalized);
    }
  }, [location.pathname]);

  return (
    <nav ref={navRef} className={styles.navbar}>
      {/*  Pass normalizedX, not raw activeX */}
      <NavbarWave activeX={normalizedX}/>

      <div className={styles.navbarContent}>

        {/* Left: Logo + Title */}
        <Link
          to="/"
          className={`${styles.logoContainer} nav-link`}
          data-path="/"
        >
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain"/>
          <div className={styles.logoTitle}>
            <div className={styles.mainTitle}>GSP Reinforcement</div>
            <div className={styles.subtitle}>We see the sound. We hear the light.</div>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-12 text-base font-semibold uppercase tracking-wide">
            <Link
              to="/about"
              className={`nav-link ${styles.navLink} ${location.pathname === "/about" ? "active" : ""}`}
              data-path="/about"
            >
              Giới thiệu
            </Link>

            <NavbarDropdown label="Dịch vụ" path={"/solutions"}>
              <Link
                to="/solutions/consulting"
                className="block !text-white font-bold text-sm px-3 py-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white/10"
              >
                BOH
              </Link>
              <Link
                to="/solutions/maintenance"
                className="block !text-white font-bold text-sm px-3 py-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white/10"
              >
                FOH
              </Link>
            </NavbarDropdown>

            <Link
              to="/blog"
              className={`nav-link ${styles.navLink} ${location.pathname === "/blog" ? "active" : ""}`}
              data-path="/blog"
            >
              Blog
            </Link>

            {/*<Link*/}
            {/*  to="/courses"*/}
            {/*  className={`nav-link ${styles.navLink} ${location.pathname === "/courses" ? "active" : ""}`}*/}
            {/*  data-path="/courses"*/}
            {/*>*/}
            {/*  Khoá học*/}
            {/*</Link>*/}

            <NavbarDropdown label="Khoá học" path={"/courses"}>
              <Link
                to="/courses/basic"
                className="block !text-white font-bold text-sm px-3 py-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white/10"
              >
                Lớp học cơ bản
              </Link>
              <Link
                to="/courses/advanced"
                className="block !text-white font-bold text-sm px-3 py-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white/10"
              >
                Lớp học nâng cao
              </Link>
            </NavbarDropdown>
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className={styles.ctaContainer}>
          <Link
            to="/contact"
            className={styles.ctaButton}
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </nav>
  );
}