import React, { FC } from 'react'
import { ReactComponent as PlaySvg } from 'assets/circle-play.svg'
import { ReactComponent as PauseSvg } from 'assets/circle-pause.svg'

type PlayButtonProps = {
	isPlay: boolean
	onSetPlay: () => void
}

export const PlayButton: FC<PlayButtonProps> = ({ isPlay, onSetPlay }) => {
	return (
		<button onClick={onSetPlay} className='w-20 h-20'>
			{isPlay
				?
				<PauseSvg className='fill-neutral-200' />
				:
				<PlaySvg className='fill-neutral-200' />}
		</button>
	)
}
