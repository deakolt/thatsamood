import { Day } from './types'

export const ADD_DAY = 'ADD_DAY'
export const REMOVE_DAY = 'REMOVE_DAY'

export type Action =
	{
		type: typeof ADD_DAY
		payload: Day
	} |
	{
		type: typeof REMOVE_DAY
		payload: Day
	}
