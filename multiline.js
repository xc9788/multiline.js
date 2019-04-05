'use strict';
;(function(exports, undefined){
  var style = document.createElement('style');
  var code = document.createTextNode('multiline{display:none}');
  style.appendChild(code);
  document.head.appendChild(style);

  var multiline = function(multilineTagID, args) {
    var html = document.getElementById(multilineTagID).innerHTML;
    html = html.trim();

    var regexpVariable = /{{([\s\S]*?)}}/g;
    if(regexpVariable.test(html) && !args){
      throw new Error('args not passed .');
    }
    
    return html.replace(regexpVariable, function(m, key, i, html){
      key = key.trim();
      if (!key) {
        throw new Error('error');
      }

      var subKeyArr = key.split('.');
      if (subKeyArr.length > 2) {
        throw new Error('error');
      }

      if (subKeyArr.length == 1) {
        if (!(subKeyArr[0] in args)) {
          throw new Error('error');
        }

        return args[key];
      }

      return args[subKeyArr[0]][subKeyArr[1]]
    });
  };

  if (typeof window == 'object') {
    window.multiline = multiline;
  } else {
    module.exports = multiline;
  }
})();
