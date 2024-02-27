type DayType = `${string}${string}`;
type MonthType = `${string}${string}`;
type YearType = `${string}${string}${string}${string}`;

export type ISODateStringType = `${YearType}-${MonthType}-${DayType}`;
