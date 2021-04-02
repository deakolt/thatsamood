import { createAction } from '@reduxjs/toolkit'

import { Day } from '../types'


export const addDay = createAction<Day>('ADD_DAY')
