import React, { useState } from 'react'
import { ReactComponent as PlaySvg } from 'assets/circle-play.svg'
import { ReactComponent as PauseSvg } from 'assets/circle-pause.svg'
import styles from './Header.module.css'
import { VolumeControl } from './VolumeControl'

export const Header = () => {

	const [play, setPlay] = useState(false)
	const onSetPlay = () => {
		setPlay(!play)
	}

	return (
		<header className={styles.header}>
			<button onClick={onSetPlay} className={styles.button}>
				{play
					?
					<PauseSvg className={styles.buttonSvg} />
					:
					<PlaySvg className={styles.buttonSvg} />}
			</button>
			<VolumeControl />
			<VolumeControl />
			<VolumeControl />
		</header>
	)
}
