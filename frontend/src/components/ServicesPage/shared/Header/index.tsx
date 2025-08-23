import styles from './Header.module.scss';

interface ServicesPageHeaderProps {
  title: string;
  subtext: string;
  backgroundImage: string;
}

export const ServicesPageHeader = ({
                                     title,
                                     subtext,
                                     backgroundImage,
                                   }: ServicesPageHeaderProps) => {
  // Keep background image dynamic via inline style
  const headerStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <header style={headerStyle} className={styles.heroSection}>
      <div className={styles.innerContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.sectionTitle}>{title}</h1>
          <p className={styles.sectionSubtitle}>{subtext}</p>
        </div>
      </div>
    </header>
  );
};