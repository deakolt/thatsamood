import { createReducer } from '@reduxjs/toolkit'

import { RootState } from '../types'
import { addDay } from './actions'

const initialState: RootState = {
	days: [{
		sleep: 8,
		sleepQuality: 'Restful',
		morning: 0,
		morningCheckin: 'fine',
		afternoon: -1,
		afternoonCheckin: 'hangry',
		evening: 1,
		eveningCheckin: 'yoga'

	}]
}

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(addDay, (state, action) => {
		state.days.push(action.payload)
	})
})
