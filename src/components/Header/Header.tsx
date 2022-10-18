import React, { FC, useCallback, useState } from 'react'
import { EmptyControl, TrackControl, PlayButton, MasterVolume } from 'components'
import { useAppSelector } from '../../store/store'
import styles from './Header.module.css'

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {

	const { playNow } = useAppSelector(state => state.player)
	const [isPlay, setIsPlay] = useState(true)
	const [masterVolume, setMasterVolume] = useState(1)

	const onSetPlay = useCallback(() => {
		setIsPlay(!isPlay)
	}, [isPlay])

	const onSetMasterVolume = (volume: number) => {
		setMasterVolume(volume)
	}

	let emptyList = [1, 2, 3].slice(0, 3 - playNow.length)
	console.log(emptyList.length)

	return (
		<header className={styles.header}>
			<PlayButton
				isPlay={isPlay}
				onSetPlay={onSetPlay}
				playNow={playNow} />
			<MasterVolume
				masterVolume={masterVolume}
				onSetMasterVolume={onSetMasterVolume} />
			{playNow.map(track =>
				<TrackControl
					key={track.title + 'h'} isPlay={isPlay}
					masterVolume={masterVolume}
					track={track} />)}
			{emptyList.map((empty, index) =>
				<EmptyControl key={index + 'e'} />)}
		</header>
	)
}
