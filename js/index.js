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

// check the language cookie
function checkCookies() {
  languageCookie = getCookie("language");
  console.log('active language:' + languageCookie);

  if (typeof languageCookie !== 'undefined') {
    translate(languageCookie, 'lng-tag')
  };
}

$(window).load(checkCookies);

$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $(".enTranslator").click(function(){
    document.cookie = "language" + "=" + "en" + ";path=/; domain=bolo-de-rolo.com;"; // set the cookie with the language if user clicks the language button
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (German) with attribute lng-tag
  $(".deTranslator").click(function(){
    document.cookie = "language" + "=" + "de" + ";path=/; domain=bolo-de-rolo.com;"; // set the cookie with the language if user clicks the language button
    translate('de', 'lng-tag');
  });
});