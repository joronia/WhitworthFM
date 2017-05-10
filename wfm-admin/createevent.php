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

if(isset($_POST['title'])){
   $title = $_POST['title'];
}
if(isset($_POST['description'])){
   $description = $_POST['description'];
}
if(isset($_POST['tstart'])){
   $tstart = $_POST['tstart'];
}
if(isset($_POST['tend'])){
   $tend = $_POST['tend'];
}
if(isset($_POST['newid'])){
   $id = $_POST['newid'];
}
if(isset($_POST['year'])){
   $year = $_POST['year'];
}
if(isset($_POST['day'])){
   $day = $_POST['day'];
}
if(isset($_POST['month'])){
   $month = $_POST['month'];
}

if(isset($day)&&isset($month)&&isset($year)){
$end = date("U",mktime($tend,0,0,$month,$day,$year));
$start = date("U",mktime($tstart,0,0,$month,$day,$year));
}

if(isset($start)&&isset($end)){
    $item = $marshaler->marshalJson('
        {
            "ID": ' . $id . ',
            "title": "' . $title . '",
            "description": "' . $description . '",
            "end_time": "' . $end . '",
            "start_time": "' . $start . '"
            
        }
    ');

    $params = [
        'TableName' => 'schedule',
        'Item' => $item
    ];


    try {
        $result = $dynamodb->putItem($params);

        header('Location: auth.php');

    } catch (DynamoDbException $e) {
        echo "Unable to add item:\n";
        echo $e->getMessage() . "\n";
    }    
}else{
    header('Location: auth.php');
}

?>