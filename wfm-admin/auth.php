<?php
require 'vendor/autoload.php';

date_default_timezone_set('UTC');

use Aws\DynamoDb\Exception\DynamoDbException;
use Aws\DynamoDb\Marshaler;

session_start();

if ($_SESSION['authenticated'] == true) {
   include('admin-panel.php');
   die();
   
} else {
    header('Location: login.php');

}

    $sdk = new Aws\Sdk([
        'endpoint'   => 'https://dynamodb.us-east-2.amazonaws.com',
        'region'   => 'us-east-2',
        'version'  => 'latest',
        'credentials' => [
            'key'    => 'AKIAILI4WEMNUBJO2KEA',
            'secret' => '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',
        ]
    ]);

    $dynamodb = $sdk->createDynamoDb();
    $marshaler = new Marshaler();

    $tableName = 'users';

    if(isset($_POST['name'])){
        $user = $_POST['name'];
    }

    if(isset($user)){
        $key = $marshaler->marshalJson('
            {
                "username": "' . $user . '"
            }
        ');

        $params = [
            'TableName' => $tableName,
            'Key' => $key
        ];

        try {
            $result = $dynamodb->getItem($params);
            

        } catch (DynamoDbException $e) {
            echo "Unable to get item:\n";
            echo $e->getMessage() . "\n";
        }

        if(isset($_POST["name"])&&isset($_POST["pass"])&&$_POST["pass"]==$result['Item']['password']['S']){
            $_SESSION['authenticated'] = true;
            include('admin-panel.php');

        }
    }else{
        header('Location: login.php');
    }



