import React, { Component } from 'react';
import StaticBackground from './static_background';
import Schedule from './schedule';
import 'aws-sdk/dist/aws-sdk';

class OnTheAir extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      //events: []
    };
    
    const AWS = window.AWS;
    AWS.config.update({
      region: 'us-east-2',
      endpoint: 'https://dynamodb.us-east-2.amazonaws.com',
      version: 'latest',
      accessKeyId: 'AKIAILI4WEMNUBJO2KEA',
      secretAccessKey: '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'      
    });
    
    
    var docClient = new AWS.DynamoDB.DocumentClient();
    
    var params = {
      TableName: "schedule"
    };
    
    docClient.scan(params, this.onScan); 
  }
  
  onScan = (err, data) => {
    if(err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
       // print all the movies
        console.log("Scan succeeded.");        
        //this.setState({events: data});
        data.Items.forEach(function(event) {
          console.log(event);
        });        
    }
  }


  render() {
    return(
    <div className="on-the-air">
        <div className="player">
		      <div className="radio-feed">
		        <iframe src="//p3.radiocdn.com/files/html/d6a571353c3e62a4d6eb98fc67d06746a84ae945.html" width="415px" height="100%" frameborder="0" scrolling="no" id="wavestreamingPlayer" frameBorder="0"></iframe>
		      </div>
		      <div className="facebookFeed">
		        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWhitworthfm&tabs=timeline&width=415&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" width="415px" height="100%"></iframe>
	        </div>
        </div>
        <div className="schedule"> 
          <Schedule items={this.state.events}/>
        </div>
    </div>
    );
  }
}

export default OnTheAir;
