/**
 * Created by Duchy on 2. 5. 2015.
 */
$(document).ready(function () {
    /*$("#kroktext1").toggle(2000);
     $("#kroktext1").toggle(2000);*/

    $("#sqlConnect").submit(function () {
        sData = $("#SQLDatabase");
        sHost = $("#SQLHost");
        sUser = $("#SQLUsername");
        sPass = $("#SQLPass");
        sPref = $("#SQLPrefix");

        //alert(sHost.val());
        return false;
    });

    $("#basicOps").submit(function () {
        return false;
    });

    $("#kurty")
        .focusout(function () {
            var kurty = $("#kurty");
            var positonKurty = kurty.offset();
            if (kurty.val() > 0 && kurty.val() < 51) {
                tooltipUnError("OK", positonKurty.top - 2, positonKurty.left + kurty.width() + 13, "okparamK");
                document.getElementById("kurty").style.borderColor = '#009900';
            }
            else {
                tooltipError("Špatný parametr!", positonKurty.top - 2, positonKurty.left + kurty.width() + 13, "badparamK");
                document.getElementById("kurty").style.borderColor = '#D72C2C';
            }
        })
        .focusin(function () {
            $('.okparamK').remove();
            $('.badparamK').remove();
        });

    $("#hodiny")
        .focusout(function () {
            var hodiny = $("#hodiny");
            var hodiny2 = $("#hodiny2");
            var positionHodiny2 = hodiny2.offset();
            hodiny.val(pad(hodiny.val(), 2));

            if (hodiny.val() > 0 && hodiny.val() < 24 && hodiny2.val() > 1 && hodiny2.val() < 25 && hodiny.val() < hodiny2.val()) {
                tooltipUnError("OK", positionHodiny2.top - 2, positionHodiny2.left + hodiny2.width() + 13, "okparamH");
                document.getElementById("hodiny").style.borderColor = '#009900';
                document.getElementById("hodiny2").style.borderColor = '#009900';
            }
            else {
                tooltipError("Špatný parametr!", positionHodiny2.top - 2, positionHodiny2.left + hodiny2.width() + 13, "badparamH");
                document.getElementById("hodiny").style.borderColor = '#D72C2C';
                document.getElementById("hodiny2").style.borderColor = '#D72C2C';
            }
        })
        .focusin(function () {
            $('.okparamH').remove();
            $('.badparamH').remove();
        });

    $("#hodiny2")
        .focusout(function () {
            var hodiny = $("#hodiny");
            var hodiny2 = $("#hodiny2");
            var positionHodiny2 = hodiny2.offset();
            hodiny2.val(pad(hodiny2.val(), 2));

            if (hodiny.val() > 0 && hodiny.val() < 24 && hodiny2.val() > 1 && hodiny2.val() < 25 && hodiny.val() < hodiny2.val()) {
                tooltipUnError("OK", positionHodiny2.top - 2, positionHodiny2.left + hodiny2.width() + 13, "okparamH");
                document.getElementById("hodiny2").style.borderColor = '#009900';
                document.getElementById("hodiny").style.borderColor = '#009900';
            }
            else {
                tooltipError("Špatný parametr!", positionHodiny2.top - 2, positionHodiny2.left + hodiny2.width() + 13, "badparamH");
                document.getElementById("hodiny2").style.borderColor = '#D72C2C';
                document.getElementById("hodiny").style.borderColor = '#D72C2C';
            }
        })
        .focusin(function () {
            $('.okparamH').remove();
            $('.badparamH').remove();
        });
});

var pocetKurtu;
var odHodin;
var doHodin;

var sData;
var sHost;
var sUser;
var sPass;
var sPref;

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

function tooltipFadeOut() {
    $('.okparam').remove();
    $('.okparamK').remove();
    $('.okparamH').remove();
    $('.badparam').remove();
    $('.badparamK').remove();
    $('.badparamH').remove();
}

function inputControl() {
    if (document.getElementById("kurty").value > 0 && document.getElementById("kurty").value < 51 && document.getElementById("hodiny").value > 0 && document.getElementById("hodiny").value < 24 && document.getElementById("hodiny2").value > 1 && document.getElementById("hodiny2").value < 25 && document.getElementById("hodiny").value < document.getElementById("hodiny2").value)
        return true;
    else {
        tooltipError("Špatně vyplněné parametry!", event.pageY, event.pageX, "badparam");
    }
    return false;
}

function step0() {
    setCookie("step", 0, 1);
    tooltipFadeOut();
    document.getElementById("kroktext1").style.display = 'block';
    document.getElementById("kroktext2").style.display = 'none';
}

function step1() {
    setCookie("step", 1, 1);
    tooltipFadeOut();
    document.getElementById("kroktext2").style.display = 'block';
    document.getElementById("kroktext1").style.display = 'none';
    document.getElementById("kroktext3").style.display = 'none';
}

function step2() {
    if (inputControl()) {
        setCookie("step", 2, 1);
        tooltipFadeOut();
        document.getElementById("kroktext2").style.display = 'none';
        document.getElementById("kroktext3").style.display = 'block';

        pocetKurtu = document.getElementById("kurty").value;
        odHodin = document.getElementById("hodiny").value;
        doHodin = document.getElementById("hodiny2").value;
    }
}

function tooltipError(text, positionX, positionY, id) {
    $('<p class="' + id + '"></p>')
        .text(text)
        .appendTo('body')
        .fadeIn('slow')
        .css({
            position: 'absolute',
            top: positionX - 4,
            left: positionY + 10,
            "border": "1px solid black",
            "background-color": "rgba(0, 0, 0, 0.8)",
            "padding": "5px",
            "color": "rgb(215, 44, 44)",
            "box-shadow": "0 0 30px rgba(0, 0, 0, 0.7)",
            "font-size": "10px"
        })
        .delay(3000)
        .fadeOut('slow');
}

function tooltipUnError(text, positionX, positionY, id) {
    $('<p class="' + id + '"></p>')
        .text(text)
        .appendTo('body')
        .fadeIn('slow')
        .css({
            position: 'absolute',
            top: positionX - 4,
            left: positionY + 10,
            "border": "1px solid black",
            "background-color": "rgba(0, 0, 0, 0.8)",
            "padding": "5px",
            "color": "rgb(0,153,0)",
            "box-shadow": "0 0 30px rgba(0, 0, 0, 0.7)",
            "font-size": "10px"
        })
}