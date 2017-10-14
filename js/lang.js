var langs = ['en', 'fr', 'es', 'de'];
var langCode = '';
var langJS = null;

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
			$(this).html (strTr);
	});
}

$("#dropdown").click(function(){

	$('#languages li').toggleClass('optionsDown');
	$('#languages li').toggleClass('optionsUp');

});

$('#languages li').click(function(){
	var langCode = '';
	if($(this).index()==0){
		langCode='es';
	}else if($(this).index()==1){
		langCode='en';
	}else if($(this).index()==2){
		langCode='fr';
	}else if($(this).index()==3){
		langCode='de';
	}
	$.getJSON('lang/'+langCode+'.json', translate);
	$('#languages li').toggleClass('optionsDown');
	$('#languages li').toggleClass('optionsUp');
});

var lanEnglish = true;
langCode = navigator.language.substr (0, 2);
for (var i = 0; i < langs.length; i++) {
	if(langCode==langs[i]){
		$.getJSON('lang/'+langCode+'.json', translate);
		lanEnglish= false;
		break;
	}
}
if(lanEnglish){
	$.getJSON('lang/en.json', translate);
}
