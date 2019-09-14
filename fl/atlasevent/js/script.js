"use strict";

window.onload = ()=>{
	document.addEventListener('click', function(event){
		if(event.target.closest('.sresult_sidebar_label')) event.target.closest('.sresult_sidebar_label').nextElementSibling.classList.toggle('active');

		if(event.target.closest('.search_item-location')){
			let box = event.target.closest('.search_item-location');
			box.querySelector('.select').classList.add('active');

			if(event.target.closest('.select_option')){
				box.querySelector('.search_field').value = event.target.closest('.select_option').textContent;
				box.querySelector('.select').classList.remove('active');
			}
		};


		if(event.target.closest('.search_item-date')){
			if(!event.target.closest('.search_item-date').classList.contains('active')){
				let box = document.createElement('div');
				box.classList = 'search_item-calendar';
				event.target.closest('.search_item-date').append(box);
				calendar.prepareCalendar({box:box});
				event.target.closest('.search_item-date').classList.add('active');					
			}

			if(event.target.closest('.calendar-body_item_label')){
				let v = event.target.closest('.calendar-body_item_label').dataset.data;
				v = v.split('-').join('/');
				event.target.closest('.search_item-date').querySelector('.search_field').value = v;
				event.target.closest('.search_item-date').classList.remove('active');
				event.target.closest('.search_item-date').querySelector('.search_item-calendar').remove();
			}
		}


		if(event.target.closest('.customer_close')){
			event.target.closest('.customer').remove();
			if(document.querySelectorAll('.customer').length <= 0) changeTicketsStatus(0);
		};

		if(event.target.closest('.description_butt')){
			addTicket();
			changeTicketsStatus(1);
		};		
		if(event.target.closest('.pform_close')) event.target.closest('.pform-container').classList.remove('active');
		if(event.target.closest('.pform_butt')) checkPform(event);
		if(event.target.closest('.main-button-redact')){			
			changeTicketsStatus(2);
		};
		if(event.target.closest('.main-button-done')) document.querySelector('.pform-container').classList.add('active');
		if(event.target.closest('.main-button-next')){
			changeTicketsStatus(3);
		};
		if(event.target.closest('.main-button-go')){
			let block = document.querySelector('.customer');
			if(checkForm(block)) alert('Idet prodazha');
		};
		
	});

	document.addEventListener('keydown', function(event){
		if(event.target.tagName.toLowerCase() == 'input' && event.target.type == 'tel'){
		    let keycode = event.keyCode;
		    if ((44 < keycode && keycode < 58)||(keycode == 187)||(keycode == 8)||(keycode == 37)||(keycode == 39)){} else {
		    	event.preventDefault();
		    };			
		};

		if(event.target.tagName.toLowerCase() == 'input' && event.target.classList.contains('invalid')) checkInput(event.target);
	});

	document.addEventListener('change', function(event){
		if(event.target.tagName.toLowerCase() == 'input') checkInput(event.target);
	});

	document.querySelectorAll('.select-emulator').forEach((select) => emulateSelector(select));
	document.querySelectorAll('.calendar-box-big').forEach((item) => calendar.prepareCalendar({
		box:item,
		eventsCalendar:eventsCalendar
	}));	
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

	let heightStart = emul.querySelector('.select_option').offsetHeight;
	let heightEnd = 0;
	emul.querySelectorAll('.select_option').forEach((option)=>{
		heightEnd += option.offsetHeight;
	});
	emul.style.height = heightStart + 'px';
	emul.querySelector('.select_list').style.maxHeight = heightStart + 'px';
};



function checkInput(input){
	input.classList.remove('invalid');

	let val = input.value;

	if((input.type == 'text')){
		if(!val.length) return noticeFalse(input);
	}

	if((input.type == 'tel')){
		if((val.length<10) || (val.length<1)) return noticeFalse(input);
	}

	if(input.type == 'email'){
		let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(reg.test(val) == false) return noticeFalse(input);
	}

	if(input.type == 'checkbox'){
		if(!input.checked) return noticeFalse(input);
	}

	function noticeFalse(item){
		item.classList.add('invalid');
		return false;
	}

	return true;
};



