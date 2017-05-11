<?php
require 'vendor/autoload.php';

date_default_timezone_set('UTC');

use Aws\DynamoDb\Exception\DynamoDbException;
use Aws\DynamoDb\Marshaler;

if(isset($_SESSION['authenticated'])||$_SESSION['authenticated']==1){

    $_SESSION['authenticated'] = 0;
    header('Location: login.php');
}else{
    header('Location: login.php');
}


