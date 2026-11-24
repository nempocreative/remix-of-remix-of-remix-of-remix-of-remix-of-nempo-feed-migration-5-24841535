import type { RefObject } from 'react';
import { Disc3, Drum, MapPin, Music2, Phone } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import backdrop from '@/assets/nempo-feed-63/nempo-feed-63-latar-festival.webp.asset.json';
import titleArt from '@/assets/nempo-feed-63/nempo-feed-63-judul-bajidoran-dj.webp.asset.json';
import kendangGroup from '@/assets/nempo-feed-63/nempo-feed-63-kendang.webp.asset.json';
import dancers from '@/assets/nempo-feed-63/nempo-feed-63-penari.webp.asset.json';
import djGreen from '@/assets/nempo-feed-63/nempo-feed-63-dj-kaos-hijau.webp.asset.json';
import djHoodie from '@/assets/nempo-feed-63/nempo-feed-63-dj-hoodie-x.webp.asset.json';
import { nempoBajidoranFest as F } from './nempo-bajidoran-fest';
import './NempoAjakRequestSlide.css';
import './NempoBajidoranFestSlide.css';

const ACTIVITY_ICONS = [Drum, Music2, Disc3];
const ACTIVITY_TONES = ['gold', 'pink', 'violet'] as const;

/**
 * NEMPO Feed slide 63 (3:4): Vibez-Fest-style poster — header shared with the Good Story Cafe event slides
 * (NEMPO.ID × Kala Muda, Saduli Ragap, Good Story Cafe), the owner's 3D title lettering, the performers as
 * cut-outs, activity pills, time row, date + venue boxes and a white info bar. Static so the PNG matches.
 */
export function NempoBajidoranFestSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { date, venue, info } = F;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nbx-root kmt-root"
      aria-label={`${F.title} — ${F.activities.join(', ')}. ${date.weekday}, ${date.day} ${date.month} ${date.year}, ${F.schedule.map((s) => `${s.label} ${s.value}`).join(' ')} di ${venue.name}, ${venue.address}. ${info.label} ${info.number}`}
    >
      <img className="nbx-bg" src={backdrop.url} alt="" aria-hidden="true" draggable={false} />
      <span className="nbx-haze" aria-hidden="true" />

      <header className="kmt-header nar-header nbx-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nar-partners">
          <img className="nar-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nar-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <h2 className="nbx-title">
        <img src={titleArt.url} alt="" draggable={false} />
        <span className="nbx-sr">{F.title}</span>
      </h2>

      <div className="nbx-cast" aria-hidden="true">
        <img className="nbx-dj nbx-dj--green" src={djGreen.url} alt="" draggable={false} />
        <img className="nbx-dj nbx-dj--hoodie" src={djHoodie.url} alt="" draggable={false} />
        <img className="nbx-dancers" src={dancers.url} alt="" draggable={false} />
        <img className="nbx-kendang" src={kendangGroup.url} alt="" draggable={false} />
        <span className="nbx-tag nbx-tag--green">{F.djs.side}</span>
        <span className="nbx-tag nbx-tag--hoodie">{F.djs.front}</span>
      </div>

      <span className="nbx-fade" aria-hidden="true" />

      <div className="nbx-activities">
        <p>{F.activitiesLabel}</p>
        {F.activities.map((a, i) => {
          const Icon = ACTIVITY_ICONS[i] ?? Music2;
          return (
            <span key={a} className={`nbx-pill nbx-pill--${ACTIVITY_TONES[i] ?? 'gold'}`}>
              <Icon aria-hidden="true" />{a}
            </span>
          );
        })}
      </div>

      <div className="nbx-times">
        {F.schedule.map((s) => (
          <span key={s.label} className="nbx-time">
            <span className="nbx-time-label">{s.label}</span>
            <span className="nbx-time-value">{s.value}</span>
          </span>
        ))}
      </div>

      <div className="nbx-info">
        <div className="nbx-date">
          <small>{date.weekday}</small>
          <b>{date.day} {date.month}, {date.year}</b>
        </div>
        <div className="nbx-venue">
          <MapPin aria-hidden="true" />
          <span>
            <b>{venue.name}</b>
            <small>{venue.address} · Garut</small>
          </span>
        </div>
      </div>

      <footer className="nbx-bar">
        <span><Phone aria-hidden="true" />{info.label}: <b>{info.number}</b></span>
        <span className="nbx-bar-socials">{F.socials}</span>
      </footer>
    </section>
  );
}
