import { RootState } from './types'
import { Action } from './actions'

const initialState: RootState = {
	days: []
}

export const rootReducer = (
	state: RootState = initialState,
	action: Action
) => {
	switch (action.type) {
		default:
			return state
	}
}