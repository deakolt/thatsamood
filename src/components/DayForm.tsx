import { useState } from 'react'

import { SleepQuality, MoodValue } from '../types'
import { upsertDay } from '../redux/actions'

export const DayForm = () => {
	const [sleep, setSleep] = useState<number>(0)
	const [sleepQuality, setSleepQuality] = useState<SleepQuality>('Restful')

	const [morningMood, setMorningMood] = useState<MoodValue>(0)
	const [morningCheckin, setMorningCheckin] = useState<string>('')

	const [afternoonMood, setAfternoonMood] = useState<MoodValue>(0)
	const [afternoonCheckin, setAfternoonCheckin] = useState<string>('')

	const [eveningMood, setEveningMood] = useState<MoodValue>(0)
	const [eveningCheckin, setEveningCheckin] = useState<string>('')

	return (
			<tr className="day-form"
				onBlur={() => {{
					console.log('blurred')
					upsertDay({
					sleep,
					sleepQuality,
					morningMood,
					morningCheckin,
					afternoonMood,
					afternoonCheckin,
					eveningMood,
					eveningCheckin
				})}}}
			>
				<td><input
					type="number"
					value={sleep}
					onChange={e => setSleep(parseInt(e.target.value))}
				/></td>
				<td><select
						value={sleepQuality}
						onChange={e => setSleepQuality(e.target.value as SleepQuality)}
					>
					<option value="Restful">Restful</option>
					<option value="Fitful">Fitful</option>
					<option value="Unknown">Unknownl</option>
				</select></td>
				<td><input
					type="number"
					value={morningMood}
					// onChange={e => setMorningMood(e.target.value)}
				/></td>
				<td><input
					type="string"
					value={morningCheckin}
					onChange={e => setMorningCheckin(e.target.value)}
				/></td>
				<td><input
					type="number"
					value={afternoonMood}
					// onChange={e => setAfternoonMood(e.target.value)}
				/></td>
				<td><input
					type="string"
					value={afternoonCheckin}
					onChange={e => setAfternoonCheckin(e.target.value)}
				/></td>
				<td><input
					type="number"
					value={eveningMood}
					// onChange={e => setEveningMood(e.target.value)}
				/></td>
				<td><input
					type="string"
					value={eveningCheckin}
					onChange={e => setEveningCheckin(e.target.value)}
				/></td>
			</tr>
	)
}
