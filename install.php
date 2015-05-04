<?php
date_default_timezone_set('Europe/Prague');
require 'dibi.min.php';

function step3($host, $username, $password, $database, $prefix)
{
    dibi::connect(array(
        'driver' => 'mysql',
        'host' => $host,
        'username' => $username,
        'password' => $password,
        'database' => $database
    ));
}

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css"/>
    <link rel="stylesheet" type="text/css" href="Styles/style.css">
    <script type="application/javascript" src="Scripts/jquery-2.1.3.js"></script>
    <script src="Scripts/install2.js"></script>
    <script src="Scripts/tooltip.js"></script>
    <title>Booking System v2 - Instalace</title>
</head>
<body>
<div id="kroktext1" class="container">
    <p id="text">Vítejte v instalaci Booking Systému.<br>
        Pro pokračovnání stiskněte tlačítko "Začít".<br><br></p>
    <button class="button-next pure-button" onclick="step1()">Začít</button>
</div>

<div id="kroktext2" class="container" style="display:none">
    <h1>Základní nastavení</h1>

    <form class="pure-form pure-form-aligned" id="basicOps">
        <fieldset>
            <div class="pure-control-group">
                <label>Počet kurtů</label>
                <input id="kurty" type="text" maxlength="2" size="2" title="Zadejte rozmezí od 1 do 50"
                       class="masterTooltip">
            </div>

            <div class="pure-control-group">
                <label>Provozní hodiny</label>
                <input id="hodiny" type="text" maxlength="2" size="2" title="Zadejte rozmezí od 00 do 24"
                       class="masterTooltip"> - <input id="hodiny2" type="text" maxlength="2" size="2"
                                                       title="Zadejte rozmezí od 00 do 24"
                                                       class="masterTooltip">
            </div>

            <div class="left">
                <button class="pure-button" onclick="step0()">Zrušit</button>
            </div>
            <div class="right">
                <button class="button-next pure-button" onclick="step2()">Další</button>
            </div>
        </fieldset>
    </form>
</div>

<div id="kroktext3" class="container" style="display:none">
    <h1>Nastavení databáze</h1>

    <form class="pure-form pure-form-aligned" id="sqlConnect">
        <fieldset>
            <div class="pure-control-group">
                <label>Host</label>
                <input id="SQLHost" type="text" value="localhost">
            </div>

            <div class="pure-control-group">
                <label>Uživatelské jméno</label>
                <input id="SQLUsername" type="text" value="root">
            </div>

            <div class="pure-control-group">
                <label>Heslo</label>
                <input id="SQLPass" type="password">
            </div>

            <div class="pure-control-group">
                <label>Databáze</label>
                <input id="SQLDatabase" type="text">
            </div>

            <div class="pure-control-group">
                <label>Prefix</label>
                <input id="SQLPrefix" type="text" value="bosy_">
            </div>

            <div class="left">
                <button class="pure-button" onclick="step1()">Zpět</button>
            </div>
            <div class="right">
                <button type="submit" name="step3" class="submit button-next pure-button">Test Připojení</button>
            </div>
        </fieldset>
    </form>
</div>
</body>
</html>
