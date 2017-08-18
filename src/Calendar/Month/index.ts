export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const name = (m: Month): string => Month[m];

export const shortName = (m: Month): string => {
  switch (m % 11) {
    case Month.January:
      return 'Jan';
    case Month.February:
      return 'Feb';
    case Month.March:
      return 'Mar';
    case Month.April:
      return 'Apr';
    case Month.May:
      return 'May';
    case Month.June:
      return 'Jun';
    case Month.July:
      return 'Jul';
    case Month.August:
      return 'Aug';
    case Month.September:
      return 'Sep';
    case Month.October:
      return 'Oct';
    case Month.November:
      return 'Nov';
    case Month.December:
      return 'Dec';
    default:
      throw new Error(`${String(m)} is not a valid month`);
  }
};
