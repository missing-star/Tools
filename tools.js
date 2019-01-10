function Tools(){}

/**
 * @param none
 * @returns param{Object} 
 * 返回url中的参数对象{key:value}
 */
Tools.getParams = function() {
    var symbolIndex = location.search.indexOf('?');
    var paramStr = location.search.substring(symbolIndex + 1);
    var paramsList = paramStr.split('&');
    var param = {};
    for(var i = 0; i < paramsList.length; i++) {
        var tempList = paramsList[i].split('=');
        param[tempList[0]] = tempList[1];
    }
    return param;
}

/**
 * 验证器集合validators
 */

 Tools.validators = {};

 /**
  * @param {phone|string}
  * @returns {boolean}
  * 验证手机号
  */
Tools.validators.validatePhone = function(phone) {
    var REG_PHONE = /^1[34578]\d{9}$/;
    return REG_PHONE.test(phone);
}

/**
 * @param {code|string}
 * @returns {boolen}
 * 验证n位数字（验证码）
 */
Tools.validators.validateCode = function(code,length) {
    var REG_CODE = new RegExp(`\\d{${length - 1}}\\d$`);
    return REG_CODE.test(code);
}