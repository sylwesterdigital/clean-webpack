console.log("index.js");

import css from './style.css';
import * as PIXI from 'pixi.js'


// App
let	 app;

//const loader = PIXI.Loader.shared; // PixiJS exposes a premade instance for you to use.
//or
const loader = new PIXI.Loader(); // you can also create your own if you want

const sprites = {};


window.loader = loader;

// Colors
const cols_blue1 = 0x132CAD


function loadAssets() {


	// Chainable `add` to enqueue a resource
	loader.add('shape01', 'assets/textures/png/01.png')
	      .add('shape02', 'assets/textures/png/02.png')
	      .add('shape03', 'assets/textures/png/03.png')
	      .add('shape04', 'assets/textures/png/04.png')
	      .add('shape05', 'assets/textures/png/05.png')

	// Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
	// This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
	//loader.pre(cachingMiddleware);

	// Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
	// This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
	//loader.use(parsingMiddleware);

	// The `load` method loads the queue of resources, and calls the passed in callback called once all
	// resources have loaded.
	loader.load((loader, resources) => {
	    // resources is an object where the key is the name of the resource loaded and the value is the resource object.
	    // They have a couple default properties:
	    // - `url`: The URL that the resource was loaded from
	    // - `error`: The error that happened when trying to load (if any)
	    // - `data`: The raw data that was loaded
	    // also may contain other properties based on the middleware that runs.

	    // sprites.bunny = new PIXI.TilingSprite(resources.bunny.texture);
	    // sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
	    // sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);




	    console.log("loader load");

	});

	// throughout the process multiple signals can be dispatched.
	loader.onProgress.add(() => {}); // called once per loaded/errored file
	loader.onError.add(() => {}); // called once per errored file
	loader.onLoad.add(() => {}); // called once per loaded file
	loader.onComplete.add(() => {

		addSprites();

	}); // called once when the queued resources all load.



}


function addSprites() {

	console.log("addSprites");

	// create a new Sprite from an image path
	const bunny = PIXI.Sprite.from(loader.resources.shape01.texture);

	// center the sprite's anchor point
	bunny.anchor.set(0.5);

	// move the sprite to the center of the screen
	bunny.x = app.screen.width / 2;
	bunny.y = app.screen.height / 2;

	console.log(bunny.position)

	app.stage.addChild(bunny);

	// Listen for animate update
	app.ticker.add((delta) => {
	    // just for fun, let's rotate mr rabbit a little
	    // delta is 1 if running at 100% performance
	    // creates frame-independent transformation
	    bunny.rotation += 0.1 * delta;
	});




}






function initPixi() {

    let view = document.getElementById("screen")

    app = new PIXI.Application({
        /*        width: wapp.W, 
                height: wapp.H, */
        backgroundColor: cols_blue1,
        resolution: window.devicePixelRatio || 1,
        resizeTo: window
    });

    view.appendChild(app.view);    

    window.app = app;

    loadAssets();


}





function resizeGame() {

	console.log($(window).width(),$(window).height());

}



initPixi();


window.addEventListener('resize', resizeGame, false);