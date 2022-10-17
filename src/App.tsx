import React, { useCallback } from 'react'
import { useAppDispatch } from './store/store'
import { toggleTrack, TrackType } from './store/playerSlice'
import { Header, TracksGrid } from './components'

export const App = () => {

	const dispatch = useAppDispatch()

	const onSetTrack = useCallback(
		(track: TrackType) => {
			dispatch(toggleTrack(track))
		}, [dispatch]
	)

	return (
		<>
			<Header />
			<TracksGrid onSetTrack={onSetTrack} />
		</>
	)
}
