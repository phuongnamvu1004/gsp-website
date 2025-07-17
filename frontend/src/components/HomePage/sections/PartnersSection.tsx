import styles from '../HomePage.module.scss';

export default function PartnersSection() {
  return (
    <section id="partners" className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        <h3 className={styles.partnersTitle}>Trusted by Industry Leaders</h3>
        <div className={styles.partnersGrid}>
          {Array.from({ length: 6 }, (_, i) => (
            <img
              key={i}
              src={`https://placehold.co/200x100/000000/4B5563?text=Partner+${i + 1}`}
              alt={`Partner logo ${i + 1}`}
              className={styles.partnerLogo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}