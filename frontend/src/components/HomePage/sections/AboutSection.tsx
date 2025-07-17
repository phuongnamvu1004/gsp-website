import { Link } from "react-router-dom";
import styles from "../HomePage.module.scss";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://placehold.co/600x400/000000/FFFFFF?text=Our+Team"
              alt="GSP Reinforcement Team"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className={styles.sectionTitle}>
              Decades of Experience in{" "}
              <span className="text-blue-500">Audio-Visual Excellence</span>
            </h2>
            <p className="mt-6 text-gray-400">
              GSP Reinforcement was founded on the principle of technical
              mastery and creative passion. We are a team of engineers,
              designers, and technicians dedicated to pushing the boundaries
              of what's possible in sound, light, and video.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              Learn More About Our Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}