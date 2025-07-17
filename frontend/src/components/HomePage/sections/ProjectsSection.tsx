import styles from '../HomePage.module.scss';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>Proven Experience</h2>
        <p className={styles.projectsSubtitle}>
          We've had the privilege of working on incredible projects. Here's a glimpse of our work.
        </p>
        <div className={styles.projectGrid}>
          {[
            ["Music Festival", "Vibrant Music Festival", "Full Stage & Sound Production"],
            ["Corporate Gala", "Annual Corporate Gala", "Immersive Video Mapping"],
            ["Concert Hall", "Modern Concert Hall", "Acoustic Treatment & System Install"]
          ].map(([label, title, desc], i) => (
            <div key={i} className={`${styles.projectCard} group`}>              <img
                src={`https://placehold.co/600x400/111827/FFFFFF?text=${label.replace(" ", "+")}`}
                alt={title}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDescription}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.projectLinkContainer}>
          <a href="#" className={styles.projectLink}>View All Projects</a>
        </div>
      </div>
    </section>
  );
}