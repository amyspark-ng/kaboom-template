import kaboom from "kaboom";
import "kaboom/global";
import { loadAssets } from "./loader.js"

export const k = kaboom({
	width: 1024,
	height: 576,
	font: 'lambda',
});

export let GameState = {
	sound: {
		volume: 1,
		muted: false, 
	}
}

loadAssets()
go("gamescene")
