import { Link } from "react-router-dom";
import styles from "../HomePage.module.scss";
import ourTeamImage from "../../../assets/our-team.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={ourTeamImage}
              alt="GSP Reinforcement Team"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className={`${styles.sectionTitle} leading-tight`}>
              <span className="text-3xl md:text-4xl font-semibold text-white">
                Hơn <span className="text-5xl font-bold text-white">10 năm</span> kinh nghiệm
              </span>
              <br />
              <span className=" font-extrabold text-2xl md:text-3xl block mt-1">
                trong lĩnh vực&nbsp;
                <span className="text-[#00D9FF] inline-block">
                  Âm thanh – Ánh sáng chuyên nghiệp
                </span>
              </span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              Chúng tôi mang đến giải pháp âm thanh – ánh sáng hiện đại, phù hợp cho mọi sự kiện. Blah blah blah
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block text-[#00D9FF] font-semibold hover:text-blue-300 transition-colors"
            >
              Xem thêm về câu chuyện của chúng tôi &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}