function checkForm(target){
	let form = target.closest('form');
	let formFlag = 1;

	form.querySelectorAll('input').forEach((item)=>{
		if((item.required || item.classList.contains('input_required')) && !checkInput(item)) formFlag = 0;
	});

	if(formFlag) return true;
	return false;
};


function checkPform(e){
	let result = checkForm(e.target);
	if(result){
		let form = event.target.closest('form');
		let name = form.querySelector('.pform_input_block-name input').value;
		let phone = form.querySelector('.pform_input_block-phone input').value;
		let email = form.querySelector('.pform_input_block-email input').value;
		let values = {
			mainTicket : true,
			name: name,
			phone: phone,
			email: email
		};

		addTicket(values);
		changeTicketsStatus(2);
		event.target.closest('.pform-container').classList.remove('active');
	}
};


function changeTicketsStatus(status){
	/*
	0 - пустой экран
	1 - есть от одного клиента, форма не заполнена
	2 - есть от одного клиента, форма заполнена
	3 - подтверждение
	*/
	if(status==0){
		classChange('.description_alert','active','remove');
		classChange('.description_alert_info','active','add');
		classChange('.exposition','hidden','remove');
		classChange('.description_alert_text-fill','hidden','remove');
		classChange('.description_alert_text-check','hidden','add');	
		classChange('.main-button-done','hidden','add');	
		classChange('.customers','closed','remove');		
	} else if(status==1){
		classChange('.description_alert','active','remove');
		classChange('.description_alert_fill','active','add');
		classChange('.exposition','hidden','add');
		classChange('.description_alert_text-fill','hidden','remove');
		classChange('.description_alert_text-check','hidden','add');	
		classChange('.main-button-redact','hooded','add');			
		classChange('.main-button-done','hidden','remove');	
		classChange('.main-button-go','hidden','add');			
		classChange('.customers','closed','remove');		
	} else if(status==2){
		classChange('.description_alert','active','remove');
		classChange('.description_alert_fill','active','add');
		classChange('.exposition','hidden','add');
		classChange('.description_alert_text-fill','hidden','remove');
		classChange('.description_alert_text-check','hidden','add');
		classChange('.main-button-redact','hooded','add');			
		classChange('.main-button-done','hidden','remove');	
		classChange('.main-button-done','main-button-next','add');	
		classChange('.main-button-done','main-button-done','remove');			
		classChange('.main-button-next','hidden','remove');	
		classChange('.main-button-go','hidden','add');		
		classChange('.customers','closed','remove');
	} else if(status==3){
		classChange('.description_alert','active','remove');
		classChange('.description_alert_pay','active','add');
		classChange('.exposition','hidden','add');
		classChange('.description_alert_text-fill','hidden','add');
		classChange('.description_alert_text-check','hidden','remove');	
		classChange('.main-button-redact','hooded','remove');			
		classChange('.main-button-next','hidden','add');	
		classChange('.main-button-go','hidden','remove');			
		classChange('.customers','closed','add');
	}

	function classChange(selector,classValue,operation='add'){
		document.querySelectorAll(selector).forEach((item)=>{
			item.classList[operation](classValue);
		});
	}
}


