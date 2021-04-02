import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'

import { reducer } from './reducer'


const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
	reducer: reducer,
	middleware
})