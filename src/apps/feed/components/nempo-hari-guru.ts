import { weekdayId } from './nempo-bajidoran';

/** NEMPO Feed slide 64 — Hari Guru Nasional commemoration poster: a greeting only, no promo. */
export const NEMPO_HARI_GURU_SLIDE = 64;

/** Prebuilt PNG, captured from the preview at 1080 CSS px × 3. */
export const NHG_EXPORT = { width: 3240, height: 4320 } as const;

const iso = '2026-11-25';

export const nempoHariGuru = {
  kicker: 'Hari Guru Nasional',
  headline: { lead: 'Selamat', accent: 'Hari Guru' },
  message: 'Terima kasih, Bapak & Ibu Guru, atas ilmu dan kesabarannya.',
  tagline: 'Pahlawan tanpa tanda jasa',
  chalk: ['Terima kasih,', 'Guru!'],
  date: { weekday: weekdayId(iso), day: '25', month: 'November', year: '2026', iso },
} as const;

export const NEMPO_HARI_GURU_DATE = `${nempoHariGuru.date.weekday}, ${nempoHariGuru.date.day} ${nempoHariGuru.date.month} ${nempoHariGuru.date.year}`;
