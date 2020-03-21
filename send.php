<?php
  
$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];

// Load Composer's autoloader
require 'php/Exception.php';
require 'php/PHPMailer.php';
require 'php/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'yulfi555@gmail.com';                   // SMTP username
    $mail->Password   = 'yulfinordflesh';                       // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('yulfi555@gmail.com', 'Кристина');
    $mail->addAddress('kristella33@yandex.ru');                 // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, Телефон пользователя: ${userPhone}, Email пользователя: ${userEmail}";

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}

?>