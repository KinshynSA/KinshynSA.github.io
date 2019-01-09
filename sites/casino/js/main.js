"use strick"

function Casino(){
	var canvas = document.getElementById('cnvs');
	var ctx = canvas.getContext('2d');
	var objCasino = this;
	var mouseX, mouseY;
	var mouseFlag = false;

	// загрузка файлов
	this.loadContent = {
		images:{
			flag: false,
			loadCounter: 0,
		},
		audio:{
			flag: false,
			loadCounter: 0,
		}
	};
	var symbolsArr = [];
	var audioArr = ['audio/loose.mp3','audio/sound.mp3','audio/win.mp3'];

	// выпадающий список
	var buttonsMargin = 21;
	var buttWidth = 300;
	var buttHeight = 30;
	var buttMarginLeft = 300;
	var buttMarginTop = buttonsMargin - 20;
	var chooseButtText = "choose";


	this.buttonFlag = 0;
	this.readyFlag = 0;
	this.blockFlag = 1;

	// карусель
	var carouselParams;
	var counterLimit;
	var percent;
	var result;	



	this.takeJSON = function(){
		symbolsArr = JSON.parse(symbolsData);
		carouselParams = JSON.parse(params);
		counterLimit = +carouselParams.counterLimit;
		percent = +carouselParams.percent;
		console.log(symbolsArr);
		//console.log(carouselParams);

		symbolsArr.forEach(function(item,i,arr){
			img = document.createElement('img');
			img.src = item.src;
			img.onload = function(){
				item.loadStatus = true;
				objCasino.loadContent.images = loadFilesFinish(arr,objCasino.loadContent.images,'finishLoadImg');
			};
			img.onerror = function(){
				item.loadStatus = false;
				objCasino.loadContent.images = loadFilesFinish(arr,objCasino.loadContent.images,'finishLoadImg');
			};
		});

		audioArr.forEach(function(item,i,arr){
			var audio = document.createElement('audio');
			audio.src = item;
			audio.onloadeddata = audio.onerror = function(){
				objCasino.loadContent.audio = loadFilesFinish(arr,objCasino.loadContent.audio,'finishLoadAudio');
			};
		});


		function loadFilesFinish(arr,arrCounter,text){
			arrCounter.loadCounter++;
			if(arrCounter.loadCounter >= arr.length) {
				arrCounter.flag = true;
				console.log(text);
				preloaderHide();
			};
			return {
				loadCounter: arrCounter.loadCounter,
				flag: arrCounter.flag,
			};
		};
	};



	// скрываем экран загрузки
	function preloaderHide(){
		if(objCasino.loadContent.images.flag && objCasino.loadContent.audio.flag){
			setTimeout(function(){
				preloader.classList.remove('active');
			},1000);
		};
	};


	this.ready = function(){
		this.takeJSON();
		this.createButtonsList();
		this.createButton("choose","#121212","#ffffff",1,"16px Roboto","#333333","center",buttonsMargin);
		this.createTrigger(1,"choose fruit");
		this.createSymbolsArea();
	};

	// запускаем карусель
	this.start = function(){
		objCasino.blockFlag = 0;
		objCasino.createTrigger(3,"wait");
		objCasino.randomArr(symbolsArr);
		ctx.clearRect(buttMarginLeft,70,buttWidth,100);
		objCasino.createButton("roll...","transparent","transparent",1,"bold 36px Roboto","#983ecb","center",100);
		objCasino.roll();
		objCasino.audio.rollPlay();
	};



	// тест аудио
	function Audio(){

		this.clearSrc = function(src){
			audioPlayer.removeAttribute('src');
			audioPlayer.setAttribute('src', src);
		};

		this.rollPlay = function(){
			this.clearSrc('audio/sound.mp3');
			audioPlayer.play();
			audioPlayer.volume = 0.1;
			for(var i=0; i<=8; i++){
				setTimeout(volumeUp, i*100);
			};
		};
		this.rollPause = function(){
			audioPlayer.pause()
		};
		this.winPlay = function(){
			this.clearSrc('audio/win.mp3');
			audioPlayer.play();
		};
		this.loosePlay  = function(){
			this.clearSrc('audio/loose.mp3');
			audioPlayer.play();
		};


		function volumeUp(){
			audioPlayer.volume += 0.1;
		};
	};

	this.audio = new Audio();


	// Выполняем события мыши
	canvas.onmousemove = function(event){
		mouseX = event.offsetX;
		mouseY = event.offsetY;		
		eventCoordinats(buttMarginLeft,buttMarginLeft + buttWidth,buttMarginTop,buttMarginTop + buttHeight,buttHover,buttLeave);
		canvas.onmousedown = function(event){
			//console.log("objCasino.readyFlag = " + objCasino.readyFlag + "; objCasino.blockFlag = " + objCasino.blockFlag);
			if(objCasino.buttonFlag){
				if(objCasino.readyFlag != 0 || objCasino.blockFlag != 0) eventCoordinats(buttMarginLeft,buttMarginLeft + buttWidth,buttMarginTop + buttHeight,buttMarginTop + buttHeight*(symbolsArr.length + 1),optionClick);
			} else {
				if(objCasino.readyFlag != 0 && objCasino.blockFlag != 0) eventCoordinats(buttMarginLeft,buttMarginLeft + buttWidth,150,150 + 60,objCasino.start);
				if(objCasino.blockFlag != 0) eventCoordinats(buttMarginLeft,buttMarginLeft + buttWidth,buttMarginTop,buttMarginTop + buttHeight,objCasino.createButtonsAll);
			};
		};
	};	


	function eventCoordinats(left,right,top,bottom,funcOver,funcOut){
		if(mouseX>left&&mouseX<right&&mouseY>top&&mouseY<bottom) {
			funcOver(left,right,top,bottom);
			mouseFlag = true;
		} else {
			if(mouseFlag && funcOut){
				funcOut(left,right,top,bottom);
			};
			mouseFlag = false;
		};
	};


	
	// выпадающий список - навести мышь с главной кнопки
	function buttHover(left,right,top,bottom){
		if(objCasino.buttonFlag){
			objCasino.createButton("choose","#121212","#15a831",1,"16px Roboto","#ffffff","center",buttonsMargin);
		} else {
			objCasino.createButton(chooseButtText,"#121212","#15a831",1,"16px Roboto","#ffffff","center",buttonsMargin);
		}
	};
	// выпадающий список - увести мышь с главной кнопки
	function buttLeave(right,left,bottom,top){
		if(objCasino.buttonFlag){
			objCasino.createButton("choose","#121212","#15a831",1,"16px Roboto","#ffffff","center",buttonsMargin);
		} else {
			objCasino.createButton(chooseButtText,"#121212","#ffffff",1,"16px Roboto","#333333","center",buttonsMargin);	
		}
	};
	// выпадающий список - нажатие на список
	function optionClick(){
		var t = Math.floor((mouseY - buttMarginTop - buttHeight)/buttHeight);
		chooseButtText = objCasino.ButtonsList[t].name;
		clearButtonField();
		objCasino.buttonFlag = 0;
		objCasino.readyFlag = 1;
		objCasino.createButton(chooseButtText,"#121212","#ffffff",1,"16px Roboto","#333333","center",buttonsMargin);
		objCasino.createTrigger(2,"SPIN ME!");
	};



	// выпадающий список - создать главную кнопку
	this.createButton = function(buttText,borderColor,backgroundColor,borderWidth,fontStyle,fontColor,textAlign,buttonsMargin){
		ctx.beginPath();
		buttMarginTop = buttonsMargin - 20;
		ctx.strokeStyle = borderColor;
		ctx.fillStyle = backgroundColor;
		ctx.lineWidth = borderWidth;
		butt = ctx.fillRect(buttMarginLeft, buttMarginTop, buttWidth, buttHeight);
		butt = ctx.strokeRect(buttMarginLeft, buttMarginTop, buttWidth, buttHeight);
		ctx.font = fontStyle;
		ctx.fillStyle = fontColor;
		ctx.textAlign = textAlign;
		ctx.fillText(buttText, buttMarginLeft + buttWidth/2, buttonsMargin);
	};


	this.createButtonsList = function(){
		objCasino.ButtonsList = symbolsArr.slice();
	};

	// выпадающий список - создать/убрать список
	this.createButtonsAll = function(){
		if(objCasino.buttonFlag){
			objCasino.buttonFlag = 0;
			objCasino.readyFlag = 1;
			clearButtonField();
		} else {
			objCasino.createButton("choose","#121212","#15a831",1,"16px Roboto","#ffffff","center",buttonsMargin);
			objCasino.buttonFlag = 1;
			objCasino.ButtonsList.forEach(function(item,i){
				objCasino.createButton(item.name,"#121212","#ffffff",1,"16px Roboto","#333333","center",buttonsMargin + (i+1)*buttHeight);
			});	
		};
	};

	// убрать список
	function clearButtonField(){
		objCasino.ButtonsList.forEach(function(item,i){
			ctx.clearRect(buttMarginLeft - 1,buttMarginTop + buttHeight + 1,buttWidth + 2,(i+1)*buttHeight);
		});		
	};


	// создаем кнопку старта
	this.createTrigger = function(number,triggerText){
		number = number || 1;
		triggerText = triggerText || "SPIN ME!";
		switch(number){
			case 1:
				buttColor = "#c2c2c2";
				break;
			case 2:
				buttColor = "#983ecb";
				break;
			case 3:
				buttColor = "#781eab";
				break;
			default:
				buttColor = "781eab";
		};
		ctx.beginPath();
		ctx.fillStyle = buttColor;
		ctx.strokeStyle = buttColor;
		var triggerHeight = 40;
		ctx.moveTo(buttMarginLeft + triggerHeight/2, canvas.height - triggerHeight);
		ctx.lineTo(buttMarginLeft + triggerHeight/2 + buttWidth - triggerHeight, canvas.height - triggerHeight);
		ctx.arc(buttMarginLeft + triggerHeight/2 + buttWidth - triggerHeight, canvas.height - triggerHeight/2, triggerHeight/2,0,2*Math.PI);
		ctx.lineTo(buttMarginLeft + triggerHeight/2 + buttWidth - triggerHeight, canvas.height);
		ctx.arc(buttMarginLeft + triggerHeight/2,canvas.height - triggerHeight/2,triggerHeight/2,Math.PI/2,2*Math.PI);
		ctx.stroke();
		ctx.fill();
		ctx.font = "24px Roboto";
		ctx.fillStyle = "#ffffff";
		ctx.textAlign = "center";
		ctx.fillText(triggerText, buttMarginLeft + buttWidth/2, canvas.height - triggerHeight/3); 
	};


	// создаем окно с символами
	this.createSymbolsArea = function(){
		ctx.beginPath();
		ctx.strokeStyle = "#121212";
		ctx.fillStyle = "#ffffff";
		ctx.lineWidth = 1;
		symbolsAreaLvl0 = ctx.strokeRect(1, 1, 260, 210);
		symbolsAreaLvl1 = ctx.fillRect(2, 2, 258, 208);
		symbolsAreaLvl2 = ctx.strokeRect(21, 21, 220, 170);
	};



	// создаем колесо и крутим его
	this.roll = function(){
		var imgWidth = 215;
		var imgHeight = 145;
		var paddingTop = [];
		var paddingLeft = 2;
		var counter = 0;
		var step = 0;
		var stepSpace = 10;
		var stepLimit = Math.floor((imgHeight + (10)) * symbolsArr.length);


		function makePaddingTop(){
			for (var x = 0; x <= symbolsArr.length + 1; x++){
				paddingTop[x] = Math.floor((10)  + (imgHeight + 10) * (x));
			}
		};
		
		makePaddingTop();

		function makeImg(){
			ctx.save();
			ctx.rect(22, 22, 218, 168);
			ctx.clip();
			ctx.translate(22,22);
			ctx.clearRect(0,0,218,168);

			for (var i = 0; i < (symbolsArr.length + 1); i++){
				paddingTop[i] = paddingTop[i] - stepSpace;
				if(i == symbolsArr.length){
					makeImgLoadCheck(0,i);
				} else {
					makeImgLoadCheck(i,i);
				}
			};

			ctx.restore();


			function makeImgLoadCheck(n,i){
				if(symbolsArr[n].loadStatus){
					var img = new Image(100,200);
					var srcImg = symbolsArr[n].src;
					img.src = srcImg;
					ctx.drawImage(img,paddingLeft,paddingTop[i],imgWidth,imgHeight);
				} else {
					ctx.font = "bold 36px Roboto";
					ctx.fillStyle = "#121212";
					ctx.textAlign = "center";
					ctx.fillText(symbolsArr[n].name, imgWidth/2, paddingTop[i] + imgHeight/2);
				}				
			};
		};


		function drawImg(){
			function stepCut(){
				if(stepSpace > stepLimit - step){
					stepSpace = stepLimit - step;
					stepCut();
				}
			};

			if (step >= stepLimit){
				counter++;
				if (counter < counterLimit){
					//console.log(step);
					step = 0;
					makePaddingTop();
					drawImg();
				} else {
					stepCut();
					makeImg();
					objCasino.audio.rollPause();
					objCasino.caruoselResult();
				}
			} else {
				makeImg();
				step = step + stepSpace;				
				setTimeout(drawImg, 10);
			}
		}
		drawImg();
	};


	


	// создаем порядок массива
	objCasino.randomArr = function(arr){

		// нахождение случайного числа от min до max
		function randomInteger(min, max){
		    var rand = min + Math.random() * (max + 1 - min);
		    rand = Math.floor(rand);
		    return rand;
	  	}


	  	// перемешиваем массив символов
		function random(a, b){
			return Math.random() - 0.5;
		}
		arr.sort(random);
		for (var t = 0; t < arr.length; t++){
			if(arr[t].name == chooseButtText){
				var x = t;
			}
		}

		// подтасовка результата
		result = 0;
		var t = randomInteger(0, 101);
		console.log('percent = ' + percent + '; t = ' + t + '; x = ' + x);
		var d = arr[x];
		if(t<=percent){
			arr[x] = arr[0];
			arr[0] = d;
			result = 1;
		} else {
			var b = arr[randomInteger(0, arr.length-1)];
			juggling(b,d);
		};


		// перемещение символов в случае неправильного ответа
		function juggling(b,d){
			if(b == d){
				b = arr[randomInteger(0, arr.length-1)];
				juggling(b,d);
			} else {
				return b;
			}
		};
	};




	// оглашаем результат
	objCasino.caruoselResult = function(){
		var text = "Try Again";
		if(result){
			objCasino.audio.winPlay();
			text = "YOU W0N";
		} else {
			objCasino.audio.loosePlay();
			text = "Try Again";
		}
		ctx.clearRect(buttMarginLeft,70,buttWidth,100);
		objCasino.createButton(text,"transparent","transparent",1,"bold 36px Roboto","#15a831","center",100);
		console.log('chooseButtText = ' + chooseButtText + '; result = ' + result);
		objCasino.blockFlag = 1;
		objCasino.createTrigger(2,"SPIN ME!");
	};

};


var casino = new Casino();
casino.ready();