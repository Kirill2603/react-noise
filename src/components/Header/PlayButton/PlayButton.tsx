import React, { FC } from 'react'
import { ReactComponent as PlaySvg } from 'assets/circle-play.svg'
import { ReactComponent as PauseSvg } from 'assets/circle-pause.svg'
import { TrackType } from 'store/playerSlice'
import styles from './PlayButton.module.css'

type PlayButtonProps = {
	playNow: TrackType[]
	isPlay: boolean
	onSetPlay: () => void
}

export const PlayButton: FC<PlayButtonProps> = ({ playNow, isPlay, onSetPlay }) => {
	return (
		<button onClick={onSetPlay}
						className={`${styles.playButton} ${playNow.length === 0 && styles.disabled}`}
						disabled={playNow.length === 0}>
			{isPlay
				?
				<PauseSvg className={styles.svg} />
				:
				<PlaySvg className={styles.svg} />}
		</button>
	)
}
