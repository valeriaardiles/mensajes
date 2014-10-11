$.ventana.open();

$.check.addEventListener('click', function(e){
	if($.check.value == true){
		$.check.backgroundColor = "#fff";
		$.check.color = "#fff";
	} else{
		$.check.backgroundColor = "#0071bc";
		$.check.color = "#0071bc";
	}
	
});