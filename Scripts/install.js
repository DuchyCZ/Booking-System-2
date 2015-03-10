$(document).ready(function(){ 
	/*$("#kroktext1").toggle(2000);
	$("#kroktext1").toggle(2000);*/ 
});

function error(text, px, py, id)
{
	$('<p class="'+ id +'"></p>')
	.text(text)
	.appendTo('body')
	.fadeIn('slow')
	.css({ position: 'absolute', top: px, left: py, "border": "1px solid black", "background-color": "rgba(0, 0, 0, 0.8)", "padding": "10px", "color": "rgb(255,165,0)", "box-shadow": "0 0 30px rgba(0, 0, 0, 0.7)", "font-size": "11px"})
	.delay(3000)
	.fadeOut('slow');
}

function dalsiKrok()
{
	document.getElementById("kroktext2").style.display = 'block';
	document.getElementById("kroktext1").style.display = 'none';	
}

function dalsiKrokKontrola1()
{
	if (document.getElementById("kurty").value == "" || document.getElementById("kurty").value == 0)
	{	
		/*document.getElementById("kurty").style.borderColor='#FF0000';	*/
		if (document.getElementById("kurty").value == 0)
		{
			document.getElementById("kurty").value = "";
		}
		
		var p = $("#kurty").offset();		
		error("Parametr musí být vyplněn!", p.top, p.left + $("#kurty").width() / 2, "tkurty");		
	}
	else document.getElementById("kurty").style.borderColor='#04B404';
	
	if (document.getElementById("hodiny").value == "")
	{
		/*document.getElementById("hodiny").style.borderColor='#FF0000';	*/
		
		var p2 = $("#hodiny").offset();		
		error("Parametr musí být vyplněn!", p2.top, p2.left + $("#hodiny").width() / 2, "thodiny");			
	}
	else document.getElementById("hodiny").style.borderColor='#04B404';
	
	if (document.getElementById("hodiny2").value == "")
	{
		/*document.getElementById("hodiny2").style.borderColor='#FF0000';*/
		
		var p3 = $("#hodiny2").offset();		
		error("Parametr musí být vyplněn!", p3.top, p3.left + $("#hodiny2").width() / 2, "thodiny2");	
	}
	else document.getElementById("hodiny2").style.borderColor='#04B404';
	
	if (document.getElementById("kurty").value != "" && document.getElementById("hodiny").value != "" && document.getElementById("hodiny2").value != "")
	{
		document.getElementById("kroktext3").style.display = 'block';
		document.getElementById("kroktext2").style.display = 'none';	
	}
}

function predchoziKrok(elementID1, elementID2)
{
	document.getElementById(elementID2).style.display = 'block';
	document.getElementById(elementID1).style.display = 'none';			
}