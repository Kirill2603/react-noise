import React, { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'store'
import { setPresetsFromLocalStorage, toggleTrack, TrackType } from 'store/playerSlice'
import { Header, TracksGrid } from 'components'

export const App = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		const localStoragePresets = localStorage.getItem('userPresets')
		if (localStoragePresets) {
			dispatch(setPresetsFromLocalStorage(JSON.parse(localStoragePresets)))
		}
	}, [dispatch])

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
