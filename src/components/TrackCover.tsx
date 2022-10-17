import React, { FC } from 'react'
import { TrackType } from '../store/playerSlice'

type TrackCoverProps = {
	track: TrackType
	playNow: TrackType[]
	onSetPlay: (track: TrackType) => void
}

export const TrackCover: FC<TrackCoverProps> = ({ track, playNow, onSetPlay }) => {

	const isActive = playNow.find(playingTrack => playingTrack.title === track.title)

	return (
		<div onClick={() => onSetPlay(track)}
				 className={`w-full h-full rounded-3xl ${isActive ? 'shadow shadow-2xl shadow-neutral-200' : ''}`}
				 style={{ backgroundImage: `url(${track.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
			<h3 className='w-full h-full flex justify-center items-center text-4xl font-bold opacity-80'>{track.title}</h3>
		</div>
	)
}
