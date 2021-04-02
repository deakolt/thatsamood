import { Day } from '../types'

export type DayRowProps = {
	day: Day
}

export const DayRow = (props: DayRowProps) => {
	const {
		sleep,
		sleepQuality,
		morningMood,
		morningCheckin,
		afternoonMood,
		afternoonCheckin,
		eveningMood,
		eveningCheckin
	} = props.day

	return (
		<tr>
			<td>{sleep}</td>
			<td>{sleepQuality}</td>
			<td>{morningMood}</td>
			<td>{morningCheckin}</td>
			<td>{afternoonMood}</td>
			<td>{afternoonCheckin}</td>
			<td>{eveningMood}</td>
			<td>{eveningCheckin}</td>
		</tr>
	)
}
