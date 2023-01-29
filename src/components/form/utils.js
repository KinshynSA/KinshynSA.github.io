export function findFieldForValue(fields,value){
    let result;
    fields.forEach(item => {
        if(item.hide) return;
        if(item.type === 'block'){
            let childs = item.childs ?? [];
            let intermediateResult = findFieldForValue(childs,value)
            if(intermediateResult) result = intermediateResult;
        } else {
            if(item.value === value) result = item;
        }        
    })
    return result;
}

export function findFieldForName(fields,name){
    let result;
    fields.forEach(item => {
        if(item.hide) return;
        if(item.type === 'block'){
            let childs = item.childs ?? [];
            let intermediateResult = findFieldForName(childs,name)
            if(intermediateResult) result = intermediateResult;
        } else {
            if(item.name === name) result = item;
        }        
    })
    return result;
}

export function findFieldsForName(fields,name){
    let result = [];
    fields.forEach((item,i) => {
        if(item.hide) return;
        if(item.type === 'block'){
            let childs = item.childs ?? [];
            let intermediateResult = findFieldsForName(childs,name)
            if(intermediateResult.length) result = result.concat(intermediateResult);
        } else {
            if(item.name === name){
                result.push(item);
            } 
        }        
    })
    return result;
}

export function collectValues(fields, preData){
    let data = {...preData};
    fields.forEach(field => addValue(field))
    return data;

    function addValue(field){
        if(field.hide) return;
        if(field.type === 'block'){
            if(field.childs) field.childs.forEach(item => addValue(item))
        } else {
            if(field.name !== undefined && field.value !== undefined){
                if(field.type === 'file'){
                    data[field.name] = field.value.join(',');
                } else if(field.type === 'radio'){
                    if(field.checked) data[field.name] = field.value;
                } else if(field.type === 'checkbox'){
                    if(field.checked) data[field.name] = field.value;
                } else {
                    data[field.name] = field.value;
                }                
            }        
        }   
    }
}


export function validateField(field){
    let value = field.value;
    field.error = false;
  
    switch (field.type){
      case 'select':
        if(value === undefined) field.error = true;
        break;
      case 'tel':
        if(field.mask === 'phone'){
          if(value.replace(/\D/g,"").length !== 12) field.error = true;
        } else {
          if(!value.length) field.error = true;
        }
        break;
      case 'email':
        const r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!r.test(String(value).toLowerCase())) field.error = true;
        break;
      case 'password':
        if(value.length < 8 || value.length > 20) field.error = true;
        break;
      case 'text':
        if(!value.length) field.error = true;
        break;
      case 'checkbox':
        if(!field.checked) field.error = true;
        break;
      case 'radio':
        if(!field.checked) field.error = true;
        break;
      default:
        if(!value.length) field.error = true;
        break;
    }
  }


export function copyObjectDeep(obj){
    let o;
    if(Array.isArray(obj)){
        o = []
    } else {
        o = {}
    }

    for(let key in obj){
        if(typeof obj[key] === 'object' && !obj[key].$$typeof){
            o[key] = copyObjectDeep(obj[key])
        } else {
            o[key] = obj[key]
        }
    }

    return o;
}