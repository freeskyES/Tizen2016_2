var bubble=null;

function Bubble() {
    'use strict';
    return;
}

(function strict() {
    'use strict';
    Bubble.prototype = {
    		touchSound: new audio('sounds/Water Balloon.wav')
    };
    
    Bubble.prototype.playtouchSound = function playtouchSound() {
		this.touchSound=document.createElement('audio');
		this.touchSound=document.createElement('touchSound');
		this.touchSound.src='sounds/Water Balloon.wav';
		
		try {
	        this.touchSound.currentTime = 0;
	        this.touchSound.play();
	    } catch (e) {
	        console.warn('Unable to play countdown sound', e);
	    }
    };
    
    Bubble.prototype.init = function init() {
        this.playtouchSound();       
    };
    
    /*bubble.Soundd = function soundd(){
    	var options = {
            	audio: true,
                video: false,
        };
    	navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia;
        
		
		
		try {
            if (typeof (navigator.getUserMedia) === 'function') {
                // ask user to grant permissions to use media objects
            	navigator.getUserMedia(options);    
            }
        } catch (e) {
            alert('navigator.getUserMedia() error.');
            console.error('navigator.getUserMedia() error: ' + e.message);
        }
    	
    	
    }*/
}());

bubble = new Bubble();

window.onload = function() {
    // TODO:: Do your initialization job
	
	soundEfx=document.getElementById("soundEfx");
	soundEfx2=document.getElementById("soundEfx2");
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
   /* this.bubble.Soundd();*/
    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');
        //soundEfx.play();

        
        /*bubble.init();
        bubble.playtouchSound();*/
        
        
        
        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
};

