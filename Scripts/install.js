$(document).ready(function(){
 
	/*$("#kroktext1").toggle(2000);
	$("#kroktext1").toggle(2000);*/
 
});

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
		$("#kurty").fadeOut(50).fadeIn(200);
	}
	else document.getElementById("kurty").style.borderColor='#04B404';
	
	if (document.getElementById("hodiny").value == "")
	{
		document.getElementById("hodiny").style.borderColor='#FF0000';		
		$("#hodiny").fadeOut(50).fadeIn(200);
	}
	else document.getElementById("hodiny").style.borderColor='#04B404';
	
	if (document.getElementById("hodiny2").value == "")
	{
		document.getElementById("hodiny2").style.borderColor='#FF0000';	
		$("#hodiny2").fadeOut(50).fadeIn(200);
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