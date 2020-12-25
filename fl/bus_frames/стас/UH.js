var UH = {

    standartEmailMaskString: "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
    standartUkrainePhoneMask: "+38?(999)-999-99-99",

    DefErrCssClass : 'input-validation-error',

    ValidateCheckboxIsChecked : function(chkboxId) {
        var result = true;
        var validatingValue = $('#' + chkboxId).prop('checked');
        if (validatingValue) {
            result = true;
        } else {
            result = false;
        }
        return result;
    },

    ValidateNotEmpty : function(elementId) {
        var result = true;
        var validatingValue = $('#' + elementId).val();
        if (validatingValue) {
            result = true;
        } else {
            result = false;
        }
        return result;
    },

    Validate : function(elementId, valFuncList, renderAtElementSelector,errorCssClass) {
        var isValid = true;
        var tmpValRes = false;
        if (!errorCssClass) {
            errorCssClass = UH.DefErrCssClass;
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
        }
        else {
            renderElement.addClass(errorCssClass);
        }
        return isValid;
    },

    ValidateEmail: function validateEmail(emailAddressString) {
        var message = '';
        debugger;
        var pattern = new RegExp(UH.standartEmailMaskString);
        var isValid = pattern.test(emailAddressString);
        return isValid;
    },

    SetPhoneMask: function setPhoneMask(element) {
        $(element).mask(UH.standartUkrainePhoneMask);
    },

    ValidatePhoneNotEmpty: function validatePhoneNotEmpty(elementId) {
        var result = true;
        var validatingValue = $('#' + elementId).val();
        if (validatingValue) {
            var parsedPhone = $('#' + elementId).val().replace(/[-()+]/g, '');
            if (parsedPhone && parsedPhone.length) {
                result = result && parsedPhone.length == 12;
            }
            else {
                result = false;
            }
        } else {
            result = false;
        }
        return result;
    },
}