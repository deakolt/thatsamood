import { createReducer } from '@reduxjs/toolkit'

import { RootState } from '../types'
import { upsertDay } from './actions'

const initialState: RootState = {
	days: [{
		sleep: 8,
		sleepQuality: 'Restful',
		morningMood: 0,
		morningCheckin: 'fine',
		afternoonMood: -1,
		afternoonCheckin: 'hangry',
		eveningMood: 1,
		eveningCheckin: 'yoga'

	}]
}

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(upsertDay, (state, action) => {
		state.days.push(action.payload)
	})
})
