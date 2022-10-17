import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../store/store'
import { setVolume, TrackType } from '../store/playerSlice'

type TrackCoverProps = {
	track: TrackType
}

export const TrackControl: FC<TrackCoverProps> = ({ track }) => {

	const dispatch = useAppDispatch()
	const [audio] = useState(new Audio(track.audio))

	console.log(track.volume)

	useEffect(() => {
		audio.loop = true
		audio.play()
		audio.volume = track.volume
		return () => audio.pause()
	}, [audio, track])


	const onSetVolume = (value: string) => {
		dispatch(setVolume({ ...track, volume: Number(value) }))
	}

	return (
		<>
			<input
				type='range'
				min={0}
				max={1}
				step={0.05}
				defaultValue={track.volume}
				onChange={(event) => onSetVolume(event.currentTarget.value)} />
		</>
	)
}
