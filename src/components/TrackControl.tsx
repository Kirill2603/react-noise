import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../store/store'
import { setVolume, TrackType } from '../store/playerSlice'
import styles from 'styles/TrackControl.module.css'

type TrackCoverProps = {
	track: TrackType
	isPlay: boolean
}

export const TrackControl: FC<TrackCoverProps> = ({ track, isPlay }) => {

	const dispatch = useAppDispatch()
	const [audio] = useState(new Audio(track.audio))

	useEffect(() => {
		if (isPlay) {
			audio.play()
		}
		if (!isPlay) {
			audio.pause()
		}
		audio.loop = true
		audio.volume = track.volume
		return () => audio.pause()
	}, [audio, track, isPlay])

	const onSetVolume = (value: string) => {
		dispatch(setVolume({ ...track, volume: Number(value) }))
	}

	return (
		<div className={styles.trackControl}>
			<span>{track.title}</span>
			<input
				className={styles.volumeControl}
				type='range'
				min={0}
				max={1}
				step={0.05}
				defaultValue={track.volume}
				onChange={(event) => onSetVolume(event.currentTarget.value)} />
		</div>
	)
}
