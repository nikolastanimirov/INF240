<?php 
    if(isset($_POST['mail']) and isset($_POST['name']) and isset($_POST['subject']) and isset($_POST['telephone'])){
    

    
    $from1 = $_POST['mail']; // this is the sender's Email address
    $name = $_POST['name'];  
    $subject = $_POST['subject'];
    $telephone = $_POST['telephone'];

   	$subject = "Message";
  	$message = "Name: ".$name.  "</br> " . "Subject: ". $subject . "</br> " . "Telephone: " . $telephone . "</br> " ."Email: ". $from1. "</br> ";   
    try{
    $file = fopen("messages/messages.txt", 'ab');
    fwrite($file, "===========START===========".PHP_EOL);
    fwrite($file, $message);
    fwrite($file, "============END============".PHP_EOL);
    fclose($file);
    }
    catch(Exception $e){
      
    }
    echo "Your message was sent! You will now be redirected";
    echo "<script>";
    echo "window.setTimeout(function(){
        // Move to a new location or you can do something else
        window.location.href='contact.html';
    }, 1000);</script>";die();
    } else {
    echo "Empty Fields";
    }

?>