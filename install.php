<?php
date_default_timezone_set('Europe/Prague');
require 'dibi.min.php';

$step = 1;

if (isset($_POST['step3'])) {
    $step = 4;

    $options = array(
        'driver' => 'mysql',
        'host' => $_POST['SQLHost'],
        'username' => $_POST['SQLUsername'],
        'password' => $_POST['SQLPass'],
        'database' => $_POST['SQLDatabase'],
    );

    try {
        $connection = new DibiConnection($options);
    } catch (Exception $exception) {
        $step = 3;
        echo '<div id="errorText" class="errorText">';
        echo "Nelze se připojit k databázi!";
        echo '</div>';
    }
}

function start($step)
{
    if ($step <= 1)
        echo "display:block";
    else
        echo "display:none";
}

function courtSettings($step)
{
    if ($step != 2)
        echo "display:none";
    else
        echo "display:block";
}

function databConnect($step)
{
    if ($step != 3)
        echo "display:none";
    else
        echo "display:block";
}

function adminSettings($step)
{
    if ($step != 4)
        echo "display:none";
    else
        echo "display:block";
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
<div id="kroktext1" class="container" style="<?php start($step); ?>">
    <p id="text">Vítejte v instalaci Booking Systému.<br>
        Pro pokračovnání stiskněte tlačítko "Začít".<br><br></p>
    <button class="button-next pure-button" onclick="step1()">Začít</button>
</div>

<div id="kroktext2" class="container" style="<?php courtSettings($step); ?>">
    <h1>Základní nastavení</h1>

    <form class="pure-form pure-form-aligned" id="courtSettings">
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
                <button class="pure-button" onclick="step0()">Zpět</button>
            </div>
            <div class="right">
                <button class="button-next pure-button" onclick="step2()">Další</button>
            </div>
        </fieldset>
    </form>
</div>

<div id="kroktext3" class="container" style="<?php databConnect($step); ?>">
    <h1>Nastavení databáze</h1>

    <form class="pure-form pure-form-aligned" id="sqlConnect" method="post">
        <fieldset>
            <div class="pure-control-group">
                <label>Host</label>
                <input name="SQLHost" id="SQLHost" type="text" value="localhost">
            </div>

            <div class="pure-control-group">
                <label>Uživatelské jméno</label>
                <input name="SQLUsername" id="SQLUsername" type="text" value="root">
            </div>

            <div class="pure-control-group">
                <label>Heslo</label>
                <input name="SQLPass" id="SQLPass" type="password">
            </div>

            <div class="pure-control-group">
                <label>Databáze</label>
                <input name="SQLDatabase" id="SQLDatabase" type="text">
            </div>

            <div class="pure-control-group">
                <label>Prefix</label>
                <input name="SQLPrefix" id="SQLPrefix" type="text" value="bosy_">
            </div>

            <div class="left">
                <button class="pure-button" onclick="step1(1)">Zpět</button>
            </div>
            <div class="right">
                <button type="submit" name="step3" class="submit button-next pure-button">Test Připojení</button>
            </div>
        </fieldset>
    </form>
</div>

<div id="kroktext4" class="container" style="<?php adminSettings($step); ?>">
    <h1>Nastavení administrátora</h1>

    <form class="pure-form pure-form-aligned" id="adminOption">
        <fieldset>
            <div class="pure-control-group">
                <label>Jméno</label>
                <input id="name" type="text">
            </div>

            <div class="pure-control-group">
                <label>Příjmení</label>
                <input id="surname" type="text">
            </div>

            <div class="pure-control-group">
                <label>Email</label>
                <input id="email" type="email">
            </div>

            <div class="pure-control-group">
                <label>Heslo</label>
                <input id="password" type="password">
            </div>

            <div class="pure-control-group">
                <label>Heslo znovu</label>
                <input id="password2" type="password">
            </div>

            <div class="left">
                <button class="pure-button" onclick="step3(1)">Zpět</button>
            </div>
            <div class="right">
                <button class="button-next pure-button" onclick="step4()">Dokončit</button>
            </div>
        </fieldset>
    </form>
</div>
</body>
</html>