function addTicket(obj){
	let mainTicket = false;
	let nameVal = '';
	let phoneVal = '';
	let emailVal = '';
	if(obj){
		mainTicket = obj.mainTicket;
		nameVal = obj.name;
		phoneVal = obj.phone;
		emailVal = obj.email;
	}
	let required = mainTicket ?  'required' : '';

	let ticket = document.createElement('article');
	ticket.classList = 'customer';
	let select = `<div class="customer_input-block customer_input-block-type">
					<label class="customer_label">Тип квитка:</label>
					<div class="customer_flex">
						<img class="customer_image" src="img/ticket.png" alt="" />
						<select class="select-emulator">
							<option value="1" selected>Дорослий</option>
							<option value="2">Дитячий</option>
							<option value="3">Жіночий</option>
						</select>
					</div>
				</div>`;
	let mail = `<div class="customer_input-block customer_input-block-email">
					<label class="customer_label">Email гостя:</label>
					<div class="customer_flex">
						<img class="customer_image" src="img/email.png" alt="" />
						<input class="customer_input" type="text" placeholder="exampleemail@gmail.com" value="${emailVal}" ${required}>
					</div>
				</div>`;
	let name = `<div class="customer_input-block customer_input-block-name">
					<label class="customer_label">ПІБ гостя:</label>
					<div class="customer_flex">
						<img class="customer_image" src="img/face.png" alt="" />
						<input class="customer_input" type="text" placeholder="Пупкін Василь Васильович" value="${nameVal}" ${required}>
					</div>
				</div>`;
	let phone = `<div class="customer_input-block customer_input-block-phone">
					<label class="customer_label">Телефон гостя:</label>
					<div class="customer_flex">
						<img class="customer_image" src="img/phone.png" alt="" />
						<input class="customer_input" type="tel" placeholder="+380 97 075 76 38" value="${phoneVal}" ${required}>
					</div>
				</div>`;
	let price = `<div class="customer_price">
					<img class="customer_price_image" src="img/usd.png" alt="" />
					<span class="customer_price_text"><span class="custom_price_num">300</span> грн</span>
				</div>`;
	let close = `<img class="customer_close" src="img/close.png" alt="" />`;
	ticket.innerHTML = `${mainTicket ? mail : select}
						${name}
						${phone}
						${price}
						${mainTicket ? '' : close}`;



	let block = document.querySelector('.customers .center-main-block');
	mainTicket ? block.prepend(ticket) : block.append(ticket);
	ticket.querySelectorAll('.select-emulator').forEach((select) => emulateSelector(select));
};



