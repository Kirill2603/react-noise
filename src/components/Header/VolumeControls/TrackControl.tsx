import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from 'store/store'
import { setVolume, TrackType } from 'store/playerSlice'
import styles from './VulumeControls.module.css'

type TrackCoverProps = {
	masterVolume: number
	track: TrackType
	isPlay: boolean
}

export const TrackControl: FC<TrackCoverProps> = ({ masterVolume, track, isPlay }) => {

	const dispatch = useAppDispatch()
	const [audio] = useState(new Audio(track.audio))

	const onSetVolume = (value: string) => {
		dispatch(setVolume({ ...track, volume: Number(value) }))
	}

	useEffect(() => {
		if (isPlay) {
			audio.play()
		}
		if (!isPlay) {
			audio.pause()
		}
		audio.loop = true
		audio.volume = track.volume * masterVolume
		return () => audio.pause()
	}, [audio, track, isPlay, masterVolume])

	return (
		<div className={styles.trackControl}>
			<span>{track.title}</span>
			<input
				className={`${styles.volumeControl} ${styles[track.title.split(' ').join('')]}`}
				type='range'
				min={0}
				max={1}
				step={0.05}
				defaultValue={track.volume}
				onChange={(event) => onSetVolume(event.currentTarget.value)} />
		</div>
	)
}
