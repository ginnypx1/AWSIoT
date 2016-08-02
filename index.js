//AWS.config.update({region:'us-east-1'});
var IFTTTkey = "<YOUR KEY>";
var request = require('request');

//this is called when the AWS Button is pressed and event data is passed as well
exports.handler = function(event, context) {
    //console.log("Received AWS Button event: " + event.clickType + ". Firing IFTTT Maker Trigger...");
    var website = 'https://maker.ifttt.com/trigger/' + 'AWS-'+ event.clickType + '/with/key/' + IFTTTkey
    request(website, function (error, response, body) {
        console.log("Complete! Response: ", response.statusCode);
    }
)};