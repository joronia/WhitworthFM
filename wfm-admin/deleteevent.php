<?php
require 'vendor/autoload.php';

date_default_timezone_set('UTC');

use Aws\DynamoDb\Exception\DynamoDbException;
use Aws\DynamoDb\Marshaler;

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


if(isset($_POST['deleteid'])){
    $id = $_POST['deleteid'];
    $key = $marshaler->marshalJson('
        {
            "ID": ' . $id . '
        }
    ');



    $params = [
        'TableName' => 'schedule',
        'Key' => $key
    ];

    try {
        $result = $dynamodb->deleteItem($params);
        header('Location: auth.php');

    } catch (DynamoDbException $e) {
        echo "Unable to delete item:\n";
        echo $e->getMessage() . "\n";
    }    
}else{
    header('Location: auth.php');
}



?>