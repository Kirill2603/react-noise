import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { setPresetsFromLocalStorage, toggleTrack, TrackType } from 'store/playerSlice'
import { Header, TracksGrid } from 'components'

export const App = () => {

	const dispatch = useAppDispatch()

	const userPresets = useAppSelector(state => state.player.userPresets)

	window.onbeforeunload = () => {
			localStorage.setItem('userPresets', JSON.stringify(userPresets))
	}

	useEffect(() => {
		const localStoragePresets = localStorage.getItem('userPresets')
		if (localStoragePresets) {
			dispatch(setPresetsFromLocalStorage(JSON.parse(localStoragePresets)))
		}
	}, [])

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
