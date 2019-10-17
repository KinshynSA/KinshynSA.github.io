"use strict";

window.onload = function(){
	let changeHomeScreens = new ChangeHomeScreens();
}

class ChangeHomeScreens{
	constructor(){
		if(document.getElementById('screens-block'));
		document.body.style.overflow = 'hidden';
		this.screensBox = document.getElementById('screens-block');
		this.screensArr = this.screensBox.querySelectorAll('.screen-block');
		this.screensArr.forEach((screen,i) => {			
			if(screen.classList.contains('active')){
				this.screenN = i;
			}
		})
		this.switchScroll();

		document.addEventListener('keydown', this.scrollScreens.bind(this));
		document.addEventListener('wheel', this.scrollScreens.bind(this));
		this.screensBox.addEventListener('touchstart', this.scrollScreens.bind(this));
		window.addEventListener('resize', this.switchScroll.bind(this));
	}

	scrollScreens(event){
		if(this.blocked) return;

		if(event.deltaY){
			if(event.deltaY>0){
				this.scrollScreen(false);
			} else {
				this.scrollScreen(true);
			}
		}

		if(event.code) this.scrollScreenKeyDown(event);

		if(event.changedTouches) this.scrollScreenTouch(event);
	}

	scrollScreen(direction){
		let n;

		if(direction){
			if(this.screenN == 0) return;
			n = this.screenN - 1;
		} else {
			if(this.screenN == this.screensArr.length - 1) return;
			n = this.screenN + 1;
		}
		this.blocked = true;

		if(n<0) n = 0;
		if(n>this.screensArr.length - 1) n = this.screensArr.length - 1;
		this.screensArr[this.screenN].classList.remove('active');
		this.screensArr[this.screenN].classList.add('departed');
		let t = +this.screensArr[this.screenN].dataset.delay;
		this.screenN = n;
		this.screensArr[n].classList.remove('departed');

		setTimeout(() => {
			this.screensArr[n].classList.add('active');
			this.blocked = false;
		}, t);
	}

	scrollScreenTouch(event){	
		event.preventDefault();
		let touchPointStart = event.changedTouches['0'].screenY;
		let touchPointCurrent = 0;

		let touchMoveBinded = touchMove.bind(this);
		function touchMove(event){
	    	event.preventDefault();
	    	touchPointCurrent = event.changedTouches['0'].screenY;
	    	let m = touchPointCurrent - touchPointStart;

			if(m >= 50){
				this.scrollScreen(false);
				touchPointStart = touchPointCurrent;
				touchEnd.call(this,event);
			} else if(m <= -50){
				this.scrollScreen(true);
				touchPointStart = touchPointCurrent;
				touchEnd.call(this,event);			
			}
  		}

		function touchEnd(event){
	    	event.preventDefault();
			this.screensBox.removeEventListener('touchmove', touchMoveBinded);
			let touchPointStart = 0;
		    let touchPointCurrent = 0;
		}

		this.screensBox.addEventListener('touchmove', touchMoveBinded);
		this.screensBox.addEventListener('touchend', touchEnd.bind(this));
		this.screensBox.addEventListener('touchcancel', touchEnd.bind(this));
	}

	scrollScreenKeyDown(event){
		let keysUpward = ['ArrowUp', 'PageUp', 'Home'];
		let keysDown = ['ArrowDown', 'PageDown', 'End'];

		if(keysUpward.find((item) => item == event.key)){
			event.preventDefault();
			this.scrollScreen(true);
		} 
		if(keysDown.find((item) => item == event.key)){
			event.preventDefault();
			this.scrollScreen(false);
		}
	}

	switchScroll(){
		if(document.body.offsetWidth <= 1100){
			this.blocked = true;
			document.body.style.overflow = '';
		} else {
			this.blocked = false;
			document.body.style.overflow = 'hidden';			
		};
	}
}