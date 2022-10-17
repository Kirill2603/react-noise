import React, { FC } from 'react'
import { useAppSelector } from '../store/store'
import { TrackType } from '../store/playerSlice'
import { TrackCover } from './TrackCover'

type TracksGridProps = {
	onSetTrack: (track: TrackType) => void
}

export const TracksGrid: FC<TracksGridProps> = ({ onSetTrack }) => {

	const { tracks, playNow } = useAppSelector(state => state.player)

	return (
		<main className='grid grid-cols-4 w-full h-full gap-5 p-5'>
				{tracks.map(track => <TrackCover key={track.title} track={track} playNow={playNow} onSetPlay={onSetTrack}/>)}
		</main>
	)
}
