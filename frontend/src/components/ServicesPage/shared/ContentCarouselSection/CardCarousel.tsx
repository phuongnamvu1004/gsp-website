import React, { useRef } from 'react';
import styles from './ContentCarouselSection.module.scss';

export type CarouselItem = {
  title: string;
  content: React.ReactNode;
};

type CardCarouselProps = {
  items: CarouselItem[];
};

const CardCarousel: React.FC<CardCarouselProps> = ({ items }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.card}`) as HTMLElement | null;
    const delta = card ? card.clientWidth + 24 /* gap */ : el.clientWidth * 0.9;
    el.scrollBy({ left: dir === 'next' ? delta : -delta, behavior: 'smooth' });
  };

  return (
    <div className={styles.carousel}>
      <div ref={trackRef} className={styles.track}>
        {items.map((it, idx) => (
          <article key={idx} className={styles.card}>
            <h3 className={styles.cardTitle}>{it.title}</h3>
            <div className={styles.cardBody}>{it.content}</div>
          </article>
        ))}
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCards('prev')}
          className={styles.navBtn}
        >
          {/* Left Arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollByCards('next')}
          className={styles.navBtn}
        >
          {/* Right Arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;