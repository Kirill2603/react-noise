import React, { FC } from 'react'
import { useAppSelector } from 'store/store'
import { TrackType } from 'store/playerSlice'
import { TrackCover } from 'components'
import styles from './TrackGrid.module.css'

type TracksGridProps = {
	onSetTrack: (track: TrackType) => void
}

export const TracksGrid: FC<TracksGridProps> = ({ onSetTrack }) => {

	const { tracks, playNow } = useAppSelector(state => state.player)

	return (
		<main className={styles.tracksGrid}>
			{tracks.map(track => <TrackCover key={track.title + 'tk'} track={track} playNow={playNow} onSetTrack={onSetTrack} />)}
		</main>
	)
}
