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


	function Wheel(){
		let self = this;

		this.prepare = function(){
			this.wheel = document.querySelector('.wheel');
			this.labels = document.querySelectorAll('.wheel-label');

			this.findActiveLabel();
			this.applyStylesLabels();

			function spinWheel(event){
				if(!event.target.closest('.wheel-label')) return;
				self.transferLabels(event);
			}
			document.addEventListener('click',spinWheel);

			
		};

		this.findActiveLabel = function(){
			this.labels.forEach((item,i,arr)=>{
				if(item.classList.contains('active')) this.labelActive = i;
			});
		};

		this.transferLabels = function(event){
			this.labels.forEach(item => item.classList.remove('active'));
			event.target.closest('.wheel-label').classList.add('active');
			this.findActiveLabel();
			this.applyStylesLabels();	
		};

		this.applyStylesLabels = function(){
			this.labels.forEach((item,i,arr)=>{
				let angle = 10 * (i - this.labelActive);
				item.style.transform = `translateY(-50%) rotate(${angle}deg)`;
				item.style.opacity = 1;

				if(angle>=60 || angle<=-60){
					let op = 0.7 - (Math.abs(Math.abs(angle) - 60) * (1/20));
					if(op<0) op = 0;
					item.style.opacity = op;
				}
			});
			this.changeDescription();
		};

		this.changeDescription = function(){
			let activeYear = document.querySelector('.wheel-label.active').dataset.year;
			selectorAllHandler('.description-box',item => {
				item.classList.remove('active');
				if(item.dataset.year == activeYear) item.classList.add('active');
			});
		};
	};

	let wheel = new Wheel();
	wheel.prepare(); 


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