import { addConfetti } from "../plugins/confetti.js";
import { positionSetter } from "../plugins/positionSetter.js";
import { volumeManager } from "../plugins/volumebar.js";

export function gamescene() {
	return scene("gamescene", () => {
		// put in the first scene that the game starts in
		volumeManager()
		
		addConfetti({ pos: center() })

		let osaka = add([
			sprite("osaka"),
			pos(center()),
			anchor("center"),
			area(),
			positionSetter(),
		])

		osaka.onClick(() => {
			// play("saataandagi")
		})

		debug.log("it runs!!!! kewl")
	})	
}