//This function will be called when user click changing language
function translate(lng, tagAttr){
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
  if(lng == 'en'){
    $(".enTranslator").css('color', '#8B0000');
    $(".deTranslator").css('color', '#DE9C21');
  }
  if(lng == 'de'){
    $(".deTranslator").css('color', '#8B0000');
    $(".enTranslator").css('color', '#DE9C21');
  }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $(".enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (German) with attribute lng-tag
  $(".deTranslator").click(function(){
    translate('de', 'lng-tag');
  });
});