<?php

$fio = $_POST['fio'];
$email = $_POST['email'];
$text = $_POST['text'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);

$fio = trim($fio);
$email = trim($email);
$text = trim($text);

mail("contact@pipka-team.site", "Order from site", "Client:".$fio.". E-mail: ".$email.". \n".$text );
mail("pipkateamofficial@gmail.com", "Order from site", "Client:".$fio.". E-mail: ".$email.". \n".$text );
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
header("Location: $redirect");
exit();
// if (!mail->send()) {
//     $message = 'eror';
// }else {
//     $message = 'Form sended!';
// }

// $response = ['message' => $message];

// header('Content-type: application/json');
// echo json_encode($response);
?>

