document.addEventListener('click', (e) => {
	if(!e.target.closest('.tickets_popup-caller')) return;
	let popup = new Popup();
})

class Popup{
	constructor(params){
		this.params = params;
		this.fields = [
			{
				name: 'name',
				type: 'text',
				label: 'ФИО',
				requiered: 'requiered'
			},
			{
				name: 'email',
				type: 'email',
				label: 'Email',
				requiered: 'requiered'
			},
			{
				name: 'phone',
				type: 'tel',
				label: 'Телефон',
				requiered: 'requiered'
			},
			{
				name: 'tickets',
				label: 'Количество билетов',
				select: true,
				value: 1,
				options: [
					{
						name: '1',
						value: 1
					},
					{
						name: '2',
						value: 2
					},
					{
						name: '3',
						value: 3
					},
					{
						name: '4',
						value: 4
					},
					{
						name: '5',
						value: 5
					}
				]
			},
		];
		this.verified = false;

		this.close = this.close.bind(this);
		this.onInput = this.onInput.bind(this);
		this.onChange = this.onChange.bind(this);
		this.createPopup();
	}

	createNode(p){
		let el = document.createElement(`${p.tag ? p.tag : 'div'}`);
		
		for(let k in p){
			if(k === 'cl' && p.cl){
				if(Array.isArray(p.cl)){
					p.cl.forEach(cl => el.classList.add(cl))
				} else {
					el.classList.add(p.cl); 
				}					
			} 
			if(k === 'text' && p.text) el.textContent = p.text;
			if(k === 'datasetValue' && p.datasetValue) el.dataset.value = p.datasetValue;
			el[k] = p[k]
		}
		return el;
	}

	createPopup(){
		this.container = this.createNode({cl: ['tickets_popup_container','active']})
		this.bg = this.createNode({cl: 'tickets_popup_background', onclick: this.close})
		this.content = this.createNode({cl: 'tickets_popup_content'})
		this.close = this.createNode({
			cl: 'tickets_popup_close',
			onclick: this.close,
			innerHTML: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
						</svg>`
		})
		this.form = this.createNode({cl: 'tickets_form'})
		this.formBox = this.createNode({cl: 'tickets_form_box'})
		this.fields.forEach(field => {
			this.formBox.append(this.createItem(field))
		})
		this.formBox.append(this.createButtonSubmit())

		this.container.append(this.bg);
		this.container.append(this.content);
		this.content.append(this.close);
		this.content.append(this.form);
		this.form.append(this.formBox);
		document.querySelector('body').append(this.container)
		this.container.addEventListener('input', (e)=>{
			if(e.target.closest('input[type=tel]')){
				e.target.value = e.target.value.replace(/\D/g,"");
			}
		})
	}

	createItem(p){
		let item = this.createNode({cl: 'tickets_form_item'});			
		if(p.label){
			let label = this.createNode({tag: 'span', cl: 'tickets_form_item_label', text: p.label});
			if(p.requiered){
				let star = this.createNode({tag: 'span', cl: 'tickets_form_item_label_star', text: ' *'});
				label.append(star);
			} 
			item.append(label)
		}

		if(p.select){
			let select = this.createNode({cl: 'tickets_select'});

			let def;
			p.options.forEach(o => {
				if(o.def) def = o
			});
			if(!def) def = p.options[0];

			let input = this.createNode({tag: 'input', type: 'text', name: `${p.name ? p.name : ''}`, cl: 'tickets_hidden', value: def.value});
			let select_tit = this.createNode({
				cl: 'tickets_select_tit',
				text: def.name,
				onclick: () => {
					select_list.classList.toggle('active');
				}
			});
			let select_list = this.createNode({cl: 'tickets_select_list'});
			p.options.forEach(o => {
				select_list.append(this.createNode({
					cl: 'tickets_select_list_item',
					text: o.name,
					datasetValue: o.value,
					onclick: (e) => {
						input.value = o.value;
						p.value = o.value;
						select_tit.textContent = o.name;
						select_list.classList.remove('active');
					},
				}))
			})

			select.append(select_tit);
			select.append(select_list);
			select.append(input);
			item.append(select);
		} else {
			let input = this.createNode({tag: 'input', type: `${p.type ? p.type : 'text'}`, name: `${p.name ? p.name : ''}`, requiered: p.requiered, oninput: this.onInput, onchange: this.onChange});
			let error = this.createNode({tag: 'span', cl: 'tickets_form_item_error', text: 'Проверьте введенные данные'});
			item.append(input)
			item.append(error)				
		}
		return item;
	}

	createButtonSubmit(){
		let item = this.createNode({cl: ['tickets_form_item','tickets_form_item_button']});	
		let button = this.createNode({cl: 'tickets_button', tag: 'button', text: 'Купить', onclick: () => {alert('submit')}});
		this.button = button;
		this.button.disabled = true;
		item.append(button);
		return item;
	}

	onInput(e){
		if(e.target.classList.contains('repeated')){
			this.checkField(e);
		}			
	}

	onChange(e){	
		if(!e.target.classList.contains('repeated')){
			e.target.classList.add('repeated')
		}

		this.checkField(e);
	}

	checkField(e){
		let input = e.target;
		let name = input.name;
		let value = input.value;
		if(!input.requiered){
			this.checkFields(name,value,false);
			return;
		}
		let error = false;

		switch (name){
	      case 'phone':
	        if(value.length !== 10 && value.length !== 12) error = true;
	        break;
	      case 'email':
	        const r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        if(!r.test(String(value).toLowerCase())) error = true;
	        break;
	      case 'name':
	        if(!value.length) error = true;
	        break;
	      def:
	        if(!value.length) error = true;
	        break;
	    }

		if(error){
			input.classList.add('invalid')
		} else {
			input.classList.remove('invalid')
		}

		this.checkFields(name,value,error);
		return error;
	}

	checkFields(name,value,error){
		let verified = true;
		for(let f of this.fields){
			if(f.name === name){
				f.value = value;
				f.error = error;
			}
			if(f.error || (f.requiered && f.value === undefined)) verified = false;
		}

		this.verified = verified;
		if(verified){
			this.button.disabled = false;
		} else {
			this.button.disabled = true;
		}
	}

	close(){
		this.container.classList.remove('active');
		setTimeout(() => {
			this.container.remove()
		}, 4000)
	}
};