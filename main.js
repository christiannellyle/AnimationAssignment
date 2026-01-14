const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//ASSET_MANAGER.queueDownload("C:/Users/ajlyl/OneDrive - UW/491/AnimationAssignment/lozSpriteSheet.png");
ASSET_MANAGER.queueDownload("./lozSpriteSheet.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	// This ensures we have access to the image before we start trying to draw it
	gameEngine.addEntity(new Link(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
