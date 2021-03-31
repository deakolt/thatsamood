export type RootState = {
	days: Day[]
}

type SleepType =
	'Restful' |
	'Fitful' |
	'Unknown'

type MoodValue =
	-1 |
	-0.5 |
	0 |
	0.5 |
	1

export type Day = {
	sleep: number
	sleepType: SleepType

	morning: number
	morningCheckin: MoodValue

	afternoon: number
	afternoonCheckin: MoodValue

	evening: number
	eveningCheckin: MoodValue
}