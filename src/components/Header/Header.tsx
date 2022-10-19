import React, { FC, useCallback, useState } from 'react'
import { EmptyControl, TrackControl, PlayButton, MasterVolume, PresetsModal } from 'components'
import { useAppSelector } from 'store'
import styles from './Header.module.css'


type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {

	const playNow = useAppSelector(state => state.player.playNow)
	const [isPlay, setIsPlay] = useState(true)
	const [masterVolume, setMasterVolume] = useState(1)
	const [isOpenPresets, setIsOpenPresets] = useState(false)

	const onSetPlay = useCallback(() => {
		setIsPlay(!isPlay)
	}, [isPlay])

	const onSetMasterVolume = (volume: number) => {
		setMasterVolume(volume)
	}

	const onTogglePresetsModal = () => {
		setIsOpenPresets(!isOpenPresets)
	}

	let emptyList = [1, 2, 3].slice(0, 3 - playNow.length)

	return (
		<header className={styles.header}>
				<div className={styles.masterControl}>
					<PlayButton
						isPlay={isPlay}
						onSetPlay={onSetPlay}
						playNow={playNow} />
					<MasterVolume
						masterVolume={masterVolume}
						onSetMasterVolume={onSetMasterVolume} />
				</div>
				<div className={styles.volumeBlock}>
					{playNow.map(track =>
						<TrackControl
							key={track.title + 'h'} isPlay={isPlay}
							masterVolume={masterVolume}
							track={track} />)}
					{emptyList.map((empty, index) =>
						<EmptyControl key={index + 'e'} />)}
				</div>
			<button className={styles.presetsButton} onClick={onTogglePresetsModal}>Presets</button>
			{isOpenPresets && <PresetsModal setIsOpenPresets={onTogglePresetsModal} />}
		</header>
	)
}

