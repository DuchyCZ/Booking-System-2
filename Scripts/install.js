function dalsiKrok(elementID1, elementID2)
{
	document.getElementById(elementID2).style.display = 'block';
	document.getElementById(elementID1).style.display = 'none';	
}

function dalsiKrokKontrola1(elementID1, elementID2, elementID3, elementID4, elementID5)
{
	if (document.getElementById(elementID3).value == "" || document.getElementById(elementID4).value == "" || document.getElementById(elementID5).value == "")
	{	
		alert("Všechny hodnoty musí být vyplněny!");
	}
	else
	{
		document.getElementById(elementID2).style.display = 'block';
		document.getElementById(elementID1).style.display = 'none';	
	}
}

function predchoziKrok(elementID1, elementID2)
{
	document.getElementById(elementID2).style.display = 'block';
	document.getElementById(elementID1).style.display = 'none';			
}