import React, { FC } from 'react'
import { useAppSelector } from '../store/store'
import { TrackType } from '../store/playerSlice'

type TracksGridProps = {
	onSetTrack: (track: TrackType) => void
}

export const TracksGrid: FC<TracksGridProps> = ({ onSetTrack }) => {

	const { tracks } = useAppSelector(state => state.player)
	console.log('grid')
	return (
		<main>
			<ul>
				{tracks.map(track => <li key={track.title} onClick={() => onSetTrack(track)}>{track.title}</li>)}
			</ul>
		</main>
	)
}
