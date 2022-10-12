import { FC, useState } from 'react'
import { ReactComponent as PlaySvg } from 'assets/circle-play.svg'
import { ReactComponent as PauseSvg } from 'assets/circle-pause.svg'

type PlayerProps = {
	audioTrack: { audio: string, title: string, img: string }
}

export const Player: FC<PlayerProps> = ({ audioTrack }) => {

	const [play, setPlay] = useState(false)
	const [audio] = useState(new Audio(audioTrack.audio))
	audio.loop = true

	const onSetPlay = () => {
		if (play) {
			audio.pause()
		} else if (!play) {
			audio.play()
		}
		setPlay(!play)
	}

	console.log(audioTrack.img)

	return (
		<>
			<div
				style={{backgroundImage: `url(${audioTrack.img})`, backgroundSize: 'cover'}}
				className='border border-amber-300 rounded'>
				<h3 className='text-3xl text-amber-50'>{audioTrack.title}</h3>
				<button onClick={onSetPlay}>
					{play
						?
						<PauseSvg className='w-10 h-10 fill-amber-50' />
						:
						<PlaySvg className='w-10 h-10 fill-amber-50' />}
				</button>
			</div>
		</>
	)
}