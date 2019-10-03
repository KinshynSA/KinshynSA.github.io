"use strict"

window.onload =function(){
	function menuHandler(event){
		if(!event.target.closest('.menu-button')) return;

		let action = event.target.closest('.menu-button').dataset.action;
		if(action == 'open'){
			selectorAllHandler('.menu-box',function(item){item.classList.add('active')});
		} else if(action == 'close'){
			selectorAllHandler('.menu-box',function(item){item.classList.remove('active')});
		}
	}
	document.addEventListener('click', menuHandler);


	class Wheel{
		constructor(selector){
			this.selector = selector;
			this.wheel = document.getElementById(this.selector);
			this.labels = document.querySelectorAll('.wheel-label');
			this.angleStep = 10;
			this.findActiveLabel();
			this.applyStylesLabels();

			this.wheel.addEventListener('click',this.spinWheel.bind(this));
			//this.wheel.addEventListener('mousedown',this.mouseStart.bind(this));

		    this.wheel.addEventListener("touchstart", this.touchStart.bind(this), false);
		    this.wheel.addEventListener("touchend", this.touchEnd.bind(this), false);
		    this.wheel.addEventListener("touchcancel", this.touchCancel.bind(this), false);
		    this.wheel.addEventListener("touchmove", this.touchMove.bind(this), false);
		}
 
		findActiveLabel(){
			this.labels.forEach((item,i,arr)=>{
				if(item.classList.contains('active')) this.labelActive = i;
			});
		}

		transferLabels(target){
			this.labels.forEach(item => item.classList.remove('active'));
			target.classList.add('active');
			this.findActiveLabel();
			this.applyStylesLabels();	
		}

		applyStylesLabels(angleStep = this.angleStep){
			this.labels.forEach((item,i,arr)=>{
				let angle = angleStep * (i - this.labelActive);
				item.style.transform = `translateY(-50%) rotate(${angle}deg)`;

				let op = 1;
				if(document.body.offsetWidth>1100){
					if(angle>=60 || angle<=-60)	op = 0.7 - (Math.abs(Math.abs(angle) - 60) * (1/20));
				} else if(document.body.offsetWidth>640){
					if(angle>40 || angle<-40) op = 0;	
				} else{
					if(angle>=30 || angle<=-30)	op = 0.7 - (Math.abs(Math.abs(angle) - 30) * (1/20));
				}
				if(op<0) op = 0;
				item.style.opacity = op;
			});
			this.changeDescription();
		}

		changeDescription(){
			let activeYear = document.querySelector('.wheel-label.active').dataset.year;
			selectorAllHandler('.description-box',item => {
				item.classList.remove('active');
				if(item.dataset.year == activeYear) item.classList.add('active');
			});
		}

		spinWheel(event){
			if(document.body.offsetWidth<641 || !event.target.closest('.wheel-label_text')) return;
			this.transferLabels(event.target.closest('.wheel-label'));
		}

		mouseStart(event){
			if(document.body.offsetWidth<900 || !event.target.closest('.wheel-block')) return;
			this.mousePointStart = event.clientY;

			function mouseMove(event){
				this.mousePointCurrent = event.clientY;

				if(this.mousePointCurrent - this.mousePointStart <= -40){
					this.mousePointStart = this.mousePointCurrent;
					let n = this.labelActive - 1;
					if(n >= 0) this.transferLabels(wheel.labels[n]);
				} else if(this.mousePointCurrent - this.mousePointStart >= 40){	
					this.mousePointStart = this.mousePointCurrent;
					let n = this.labelActive + 1;
					if(n <= this.labels.length - 1) this.transferLabels(this.labels[n]);			
				}
			}
			mouseMove = mouseMove.bind(this);


			function mouseEnd(event){
				this.mousePointStart = 0;
				this.mousePointCurrent = 0;

				document.removeEventListener('mousemove',mouseMove);
			}
			mouseEnd = mouseEnd.bind(this);

			document.addEventListener('mousemove',mouseMove);
			document.addEventListener('mouseup',mouseEnd);
		}

		touchStart(event){
			if(document.body.offsetWidth>640) return;
			this.touchPointStart = event.changedTouches['0'].screenX;
		    this.touchPointCurrent = 0;
			event.preventDefault();
		}

		touchEnd(event){
			if(document.body.offsetWidth>640) return;
	    	event.preventDefault();

			this.touchPointStart = 0;
		    this.touchPointCurrent = 0;
		}

	  	touchCancel(event){
			if(document.body.offsetWidth>640) return;
	   		event.preventDefault();

			this.touchPointStart = 0;
		    this.touchPointCurrent = 0;
	  	}

		touchMove(event){
			if(document.body.offsetWidth>640) return;
	    	event.preventDefault();

	    	this.touchPoinCurrent = event.changedTouches['0'].screenX;

			if(this.touchPointCurrent - this.touchPointStart >= 40){
				this.touchPointStart = this.touchCurrent;
				let n = this.labelActive + 1;
				if(n <= this.labels.length - 1) this.transferLabels(this.labels[n]);
			} else if(this.touchPointCurrent - this.touchPointStart <= -40){
				this.touchPointStart = this.touchPoinCurrent;
				let n = this.labelActive - 1;
				if(n >= 0) this.transferLabels(wheel.labels[n]);				
			}
  		}
	};

	let wheel = new Wheel('wheel-box');


	function linksTransitionStop(event){
		if(event.target.tagName.toLowerCase() != 'a' && event.target.href != 'next') return;

		console.log('На эту часть макета не было');
		event.preventDefault();
	};
	document.addEventListener('click', linksTransitionStop);


	function selectorAllHandler(selector,func){
		document.querySelectorAll(selector).forEach(func);
	};
};