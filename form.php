
<?php

$destinatario = "guindasocialmedia@gmail.com";
$asunto = "Consulta Faktor Bank";
$nombre = $_POST ['nombre'];
$email = $_POST ['email'];
$mensaje = $_POST ['mensaje'];
$remitente = $_REQUEST['email'];
$header = "From: $remitente";
$mensajeCompleto = $mensaje . "\n\nNombre: " . $nombre . " / Email: " . $email;

mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>