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
			let self = this;
			this.selector = selector;
			this.wheel = document.getElementById(this.selector);
			this.labels = document.querySelectorAll('.wheel-label');
			this.angleStep = 10;
			this.findActiveLabel();
			this.applyStylesLabels();

			function spinWheel(event){
				if(!event.target.closest('.wheel-label')) return;
				self.transferLabels(event.target.closest('.wheel-label'));
			}
			this.wheel.addEventListener('click',spinWheel);


		    this.wheel.addEventListener("touchstart", this.handleStart, false);
		    this.wheel.addEventListener("touchend", this.handleEnd, false);
		    this.wheel.addEventListener("touchcancel", this.handleCancel, false);
		    this.wheel.addEventListener("touchmove", this.handleMove, false);
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

		pointStart
		pointCurrent
		pointEnd

		handleStart(event){
			if(document.body.offsetWidth>640) return;
			//console.log('s:',event.changedTouches['0'].screenX);
			event.preventDefault();
			this.pointStart = event.changedTouches['0'].screenX;
		}

		handleEnd(event){
			if(document.body.offsetWidth>640) return;
			//console.log('e:',event.changedTouches['0'].screenX);
			this.pointStart = 0;
		    this.pointCurrent = 0;
	    	event.preventDefault();
		}

	  	handleCancel(event){
			if(document.body.offsetWidth>640) return;
	   		event.preventDefault();
	  	}

		handleMove(event){
			if(document.body.offsetWidth>640) return;
			//console.log('m:',this.pointCurrent - this.pointStart);
			if(this.pointCurrent - this.pointStart>=10){
				let n = wheel.labelActive + 1;
				if(n >= wheel.labels.length - 1) n = wheel.labels.length - 1;
				wheel.transferLabels(wheel.labels[n]);
			} else if(this.pointCurrent - this.pointStart<= -10){
				let n = wheel.labelActive - 1;
				if(n <= 0) n = 0;
				wheel.transferLabels(wheel.labels[n]);
			}
			this.pointStart = this.pointCurrent;

	    	event.preventDefault();
	    	this.pointCurrent = event.changedTouches['0'].screenX;
  		}
	};

	let wheel = new Wheel('wheel-box');


	function linksTransitionStop(event){
		if(event.target.tagName.toLowerCase() != 'a' && event.target.href != 'next') return;

		console.log('click');
		event.preventDefault();
	};
	document.addEventListener('click', linksTransitionStop);


	function selectorAllHandler(selector,func){
		document.querySelectorAll(selector).forEach(func);
	};
};