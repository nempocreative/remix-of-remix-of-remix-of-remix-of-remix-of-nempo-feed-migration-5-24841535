import type { RefObject } from 'react';
import ggsWatermark from '@/assets/ggs-header-footer-v2-rebuilt.webp.asset.json';
import spaPhoto from '@/assets/ggs-feed-63-spa-perawatan.webp.asset.json';
import {
  GGS_UJUNG_RAMBUT_KAKI as C,
  GGS_UJUNG_RAMBUT_KAKI_PERIOD,
  GGS_UJUNG_RAMBUT_KAKI_PRICE,
  GGS_UJUNG_RAMBUT_KAKI_TEXT,
} from './ggs-ujung-rambut-kaki';
import './GgsUjungRambutKakiSlide.css';

/** GGS Feed slide 63: head-to-toe treatment package promo over a spa still life. */
export function GgsUjungRambutKakiSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggur-root"
      role="img"
      aria-label={`GGS Beauty — ${GGS_UJUNG_RAMBUT_KAKI_TEXT}`}
    >
      <img className="ggur-photo" src={spaPhoto.url} alt="" aria-hidden="true" draggable={false} />
      <div className="ggur-veil" aria-hidden="true" />

      <div className="ggur-copy" aria-hidden="true">
        <p className="ggur-kicker">{C.kicker}</p>
        <h2 className="ggur-title">
          <span className="ggur-title-top">{C.titleTop}</span>
          <em className="ggur-title-em">{C.titleBottom}</em>
        </h2>

        <p className="ggur-price">
          <span className="ggur-price-lead">{C.priceLead}</span>
          <span className="ggur-price-rp">Rp</span>
          <span className="ggur-price-num">{GGS_UJUNG_RAMBUT_KAKI_PRICE}</span>
        </p>

        <ul className="ggur-list">
          {C.services.map((s, i) => (
            <li key={s.name} className="ggur-item">
              <span className="ggur-num">{i + 1}</span>
              <span className="ggur-name">{s.name}</span>
              {s.detail ? <span className="ggur-detail">{s.detail}</span> : null}
            </li>
          ))}
        </ul>

        <p className="ggur-date">{GGS_UJUNG_RAMBUT_KAKI_PERIOD}</p>
      </div>

      {frame ? <img className="ggur-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
