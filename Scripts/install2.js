/**
 * Created by Duchy on 2. 5. 2015.
 */
$(document).ready(function () {
    /*$("#kroktext1").toggle(2000);
     $("#kroktext1").toggle(2000);*/

    $("#kurty")
        .focusout(function () {
            var positonKurty = $("#kurty").offset();
            if ($("#kurty").val() > 0 && $("#kurty").val() < 51) {
                tooltipUnError("OK", positonKurty.top - $("#kurty").height() / 2, positonKurty.left + $("#kurty").width(), "okparamK");
            }
            else {
                tooltipError("Špatný parametr!", positonKurty.top - $("#kurty").height() / 2, positonKurty.left + $("#kurty").width(), "badparamK");
            }
        })
        .focusin(function () {
            $('.okparamK').remove();
            $('.badparamK').remove();
        })

    $("#hodiny")
        .focusout(function () {
            var positionHodiny2 = $("#hodiny2").offset();
            if ($("#hodiny").val() > 0 && $("#hodiny").val() < 24 && $("#hodiny2").val() > 1 && $("#hodiny2").val() < 25 && $("#hodiny").val() < $("#hodiny2").val()) {
                tooltipUnError("OK", positionHodiny2.top - $("#hodiny2").height() / 2, positionHodiny2.left + $("#hodiny2").width(), "okparamH");
            }
            else {
                tooltipError("Špatný parametr!", positionHodiny2.top - $("#hodiny2").height() / 2, positionHodiny2.left + $("#hodiny2").width(), "badparamH");
            }
        })
        .focusin(function () {
            $('.okparamH').remove();
            $('.badparamH').remove();
        })

    $("#hodiny2")
        .focusout(function () {
            var positionHodiny2 = $("#hodiny2").offset();
            if ($("#hodiny").val() > 0 && $("#hodiny").val() < 24 && $("#hodiny2").val() > 1 && $("#hodiny2").val() < 25 && $("#hodiny").val() < $("#hodiny2").val()) {
                tooltipUnError("OK", positionHodiny2.top - $("#hodiny2").height() / 2, positionHodiny2.left + $("#hodiny2").width(), "okparamH");
            }
            else {
                tooltipError("Špatný parametr!", positionHodiny2.top - $("#hodiny2").height() / 2, positionHodiny2.left + $("#hodiny2").width(), "badparamH");
            }
        })
        .focusin(function () {
            $('.okparamH').remove();
            $('.badparamH').remove();
        })
});

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
    tooltipFadeOut();
    document.getElementById("kroktext1").style.display = 'block';
    document.getElementById("kroktext2").style.display = 'none';
}

function step1() {
    tooltipFadeOut();
    document.getElementById("kroktext2").style.display = 'block';
    document.getElementById("kroktext1").style.display = 'none';
    document.getElementById("kroktext3").style.display = 'none';
}

function step2() {
    if (inputControl()) {
        tooltipFadeOut();
        document.getElementById("kroktext2").style.display = 'none';
        document.getElementById("kroktext3").style.display = 'block';
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