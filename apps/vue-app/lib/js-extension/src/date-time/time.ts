type HourType = number;
type MinuteType = number;
type SecondType = number;

export type TimeType = {
    hour: HourType;
    minute: MinuteType;
    second: SecondType;
};

type ISOHourType = `0${HourType}` | HourType;
type ISOMinuteType = `0${MinuteType}` | MinuteType;

export type ISOHourMinuteTimeType = `${ISOHourType}:${ISOMinuteType}`;

export type TimePeriodType = {
    start: TimeType;
    end: TimeType;
};
