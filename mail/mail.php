<?php
$recepient = "colonel100@yandex.ru";
$siteName = "Person Habitat";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$letter = "Имя: $name \nТелефон: $phone \nСообщение: $message";
$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $letter, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>