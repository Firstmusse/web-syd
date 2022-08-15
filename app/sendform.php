<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['tel']); 
$email = trim($_POST['email']); 
$text = trim($_POST['text']);
$fromMail = 'admin@web-syd.ru'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Сообщение WEB-SYD'; //Заголовок письма
$emailTo = 'admin@web-syd.ru'; //Ваша почта
$subject = 'Форма обратной связи WEB-SYD'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта \n
  \nИмя:$name
  \nНомер:$phone
  \nПочта:$email 
  \nТекст:$text"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>