import { describe, expect, it } from 'vitest';
import { NBX_EXPORT, NEMPO_BAJIDORAN_FEST_SLIDE, nempoBajidoranFest } from './nempo-bajidoran-fest';

describe('NEMPO Feed slide 63 Bajidoran DJ event poster', () => {
  it('is NEMPO Feed slide 63', () => {
    expect(NEMPO_BAJIDORAN_FEST_SLIDE).toBe(63);
  });
  it('is held on Friday 27 November 2026', () => {
    const { weekday, day, month, year } = nempoBajidoranFest.date;
    expect(`${weekday}, ${day} ${month} ${year}`).toBe('Jumat, 27 Nov 2026');
  });
  it('starts at 18.00 WIB and runs until it is over', () => {
    expect(nempoBajidoranFest.schedule).toEqual([
      { label: 'Mulai', value: '18.00 WIB' },
      { label: 'Sampai', value: 'Selesai' },
    ]);
  });
  it('is at Good Story Cafe, Jl. Sudirman Copong No. 11', () => {
    expect(nempoBajidoranFest.venue).toEqual({ name: 'Good Story Cafe', address: 'Jl. Sudirman Copong No. 11' });
  });
  it('downloads as a 3:4 feed PNG at 3× (3240×4320)', () => {
    expect(NBX_EXPORT).toEqual({ width: 3240, height: 4320 });
  });
});
