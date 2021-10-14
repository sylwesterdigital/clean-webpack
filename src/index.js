console.log("index.js");

import css from './style.css';
import * as PIXI from 'pixi.js'


let app;
let wapp = {};
wapp.W = $(window).width();
wapp.H = $(window).height();
let w = window;


// Colors
const cols_blue1 = 0x132CAD


console.log(wapp)




function initPixi() {

    let view = document.getElementById("screen")

    app = new PIXI.Application({
        /*        width: wapp.W, 
                height: wapp.H, */
        backgroundColor: cols_blue1,
        resolution: window.devicePixelRatio || 1,
        resizeTo: window
    });


}


initPixi();