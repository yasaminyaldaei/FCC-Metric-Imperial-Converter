/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.match(/^\d{1,}(\/\d{1,}|\.\d{1,}(\/?\d{1,})?)?/g);
    
    if (result) {
      return result[0];
    } else {
      return null
    }
  };
  
  this.getUnit = function(input) {
    var result = input.match(/(gal)|(l$)|(mi)|(km)|(lbs)|(kg)/gim);
    
    if (result) {
      return result[0];
    } else {
      return null
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    var result;
    
    if (initUnit == null) {
      result = null;
      return result;
    }
    
    input.forEach((ele, i) => {
      if (initUnit.toString().toLowerCase() == ele) {
        result = expect[i];
      }
    })
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if (initUnit) {
       var initUnit = initUnit.toString().toLowerCase();
    } else {
      result = null;
      return result;
    }
    
    if (initUnit == 'gal') {
      result = initNum * galToL
    } else if (initUnit == 'l') {
      result = initNum / galToL
    } else if (initUnit == 'lbs') {
      result = initNum * lbsToKg
    } else if (initUnit == 'kg') {
      result = initNum / lbsToKg
    } else if (initUnit == 'mi') {
      result = initNum * miToKm
    } else if (initUnit == 'km') {
      result = initNum / miToKm
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum && initUnit && returnNum && returnUnit) {
      result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit
    } else if (initNum && !initUnit && !returnNum && !returnUnit) {
      result = "invalid input unit and/or number"
    } else if (initNum && initUnit && !returnNum && returnUnit) {
      result = "invalid number"
    } else if (!initNum && !returnNum) {
      result = "no number"
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
