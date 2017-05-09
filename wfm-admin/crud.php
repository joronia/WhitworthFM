<?php
require 'vendor/autoload.php';

date_default_timezone_set('UTC');

use Aws\DynamoDb\Exception\DynamoDbException;
use Aws\DynamoDb\Marshaler;

?>




<html>
<head>
    <style type="text/css">
    body
    {
        font-family: arial;
    }

    th,td
    {
        margin: 0;
        text-align: center;
        border-collapse: collapse;
        outline: 1px solid #e3e3e3;
    }

    td
    {
        padding: 5px 10px;
    }

    th
    {
        background: #666;
        color: white;
        padding: 5px 10px;
    }

    td:hover
    {
        cursor: pointer;
        background: #666;
        color: white;
    }

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5px auto; /* 15% from the top and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    /* Position it in the top right corner outside of the modal */
    position: absolute;
    right: 25px;
    top: 0; 
    color: #000;
    font-size: 35px;
    font-weight: bold;
}

/* Close button on hover */
.close:hover,
.close:focus {
    color: red;
    cursor: pointer;
}

/* Add Zoom Animation */
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
}

@keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}


    </style>
</head>


<script src="https://sdk.amazonaws.com/js/aws-sdk-2.43.0.min.js"></script>

<script type="text/javascript">
AWS.config.update({
  region: "us-east-2",
  // The endpoint should point to the local or remote computer where DynamoDB (downloadable) is running.
  endpoint: 'https://dynamodb.us-east-2.amazonaws.com',
  /*
    accessKeyId and secretAccessKey defaults can be used while using the downloadable version of DynamoDB. 
    For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
  */
  accessKeyId: "AKIAILI4WEMNUBJO2KEA",
  secretAccessKey: "Zd2uwcgerPhFm+b3OQ4o+Yq7bR8bLprPa85i8+RV"
});

  /* 
     Uncomment the following code to configure Amazon Cognito and make sure to 
     remove the endpoint, accessKeyId and secretAccessKey specified in the code above. 
     Make sure Cognito is available in the DynamoDB web service region (specified above).
     Finally, modify the IdentityPoolId and the RoleArn with your own.
  */
/*
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
IdentityPoolId: "us-west-2:12345678-1ab2-123a-1234-a12345ab12",
RoleArn: "arn:aws:iam::123456789012:role/dynamocognito"
});
*/

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();





function createItem() {
    var params = {
        TableName :"schedule",
        Item:{
            "ID": 7,
            "start_time": "Sat Jun 03 2017 14:00:00 GMT-0700 (Pacific Daylight Time)",
            "end_time": "Sat Jun 03 2017 15:00:00 GMT-0700 (Pacific Daylight Time)",
            "description": "N/A",
            "title": "radio"
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            document.getElementById('textarea').innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });
}



function queryData() {


var params = {
    TableName: "schedule",
    ProjectionExpression: "#id, title, start_time, end_time",
    FilterExpression: "#id between :start_id and :end_id",
    ExpressionAttributeNames: {
        "#id": "ID",
    },
    ExpressionAttributeValues: {
         ":start_id": 0,
         ":end_id": 10 
    }
};

console.log("Scanning Movies table.");
docClient.scan(params, function(err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML += "Unable to query. Error: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            
            data.Items.forEach(function(show) {
                document.getElementById('textarea').innerHTML +=  show["title"] + " at " + show["start_time"] + '<input id="deleteEvent" type="button" value="X" onclick="deleteEvent('+show["ID"]+')" /><br>';
            });
         
        }
    });
}

