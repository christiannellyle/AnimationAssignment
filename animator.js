class Animator {
	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
		Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

		this.elapsedTime = 0;
		this.totalTime = frameCount * frameDuration;
	};

	drawFrame(tick, ctx, x, y) {
		this.elapsedTime += tick;

		// if u overlapped it, lets minus off the total time 
		if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
		const frame = this.currentFrame();

		ctx.drawImage(this.spritesheet, 
			this.xStart + this.width*frame, this.yStart,
			this.width, this.height, 
			x, y, 
			this.width*2, this.height*2);
	};

	// gives u the current frame index
	currentFrame() {
		return Math.floor(this.elapsedTime / this.frameDuration);
	};

	// returns true if the animation is done
	isDone() {
		return (this.elapsedTime >= this.totalTime);
	};	

}