// calendar start
	class Calendar{
		constructor(){}

		dayName = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','НД']

		monthName = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень']

		date = new Date()

		prepareCalendar(parametrs){
			this.box = parametrs.box;
			if(parametrs.eventsCalendar) this.eventsCalendar = JSON.parse(parametrs.eventsCalendar);
			this.createCalendar();
		}

		createCalendar(){
			this.cleanBox();
			this.createPanel();
			this.createTable(); 
		}

		cleanBox(){
			this.box.innerHTML = '';
		}

		createPanel(){
			let panel = document.createElement('div');
			panel.classList = 'calendar-panel';

			let yearLeft = document.createElement('div');
			yearLeft.classList = 'calendar-button-year';
			yearLeft.innerHTML = `<i class="fa fa-angle-double-left"></i> <span class="calendar-button-text">${this.date.getFullYear() - 1}</span>`;
			yearLeft.onclick = ()=>{
				this.date = new Date(this.date.getFullYear() - 1, this.date.getMonth());
				this.createCalendar();
			}

			let yearRight = document.createElement('div');
			yearRight.classList = 'calendar-button-year';
			yearRight.innerHTML = `<span class="calendar-button-text">${this.date.getFullYear() + 1}</span> <i class="fa fa-angle-double-right"></i>`;
			yearRight.onclick = ()=>{
				this.date = new Date(this.date.getFullYear() + 1, this.date.getMonth());
				this.createCalendar();
			}

			let monthLeft = document.createElement('div');
			monthLeft.classList = 'calendar-button-month';
			let dL = this.date.getMonth() - 1;
			if (dL<0) dL = 11;
			monthLeft.innerHTML = `<i class="fa fa-angle-left"></i> <span class="calendar-button-text">${this.monthName[dL].slice(0,3)}</span>`;
			monthLeft.onclick = ()=>{
				this.date = new Date(this.date.getFullYear(),this.date.getMonth() - 1);
				this.createCalendar();
			}

			let monthRight = document.createElement('div');
			monthRight.classList = 'calendar-button-month';
			let dR = this.date.getMonth() + 1;
			if (dR>11) dR = 0;
			monthRight.innerHTML = `<span class="calendar-button-text">${this.monthName[dR].slice(0,3)}</span> <i class="fa fa-angle-right"></i>`;
			monthRight.onclick = ()=>{
				this.date = new Date(this.date.getFullYear(),this.date.getMonth() + 1);
				this.createCalendar();
			}

			let dateActual = document.createElement('div');
			dateActual.classList = 'calendar-date-actual';
			dateActual.innerHTML = `<i class="fa fa-calendar"></i><span>${this.monthName[this.date.getMonth()]}</span><span>${this.date.getFullYear()}</span>`;

			panel.append(yearLeft);
			panel.append(monthLeft);
			panel.append(dateActual);
			panel.append(monthRight);
			panel.append(yearRight);
			this.box.append(panel);
		}

		createTable(){
			this.createCalendarHeader();
			this.createCalendarBody();
			if(this.eventsCalendar) this.createEvents();
		}

		createCalendarHeader(){
			let headerContainer = document.createElement('div');
			headerContainer.classList = 'calendar-header_container';

			this.dayName.forEach((item=>{
				let headerItem = document.createElement('div');
				headerItem.classList = 'calendar-header_item';
				headerItem.innerHTML = `<span class="calendar-header_item_text">${item}</span>`;
				headerContainer.append(headerItem);
			}));

			this.box.append(headerContainer);
		}

		createCalendarBody(){
			let bodyContainer = document.createElement('div');
			bodyContainer.classList = 'calendar-body_container';

			let date = this.date;
			let year = date.getFullYear();
			let month = date.getMonth();
			if(month<10) month = +`0${month}`;
			let firstDay = new Date(year,month,1).getDay();

			for(let i=0; i < firstDay; i++){
				let bodyItem = document.createElement('div');
				bodyItem.classList = 'calendar-body_item empty';

				let bodyItemLabel = document.createElement('span');
				bodyItemLabel.classList = 'calendar-body_item_label';

				bodyItem.append(bodyItemLabel);
				bodyContainer.append(bodyItem);				
			}
			
			for(let i=1; i <= new Date(year,month + 1, 0).getDate();i++){
				let bodyItem = document.createElement('div');
				bodyItem.classList = 'calendar-body_item';

				let bodyItemLabel = document.createElement('span');
				bodyItemLabel.classList = 'calendar-body_item_label';
				bodyItemLabel.textContent = `${i}`;
				let day = i;
				if(day<10) day = `0${day}`;
				bodyItemLabel.dataset.data = `${year}-${month}-${day}`;

				let bodyItemBlock = document.createElement('div');
				bodyItemBlock.classList = 'calendar-body_item_block';

				bodyItem.append(bodyItemLabel);
				bodyItem.append(bodyItemBlock);
				bodyContainer.append(bodyItem);
			}

			this.box.append(bodyContainer);
		}

		createEvents(){
			//console.log(this.eventsCalendar);
			this.eventsCalendar.forEach((eventItem,i)=>{
				let eventDate = eventItem.date.split('-');
				if(eventDate[0]==this.date.getFullYear()&&eventDate[1]==this.date.getMonth()+1){
					let item = this.box.querySelectorAll('.calendar-body_item:not(.empty)')[+eventDate[2] - 1];

					let eventBox = document.createElement('div');
					eventBox.classList = 'calendar-event_box';

					
					eventBox.onmouseover = ()=>positionDescription(eventBox);
					eventBox.onclick = function(event){
						if(document.documentElement.clientWidth <= 1000){
							this.classList.toggle('active');							
						}
					};
					

					let eventTitle = document.createElement('div');
					eventTitle.classList = 'calendar-event_title';
					eventTitle.innerHTML = `<span class="calendar-event_name">${eventItem.name}</span> <span class="calendar-event_time">${eventItem.timeStart}</span>`;

					let eventDescription = document.createElement('div');
					eventDescription.classList ='calendar-event_description';
					eventDescription.innerHTML = `<figure class="calendar-event_image"><img src="${eventItem.img}" alt="" /></figure><div class="calendar-event_caption"><span class="calendar-event_top">${eventItem.name}</span><span class="calendar-event_text">${eventItem.description}</span><span class="calendar-event_date">${this.monthName[(eventDate[1] - 1)].slice(0,3)} ${eventDate[2]} - ${eventItem.timeStart}-${eventItem.timeEnd}</span></div>`;

					eventBox.append(eventTitle);
					eventBox.append(eventDescription);
					item.querySelector('.calendar-body_item_block').append(eventBox);


					function positionDescription(box){
						if(document.documentElement.clientWidth > 1000){
							box.classList.add('active')
							let descr = box.querySelector('.calendar-event_description');

							if((box.offsetLeft + box.offsetWidth + 240) >= document.documentElement.clientWidth){
								descr.style.left = 'auto';
								descr.style.right = 'calc(100% + 8px)';
							} else {
								descr.style.left = null;
								descr.style.right = null;
							}

							box.onmouseout = function(event){this.classList.remove('active')};
						}
					}
				}
			});
		}
	}
	let calendar = new Calendar();
// calendar end