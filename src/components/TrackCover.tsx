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
				 className={`w-full h-full rounded-3xl overflow-hidden cursor-pointer ${isActive ? 'shadow shadow-cover shadow-cyan-400 ease-in duration-150' : ''}`}
				 style={{ backgroundImage: `url(${track.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
			<h3 className={`w-full h-full flex justify-center items-center text-4xl font-bold opacity-80 backdrop-blur-sm ${isActive && 'backdrop-blur-0 text-cyan-100 text-shadow-lg shadow-cyan-400 opacity-100 ease-in duration-100'}`}>{track.title}</h3>
		</div>
	)
}