function populateSchedule() {

 var schedule = document.getElementById('schedule_display');
 var i;
 var tomorrow = new Date();
 tomorrow.setDate(tomorrow.getDate() + 1);

 var calendar = [];
 var tableHeaders = "<tr><th>Time</th>";
 for (i = 0; i < 7; i++) {
    calendar.push(formatDate(tomorrow));
    tableHeaders += "<th>"+ formatDate(tomorrow) +"</th>";
    tomorrow.setDate(tomorrow.getDate() + 1);
 }
 tableHeaders += "</tr>";

 var tableBody = [];

 schedule.rows.item(0).innerHTML = tableHeaders;

 for (i = 1; i < 19; i++) {
    schedule.rows.item(i).innerHTML = "<tr><td>"+(i+5)+":00-"+(i+6)+":00</td>";

    for (j = 0; j < 7; j++) {

        schedule.rows.item(i).innerHTML += "<td id="+calendar[j]+"-"+(i+5)+":00-"+(i+6)+":00></td>";
    }
    schedule.rows.item(i).innerHTML += "</tr>";
 }




var params = {
    TableName: "schedule",
    ProjectionExpression: "#id, show_time, show_date, Description, Content",
    FilterExpression: "#id between :start_id and :end_id",
    ExpressionAttributeNames: {
        "#id": "ID",
    },
    ExpressionAttributeValues: {
         ":start_id": 0,
         ":end_id": 5 
    }
};

console.log("Scanning Movies table.");
docClient.scan(params, function(err, data) {
        if (err) {
            document.getElementById('schedule_display').innerHTML += "Unable to query. Error: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            data.Items.forEach(function(show) {
                console.log(show);
                var cell = document.getElementById(show['show_date']+"-"+show['show_time']);
                if(cell!=null){
                    cell.innerHTML += "<input type='button' value='X' onclick='deleteEvent("+show['ID']+");' />"
                    cell.innerHTML += " Content: "+show['Content']+"<br>Description: "+show['Description'];
                }
            });
         
        }
    });





 

}

function createNewEvent(){
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var id = parseInt(document.getElementById('new-event-id').innerHTML);
  var textarea = document.getElementById('textarea');
  var tstart = document.getElementById('tstart');
  var tend = document.getElementById('tend');
  var day = document.getElementById('day');
  var month = document.getElementById('month');
  var year = document.getElementById('year');

  var syear = year.options[year.selectedIndex].value;
  var startt = tstart.options[tstart.selectedIndex].value;
  var endt = tend.options[tend.selectedIndex].value;
  var sday = day.options[day.selectedIndex].value;
  var smonth = month.options[month.selectedIndex].value;

  if(tstart==null||tend==null||day==null||month==null||year==null||title==null||description==null||title==''||description==''||endt<=startt){
    if(tstart==null){
      textarea.innerHTML = "Please select a starting time."
    }
    if(tend==null){
      textarea.innerHTML = "Please select an ending time."
    }
    if(endt<=startt){
      textarea.innerHTML = "An event cannot end before it begins."
    }
    if(day==null){
      textarea.innerHTML = "Please select a date."
    }
    if(month==null){
      textarea.innerHTML = "Please select a month."
    }    
    if(year==null){
      textarea.innerHTML = "Please select a month."
    }   
    if(title==null||title==''){
      textarea.innerHTML = "Please add a title."
    }   
    if(description==null||description==''){
      textarea.innerHTML = "Please add a description."
    }    
  }else{
    var start_date = new Date(syear,smonth,sday,startt);
    var end_date = new Date(syear,smonth,sday,endt);
    var params = {
        TableName :"schedule",
        Item:{
            "ID": id,
            "start_time": start_date.toString(),
            "end_time": end_date.toString(),
            "description": description,
            "title": title
        }
    };
    console.log(start_date);

    docClient.put(params, function(err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            document.getElementById('textarea').innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });

  }


}

function deleteEvent(id){

    var table = "schedule";

    var params = {
        TableName:table,
        Key:{
            "ID":id,
        }
    };
    docClient.delete(params, function(err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML = "Unable to delete item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            document.getElementById('textarea').innerHTML = "DeleteItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });    
}



function formatDate(value)
{
   return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear();
}





</script>
<body>
<?php


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

