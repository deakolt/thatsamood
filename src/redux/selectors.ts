import { RootState, Day } from './types'

export const getDaysSelector = (state: RootState): Day[] => state.days
