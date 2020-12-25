var FH = {
    version_stamp: (new Date()).getTime().toString(),
    uploadedCodeSources: 0,
    defSortType : 3,
    defErrCssClass: 'input-validation-error',
    NeedPersonDoc: false,
    timeForBankPay: 15 * 60 - 2,
    //Timer script
    frameDisplaySelector: '',
    initParams: {
        isAvailableReturn: false,
        AgencyId: '',
        UserId: '',
    },
    sourceLinksArray: [
    {
        ///<script src="https://tickets-go.com/Scripts/BusMapHelper.js" type="text/javascript">
        type: 'script',
        url: 'https://tickets-go.com/Scripts/jquery-1.10.2.js'
    },
    {
        type: 'script',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.1/jquery.cookie.js'
    },
    {
        type: 'script',
        url: 'http://code.jquery.com/ui/1.11.3/jquery-ui.min.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/jquery.maskedinput.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/flipclock.min.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/jquery.validate.min.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/jquery.validate.unobtrusive.min.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/AwesomeMvc.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/awem.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/BusMapHelper.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/utils.js'
    },
    {
        type: 'script',
        url: 'https://tickets-go.com/Scripts/UH.js'
    },
    {
        ///<script src="https://tickets-go.com/Scripts/BusMapHelper.js" type="text/javascript">
        type: 'script',
        url: 'https://tickets-go.com/Scripts/BusMapHelper.js'
    },
    {
        ///<link href="https://tickets-go.com/Content/themes/wui/AwesomeMvc.css?version_stamp" rel="stylesheet" type="text/css">
        type: 'stylesheet',
        url: 'http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css'
    },
    {
        type: 'stylesheet',
        url: 'https://tickets-go.com/Content/themes/wui/AwesomeMvc.css?version_stamp'
    },
    {
        type: 'stylesheet',
        url: 'https://tickets-go.com/Content/themes/wui/awem.css?version_stamp'
    },
    {
        type: 'stylesheet',
        url: 'https://tickets-go.com/Content/InternetSale/WebFrameCompact.css?version_stamp'
    },
    {
        type: 'stylesheet',
        url: 'https://tickets-go.com/Content/flipclock.css?version_stamp'
    },
    {
        type: 'stylesheet',
        url: 'https://tickets-go.com/Content/InternetSale/fonts/font-awesome/css/font-awesome.css'
    },
    {
        type: 'stylesheet',
        url: 'https://tickets-go.com/Content/InternetSale/ReturnFrame.css'
    }
    ],
    needToReloadAfterCloseMessagePopup: false,
    htmlSrtings: {
        includingSourcesHtml: '<style>.o-day div{padding:.3em;min-width:0}#DateWrapper .efield{display:inline-flex}#FieldsPart *{font-weight:bold}</style><script>var isMobileOrTablet="False"=="True";var dateFormat="dd.mm.yy";var decimalSep=",";awem.isMobileOrTablet=function(){return isMobileOrTablet};utils.init(dateFormat,isMobileOrTablet,decimalSep);</script>',
        includingFrameHtml: '<div class="opmodal opc" tabindex="-1" id="GlobalMask" style="z-index: 100; display: none;"></div>' +
            '<div id="AtlasWebFrame" class="AtlasWebFrame container" style="display: none;">' +
            '	<div class="">' +
            '		<a name="AtlasWebFrame" >Техническая поддержка Интернет-продаж: +38(066)-562-33-35</a>' +
            '	</div>' +
            '	<div class="top_button">' +
            '		<button class="btn">Купить билет</button>' +
            '		<a target="_blank" href="http://client.tickets-go.com" class="btn">Личный кабинет</a>' +
            '		<a href="#" class="lang">UA <img src="https://tickets-go.com/Content/InternetSale/img/flag_ukraine.jpg" alt="" class="img-responsive"></a>' +
            '	</div>' +
            '	<div id="SearchPanel">' +
            '		<div action="https://tickets-go.com/InternetSale/Index?AgencyId={AgencyId}&UserId={UserId}" class="center_block" id="SearchForm" method="post" novalidate="novalidate">' +
            '			<input id="AgencyId" name="AgencyId" type="hidden" value="{AgencyId}">' +
            '			<input id="UserId" name="UserId" type="hidden" value="{UserId}">' +
            '			<div class="search-block">' +
            '				<div class="awe-ajaxdropdown-field awe-field big-dropdown">' +
            '					<input data-notr="1" name="StationFromId" id="StationFromId" class="awe-val" value="null" type="hidden">' +
            '					<select id="StationFromId-awed" class="awe-display">' +
            '					</select>' +
            '				</div>' +
            '				<div class="awe-ajaxdropdown-field awe-field big-dropdown">' +
            '					<input data-notr="1" name="StationToId" id="StationToId" class="awe-val" value="null" type="hidden">' +
            '					<select id="StationToId-awed" class="awe-display">' +
            '					</select>' +
            '				</div>' +
            '				<div class="" id="DateWrapper">' +
            '					<div class="awe-datepicker-field awe-field awe-hasval"><input name="DepartureDateTime" id="DepartureDateTime" value="" size="1" class="awe-display awe-val awe-txt" type="text" data-val-date="The field Дата отправки must be a date." data-val="true" autocomplete="off"><button type="button" class="awe-btn awe-dpbtn"><span class="awe-icon awe-icon-datepicker"></span></button></div>' +
            '				</div>' +
            '			</div>' +
            '			<button type="button" id="SearchButton" class="btn search">Найти рейс</button>' +
            '		</div>' +
            '		<div class="button_block">' +
            '		</div>' +
            '		<div id="SellProgressBar" class="stage">' +
            '			<div id="1" class="it active">' +
            '				<p>1</p>' +
            '				<span>поиск рейса</span>' +
            '			</div>' +
            '			<div id="2" class="it">' +
            '				<p>2</p>' +
            '				<span>&nbsp;выбор мест</span>' +
            '			</div>' +
            '			<div id="3" class="it">' +
            '				<p>3</p>' +
            '				<span>ввод данных</span>' +
            '			</div>' +
            '			<div id="4" class="it">' +
            '				<p>4</p>' +
            '				<span>оплата заказа</span>' +
            '			</div>' +
            '		</div>' +
            '		<div id="SelectTravelPanel">' +
            '		</div>' +
            '       <div class="schedule" id="SelectSeatsPanel" style="display: none">' +
            '           <div id="SELECTPLACE" class="title" style="display: none;">' +
            '           	<div>' +
            '           		<h5>Выберите места в автобусе</h5>' +
            '           		<div style="display:  flex;">' +
            '                       <div class="seat free">ХХ</div>' +
            '                       <label>Свободное место</label>' +
            '                       <div class="seat sold">XX</div>' +
            '                       <label>Проданное место</label>' +
            '                       <div class="seat selected">XX</div>' +
            '                       <label>Выбранное место</label>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="btn popup-btn" onclick="FH.ShowSchedulePopup();">Расписание</div>' +
            '           </div>' +
            '           <div id="AUTOPLACE" class="title" style="display: none;">' +
            '           	<div>' +
            '           		<h5>На данный рейс перевозчик самостоятельно назначает места в билетах.</h5>' +
            '               </div>' +
            '               <div class="btn popup-btn" onclick="FH.ShowSchedulePopup();">Расписание</div>' +
            '           </div>' +
	        '           <div id="AUTOPLACE" class="title" style="">' +
	        '           	<div>' +
	        '           		<h5>Укажите информацию о пассажирах</h5>' +
	        '           		<div style="display:  flex;">' +
	        '           			<label>Осталось свободных мест &nbsp;</label>' +
	        '           			<div id="FreePlacesCount" class="seat free">4</div>' +
	        '           		</div>' +
	        '           	</div>' +
	        '           	<div class="btn" onclick="FH.AddAutoSeatPlace(null);" style="background: #ec407a;">Добавить пассажира</div>' +
	        '           </div>' +
            '           <div class="bus" id="BusMapContent">' +
            '               <div class="block-left">' +
            '                   <div class="circle"></div>' +
            '               </div>' +
            '               <div class="block-right">' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '		<form class="place" id="PassengersInfoForm" style="display: none;">' +
            '			<div id="PassengersInfoPanel">' +
            '			</div>' +
            '			<button id="PrepareOrderButton" type="button" class="btn popup-btn2">Подтвердить заказ</button>' +
            '		</form>' +
            '		<div id="SchedulePopup" class="modal_form">' +
            '			<span class="modal_close" onclick="FH.CloseSchedulePopup();">X</span> <!-- Кнoпкa зaкрыть -->' +
            '			<h3>Расписание</h3>' +
            '			<table id="ScheduleTable">' +
            '				<tbody></tbody>' +
            '			</table>' +
            '			<button class="btn btn-modal" onclick="FH.CloseSchedulePopup();">ок</button>' +
            '		</div>' +
            '		<div id="MessagePopup" class="modal_form">' +
            '			<span class="modal_close" onclick="FH.CloseMessagePopup();">X</span> <!-- Кнoпкa зaкрыть -->' +
            '			<h3 id="Header"></h3>' +
            '           <h5 id="MessageBody"></h5>' +
            '			<button class="btn btn-modal" onclick="FH.CloseMessagePopup();">ок</button>' +
            '		</div>' +
            '		<div id="modal_form2" class="">' +
            '			<span class="modal_close" onclick="FH.HideClientInfoPopup();">X</span> <!-- Кнoпкa зaкрыть -->' +
            '			<h3>Данные клиента (плательщика)</h3>' +
            '			<form action="">' +
            '				<div id="ClientInfo">' +
            '					<h6>Укажите ваши данные для получения Вашего заказа (отмеченные поля обязательны к заполнению):</h6>' +
            '					<div><label class="asterisk">*</label><input type="text" name="ClientName" id="ClientName" placeholder="Ваше имя" required=""></div>' +
            '					<div><label class="asterisk">*</label><input type="text" name="ClientSurname" id="ClientSurname" placeholder="Ваша фамилия" required=""></div>' +
            '					<div><label class="asterisk">&nbsp;</label><input type="text" name="ClientPhone" id="ClientPhone" placeholder="+38" required=""></div>' +
            '					<div><label class="asterisk">*</label><input type="text" name="ClientEmail" id="ClientEmail" placeholder="Ваш email" required=""></div>' +
            '					<div style="display: flex"><label class="asterisk" style="width: auto;">*</label>' +
            '						<input type="checkbox" name="IsAgreed" id="IsAgreed" required="" style="width: 25px">' +
            '						<span>Согласие с договором <a href="https://tickets-go.com/Resources/AtlasTechOffer.pdf" target="_blank">Публичной Офертой и Правилами перевозок Поставщика транспортных услуг</a></span>' +
            '					</div>' +
            '				</div>' +
            '			</form>' +
            '			<button type="button" class="btn" onclick="FH.GoToPay();">Перейти к оплате</button>' +
            '		</div>' +
            '       <div id="PreparedOrderPanel" style="display: none">' +
            '           <h5 style="text-align:  center;font-size:  16px;font-weight:  bolder;color: #0f1261;">Проверьте, пожалуйста, данные Вашего заказа:</h5>' +
            '           <div class="price" id="PreparedOrderTravelInfoPanel">' +
            '               <div class="price_left">' +
            '               </div>' +
            '               <div class="price_right">' +
            '                   <span style="font-weight: bolder;   ">Всего к оплате</span>' +
            '                   <h6 id="TotalPrice" style="font-weight: bolder;font-size: 18px;"></h6>' +
            '                   <span>Время для оплаты заказа:</span>' +
            '                   <div id="TimerBar" style="width: inherit; margin-left: 0px; margin-right: 0px;">' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '           <div id="PlacesInfoWrapper" class="place_info" style="display: none">' +
            '           </div>' +
            '           <form id="BankForm" action="https://secure.upc.ua/go/enter" method="post" class="place" style="display: none">' +
            '               <input name="Version" type="hidden" value="1"/>' +
            '               <input name="MerchantID" type="hidden" value="null"/>' +
            '               <input name="TerminalID" type="hidden" value="null"/>' +
            '               <input name="PurchaseTime" type="hidden" value="null"/>' +
            '               <input name="OrderID" type="hidden" value="null"/>' +
            '               <input name="Currency" type="hidden" value="null"/>' +
            '               <input name="TotalAmount" type="hidden" value="null"/>' +
            '               <input name="locale" type="hidden" value="ua"/>' +
            '               <input name="PurchaseDesc" type="hidden" value="Sell tickets from Internet"/>' +
            '               <input name="Signature" type="hidden" value="null"/>' +
            '               <div style="display: flex; width: 100%;">' +
            '                   <label style="margin-left: auto;margin-right:  auto;">Оплатить с помощью банковской карты</label>' +
            '                   <div style="margin-left: auto;margin-right:  auto;">' +
            '                       <img src="https://tickets-go.com/Content/InternetSale/img/mastercard_logo.png" width="70" height="44" alt=""/>' +
            '                       <img src="https://tickets-go.com/Content/InternetSale/img/visa_logo.png" width="70" height="44" alt=""/>' +
            '                   </div>' +
            '               </div>' +
            '               <div style="display: -webkit-inline-box; width: 100%;">' +
            '                   <button id="CancelOrder" class="btn popup-btn2" type="button" style="background-color: #ec407a">Отменить заказ</button>' +
            '                   <button id="PayOrderButton" class="btn popup-btn2" type="submit" style="margin-left: calc(100% - 300px);">Оплатить заказ</button>' +
            '               </div>' +
            '           </form>' +
            '       </div>' +
            '	</div>' +
            '	<div id="ReturnPanel" class="return flex-block" style="display: none;">' +
            '		<div class="return-left">' +
            '			<div class="flex-block">' +
            '				<span class="black">Номер билета <sup class="red">*</sup></span>' +
            '				<input type="text" id="ReturnTicketNumber" name="ReturnTicketNumber" placeholder="XXXX">' +
            '				<span class="blue">Введите четыре последние цифры вашего билета</span>' +
            '			</div>' +
            '			<div class="flex-block">' +
            '				<span class="black">Номер карты <sup class="red">*</sup></span>' +
            '				<input type="text" id="ReturnCardNumber" name="ReturnCardNumber" placeholder="XXXX">' +
            '				<span class="blue">Введите четыре последние цифры вашей карты</span>' +
            '			</div>' +
            '			<div id="InfoWindow" class="last">' +
            '				<a></a>' +
            '				<span id="ReturnInfoMessage"></span>' +
            '			</div>' +
            '		</div>' +
            '		<div class="return-right" id="ReturnRuleInfoPanel">' +
            '			<h4>Условия возврата билета</h4>' +
            '			<div class="main-block flex-block">' +
            '				<ol>' +
            '					<li>Сервисный сбор за оформление интернет-билета не возвращается</li>' +
            '					<li>Правила возврата проездных документов регламентированы Публичной Офертой на реализацию проездных документов на транспортные перевозки и Правилами перевозок Поставщиков транспортных услуг</li>' +
            '				</ol>' +
            '				<span><sup>*</sup>Время прибытия указанно приблизительно</span>' +
            '				<div class="order-container">' +
            '					<div id="FindTicketLink" class="order">Найти билет</div>' +
            '				</div>' +
            '			</div>' +
            '		</div>' +
            '		<div class="return-right" id="TicketReturnInfo" style="display: none;">' +
            '			<h4>Информация о билете:</h4>' +
            '			<header>' +
            '				<div class="main-block flex-block">' +
            '					<div>' +
            '						Билет: #<span id="TicketNumber"></span>' +
            '					</div>' +
            '					<div>' +
            '						Тип билета: <span id="TicketType"></span>' +
            '					</div>' +
            '					<div>' +
            '						Маршрут: <span id="TripCodeName"></span>' +
            '					</div>' +
            '				</div>' +
            '			</header>' +
            '			<div class="main-block flex-block">' +
            '				<div class="return-list">' +
            '					<p>Время отправки: <span id="StartTime"></span></p>' +
            '					<p>Станция отправления: <span id="StationFromName"></span></p>' +
            '					<p>Время прибытия: <span id="EndTime"></span></p>' +
            '					<p>Станция прибытия: <span id="StationToName"></span></p>' +
            '					<p>Место: <span id="SeatNumber"></span></p>' +
            '				</div>' +
            '				<div class="return-list">' +
            '					<p>Полное имя пассажира: <span id="PassengerFullName"></span></p>' +
            '					<p>Время покупки: <span id="SaleDateTime"></span></p>' +
            '					<p>Стоимость билета: <span id="Price" class="bold"></span></p>' +
            '					<p>Сумма к возврату: <span id="ReturnAmount" class="bold"></span></p>' +
            '				</div>' +
            '				<div class="order-container">' +
            '					<div id="ReturnTicketLink" class="order">Вернуть билет</div>' +
            '				</div>' +
            '			</div>' +
            '		</div>' +
            '		<div class="return-right" id="ReturnedTransactionInfo" style="display: none;">' +
            '			<h4>Информация о билете:</h4>' +
            '			<header>' +
            '				<div class="main-block flex-block">' +
            '					<div>' +
            '						Билет: #<span id="TicketNumber"></span>' +
            '					</div>' +
            '					<div>' +
            '						Тип билета: <span id="TicketType"></span>' +
            '					</div>' +
            '					<div>' +
            '						Маршрут: <span id="TripCodeName"></span>' +
            '					</div>' +
            '				</div>' +
            '			</header>' +
            '			<div class="main-block flex-block">' +
            '				<div class="return-list">' +
            '					<p>Время отправки: <span id="StartTime"></span></p>' +
            '					<p>Станция отправления: <span id="StationFromName"></span></p>' +
            '					<p>Время прибытия: <span id="EndTime"></span></p>' +
            '					<p>Станция прибытия: <span id="StationToName"></span></p>' +
            '					<p>Место: <span id="SeatNumber"></span></p>' +
            '				</div>' +
            '				<div class="return-list">' +
            '					<p>Полное имя пассажира: <span id="PassengerFullName"></span></p>' +
            '					<p>Время покупки: <span id="SaleDateTime"></span></p>' +
            '					<p>Возвращено: <span id="ReturnDate"></span></p>' +
            '					<p>Стоимость билета: <span id="Price" class="bold"></span></p>' +
            '					<p>Будет возвращено: <span id="ReturnAmount" class="bold"></span></p>' +
            '				</div>' +
            '				<div class="order-container">' +
            '				</div>' +
            '			</div>' +
            '		</div>' +
            '	</div>' +
            '</div>',
                travelRowHtml: '<div class="price travel_info" id="{TravelId}">' +
            '	<div class="price_left">' +
            '		<div class="line">' +
            '			<h6>Рейс:</h6>' +
            '			<p class="maps">{TripCode} - {TripName}</p>' +
            '		</div>' +
            '		<div class="line">' +
            '			<h6>Из:</h6>' +
            '			<p class="address">{StationFromName}</p>' +
            '			<p class="date" name="StartTime" value="{StartTimeValue}">{StartDate}</p>' +
            '			<p class="date">{StartTime}</p>' +
            '		</div>' +
            '		<div class="line">' +
            '			<h6>В:</h6>' +
            '			<p class="address">{StationToName}</p>' +
            '			<p class="date">{EndDate}</p>' +
            '			<p class="date">{EndTime}</p>' +
            '		</div>' +
            '		<div class="line">' +
            '			<h6>Путь:</h6>' +
            '			<p class="address">&nbsp;</p>' +
            '			<p class="date">{TotalTravelDistance} км.</p>' +
            '		</div>' +
            '	</div>' +
            '	<div class="price_right">' +
            '		<span>Стоимость билета</span>' +
            '		<h6>{TotalPrice} грн</h6>' +
            '		<button type="button" class="btn">Выбрать место</button>' +
            '	</div>' +
            '</div'
    },
    clock: null,
    //Functions and Methods
    ShowSchedulePopup : function() {
        if (!$("#SchedulePopup").hasClass("active")) {
            $("#SchedulePopup").addClass("active");
        }
        $("#GlobalMask").show();
    },
    CloseSchedulePopup: function () {
        $("#SchedulePopup").removeClass("active");
        $("#GlobalMask").hide();
    },
    ShowMessagePopup : function(header, message) {
        if (header) {
            $("#MessagePopup #Header").html(header);
        } 
        if (message) {
            $("#MessagePopup #MessageBody").html(message);
        }
        if (!$("#MessagePopup").hasClass("active")) {
            $("#MessagePopup").addClass("active");
        }
        $("#GlobalMask").show();
    },
    CloseMessagePopup : function() {
        $("#MessagePopup").removeClass("active");
        $("#GlobalMask").hide();
        if (FH.needToReloadAfterCloseMessagePopup) {
            $("#SearchButton").click();
        }
    },
    SetStep: function SetStep(stepId) {
        var stepsList = $("#SellProgressBar .it");
        $(stepsList).removeClass("active");
        var flag = true;
        var id = "";
        var i = 0;
        while (flag) {
            if (i >= stepsList.length) {
                flag = false;
            } else {
                id = stepsList[i].id;
                if (id != stepId) {
                    if (!$("#SellProgressBar #" + id).hasClass("active")) {
                        $("#SellProgressBar #" + id).addClass("active");
                    }
                } else {
                    if (!$("#SellProgressBar #" + id).hasClass("active")) {
                        $("#SellProgressBar #" + id).addClass("active");
                    }
                    flag = false;
                }
                i = i + 1;
            }
        }
    },
    validate: function validate(elementId, valFuncList, renderAtElementSelector, errorCssClass) {
        var isValid = true;
        var tmpValRes = false;
        if (!errorCssClass) {
            errorCssClass = FH.defErrCssClass;
        }
        //call functions, that validate input
        if (valFuncList && Array.isArray(valFuncList) && valFuncList.length > 0) {
            for (var i = 0; i < valFuncList.length; i++) {
                if (typeof(valFuncList[i]) == "function") {
                    tmpValRes = valFuncList[i](elementId);
                } else {
                    tmpValRes = true;
                    console.log(i.toString() + " : this element is not a function");
                }
                isValid = isValid && tmpValRes;
            }
        }
        var renderElement = $(renderAtElementSelector);
        //render validation result
        if (!(renderElement.length > 0)) {
            renderElement = $('#' + elementId);
        }

        if (isValid) {
            renderElement.removeClass(errorCssClass);
        } else {
            renderElement.addClass(errorCssClass);
        }
        return isValid;
    },

    validateStationId: function validateStationId(elementId) {
        return FH.validate(elementId, [UH.ValidateNotEmpty], '[childId="' + elementId + '"]');
    },

    validateDate: function validateDate(elementId) {
        return FH.validate(elementId, [UH.ValidateNotEmpty]);
    },

    ClearReturnInfo : function ClearReturnInfo() {
        //open first panel
        $('#ReturnRuleInfoPanel').show();
        $('#TicketReturnInfo').hide();
        $('#ReturnedTransactionInfo').hide();
        //clear message text
        $('#ReturnInfoMessage').html("");
        //reset info icon to default
        $('#InfoWindow').removeClass();
        $('#InfoWindow').addClass('last');
    },

    ValidateClientInfoForm: function ValidateClientInfoForm() {
        var isValid = true;
        isValid = UH.Validate('ClientName', [UH.ValidateNotEmpty]) && isValid;
        isValid = UH.Validate('ClientSurname', [UH.ValidateNotEmpty]) && isValid;
        //isValid = UH.Validate('ClientPhone', [UH.ValidateNotEmpty, UH.ValidatePhoneNotEmpty]) && isValid;
        isValid = UH.Validate('ClientEmail', [UH.ValidateNotEmpty]) && isValid;
        isValid = UH.Validate('IsAgreed', [UH.ValidateCheckboxIsChecked]) && isValid;
        return isValid;
    },

    GoToPay: function GoToPay() {
        if (!FH.ValidateClientInfoForm()) {
            $('#ClientInfoErrorMsg').html("Заполните все поля формы");
            return;
        }
        else {
            //hide modal frame under global mask
            $("#GlobalMask").css("z-index", "200");
            var requestContent = {
                TravelId: $('div.travel_info.selected').attr('id').toString(),
                AddOrUpdate: [],
                ClientInfo: {
                    ClientEmail: '',
                    Surname: '',
                    Name: '',
                    ClientId: '',
                    Phone: ''
                }
            };
            //Add Client data
            requestContent.ClientInfo.ClientEmail = $('#ClientInfo').find('input[name="ClientEmail"]').val();
            requestContent.ClientInfo.Phone = $('#ClientInfo').find('input[name="ClientPhone"]').val();
            requestContent.ClientInfo.Surname = $('#ClientInfo').find('input[name="ClientSurname"]').val();
            requestContent.ClientInfo.Name = $('#ClientInfo').find('input[name="ClientName"]').val();
            var request = {
                AgencyId: $('#AgencyId').val(),
                UserId: $('#UserId').val(),
                SessionId: $.cookie("ApiSessionId"),
                Content: requestContent
            };
            //Add to request place data
            var selectedPlaces = $('form.center-main-block');
            var tmpPlace = null;
            for (var i = 0; i < selectedPlaces.length; i++) {
                tmpPlace = selectedPlaces[i];
                requestContent.AddOrUpdate.push({
                    SeatNumber: tmpPlace.id.replace('place_', ''),
                    Surname: $(tmpPlace).find('input[name="PassengerSurname"]').val(),
                    Name: $(tmpPlace).find('input[name="PassengerName"]').val(),
                    Phone: $(tmpPlace).find('input[name="PassengerPhone"]').val(),
                    DocumentType: $(tmpPlace).find('input[name="DocumentType"]').val(),
                    DocumentNumber: $(tmpPlace).find('input[name="DocumentNumber"]').val(),
                    TypeId: "1"
                });
            }
    
    
            var url = 'https://tickets-go.com/InternetSale/UpdateOrder';
            FH.crossDomainPostAjax(url, request, function (message) {

                if (message) {
                    $('#PreparedOrderPanel').show();
                    $('#PreparedOrderTravelInfoPanel').show();
                    $('#PreparedOrderPanel #PlacesInfoWrapper').show();
                    //Hide another panels
                    $('#PassengersInfoForm').hide();
                    $('#SelectSeatsPanel').hide();
                    $('#SelectTravelPanel').hide();
                    FH.SetStep("3");
                    //replace content of TripInfo in PrepareOrder panel from Select Travel Info panel
                    $("#PreparedOrderTravelInfoPanel .price_left").html($(".price.travel_info.selected .price_left").html());
                    $("#TotalPrice").html(message.TripInfo.TotalPrice + " грн.");
                    for (var j = 0; j < message.SelectedSeats.length; j++) {
                        var seat = message.SelectedSeats[j];
                        $("#PreparedOrderPanel #PlacesInfoWrapper").append('<div name="passenger-info-row" >' +
                            '<label style="font-weight: bold;"> Место ' + seat.SeatNumber + '&nbsp;</label>' +
                            '<label>' + seat.Surname + '&nbsp;' + seat.Name + '&nbsp;</label>&nbsp;' +
                            '<label>' + seat.Phone + '&nbsp;</label>' +
                            '<label style="font-weight: bold;">' + seat.Price + ' грн.</label>' +
                        '</div>');
                    }

                    $("#BankForm input[name='OrderID']").val(message.OrderId);
                    $("#BankForm input[name='PurchaseTime']").val(message.PurchaseTime);
                    $("#BankForm input[name='TotalAmount']").val(message.totalSum);
                    $("#BankForm input[name='Signature']").val(message.bankSign);
                    $("#BankForm input[name='Version']").val(message.BankFormData.Version);
                    $("#BankForm input[name='MerchantID']").val(message.BankFormData.MerchantId);
                    $("#BankForm input[name='TerminalID']").val(message.BankFormData.TerminalId);
                    $("#BankForm input[name='Currency']").val(message.BankFormData.Currency);
                    $("#BankForm input[name='locale']").val(message.BankFormData.Local);
                    $("#BankForm").attr("action", message.BankFormData.PaymentUrl);
                    $("#BankForm").show();
                    FH.clock = $('#TimerBar').FlipClock(FH.timeForBankPay, {
                        clockFace: 'MinuteCounter',
                        countdown: true,
                        callbacks: {
                            interval: function (args) {
                                var time = this.factory.getTime().time;

                                if (time) {
                                    //console.log('interval', time);
                                }
                            },
                            stop: function (args) {
                                var time = this.factory.getTime().time;
                                //refresh page in case of final countdown 
                                if (time <= 0) {
                                    debugger;
                                    alert("Время для покупки истекло. Ваша страница будет обновлена. Выберите заново рейс и место в автобусе");
                                    $("#SearchButton").click();
                                    $("#GlobalMask").show();
                                }
                            }
                        }
                    });
                    //hide unneccessary labels
                    $("#TimerBar .flip-clock-label").hide();
                }
                else {
                    FH.ShowMessagePopup("Ошибка " + ((message && message.Code) ? message.Code : ""), (message && message.Message) ? message.Message : '<p>Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.</p>');

                }
            }, function (args) {
                //set global mask to normal level
                $("#GlobalMask").css("z-index", "100");
                FH.HideClientInfoPopup();
            });
        }
    },

    ShowClientInfoPopup: function ShowClientInfoPopup() {
        if (!$("#modal_form2").hasClass("active")) {
            $("#modal_form2").addClass("active");
        }
        $("#GlobalMask").show();
    },

    HideClientInfoPopup : function HideClientInfoPopup() {
        $("#modal_form2").removeClass("active");
        $("#GlobalMask").hide();
    },

    SaleTicketButtonClickDelegate : function SaleTicketButtonClickDelegate() {
        $('#ReturnTicketButton').removeClass('selected');
        $('#SearchPanel').show();
        $('#ReturnPanel').hide();
    },
    ReturnTicketButtonClickDelegate: function ReturnTicketButtonClickDelegate() {
        $('#SellTicketButton').removeClass('selected');
        $('#SearchPanel').hide();
        $('#ReturnPanel').show();
    },

    GetTripsButtonDelegate: function GetTripsButtonDelegate(message) {

        var tmpHtml = '';
        FH.ClearSelectTravelPanel();
        if (message) {
            var response = JSON.parse(message);
            if (response.Code == "00" && response.Content && response.Content.Travels && response.Content.Travels.length) {
                for (var i = 0; i < response.Content.Travels.length; i++) {
                    var travel = response.Content.Travels[i];
                    tmpHtml = FH.htmlSrtings.travelRowHtml.replace(/{TripCode}/g, travel.TripCode);
                    tmpHtml = tmpHtml.replace(/{TripName}/g, travel.TripName);
                    tmpHtml = tmpHtml.replace(/{TravelId}/g, travel.TravelId);
                    tmpHtml = tmpHtml.replace(/{StationFromName}/g, travel.StationFromName);
                    tmpHtml = tmpHtml.replace(/{StationToName}/g, travel.StationToName);
                    tmpHtml = tmpHtml.replace(/{StationFromAddress}/g, travel.StationFromAddress);
                    tmpHtml = tmpHtml.replace(/{StationToAddress}/g, travel.StationToAddress);
                    tmpHtml = tmpHtml.replace(/{TotalTravelDistance}/g, travel.TotalTravelDistance);
                    tmpHtml = tmpHtml.replace(/{TotalPrice}/g, travel.TotalPrice);
                    tmpHtml = tmpHtml.replace(/{StartDate}/g, travel.StartTime.split(' ')[0]);
                    tmpHtml = tmpHtml.replace(/{StartTime}/g, travel.StartTime.split(' ')[1].substring(0, 5));
                    tmpHtml = tmpHtml.replace(/{EndDate}/g, travel.EndTime.split(' ')[0]);
                    tmpHtml = tmpHtml.replace(/{EndTime}/g, travel.EndTime.split(' ')[1].substring(0, 5));
                    tmpHtml = tmpHtml.replace(/{StartTimeValue}/g, travel.StartTime.replace(' ', 'T'));
                    $("#SelectTravelPanel").append(tmpHtml);
                    //TODO: Fix reset clock
                    if (FH.clock) {
                        FH.clock.stop().reset();
                    }
                    //$("#SelectTravelPanel #" + travel.TravelId).on('click', FH.GetTravelInfoDelegate);
                    $(".button_block").html('');
                    $("#SelectTravelPanel").show();
                }
            }
            else {
                if (response.Message) {
                    $('#SearchPanel .button_block').html('<p>' + response.Message + '</p>');
                } else {
                    $('#SearchPanel .button_block').html('<p>Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.</p>');
                }
            }
        }
        FH.ClearBusMapContent();
        FH.HideSelectSeatsPanel();
        FH.ClearPassengersInfoPanel();
        FH.HidePassengersInfoForm();
        FH.ClearPlacesInfoWrapper();
        FH.ClearPreparedOrderTravelInfoPanel();
        FH.HidePreparedOrderPanel();
        FH.ClearBankForm();
    },

    GetTravelInfoDelegate: function GetTravelInfoDelegate(args) {
        
        var isAnySelected = $('div.travel_info.selected');
        if (isAnySelected && isAnySelected.length > 0) {
            FH.SetStep("1");
            $(isAnySelected).removeClass("selected");
            $("div.travel_info").show();
            $("#SelectSeatsPanel").hide();
            $("#PassengersInfoForm").hide();
        }
        else {
            var request = {
                AgencyId: $('#AgencyId').val(),
                UserId: $('#UserId').val(),
                StationFromId: $('#StationFromId').val(),
                StationToId: $('#StationToId').val(),
                Content: {
                    TravelId: $(args.currentTarget).attr('id'),
                },
            };
            var url = 'https://tickets-go.com/InternetSale/GetTravelInfoJson';

            FH.crossDomainPostAjax(url, request, function (message) {

                if (message) {
                    //display response from server
                    FH.ShowSelectSeatsPanel(message);
                    //Save new SessionId to cookies
                    $.cookie("ApiSessionId", message.SessionId);
                    //set this travel as selected 
                    $(args.currentTarget).addClass('selected');
                    $('div.travel_info:not(.selected)').hide();
                    //Show panel and set step in Progress Bar
                    FH.ClearPassengersInfoPanel();
                    FH.HidePassengersInfoForm();
                    FH.ClearPlacesInfoWrapper();
                    FH.ClearPreparedOrderTravelInfoPanel();
                    FH.HidePreparedOrderPanel();
                    FH.ClearBankForm();
                    FH.SetStep("2");
                }
                else {
                    FH.ShowMessagePopup("Ошибка " + ((message && message.Code) ? message.Code : ""),
                        (message && message.Message) ? message.Message : '<p>Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.</p>');
                }
            });

        }
    },

    ShowSelectSeatsPanel: function ShowSelectSeatsPanel(response) {

        var j = 0;
        var tmpPlaceClass = "", tmpSeatNum = "";
        var responseContent = null;
        //Build Map and fill it with places
        if (response) {
            responseContent = response.Content;
            if (responseContent) {
                if (responseContent.TripInfo) {
                    FH.NeedPersonDoc = responseContent.TripInfo.NeedPersonDoc == true;
                    //Set correct placing interface
                    $("#SelectSeatsPanel .title").hide();
                    $("#SelectSeatsPanel #" + responseContent.TripInfo.PlacingType).show();
                }
                if (responseContent.TripInfo.PlacingType.trim().toLowerCase() == "SELECTPLACE".trim().toLowerCase()) {
                    if (responseContent.BusMap && responseContent.BusMap.Info && responseContent.BusMap.BusMapContent && responseContent.BusMap.BusMapContent.length) {
                        $("#BusMapContent").show();
                        //clear map content
                        $("#BusMapContent .block-right").html('');
                        //add rows to map
                        for (var j = 0; j < responseContent.BusMap.Info.colsCount; j++) {
                            /*$("#BusMapContent .block-right").append('<div class="map_row row_' + (i + 1).toString() + '"></div>');*/
                            for (var i = 0; i < responseContent.BusMap.Info.rowsCount; i++) {
                                tmpPlaceClass = "";
                                tmpSeatNum = "";
                                var seat = responseContent.BusMap.BusMapContent.find(function (el) {
                                    return el.Row == (i + 1) && el.Col == (j + 1);
                                });
                                if (seat) {
                                    if (seat.ActualStatus == 0) {
                                        tmpPlaceClass = "free";
                                    } else if (seat.ActualStatus == 1) {
                                        //tmpPlaceClass = "locked";
                                        tmpPlaceClass = "sold";
                                    } else if (seat.ActualStatus == 2) {
                                        tmpPlaceClass = "sold";
                                    } else if (seat.ActualStatus == 3) {
                                        tmpPlaceClass = "sold";
                                    }
                                    tmpSeatNum = seat.SeatNumber.toString();
                                } else {
                                    tmpPlaceClass = "seat_null";
                                    tmpSeatNum = "&nbsp;";
                                }
                                var row_seat = '<div class="seat ' + tmpPlaceClass + '">' + tmpSeatNum + '</div>';
                                $("#BusMapContent .block-right").append(row_seat);
                            }
                        }
                        $('div.seat').on('click', FH.ClickSeatDelegate);
                    }
                }
                else if (responseContent.TripInfo.PlacingType.trim().toLowerCase() == "AUTOPLACE".trim().toLowerCase()) {
                    //clear map content
                    $("#BusMapContent").hide();
                    $("#FreePlacesCount").html(responseContent.BusMap.Info.FreePlaces);
                }
                //Show panel
                $("#SelectSeatsPanel").show();

                if (responseContent.TripSchedule) {
                    var sortedStationsArray = responseContent.TripSchedule.sort(function(stationA, stationB) {
                        return stationA.Order > stationB.Order;
                    });
                    $("#ScheduleTable tbody").html('');
                    var row = '<tr><td>Станция</td><td>Прибытие</td><td>Отправка</td><td>Расстояние</td></tr>';
                    $("#ScheduleTable tbody").append(row);
                    for (var i = 0; i < sortedStationsArray.length; i++) {
                        row = '<tr><td>' + sortedStationsArray[i].StationName + '</td>' +
                            '						<td>' + sortedStationsArray[i].DepartureFrom + '</td>' +
                            '						<td>' + sortedStationsArray[i].ArrivalTo + '</td>' +
                            '						<td>' + sortedStationsArray[i].Distance + '</td>' +
                            '					</tr>';
                        $("#ScheduleTable tbody").append(row);

                    }
                }
            }
        }
        else {
            FH.ShowMessagePopup("Ошибка " + ((response && response.Code) ? response.Code : ""),
                (response && response.Message) ? response.Message : '<p>Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.</p>');
        }
    },

    CreateSeatPlaceInfo: function CreateSeatPlaceInfo(seatNumber, seatPlaceType) {
        var placeHeader = 'Введите данные пассажира';
        var counter = null;
        if (parseInt(seatNumber)) {
            placeHeader = placeHeader + ' для места №' + seatNumber;
        }
        counter = $('div[name="passenger-info-row"]').length;
        var passinfohtmlString = '<div name="passenger-info-row" id="place_' + seatNumber + '" order="' + counter + '">' +
            '<h5 name="SeatNumber">' +
            (seatPlaceType == null || seatPlaceType == undefined || seatPlaceType == "AUTOPLACE".trim().toLowerCase() ? '<span class="remove_seat_place" onclick="FH.RemoveAutoSeatPlace(' + counter + ');">X</span>' : "") +
            placeHeader + '</h5>' +
            '<input type="text" name="PassengerSurname" placeholder="Фамилия пассажира" required>' +
            '<input type="text" name="PassengerName" placeholder="Имя пассажира" required>' +
            '<input type="text" name="PassengerPhone" placeholder="+38" required>';
        if (FH.NeedPersonDoc) {
            passinfohtmlString = passinfohtmlString + '<input name="DocumentType" value="" placeholder="Серия документа" required>' +
                '<input name="DocumentNumber" value="" placeholder="Номер документа" required>';
        }
        passinfohtmlString = passinfohtmlString + '</div>';
        $("#PassengersInfoPanel").append(passinfohtmlString);
        $("#PassengersInfoPanel").show();
        $("#PassengersInfoForm").show();
        UH.SetPhoneMask($('#PassengersInfoPanel').find('input[name="PassengerPhone"]'));
    },

    AddAutoSeatPlace: function AddAutoSeatPlace() {
        if ($('div[name="passenger-info-row"]').length < 4) {
            FH.CreateSeatPlaceInfo(null);
        }
    },
    RemoveAutoSeatPlace: function RemoveAutoSeatPlace(order) {
        if ($('div[name="passenger-info-row"][order=' + order + ']').length > 0) {
            $('div[name="passenger-info-row"][order=' + order + ']').remove();
        }
        if ($('div[name="passenger-info-row"]').length == 0) {
            $("#PassengersInfoPanel").hide();
            $("#PassengersInfoForm").hide();
        }
    },

    ClickSeatDelegate: function ClickSeatDelegate(args) {
        //define what type of place is it.

        var passinfohtmlString = "";
        var existing_places = $('#BusMapContent').find('div.seat.selected').length;
        if ($(args.currentTarget).hasClass('free')) {
            var seatNumber = $(args.currentTarget).text().trim();
            existing_places = $('#BusMapContent').find('div.seat.selected').length;
            if (existing_places < 4) {
                //add new place
                $(args.currentTarget).addClass('selected');
                $(args.currentTarget).removeClass('free');

                FH.CreateSeatPlaceInfo(seatNumber, "SELECTPLACE");
            }
        }
        else if ($(args.currentTarget).hasClass('selected')) {
            //remove selected place
            var seatNumber = $(args.currentTarget).text().trim();
            $(args.currentTarget).addClass('free');
            $(args.currentTarget).removeClass('selected');
            $("#PassengersInfoPanel").find('#place_' + seatNumber).remove();
            existing_places = $('#BusMapContent').find('div.seat.selected').length;
            if (existing_places == 0) {
                $("#PassengersInfoPanel").hide();
                $("#PassengersInfoForm").hide();
            }
        }
    },
    
    //FH.crossDomainPostAjax(url, request, FH.GetTripsButtonDelegate);
    crossDomainPostAjax: function crossDomainPostAjax(url, data, successCallback, completeCallback, dataType, type) {
        if (!type) {
            //set by default POST method type. But due to CORS browser will set OPTIONS method to the resource on the other domain.
            //Details here https://stackoverflow.com/questions/21783079/ajax-in-chrome-sending-options-instead-of-get-post-put-delete
            type = 'POST';
        }
        if (!dataType) {
            dataType = 'json';
        }
        if (!successCallback) {
            successCallback = function (args) { return 0 };
        }
        if (!completeCallback) {
            completeCallback = function (args) { return 0 };
        }
        $.ajax({
            type: type,
            dataType: dataType,
            url: url,
            contentType: 'application/x-www-form-urlencoded',
            data: data,
            success: successCallback,
            complete: completeCallback
        });
    },
    loadSource: function loadSource(sourceItem, callback) {
        if (sourceItem && sourceItem.url && sourceItem.type) {
            if (sourceItem.type == "script") {
                // Adding the script tag to the head as suggested before
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = sourceItem.url;
                script.async = false;
                // Then bind the event to the callback function.
                // There are several events for cross browser compatibility.
                script.onreadystatechange = callback;
                script.onload = callback;

                // Fire the loading
                head.appendChild(script);
            }
            else if (sourceItem.type == "stylesheet") {
                ///<link href="https://tickets-go.com/Content/themes/wui/AwesomeMvc.css?version_stamp" rel="stylesheet" type="text/css">
                // Adding the script tag to the head as suggested before
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.type = 'text/css';
                link.rel = 'stylesheet';
                link.href = sourceItem.url;
                link.async = false;
                // Then bind the event to the callback function.
                // There are several events for cross browser compatibility.
                link.onreadystatechange = callback;
                link.onload = callback;

                // Fire the loading
                head.appendChild(link);
            }
        }
    },
    uploadJSCode: function uploadJsCode(args) {
        FH.uploadedCodeSources++;
        if (FH.uploadedCodeSources < FH.sourceLinksArray.length) {
            
            //do nothing;
        }
        else {
            FH.htmlSrtings.includingFrameHtml = FH.htmlSrtings.includingFrameHtml.replace(/{AgencyId}/g, FH.initParams.AgencyId);
            FH.htmlSrtings.includingFrameHtml = FH.htmlSrtings.includingFrameHtml.replace(/{UserId}/g, FH.initParams.UserId);
            $(FH.frameDisplaySelector).html(FH.htmlSrtings.includingSourcesHtml.replace(/version_stamp/g, FH.version_stamp) + FH.htmlSrtings.includingFrameHtml);

            //Init Ave elements
            FH.initAweDropdown("StationFromId", "https://tickets-go.com/InternetSale/GetStationFromItemsJson?AgencyId=" + FH.initParams.AgencyId);
            FH.initAweDropdown("StationToId", "https://tickets-go.com/InternetSale/GetStationToItemsJson?AgencyId=" + FH.initParams.AgencyId, ["StationFromId"], ["StationFromId"]);
            FH.initAweDateCalender("DepartureDateTime", new Date());
            if (FH.isReturnAvailable) {

            }
            //TODO: Implement correct mask on ajax starts for every element
            $(document).ajaxStart(function () {
                $("#GlobalMask").show();
            });
            $(document).ajaxStop(function () {
                $("#GlobalMask").hide();
            });

            $('.frame-button[showPanelId]').on('click', function (params) {
                var buttonsArray = $('.frame-button[showPanelId]').toArray();
                for (var i = 0; i < buttonsArray.length; i++) {
                    $('#' + $(buttonsArray[i]).attr('showPanelId')).hide();
                }
                $('#' + $(params.currentTarget).attr('showPanelId')).show();

                
            });

            $('#SortTravelType').on('change', function (args) {
                
                var tmp = null;
                var cmpFunc = null;
                //add sort function due to type
                var selectedSortType = $('#SortTravelType').val();
                if (selectedSortType == null || selectedSortType == undefined) {
                    selectedSortType = defSortType; //default sort type
                }
                if (selectedSortType == 1) {
                    //function, that compare by Price ASC
                    cmpFunc = function (travelObjectA, travelObjectB) {
                        
                        var startTimeA = $(travelObjectA.node).find('[name="TotalPrice"]').attr("value");
                        var startTimeB = $(travelObjectB.node).find('[name="TotalPrice"]').attr("value");
                        return startTimeA > startTimeB;
                    }
                }
                if (selectedSortType == 2) {
                    //function, that compare by Price DESC
                    cmpFunc = function (travelObjectA, travelObjectB) {
                        
                        var startTimeA = $(travelObjectA.node).find('[name="TotalPrice"]').attr("value");
                        var startTimeB = $(travelObjectB.node).find('[name="TotalPrice"]').attr("value");
                        return startTimeA < startTimeB;
                    }
                }
                if (selectedSortType == 3) {
                    //function, that compare by StartTime ASC
                    cmpFunc = function (travelObjectA, travelObjectB) {
                        
                        var startTimeA = $(travelObjectA.node).find('[name="StartTime"]').attr("value");
                        var startTimeB = $(travelObjectB.node).find('[name="StartTime"]').attr("value");
                        return startTimeA > startTimeB;
                    }
                }
                if (selectedSortType == 4) {
                    //function, that compare by StartTime DESC
                    cmpFunc = function (travelObjectA, travelObjectB) {
                        
                        var startTimeA = $(travelObjectA.node).find('[name="StartTime"]').attr("value");
                        var startTimeB = $(travelObjectB.node).find('[name="StartTime"]').attr("value");
                        return startTimeA < startTimeB;
                    }
                }
                
                if (cmpFunc != null && cmpFunc != undefined) {
                    //create pool of travels html elements
                    var pool = $('section.offer').toArray();
                    for (var i = 0; i < pool.length; i++) {
                        tmp = pool[i];
                        pool[i] = {
                            id: tmp.id,
                            node: tmp
                        }
                    }
                    var sortedPool = pool.sort(cmpFunc);
                    //replace all elements due to new sorted order
                    for (var i = 0; i < sortedPool.length; i++) {
                        $('section.offers').prepend($('section.offers').find('#' + sortedPool[i].id.toString()));
                    }
                    //add line_blue before all of them
                    $('section.offers').prepend($('section.offers').find('div.line_blue'));
                }
            });
            //function, that clear autocomplete field with double click on it
            $('.dblclick_refreshable').on('dblclick', function () {
                var childId = $(this).attr('childId');
                if (childId) {
                    $(this).val('');
                    $('#' + childId).val('');
                }
            });

            $('#SearchForm #SearchButton').on('click', function () {
                var isValid = true;
                isValid = isValid && FH.validateStationId('StationFromId');
                isValid = isValid && FH.validateStationId('StationToId');
                isValid = isValid && FH.validateDate('DepartureDateTime');
                //Set Progress Bar to initial step
                FH.SetStep("1");
                //
                
                var request = {
                    AgencyId: $('#AgencyId').val(),
                    UserId: $('#UserId').val(),
                    StationFromId: $('#StationFromId').val(),
                    StationToId: $('#StationToId').val(),
                    DepartureDateTime: $('#DepartureDateTime').val()
                };
                var url = 'https://tickets-go.com/InternetSale/GetTripsJson';
                FH.crossDomainPostAjax(url, request, FH.GetTripsButtonDelegate);

                return isValid;
            });

            $("div.travel_info:not(.nonclickable)").on('click', FH.GetTravelInfoDelegate);

            //Start Return Process from start, if one of requisites is changed
            $('#ReturnTicketNumber').on('change', function (params) {
                FH.ClearReturnInfo();
            });
            $('#ReturnCardNumber').on('change', function (params) {
                FH.ClearReturnInfo();
            });
            //Return buttons delegates
            $('#FindTicketLink').on('click', function (params) {
                
                var request = {
                    TicketNumber: $('#ReturnTicketNumber').val(),
                    ClientIdentifier: $('#ReturnCardNumber').val()
                };
                var url = 'https://tickets-go.com/InternetSale/ReturnTicket';
                $.ajax({
                    type: 'Post',
                    dataType: "json",
                    url: url,
                    contentType: 'application/json',
                    data: JSON.stringify(request),
                    success: function (response) {
                        
                        var errorMessage = "";
                        if (response) {
                             // display the error message in the span tag
                            if (response.ReturnInfo
                                && response.ReturnInfo.Code == "00"
                                && response.ReturnInfo.Content
                                && response.ReturnInfo.Content.TripInfo
                                && response.ReturnInfo.Content.ReturningTicket) {
                                var responseContent = response.ReturnInfo.Content;
                                //parse TripInfo part of response
                                $('#TicketReturnInfo #EndTime').html(responseContent.TripInfo.EndTime);
                                $('#TicketReturnInfo #StartTime').html(responseContent.TripInfo.StartTime);
                                $('#TicketReturnInfo #StationFromName').html(responseContent.TripInfo.StationFromName);
                                $('#TicketReturnInfo #StationToName').html(responseContent.TripInfo.StationToName);
                                $('#TicketReturnInfo #TotalTravelDistance').html(responseContent.TripInfo.TotalTravelDistance);
                                $('#TicketReturnInfo #TripCodeName').html(responseContent.TripInfo.TripCode + ' ' + responseContent.TripInfo.TripName);
                                //parse ReturningTicket part of response
                                $('#TicketReturnInfo #PassengerFullName').html(responseContent.ReturningTicket.PassengerFullName);
                                $('#TicketReturnInfo #SaleDateTime').html(responseContent.ReturningTicket.SaleDateTime);
                                $('#TicketReturnInfo #Price').html(responseContent.ReturningTicket.Price);
                                $('#TicketReturnInfo #ReturnAmount').html(responseContent.ReturningTicket.ReturnAmount);
                                $('#TicketReturnInfo #SeatNumber').html(responseContent.ReturningTicket.SeatNumber);
                                $('#TicketReturnInfo #TicketNumber').html(responseContent.ReturningTicket.TicketNumber);
                                $('#TicketReturnInfo #TicketType').html(responseContent.ReturningTicket.TicketType);
                                //show second panel of return ticket process
                                $('#ReturnRuleInfoPanel').hide();
                                $('#TicketReturnInfo').show();
                                $('#ReturnedTransactionInfo').hide();
                                
                                $('#TicketReturnInfo').effect('highlight');
                                //show message of successfull ticket search
                                $('#ReturnInfoMessage').html("Билет найден! Можете сделать возврат вашего билета и вернуть часть средств.");
                            }
                            else {
                                if (response.ReturnInfo) {
                                    if (response.ReturnInfo.Message && response.ReturnInfo.Message.length > 0) {
                                        errorMessage = response.ReturnInfo.Message;
                                    }
                                    else {
                                        errorMessage = "Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.";
                                    }
                                }
                                else {
                                    errorMessage = "Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.";
                                }
                            }
                        }
                        else {
                             // redirect to another page
                        }
                        if (errorMessage && errorMessage.trim().length > 0) {
                            $('#InfoWindow').addClass("error");
                            $('#ReturnInfoMessage').html(errorMessage);
                        }
                    },
                    complete: function (args) {
                        
                        /*$('#RulesAgreePopup').data('api').close();*/
                    }
                });
            });
            $('#ReturnTicketLink').on('click', function (params) {
                
                var request = {
                    TicketNumber: $('#ReturnTicketNumber').val(),
                    ClientIdentifier: $('#ReturnCardNumber').val()
                };
                var url = 'https://tickets-go.com/InternetSale/ConfirmReturnTicket';
                $.ajax({
                    type: 'Post',
                    dataType: "json",
                    url: url,
                    contentType: 'application/json',
                    data: JSON.stringify(request),
                    success: function (response) {
                        
                        var errorMessage = "";
                        if (response && response.Code == "00") {
                             // display the error message in the span tag
                            if (response.Content
                                && response.Content.TripInfo
                                && response.Content.ReturningTicket) {
                                var responseContent = response.Content;
                                //parse TripInfo part of response
                                $('#ReturnedTransactionInfo #EndTime').html(responseContent.TripInfo.EndTime);
                                $('#ReturnedTransactionInfo #StartTime').html(responseContent.TripInfo.StartTime);
                                $('#ReturnedTransactionInfo #StationFromName').html(responseContent.TripInfo.StationFromName);
                                $('#ReturnedTransactionInfo #StationToName').html(responseContent.TripInfo.StationToName);
                                $('#ReturnedTransactionInfo #TotalTravelDistance').html(responseContent.TripInfo.TotalTravelDistance);
                                $('#ReturnedTransactionInfo #TripCodeName').html(responseContent.TripInfo.TripCode + ' ' + responseContent.TripInfo.TripName);
                                //parse ReturningTicket part of response
                                $('#ReturnedTransactionInfo #SaleDateTime').html(responseContent.ReturningTicket.SaleDateTime);
                                $('#ReturnedTransactionInfo #ReturnDate').html(responseContent.ReturningTicket.ReturnDate);
                                $('#ReturnedTransactionInfo #PassengerFullName').html(responseContent.ReturningTicket.PassengerFullName);
                                $('#ReturnedTransactionInfo #Price').html(responseContent.ReturningTicket.Price);
                                $('#ReturnedTransactionInfo #ReturnAmount').html(responseContent.ReturningTicket.ReturnAmount);
                                $('#ReturnedTransactionInfo #SeatNumber').html(responseContent.ReturningTicket.SeatNumber);
                                $('#ReturnedTransactionInfo #TicketNumber').html(responseContent.ReturningTicket.TicketNumber);
                                $('#ReturnedTransactionInfo #TicketType').html(responseContent.ReturningTicket.TicketType);
                                //show second panel of return ticket process
                                $('#ReturnRuleInfoPanel').hide();
                                $('#TicketReturnInfo').hide();
                                $('#ReturnedTransactionInfo').show();
                                
                                setTimeout(function () {
                                    
                                    $('#ReturnedTransactionInfo').effect('highlight');
                                }, 1000);
                                //show message of successfull ticket search
                                $('#ReturnInfoMessage').html("Успешная операция!Можете распечатать квитанцию возврата средств за билет.");
                                $('#InfoWindow').addClass('access');
                            }
                            else {
                                if (response.ReturnInfo) {
                                    if (response.ReturnInfo.Message && response.ReturnInfo.Message.length > 0) {
                                        errorMessage = response.ReturnInfo.Message;
                                    }
                                    else {
                                        errorMessage = "Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.";
                                    }
                                }
                                else {
                                    errorMessage = "Технический сбой при выполнении запроса. Администратор знает об этом, будет починено в ближайшее время.";
                                }
                            }
                        }
                        else {
                             // redirect to another page
                        }
                        if (errorMessage && errorMessage.trim().length > 0) {
                            $('#InfoWindow').addClass("error");
                            $('#ReturnInfoMessage').html(errorMessage);
                        }
                    },
                    complete: function (args) {
                        /*$('#RulesAgreePopup').data('api').close();*/
                    }
                });
            });

            $('#PrepareOrderButton').on('click', function (params) {
                
                FH.ShowClientInfoPopup();
                return;
            });
            $('#CancelOrder').on('click', function (params) {
                $("#SearchButton").click();
            });
            UH.SetPhoneMask($('#ClientInfo').find('input[name="ClientPhone"]'));

            debugger;
            $(".AtlasWebFrame").show();
        }
    },
    //FH.initAweDropdown("StationToId", "https://tickets-go.com/InternetSale/GetStationToItemsJson?AgencyId={AgencyId}")
    initAweDropdown: function (elementId, searchUrl, keys, vals, datafunc) {
        if (keys == undefined) {
            keys = [];
        }
        if (vals == undefined) {
            vals = [];
        }
        jQuery(function() {
             awe.add({
                 l: 1,
                 type: "add",
                 i: elementId,
                 url: searchUrl,
                 data: {
                     "keys": keys,
                     "vals": vals,
                     "l": [1]
                 },
                 pars: {
                     keys: [],
                     vals: []
                 },
                 df: datafunc,
                 e: 1
             });
        });
    },
    initAweDateCalender: function (elementId, defaultDate, dateFormat, numberOfMonths, minDate, maxDate) {
        if (!numberOfMonths || numberOfMonths <= 0) {
            numberOfMonths = 2;
        }
        if (!dateFormat) {
            dateFormat = "dd.mm.yy";
        }
        if (!defaultDate) {
            defaultDate = new Date();
        }
        if (!minDate) {
            minDate = new Date();
            minDate.setDate(minDate.getDate() - 1);
        }
        if (!maxDate) {
            maxDate = new Date(minDate);
            maxDate = maxDate.setMonth(maxDate.getMonth() + numberOfMonths);
        }
        $(function() {
             awe.dtp({
                 i: elementId,
                 p: {
                     dateFormat: dateFormat,
                     minDate: minDate,
                     maxDate: maxDate,
                     defaultDate: defaultDate,
                     numberOfMonths: numberOfMonths
                 }
             });
        });
        $('#' + elementId).val($.datepicker.formatDate(dateFormat, defaultDate));
    },
    //NEW FUNCTIONALITY

    ClearSelectTravelPanel: function ClearSelectTravelPanel() {
        $("#AtlasWebFrame #SelectTravelPanel").html('');
    },
    HideSelectTravelPanel: function HideSelectTravelPanel() {
        $("#AtlasWebFrame #SelectTravelPanel").hide();
    },
    ClearBusMapContent: function ClearBusMapContent() {
        $("#AtlasWebFrame #BusMapContent .block-right").html('');
    },
    HideSelectSeatsPanel: function HideSelectSeatsPanel() {
        $("#AtlasWebFrame #SelectSeatsPanel").hide();
    },
    ClearPassengersInfoPanel: function ClearPassengersInfoPanel() {
        $("#AtlasWebFrame #PassengersInfoPanel").html('');
    },
    HidePassengersInfoForm: function HidePassengersInfoForm() {
        $("#AtlasWebFrame #PassengersInfoForm").hide();
    },
    ClearPlacesInfoWrapper: function ClearPlacesInfoWrapper() {
        $("#AtlasWebFrame #PlacesInfoWrapper").html('');
    },
    ClearPreparedOrderTravelInfoPanel: function ClearPreparedOrderTravelInfoPanel() {
        $("#AtlasWebFrame #PreparedOrderTravelInfoPanel .price_left").html('');
        $("#AtlasWebFrame #PreparedOrderTravelInfoPanel #TotalPrice").html('');
    },
    HidePreparedOrderPanel: function HidePreparedOrderPanel() {
        $("#AtlasWebFrame #PreparedOrderPanel").hide();
    },
    ClearBankForm: function ClearBankForm() {
        $("#AtlasWebFrame #BankForm input[name='OrderID']").val('null');
        $("#AtlasWebFrame #BankForm input[name='PurchaseTime']").val('null');
        $("#AtlasWebFrame #BankForm input[name='TotalAmount']").val('null');
        $("#AtlasWebFrame #BankForm input[name='Signature']").val('null');
        $("#AtlasWebFrame #BankForm input[name='Version']").val('null');
        $("#AtlasWebFrame #BankForm input[name='MerchantID']").val('null');
        $("#AtlasWebFrame #BankForm input[name='TerminalID']").val('null');
        $("#AtlasWebFrame #BankForm input[name='Currency']").val('null');
        $("#AtlasWebFrame #BankForm input[name='locale']").val('null');
        $("#AtlasWebFrame #BankForm").attr("action", 'null');
    },

    //END OF NEW FUNCTIONALITY
    //FH.InitFrame('#AtlasFrame');
    InitFrame: function InitFrame(frameDisplaySelector, isReturnAvailable, AgencyId, UserId) {
        //Add in DOM source files
        if ($(frameDisplaySelector).length == 1) {
            FH.frameDisplaySelector = frameDisplaySelector;
            FH.initParams.isReturnAvailable = isReturnAvailable;
            FH.initParams.AgencyId = AgencyId;
            FH.initParams.UserId = UserId;
            //Load scripts
            for (var i = 0; i < FH.sourceLinksArray.length; i++) {
                FH.loadSource(FH.sourceLinksArray[i], FH.uploadJSCode);
            }
            //End load scripts

            //Init frame
            FH.ClearSelectTravelPanel();
            FH.HideSelectTravelPanel();
            FH.ClearBusMapContent();
            FH.HideSelectSeatsPanel();
            FH.ClearPassengersInfoPanel();
            FH.HidePassengersInfoForm();
            FH.ClearPlacesInfoWrapper();
            FH.ClearPreparedOrderTravelInfoPanel();
            FH.HidePreparedOrderPanel();
            FH.ClearBankForm();
            //End init frame
            debugger;
            $(".AtlasWebFrame").show();
        }
    },
    InitFrameOnLoad: function InitFrameOnLoad(frameDisplaySelector, isReturnAvailable, AgencyId, UserId) {
		if(!($(document).ready)){
			$ = jQuery;
		}
        $(document).ready(function() {
            FH.InitFrame(frameDisplaySelector, isReturnAvailable, AgencyId, UserId);
        });
    }
}