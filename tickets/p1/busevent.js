!function(){
	class Popup{
		constructor(params){
			this.params = params;
			this.fields = [
				{
					name: 'name',
					type: 'text',
					label: 'ФИО',
					requiered: true
				},
				{
					name: 'email',
					type: 'email',
					label: 'Email',
					requiered: true
				},
				{
					name: 'phone',
					type: 'tel',
					label: 'Телефон',
					requiered: true
				},
			]
			this.createPopup();
		}

		createNode(p){
			let el = document.createElement(`${p.tag ? p.tag : 'div'}`);
			if(p.cl) el.classList.add(p.cl); 
			if(p.text) el.textContent = p.text;
			if(p.type) el.type = p.type;
			if(p.type) el.name = p.name;
			return el;
		}

		createPopup(){
			this.container = this.createNode({cl: 'bustickets_popup_container'})
			this.bg = this.createNode({cl: 'bustickets_popup_background'})
			this.content = this.createNode({cl: 'bustickets_popup_content'})
			this.form = this.createNode({cl: 'bustickets_form'})
			this.formBox = this.createNode({cl: 'bustickets_form_box'})
			this.fields.forEach(field => {
				this.formBox.append(this.createItem(field))
			})
			this.formBox.append(this.createDoubleItem())

			this.container.append(this.bg);
			this.container.append(this.content);
			this.content.append(this.form);
			this.form.append(this.formBox);
			document.querySelector('body').append(this.container)
		}

		createItem(p){
			let item = this.createNode({cl: 'bustickets_form_item'});
			let label = this.createNode({tag: 'span', cl: 'bustickets_form_item_label', text: p.label});
			let star = this.createNode({tag: 'span', cl: 'bustickets_form_item_label_star', text: ' *'});
			let input = this.createNode({tag: 'input', type: `${p.type ? p.type : 'text'}`, name: `${p.name ? p.name : ''}`});
			let error = this.createNode({tag: 'span', cl: 'bustickets_form_item_error', text: 'Проверьте введенные данные'});
			if(p.requiered) label.append(star)
			item.append(label)
			item.append(input)
			item.append(error)
			return item;
		}

		createDoubleItem()
	}

	let popup = new Popup();
}()