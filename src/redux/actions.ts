import { createAction } from '@reduxjs/toolkit'

import { Day } from '../types'

export const upsertDay = createAction<Day>('UPSERT_DAY')
