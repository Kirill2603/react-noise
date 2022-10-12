import { FC, useState } from 'react'
import { ReactComponent as PlaySvg } from 'assets/circle-play.svg'
import { ReactComponent as PauseSvg } from 'assets/circle-pause.svg'

type PlayerProps = {
	playableAudio: { audio: string, title: string }
}

export const Player: FC<PlayerProps> = ({ playableAudio }) => {

	const [play, setPlay] = useState(false)
	const [audio] = useState(new Audio(playableAudio.audio))
	audio.loop = true

	const onSetPlay = () => {
		if (play) {
			audio.pause()
		} else if (!play) {
			audio.play()
		}
		setPlay(!play)
	}

	return (
		<>
			<div>
				<h3>{playableAudio.title}</h3>
				<button onClick={onSetPlay}>
					{play
						?
						<PauseSvg className='w-10 h-10' />
						:
						<PlaySvg className='w-10 h-10' />}
				</button>
			</div>
		</>
	)
}