$(document).ready(function(){ 
	/*$("#kroktext1").toggle(2000);
	$("#kroktext1").toggle(2000);*/ 
	
	$("#kurty")
		.focusout(function() {
			if ($("#kurty").val() != "0" && $("#kurty").val() != "")
			{
				$('.tkurtyo').remove();
				$('.tkurty').remove();
				var p = $("#kurty").offset();		
				tooltipNeerror("OK", p.top - $("#kurty").height() / 2, p.left + $("#kurty").width(), "tkurtyo");	
				document.getElementById("kurty").style.borderColor='#009900';
			}	
			else
			{
				$('.tkurtyo').remove();
				$('.tkurty').remove();
				var p = $("#kurty").offset();		
				tooltipError("Parametr musí být vyplněn!", p.top - $("#kurty").height() / 2, p.left + $("#kurty").width(), "tkurty");
				document.getElementById("kurty").style.borderColor='#FF0000';
			}
	  })
	  
	$("#hodiny2")
		.focusout(function() {
			if ($("#hodiny").val() == "" && $("#hodiny2").val() == "")
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipError("Parametr musí být vyplněn!", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2");
				document.getElementById("hodiny2").style.borderColor='#FF0000';
				document.getElementById("hodiny").style.borderColor='#FF0000';
			}
				
			else if ($("#hodiny").val() >= $("#hodiny2").val())
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipError("Parametr musí být vyplněn!", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2");
				document.getElementById("hodiny2").style.borderColor='#FF0000';
				document.getElementById("hodiny").style.borderColor='#FF0000';
			}
			
			else if ($("#hodiny").val() == "" || $("#hodiny2").val() == "")
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipError("Parametr musí být vyplněn!", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2");
				document.getElementById("hodiny2").style.borderColor='#FF0000';
				document.getElementById("hodiny").style.borderColor='#FF0000';
			}
			
			else
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipNeerror("OK", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2o");	
				document.getElementById("hodiny2").style.borderColor='#009900';
				document.getElementById("hodiny").style.borderColor='#009900';
			}
	  })
	  
	$("#hodiny")
		.focusout(function() {
			if ($("#hodiny").val() == "" && $("#hodiny2").val() == "")
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipError("Parametr musí být vyplněn!", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2");
				document.getElementById("hodiny2").style.borderColor='#FF0000';
				document.getElementById("hodiny").style.borderColor='#FF0000';
			}
				
			else if ($("#hodiny").val() >= $("#hodiny2").val())
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipError("Parametr musí být vyplněn!", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2");
				document.getElementById("hodiny2").style.borderColor='#FF0000';
				document.getElementById("hodiny").style.borderColor='#FF0000';
			}
			
			else if ($("#hodiny").val() == "" || $("#hodiny2").val() == "")
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipError("Parametr musí být vyplněn!", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2");
				document.getElementById("hodiny2").style.borderColor='#FF0000';
				document.getElementById("hodiny").style.borderColor='#FF0000';
			}
			
			else
			{
				$('.hodiny2o').remove();
				$('.hodiny2').remove();
				var p = $("#hodiny2").offset();		
				tooltipNeerror("OK", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2o");	
				document.getElementById("hodiny2").style.borderColor='#009900';
				document.getElementById("hodiny").style.borderColor='#009900';
			}
	  })
});

function tooltipError(text, px, py, id)
{
	$('<p class="'+ id +'"></p>')
	.text(text)
	.appendTo('body')
	.fadeIn('slow')
	.css({ position: 'absolute', top: px - 4, left: py + 10, "border": "1px solid black", "background-color": "rgba(0, 0, 0, 0.8)", "padding": "5px", "color": "rgb(255,165,0)", "box-shadow": "0 0 30px rgba(0, 0, 0, 0.7)", "font-size": "10px"})
	.delay(3000)
	.fadeOut('slow');
}

function tooltipNeerror(text, px, py, id)
{
	$('<p class="'+ id +'"></p>')
	.text(text)
	.appendTo('body')
	.fadeIn('slow')
	.css({ position: 'absolute', top: px - 4, left: py + 10, "border": "1px solid black", "background-color": "rgba(0, 0, 0, 0.8)", "padding": "5px", "color": "rgb(0,153,0)", "box-shadow": "0 0 30px rgba(0, 0, 0, 0.7)", "font-size": "10px"})
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
		document.getElementById("kurty").style.borderColor='#FF0000';
		
		$('.tkurty').remove();
		$('.hodiny2').remove();
		var p = $("#kurty").offset();		
		tooltipError("Parametr musí být vyplněn!", p.top - $("#kurty").height() / 2, p.left + $("#kurty").width(), "tkurty");		
	}
	
	if (document.getElementById("hodiny").value == "") document.getElementById("hodiny").style.borderColor='#FF0000';
	
	if (document.getElementById("hodiny2").value == "" || document.getElementById("hodiny").value == "")
	{
		document.getElementById("hodiny2").style.borderColor='#FF0000';
		
		$('.hodiny2').remove();
		var p3 = $("#hodiny2").offset();		
		tooltipError("Parametr musí být vyplněn!", p3.top - $("#hodiny2").height() / 2, p3.left + $("#hodiny2").width(), "thodiny2");	
	}
	
	if (document.getElementById("kurty").value != "" && document.getElementById("hodiny").value != "" && document.getElementById("hodiny2").value != "")
	{
		$('.tkurtyo').remove();
		$('.hodiny2o').remove();
		document.getElementById("kroktext3").style.display = 'block';
		document.getElementById("kroktext2").style.display = 'none';	
	}
}

function predchoziKrok(elementID1, elementID2)
{
	document.getElementById(elementID2).style.display = 'block';
	document.getElementById(elementID1).style.display = 'none';	
	$('.tkurtyo').remove();
	$('.hodiny2o').remove();
	
	if (elementID2 != "kroktext1")
	{
		var p = $("#kurty").offset();		
		tooltipNeerror("OK", p.top - $("#kurty").height() / 2, p.left + $("#kurty").width(), "tkurtyo");
		
		var p = $("#hodiny2").offset();		
		tooltipNeerror("OK", p.top - $("#hodiny2").height() / 2, p.left + $("#hodiny2").width(), "hodiny2o");	
		document.getElementById("hodiny2").style.borderColor='#009900';
		document.getElementById("hodiny").style.borderColor='#009900';		
	}
}