//Expression attribute values
$eav = $marshaler->marshalJson('
    {
        ":start_id": 0,
        ":end_id": 1000
    }
');

$params = [
    'TableName' => 'schedule',
    'ProjectionExpression' => '#id, title, description, start_time, end_time',
    'FilterExpression' => '#id between :start_id and :end_id',
    'ExpressionAttributeNames'=> [ '#id' => 'ID' ],
    'ExpressionAttributeValues'=> $eav
];

$maxid = 0;

try {
    while (true) {
        $result = $dynamodb->scan($params);
        echo '<table name="events_table"><tr><th>ID</th><th>Title</th><th>Description</th><th>Start</th><th>End</th><th>Delete</th></tr>';
        foreach ($result['Items'] as $i) {
            
            $event = $marshaler->unmarshalItem($i);
            if($event['ID']>=$maxid){
              $maxid = $event['ID'] + 1;
            }
            echo '<tr><td>'. $event['ID'] .'</td><td>'. $event['title'] .'</td><td>'. $event['description'] .'</td><td>'. $event['start_time'] .'</td><td>'. 
            $event['end_time'] .'</td><td><input id="deleteEvent" type="button" value="X" onclick="deleteEvent('.$event['ID'].')" /></td></tr>';

        }
        echo '</table><div id="new-event-id">'.$maxid.'</div>';




        if (isset($result['LastEvaluatedKey'])) {
            $params['ExclusiveStartKey'] = $result['LastEvaluatedKey'];
        } else {
            break;
        }
    }

} catch (DynamoDbException $e) {
    echo "Unable to scan:\n";
    echo $e->getMessage() . "\n";
}

?>

<div id="add-event-container">
<form>
  Event Title: <input type="text" id="title"><br>
  Event Description: <input type="text" id="description"><br>

    Month:
    <select id="month">
      <option value="0">January</option>
      <option value="1">February</option>
      <option value="2">March</option>
      <option value="3">April</option>
      <option value="4">May</option>
      <option value="5">June</option>
      <option value="6">July</option>
      <option value="7">August</option>
      <option value="8">September</option>
      <option value="9">October</option>
      <option value="10">November</option>
      <option value="11">December</option>
    </select>
    <br>

    Year:
    <select id="year">
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
      <option value="2028">2028</option>
      <option value="2029">2029</option>
      <option value="2030">2030</option>
    </select>
    <br>


    Day:
    <select id="day">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option> 
      <option value="30">30</option>
      <option value="31">31</option>           
    </select>
    <br>


    Start:
    <select id="tstart">
      <option value="0">0:00</option>
      <option value="1">1:00</option>
      <option value="2">2:00</option>
      <option value="3">3:00</option>
      <option value="5">5:00</option>
      <option value="6">6:00</option>
      <option value="7">7:00</option>
      <option value="8">8:00</option>
      <option value="9">9:00</option>
      <option value="10">10:00</option>
      <option value="11">11:00</option>
      <option value="12">12:00</option>
      <option value="13">13:00</option>
      <option value="14">14:00</option>
      <option value="15">15:00</option>
      <option value="16">16:00</option>
      <option value="17">17:00</option>
      <option value="18">18:00</option>
      <option value="19">19:00</option>
      <option value="20">20:00</option>
      <option value="21">21:00</option>
      <option value="22">22:00</option>
      <option value="23">23:00</option>
    </select>
    <br>
    End:
    <select id="tend">
      <option value="0">0:00</option>
      <option value="1">1:00</option>
      <option value="2">2:00</option>
      <option value="3">3:00</option>
      <option value="5">5:00</option>
      <option value="6">6:00</option>
      <option value="7">7:00</option>
      <option value="8">8:00</option>
      <option value="9">9:00</option>
      <option value="10">10:00</option>
      <option value="11">11:00</option>
      <option value="12">12:00</option>
      <option value="13">13:00</option>
      <option value="14">14:00</option>
      <option value="15">15:00</option>
      <option value="16">16:00</option>
      <option value="17">17:00</option>
      <option value="18">18:00</option>
      <option value="19">19:00</option>
      <option value="20">20:00</option>
      <option value="21">21:00</option>
      <option value="22">22:00</option>
      <option value="23">23:00</option>
    </select>
    <br>

  
</form>
<input type="button" value="Submit" onclick="createNewEvent()">

</div>



<div readonly id= "textarea" style="width:400px; height:800px"></div>

<br>
<table border = 1>
    <td>
        <table border = 1>
            <caption>CRUD Operations</caption>
            <td><input id="createItem" type="button" value="Create Item" onclick="createItem();" /></td><td><input id="readItem" type="button" value="Read Item" onclick="readItem();" /></td><td><input id="updateItem" type="button" value="Update Item" onclick="updateItem();" /><td><input id="deleteItem" type="button" value="Delete Item" onclick="deleteItem();" /></td></td>
        </table>
    </td>
    <td>
        <table border = 1>
            <caption>Query and Scan</caption>
            <td><input id="queryData" type="button" value="Query" onclick="queryData();" /></td><td><input id="scanData" type="button" value="Scan" onclick="scanData();" /></td>
        </table>
    </td>
</table>

</html>
</body>