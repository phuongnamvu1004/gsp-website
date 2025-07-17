import styles from '../HomePage.module.scss';

export default function WhyUsSection() {
  const features = [
    ["Expert Team", "Certified professionals with a passion for perfection."],
    ["Top-Tier Gear", "Inventory from industry-leading audio and lighting brands."],
    ["Custom Solutions", "Designs tailored to your specific vision, venue, and budget."],
    ["Reliable Support", "24/7 technical support to ensure a flawless execution."],
  ];

  return (
    <section id="why-us" className={styles.whyUsSection}>
      <div className={styles.whyUsContainer}>
        <h2 className={styles.whyUsTitle}>The GSP Advantage</h2>
        <p className={styles.whyUsSubtitle}>
          We combine cutting-edge technology with unparalleled service to guarantee your event's success.
        </p>
        <div className={styles.whyUsGrid}>
          {features.map(([title, desc], i) => (
            <div key={i} className={styles.whyUsCard}>
              <h3 className={styles.whyUsCardTitle}>{title}</h3>
              <p className={styles.whyUsCardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}