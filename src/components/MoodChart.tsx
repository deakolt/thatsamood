import { useSelector } from 'react-redux'

import { getDaysSelector } from '../redux/selectors'
import { Day } from '../types'
import { DayRow } from './DayRow'
import { DayForm } from './DayForm'

export const MoodChart = () => {
	const days: Day[] = useSelector(getDaysSelector)

	return (
		<table>
			<thead>
				<tr>
					<th>Hours of Sleep</th>
					<th>Sleep Quality</th>
					<th>Morning Mood</th>
					<th>Morning Mood Notes</th>
					<th>Afternoon Mood</th>
					<th>Afternoon Mood Notes</th>
					<th>Evening Mood</th>
					<th>Evening Mood Notes</th>
				</tr>
			</thead>
			<tbody>
				{days.map(day => <DayRow day={day} key={JSON.stringify(day)} />)}
			  	<DayForm />
			</tbody>
	  	</table>
	)
}
