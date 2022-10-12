import { FC, useState } from 'react'

type PlayerProps = {
	playableAudio: {audio: string, title: string}
}

export const Player: FC<PlayerProps> = ({ playableAudio }) => {

	const [play, setPlay] = useState(false)
	const [audio] = useState(new Audio(playableAudio.audio));
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
				<button onClick={onSetPlay}>{play ? '||' : '>'}</button>
			</div>
		</>
	)
}