//This function will be called when user click changing language
function translate(lng, tagAttr){
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
  if(lng == 'en'){
    $(".enTranslator").css('color', '#8B0000');
    $(".deTranslator").css('color', 'black');
  }
  if(lng == 'de'){
    $(".deTranslator").css('color', '#8B0000');
    $(".enTranslator").css('color', 'black');
  }
}

// retrieve cookies
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded .split('; ');
  let res;
  cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}

$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  var languageCookie = getCookie("language");

  if (languageCookie != null) {
    translate(languageCookie, 'lng-tag')
  };

  $(".enTranslator").click(function(){
    document.cookie = 'language=en'; // set the cookie with the language if user clicks the language button
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (German) with attribute lng-tag
  $(".deTranslator").click(function(){
    document.cookie = 'language=de'; // set the cookie with the language if user clicks the language button
    translate('de', 'lng-tag');
  });
});