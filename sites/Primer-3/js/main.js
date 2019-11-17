"use strict";

window.onload = function(){
	let slider = new Slider('.slider_container');
	
	document.addEventListener('click',openSliderInfo);
}


class Slider{
	constructor(slider_container){
		document.querySelectorAll(slider_container).forEach((container) => {
			this.container = container;
			this.box = this.container.querySelector('.slider_box');

			this.extendSlides();
			this.createSliderNavigation();
			this.slideAll();

			this.box.addEventListener('mousedown',this.mouseFlip.bind(this));
		    this.box.addEventListener('touchstart', this.touchFlip.bind(this));
		});
	}

	extendSlides(){
		this.sliders = this.box.querySelectorAll('.slide');
		this.boxWidth = this.box.offsetWidth;

		this.sliders.forEach((slide,i,arr)=>{	
			slide.style.width = `${this.boxWidth}px`;
			slide.style.minWidth = `${this.boxWidth}px`;
		});		
	}

	createSliderNavigation(){
		let slider_nav = document.createElement('ul');
		slider_nav.classList = 'slider_nav';

		this.butts = [];
		for(let i=0; i<this.sliders.length; i++){
			let slider_nav_butt = document.createElement('li');
			slider_nav_butt.classList = 'slider_nav_butt';
			this.butts.push(slider_nav_butt);
		}

		this.butts.forEach((butt,i,arr)=>{
			butt.addEventListener('click',func.bind(this));
			slider_nav.append(butt);
			
			function func(){
				return this.slideMove({counter: i});
			}
		});

		this.container.append(slider_nav);
	}

	slideAll(){
		let n = 0;

		this.sliders.forEach((slide,i,arr)=>{	
			if(slide.classList.contains('active')){
				this.boxShift = -(i * this.boxWidth);
				arr[0].style.marginLeft = `${this.boxShift}px`;
				n = i;
			}
		});

		this.butts.forEach((butt,i,arr)=>{
			butt.classList.remove('active');
			if(i==n) butt.classList.add('active');
		});
	}

	slideMove(params){
		let n = 0;

		this.sliders.forEach((slide,i,arr)=>{	
			if(slide.classList.contains('active')) n = i;
			slide.classList.remove('active');
		});

		if(params.direction == 'right') n++;
		if(params.direction == 'left') n--;
		if(params.counter != undefined) n = params.counter;
		if(n > this.sliders.length - 1) n = this.sliders.length - 1;
		if(n < 0) n = 0;

		this.box.querySelectorAll('.slide')[n].classList.add('active');
		this.slideAll();
	}

	mouseFlip(event){
		event.preventDefault();
		let x = this.box.querySelectorAll('.slide')[0];		
		let mousePointStart = event.clientX;
		let mousePointCurrent = 0;

		let mouseMoveBinded = mouseMove.bind(this);
		function mouseMove(event){
			event.preventDefault();
			mousePointCurrent = event.clientX;
			let m = (mousePointCurrent - mousePointStart);
			x.style.marginLeft = `${this.boxShift + m}px`;

			if(m < -document.body.offsetWidth/4){
				this.slideMove({direction: 'right'});
				mousePointStart = mousePointCurrent;
				mouseUp.call(this,event);
			} else if(m > document.body.offsetWidth/4){
				this.slideMove({direction: 'left'});
				mousePointStart = mousePointCurrent;
				mouseUp.call(this,event);
			}
		}

		function mouseUp(event){
			event.preventDefault();
			this.box.removeEventListener('mousemove', mouseMoveBinded);
			mousePointStart = 0;
			mousePointCurrent = 0;
			x.style.marginLeft = `${this.boxShift}px`;
		}

		this.box.addEventListener('mousemove', mouseMoveBinded);
		this.box.addEventListener('mouseup', mouseUp.bind(this));
	}

	touchFlip(event){
		event.preventDefault();
		let x = this.box.querySelectorAll('.slide')[0];		
		let touchPointStart = event.changedTouches['0'].screenX;
		let touchPointCurrent = 0;

		let touchMoveBinded = touchMove.bind(this);
		function touchMove(event){
	    	event.preventDefault();
	    	touchPointCurrent = event.changedTouches['0'].screenX;
	    	let m = touchPointCurrent - touchPointStart;

			if(m >= document.body.offsetWidth/4){
				this.slideMove({direction: 'left'});
				touchPointStart = touchPointCurrent;
				touchEnd.call(this,event);
			} else if(m <= -document.body.offsetWidth/4){
				this.slideMove({direction: 'right'});
				touchPointStart = touchPointCurrent;
				touchEnd.call(this,event);				
			}
  		}

		function touchEnd(event){
	    	event.preventDefault();
			this.box.removeEventListener('touchmove', touchMoveBinded);
			let touchPointStart = 0;
		    let touchPointCurrent = 0;
			x.style.marginLeft = `${this.boxShift}px`;
		}

		this.box.addEventListener('touchmove', touchMoveBinded);
		this.box.addEventListener('touchend', touchEnd.bind(this));
		this.box.addEventListener('touchcancel', touchEnd.bind(this));
	}
}


function openSliderInfo(event){
	if(!event.target.classList.contains('slider_butt')) return;

	
}