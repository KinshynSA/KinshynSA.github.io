"use strict";

window.onload = function(){

	document.querySelectorAll('.select-emulator').forEach((select)=>{
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
	});


	document.querySelectorAll('.customer_close').forEach((butt)=>{
		butt.onclick = ()=>butt.closest('.customer').remove();
	});

	document.querySelectorAll('input[type="tel"').forEach(function(item,i,arr){
		item.onkeydown = function checkKeycode(event){
		    let keycode = event.keyCode;
		    if ((44 < keycode && keycode < 58)||(keycode == 187)||(keycode == 8)||(keycode == 37)||(keycode == 39)){} else {
		        return false;
		    }
		}
	});
};