import * as Month from './../Month';

export interface Day {
  key: string;
  year: number;
  month: Month.Month;
  day: number;
}

export const day = (year: number, month: Month.Month, d: number) => ({
  key: String(year) + String(month) + String(d),
  year,
  month,
  day: d,
});

export const title = (d: Day) => `${String(d.day)} ${Month.shortName(d.month)}`;
