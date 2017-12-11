<?php 
    if(isset($_POST['name']) and isset($_POST['address']) and isset($_POST['order']) and isset($_POST['telephone'])){
    

    
    $name = $_POST['name']; // this is the sender's Email address
    $address = $_POST['address'];  
    $order = $_POST['order'];
    $telephone = $_POST['telephone'];

   	$subject = "Order";
  	$message = "Name: ".$name.  " " . "Order: ". $order . " " . "Telephone: " . $telephone . " " ."Address: ". $address. " ";   
    try{
    $file = fopen("order/order.txt", 'ab');
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
        window.location.href='menu.html';
    }, 1000);</script>";die();
    } else {
    echo "Empty Fields";
    }

?>