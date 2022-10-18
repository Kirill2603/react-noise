import React, { FC, useCallback, useState } from 'react'
import { EmptyControl, TrackControl, PlayButton, MasterVolume } from 'components'
import { useAppSelector } from '../../store/store'
import styles from './Header.module.css'

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {


	const playNow = useAppSelector(state => state.player.playNow)
	const [isPlay, setIsPlay] = useState(true)
	const [masterVolume, setMasterVolume] = useState(1)

	const onSetPlay = useCallback(() => {
		setIsPlay(!isPlay)
	}, [isPlay])

	const onSetMasterVolume = (volume: number) => {
		setMasterVolume(volume)
	}

	return (
		<header className={styles.header}>
			<PlayButton isPlay={isPlay} onSetPlay={onSetPlay} playNow={playNow} />
			<MasterVolume masterVolume={masterVolume} onSetMasterVolume={onSetMasterVolume} />
			{playNow[0] ? <TrackControl isPlay={isPlay} masterVolume={masterVolume} track={playNow[0]} /> : <EmptyControl />}
			{playNow[1] ? <TrackControl isPlay={isPlay} masterVolume={masterVolume} track={playNow[1]} /> : <EmptyControl />}
			{playNow[2] ? <TrackControl isPlay={isPlay} masterVolume={masterVolume} track={playNow[2]} /> : <EmptyControl />}
		</header>
	)
}
