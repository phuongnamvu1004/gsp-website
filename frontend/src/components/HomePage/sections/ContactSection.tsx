import styles from '../HomePage.module.scss';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.contactTitle}>Ready to Start Your Project?</h2>
        <p className={styles.contactDescription}>
          Let's talk about how we can bring your vision to life. Contact us today for a free consultation and quote.
        </p>
        <div className={styles.contactButtonWrapper}>
          <Link to="/contact" className={styles.contactButton}>Get In Touch</Link>
        </div>
      </div>
    </section>
  );
}