import React, { FC } from 'react'
import { coverColors, TrackType } from 'store/playerSlice'
import styles from './TrackCover.module.css'

type TrackCoverProps = {
	track: TrackType
	playNow: TrackType[]
	onSetTrack: (track: TrackType) => void
}

export const TrackCover: FC<TrackCoverProps> = ({ track, playNow, onSetTrack }) => {

	const isActive = playNow.find(playingTrack => playingTrack.title === track.title)

	return (
		<div onClick={() => onSetTrack(track)}
				 className={`${styles.trackCover} ${isActive && styles.activeCover} ${coverColors[track.title]}`}
				 style={{ backgroundImage: `url(${track.img})` }}>
			<h3 className={`${styles.trackText} ${isActive && styles.activeText} ${coverColors[track.title]}`}>
				{track.title}
			</h3>
		</div>
	)
}
