"use strict";

var flagBlocked = false;
var canStart = false;
var optionChoosen;



var symArr = [];
// запрашиваем массив символов
function getXMLHttpRequest()
{
   if (window.XMLHttpRequest) {
    	return new XMLHttpRequest();
   }
   return new ActiveXObject('Microsoft.XMLHTTP');
}
var request = getXMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4) {
        var responseBody = request.responseText;
        var data = JSON.parse(responseBody);
        symArr = data['symbols'].split(';');
        symArr = symArr.map(function(item){
        	return item = JSON.parse(item);
        });
		//console.log(symArr);
    }
}
request.open('GET', 'test.php', true);
request.send(null);
//console.log(symArr);



//  очищаем список символов
function clearSymbols(){
	while (symBlock.firstChild) {
    	symBlock.removeChild(symBlock.firstChild);
	}
};


// открываем-закрываем список выбора вариантов фруктов
function changeSelect(){
	selectList.classList.toggle('active');
	if(selectList.classList.contains('active')){
		mainButt.classList.remove('active');
	} else {
		mainButt.classList.add('active');
	}
};


// вешаем на варианты фруктов событие при нажатии
var selectOption = document.querySelectorAll('.panel-select_option');
Array.from(selectOption).forEach(function(link){
    link.addEventListener('click', function(){
    	if(flagBlocked) return;

    	changeSelect();


		document.querySelector('.panel-select_option.active').classList.remove('active');
	    this.classList.add('active');
	    panelSelectDefolt.innerHTML = this.innerHTML;
	    optionChoosen = this.getAttribute('data');
	    canStart = true;
    });
});


// запускаем казино
function runCasino(){
	if(!mainButt.classList.contains('active')) return;
	flagBlocked = true;
	mainButt.classList.remove('active');
	clearSymbols();


	// перемешиваем массив символов
	function Random(a, b) {
	  return Math.random() - 0.5;
	}
	symArr.sort(Random);
	//console.log(symArr);


	// переносим массив символов в html
	symArr.forEach(
		function(item){
			var symItem = document.createElement('div');
			symItem.className = 'sybmol-item';
			symItem.innerHTML = '<img class="symbol-img" src="' + item.src + '" alt="" data="' + item.data + '"><span class="symbol-title">' + item.name + '</span>';
			symBlock.appendChild(symItem);
		}
	);


	// перебираем символы в окне
	symBlock.classList.add('active');
	var counter = 14;
	var z, y;
	var p = 1;
	document.querySelectorAll('.sybmol-item')[0].classList.add('sybmol-item-active');

	function symCounter(){
		for(z = 1; z <= counter; z++){
			y = z;
			function symCounterInner(y){
				if(z == counter){
					//console.log('final; z = ' + z + '; y = ' + y + '; p = ' + p);
				} else if(y < symArr.length){
					//console.log('z = ' + z + '; y = ' + y + '; p = ' + p);
					p = y;
					var carousel = (function(y){
						return function(){
							document.querySelector('.sybmol-item-active').classList.remove('sybmol-item-active');
							document.querySelectorAll('.sybmol-item')[y].classList.add('sybmol-item-active');
						};
					})(y);

					setTimeout(carousel, 500 * z);
				} else {
					y = y - symArr.length;
					p = y;
					//console.log(p);
					symCounterInner(y); 
				}
			}

			symCounterInner(y);
		}
	}

	symCounter();

	

	// сравниваем результат
	var resultWriting;
	function caruoselResult(){
		var result = symArr[p].imgData;
		document.querySelector('.panel-status_text-active').classList.remove('panel-status_text-active');
		if(optionChoosen == result){
			resultWriting = 'win';
			document.querySelector('.panel-status_text-win').classList.add('panel-status_text-active');
		} else {
			resultWriting = 'loose';
			document.querySelector('.panel-status_text-try').classList.add('panel-status_text-active');
		}

		flagBlocked = false;
	}
	setTimeout(caruoselResult, 500 * (z + 1));


	// записываем результат
	/*function updateFile(){
	      request.open('POST', 'test2.php', true);
	      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	      request.send(resultWriting);
	}
	updateFile();*/
};
mainButt.addEventListener("click", runCasino);