import { Application, Loader, Sprite } from 'pixi.js'
import { BasisLoader } from '@pixi/basis'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	backgroundColor: 0x6495ed,
	width: 768,
	height: 480
});

BasisLoader.loadTranscoder("pixi/basis_transcoder.js", "pixi/basis_transcoder.wasm"); // use @pixi/basis provided transcoder

// BasisLoader.loadTranscoder("binomial/basis_transcoder.js", "binomial/basis_transcoder.wasm"); // use the current version of the transcoder


// Basis assets were generated by PVRTexTool with the "best" quality setting in sRGB mode.
Loader.shared.add("original", "original.png");
Loader.shared.add("ETC1S", "ETC1S.basis");
Loader.shared.add("UASTC", "UASTC.basis");

Loader.shared.onComplete.once(() => {
	const resources = Loader.shared.resources;

	const original = Sprite.from(resources["original"].texture);
	app.stage.addChild(original);

	const ETC1S = Sprite.from(resources["ETC1S"].texture);
	ETC1S.position.x = 256;
	app.stage.addChild(ETC1S);

	const UASTC = Sprite.from(resources["UASTC"].texture);
	UASTC.position.x = 512;
	app.stage.addChild(UASTC);
});

Loader.shared.load();