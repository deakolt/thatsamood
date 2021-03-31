import { Day } from '../types'

export type DayRowProps = {
	day: Day
}

export const DayRow = (props: DayRowProps) => {
	const {
		sleep,
		sleepQuality,
		morning,
		morningCheckin,
		afternoon,
		afternoonCheckin,
		evening,
		eveningCheckin
	} = props.day

	return (
		<tr>
			<td>{sleep}</td>
			<td>{sleepQuality}</td>
			<td>{morning}</td>
			<td>{morningCheckin}</td>
			<td>{afternoon}</td>
			<td>{afternoonCheckin}</td>
			<td>{evening}</td>
			<td>{eveningCheckin}</td>
		</tr>
	)
}
