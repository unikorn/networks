<?php

ini_set('display_errors', true);

require_once 'PHPMailer/PHPMailerAutoload.php';

$token='';
$chatid='';

$header='Новая регистрация на лендинге! Контактные данные: ';
$contact_email=$_POST['specialEmail'];
$contact_phone=$_POST['inputPhone'];
$body_trf=', тариф: ';
$tarif=$_POST['trf'];
$body_period=', период: ';
$period=$_POST['period'].' месяц(ев)';
$text=$header.$contact_email.$contact_phone.$body_trf.$tarif.$body_period.$period;
    
}

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 1;

$mail->Host = 'ssl://smtp.gmail.com';
$mail->Port = 465;
$mail->Username = '';
$mail->Password = '';

$mail->setFrom('', '');

$mail->addAddress('', '');

$mail->Subject = $header;

$body = $text;

$mail->msgHTML($body);

$mail->send();

// Telegram //

$ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.telegram.org/bot'.$token.'/sendMessage');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS,
    'chat_id='.$chatid.'&text='.urlencode($text));
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);

    $result=curl_exec($ch);
    curl_close($ch);

date_default_timezone_set('UTC+2');

$filename = 'clients.txt';
$currentDate = date('d.m.Y G:i:s');
$otstup = " / ";
$perenos = "\n";
$content = $currentDate.$otstup.$contact_email.$contact_phone.$otstup.$tarif.$otstup.$period.$perenos;
$handle = fopen("clients.txt", "a+");
fwrite($handle, $content);
fclose($handle);
?>
