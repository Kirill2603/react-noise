import React from 'react'
import { Player } from './Player'
import {
	cat,
	airport,
	fireplace,
	meadow,
	rain,
	rainThunder,
	heavyRain,
	train,
	rainRoof,
	waterfall,
	cicadas,
	nightForestCicadas,
	forestRiver
} from 'audios'
import {
	catImg,
	cicadasImg,
	fireplaceImg,
	airportImg,
	rainImg,
	heavyRainImg,
	rainRoofImg,
	rainThunderImg,
	trainImg,
	meadowImg,
	nightForestCicadasImg,
	waterfallImg,
	forestRiverImg
} from '../assets/images'

export const AudioGrid = () => {

	const audios: Array<{audio: string, title: string, img: string}> = [
		{ audio: cat, title: 'Cat', img: catImg },
		{ audio: meadow, title: 'Meadow', img: meadowImg },
		{ audio: fireplace, title: 'Fireplace', img: fireplaceImg },
		{ audio: cicadas, title: 'Cicadas', img: cicadasImg },
		{ audio: train, title: 'Train', img: trainImg },
		{ audio: rain, title: 'Rain', img: rainImg },
		{ audio: rainRoof, title: 'Rain roof', img: rainRoofImg },
		{ audio: heavyRain, title: 'Heavy rain', img: heavyRainImg },
		{ audio: rainThunder, title: 'Rain thunder', img: rainThunderImg },
		{ audio: airport, title: 'Airport', img: airportImg },
		{ audio: nightForestCicadas, title: 'Night forest cicadas', img: nightForestCicadasImg },
		{ audio: waterfall, title: 'Waterfall', img: waterfallImg },
		{ audio: forestRiver, title: 'Forest river', img: forestRiverImg }
		// {audio: nightForestCampfire, title: 'Night forest campfire', img: ''},
		// {audio: winterForestSnow, title: 'Winter snow', img: ''},
		// {audio: winterForestWalk, title: 'Winter walk', img: ''},
		// {audio: winterForestWind, title: 'Winter wind', img: ''},
	]

	return (
		<main className='grid grid-cols-3 gap-2 w-full h-full'>
			{audios.map(audio =>
				<Player key={audio.title} audioTrack={audio} />
			)}
		</main>
	)
}
