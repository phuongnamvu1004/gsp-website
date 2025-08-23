import React from 'react';
import styles from './ContentCarouselSection.module.scss';
import CardCarousel, { type CarouselItem } from './CardCarousel';

type ContentCarouselSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string | React.ReactNode;
  sectionId?: string;
  items: CarouselItem[];
};

const ContentCarouselSection: React.FC<ContentCarouselSectionProps> = ({
                                                                         eyebrow = 'SKILLED PROFESSIONALS, PERSONALIZED SUPPORT',
                                                                         title,
                                                                         description,
                                                                         sectionId = 'content-carousel-section',
                                                                         items
                                                                       }) => {
  return (
    <section id={sectionId} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          {eyebrow && <h4 className={styles.eyebrow}>{eyebrow}</h4>}
          <h2 className={styles.heading}>{title}</h2>
          {description ? (
            <div className={styles.description}>{description}</div>
          ) : null}
        </div>

        <div className={styles.rightCol}>
          <CardCarousel items={items}/>
        </div>
      </div>
    </section>
  );
};

export default ContentCarouselSection;

/* ---------- Example usage ----------
import ContentCarouselSection from './ContentCarouselSection';

const items: CarouselItem[] = [
  { title: 'Our Commitment', content: <>…content here…</> },
  { title: 'Our Standards', content: <>…content here…</> },
];

<ContentCarouselSection
  title="A-V Services Integrated Support (AVS-IS®)"
  description={<>When you select our Integrated Support program, …</>}
  items={items}
/>
------------------------------------ */