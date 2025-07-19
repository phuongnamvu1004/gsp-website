import styles from '../HomePage.module.scss';

export default function SolutionsSection() {
  return (
    <section id="solutions" className={styles.solutionsSection}>
      <div className={styles.solutionsContainer}>
        <h2 className={styles.solutionsTitle}>Dịch vụ của chúng tôi</h2>
        <p className={styles.solutionsSubtitle}>
          We provide end-to-end services across a variety of categories. Each solution is tailored to the unique demands of your project.
        </p>
        <div className={styles.solutionCardGrid}>
          {[
            {
              title: "Live Event Production",
              description: "Comprehensive sound, lighting, and video for concerts, corporate events, and festivals.",
              alt: "Live Events Icon",
            },
            {
              title: "System Integration",
              description: "Permanent AV installations for venues, houses of worship, and commercial spaces.",
              alt: "System Integration Icon",
            },
            {
              title: "Equipment Rental",
              description: "Professional-grade audio, video, and lighting equipment for your own productions.",
              alt: "Equipment Rental Icon",
            },
          ].map((item, idx) => (
            <div className={styles.solutionCard} key={idx}>
              <img
                src="https://placehold.co/100x100/1F2937/4B5563?text=ICON"
                alt={item.alt}
                className={styles.solutionIcon}
              />
              <h3 className={styles.solutionTitle}>{item.title}</h3>
              <p className={styles.solutionDescription}>{item.description}</p>
              <a href="/" className={styles.solutionLink}>Details &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}