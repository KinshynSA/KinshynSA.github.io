"use strict";

window.onload = ()=>{

	document.addEventListener('click', function(event){
		let target = event.target;

		if(target.classList.contains('customer_close'))	target.closest('.customer').remove();
	});

	document.addEventListener('keydown', function(event){
		let target = event.target;

		if(target.tagName.toLowerCase() == 'input' && target.type == 'tel'){
		    let keycode = event.keyCode;
		    if ((44 < keycode && keycode < 58)||(keycode == 187)||(keycode == 8)||(keycode == 37)||(keycode == 39)){} else {
		    	event.preventDefault();
		    };			
		};

		if(target.tagName.toLowerCase() == 'input' && target.classList.contains('invalid')) checkInput(target);
	});

	document.addEventListener('change', function(event){
		let target = event.target;

		if(target.tagName.toLowerCase() == 'input') checkInput(target);
	});

	document.querySelectorAll('.select-emulator').forEach((select)=>emulateSelector(select));
};


function emulateSelector(select){
	select.hidden = true;

	let emul = document.createElement('div');
	emul.classList = "select";
	emul.onclick = ()=>emul.classList.toggle('active');
	let emulList = document.createElement('div');
	emulList.classList = "select_list";
	emul.append(emulList);


	select.querySelectorAll('option').forEach((item)=>{
		let option = document.createElement('div');
		option.classList = "select_option";
		option.innerHTML = item.innerHTML;
		option.dataset.value = item.value;
		option.onclick = ()=>{
			select.value=option.dataset.value;
			option.parentNode.querySelectorAll('.select_option').forEach((option)=>{
				option.classList.remove('selected')
			});
			option.classList.add('selected');
		};
		if(item.selected) option.classList.add('selected');
		emulList.append(option);
	});


	select.parentNode.append(emul);
};



function ticketsConfirm(e){
	let formFlag = 1;

	document.querySelectorAll('.customer_input-block input').forEach((item)=>{
		if(item.required && !checkInput(item)) formFlag = 0;
	});

	if(formFlag){
		document.querySelector('.description_alert_text-check').classList.remove('hidden');
		document.querySelector('.description_alert_text-fill').classList.add('hidden');
		document.querySelector('.main-button-redact').classList.remove('hooded');
		document.querySelector('.main-button-go').classList.remove('hidden');
		document.querySelector('.main-button-done').classList.add('hidden');
	};
};



function checkInput(input){
	input.classList.remove('invalid');

	let val = input.value;

	if((input.type == 'tel') && (val.length<10) || (val.length<1)){
		input.classList.add('invalid');
		return false;
	};

	return true;
};