import type { RefObject } from 'react';
import { GraduationCap } from 'lucide-react';
import desk from '@/assets/nempo-feed-64/nempo-feed-64-meja-guru.webp.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { NEMPO_HARI_GURU_DATE, nempoHariGuru as P } from './nempo-hari-guru';
import './NempoHariGuruSlide.css';

/**
 * NEMPO Feed slide 64 (3:4): Hari Guru Nasional commemoration poster in the basic NEMPO blue look —
 * centred greeting on top, a teacher's-desk illustration below with the thanks written on its chalkboard.
 */
export function NempoHariGuruSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { kicker, headline, message, tagline, chalk } = P;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nhg-root kmt-root"
      aria-label={`${headline.lead} ${headline.accent}. ${kicker}, ${NEMPO_HARI_GURU_DATE}. ${message} ${tagline}.`}
    >
      <div className="nhg-bg" aria-hidden="true">
        <span className="nhg-grid" />
        <span className="nhg-ring nhg-ring-a" />
        <span className="nhg-ring nhg-ring-b" />
        <span className="nhg-glow" />
      </div>

      <NempoHeader badge={NEMPO_HARI_GURU_DATE} />

      <div className="nhg-hero" aria-hidden="true">
        <span className="nhg-kicker"><GraduationCap />{kicker}</span>
        <h2 className="nhg-title"><span>{headline.lead}</span><em>{headline.accent}</em></h2>
        <p className="nhg-message">{message}</p>
        <p className="nhg-tagline"><span />{tagline}<span /></p>
      </div>

      <div className="nhg-art" aria-hidden="true">
        <img src={desk.url} alt="" draggable={false} />
        <p className="nhg-chalk">{chalk[0]}<br />{chalk[1]}</p>
      </div>

      <NempoFooter />
    </section>
  );
}
