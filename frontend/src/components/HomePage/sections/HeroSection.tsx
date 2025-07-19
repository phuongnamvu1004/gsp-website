import { Link } from "react-router-dom";
import styles from "../HomePage.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
          We See The Sound. <br className="hidden md:block" /> We Hear The{" "}
          <span className="gsp-light">Light.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Delivering state-of-the-art audio-visual solutions for unforgettable
          events and permanent installations.
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <Link to="/solutions" className={styles.ctaButton}>
            Tham khảo dịch vụ
          </Link>
          <Link to="/contact" className={styles.secondaryButton}>
            Nhận báo giá
          </Link>
        </div>
      </div>
    </section>
  );
}