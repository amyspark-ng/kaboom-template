import { gamescene } from "./scenes/gamescene.js"

export function loadAssets() {
	// REMEMBER SENSITIVE CASE
	loadRoot("./assets/")
	loadBean()

	//#region sounds
	loadSprite("osaka", "sprites/osaka.png")
	//#endregion

	//#region sounds
	loadSound("volumeChange", "sounds/volumeChange.wav")
	loadSound("saataandagi", "sounds/saataandagi.ogg")
	//#endregion

	//#region fonts
	loadRoot(".")
	loadFont("lambda", "./assets/fonts/lambda.ttf")
	loadFont("lambdao", "./assets/fonts/lambda.ttf", {
		outline: 4,
	})
	loadRoot("./assets/")
	//#endregion

	// #region scenes
	gamescene()
	// #endregion
}