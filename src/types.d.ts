export type RootState = {
	days: Day[]
}

type SleepQuality =
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
	sleepQuality: SleepQuality

	morningMood: MoodValue
	morningCheckin: string

	afternoonMood: MoodValue
	afternoonCheckin: string

	eveningMood: MoodValue
	eveningCheckin: string
}
