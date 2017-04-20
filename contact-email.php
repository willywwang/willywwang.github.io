<?php
if(isset($_POST['email'])) {
    $email_to = "wang.yw.william@gmail.com";
    $email_subject = "Message from willywwang.github.io";
 
    function died($error) {
        echo "We are sorry, but there were error(s) found with the form you submitted. ";
        die();
    }
 
    if(!isset($_POST['username']) ||
        !isset($_POST['email']) ||
        !isset($_POST['messages'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $name = $_POST['username']; // required
    $email_from = $_POST['email']; // required
    $messages = $_POST['messages']; // required
 
    $error_message = "";
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($messages)."\n"
 
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<?php
 
}
?>