import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { playerSlice } from './playerSlice'

export const index = configureStore({
	reducer: {
		player: playerSlice.reducer
	},
})

export type RootState = ReturnType<typeof index.getState>
export type AppDispatch = typeof index.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector