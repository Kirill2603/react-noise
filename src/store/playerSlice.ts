import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	airport,
	cat,
	cicadas,
	fireplace, forestRiver,
	heavyRain,
	meadow,
	nightForestCicadas,
	rain,
	rainRoof,
	rainThunder,
	train, waterfall
} from '../audios'
import {
	airportImg,
	catImg, cicadasImg,
	fireplaceImg,
	forestRiverImg, heavyRainImg,
	meadowImg, nightForestCicadasImg,
	rainImg, rainRoofImg,
	rainThunderImg,
	trainImg, waterfallImg
} from '../assets/images'

export type TrackType = {
	audio: string, title: string, volume: number, img: string
}

interface InitialState {
	playNow: TrackType[],
	tracks: TrackType[]
}

const initialState: InitialState = {
	playNow: [],
	tracks: [
		{ audio: cat, title: 'Cat', volume: 0.5, img: catImg },
		{ audio: meadow, title: 'Meadow', volume: 0.5, img: meadowImg },
		{ audio: fireplace, title: 'Fireplace', volume: 0.5, img: fireplaceImg },
		{ audio: cicadas, title: 'Cicadas', volume: 0.5, img: cicadasImg },
		{ audio: train, title: 'Train', volume: 0.5, img: trainImg },
		{ audio: rain, title: 'Rain', volume: 0.5, img: rainImg },
		{ audio: rainRoof, title: 'Rain roof', volume: 0.5, img: rainRoofImg },
		{ audio: heavyRain, title: 'Heavy rain', volume: 0.5, img: heavyRainImg },
		{ audio: rainThunder, title: 'Rain thunder', volume: 0.5, img: rainThunderImg },
		{ audio: airport, title: 'Airport', volume: 0.5, img: airportImg },
		{ audio: nightForestCicadas, title: 'Night forest', volume: 0.5, img: nightForestCicadasImg },
		{ audio: waterfall, title: 'Waterfall', volume: 0.5, img: waterfallImg },
		{ audio: forestRiver, title: 'Forest river', volume: 0.5, img: forestRiverImg }
	]
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		toggleTrack: (state, action: PayloadAction<TrackType>) => {
			if (state.playNow.find(track => track.title === action.payload.title)) {
				state.playNow = state.playNow.filter(track => track.title !== action.payload.title)
			} else if (state.playNow.length < 3) {
				state.playNow = [...state.playNow, action.payload]
			}
		},
		setVolume: (state, action: PayloadAction<TrackType>) => {
			state.playNow = state.playNow.map(track => track.title === action.payload.title ? action.payload : track)
		}
	}
})

export const { toggleTrack, setVolume } = playerSlice.actions