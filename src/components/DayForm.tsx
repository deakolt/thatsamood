import { useState } from 'react'

import { Day, SleepQuality, MoodValue } from '../types'
import { upsertDay } from '../redux/actions'

export const DayForm = () => {
	const [sleep, setSleep] = useState<number>()
	const [sleepQuality, setSleepQuality] = useState<SleepQuality>()

	const [morningMood, setMorning] = useState<MoodValue>()
	const [morningCheckin, setMorningCheckin] = useState<string>()

	const [afternoonMood, setAfternoon] = useState<MoodValue>()
	const [afternoonCheckin, setAfternoonCheckin] = useState<string>()

	const [eveningMood, setEvening] = useState<MoodValue>()
	const [eveningCheckin, setEveningCheckin] = useState<string>()

	return (
			<tr>
				<td><input
					type="number"
					value={sleep}
				/></td>
				<td><input
					type="number"
					value={sleepQuality}
				/></td>
				<td><input
					type="number"
					value={morningMood}
				/></td>
				<td><input
					type="number"
					value={morningCheckin}
				/></td>
				<td><input
					type="number"
					value={afternoonMood}
				/></td>
				<td><input
					type="number"
					value={afternoonCheckin}
				/></td>
				<td><input
					type="number"
					value={eveningMood}
				/></td>
				<td><input
					type="number"
					value={eveningCheckin}
				/></td>
			</tr>
	)
}
