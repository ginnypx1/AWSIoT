# AWS IoT button Phillips Hue light control

This is a very simple AWS Lambda program that connects my button to the IFTTT/Maker channel to allow the AWS IoT button to control my hue lights.

*A short press turns off all hue lights
*A double press turns them on to a random color
*A long press starts a slow color cycle.

Code was adapted from: https://www.hackster.io/reanimationxp/amazon-re-invent-dash-button-aws-ifttt-infinibutton-daaf5d?ref=part&ref_id=13747&offset=0 (That webpage had a few errors that kept the lambda program from working.)

## Troubleshooting

Index.js and the request node modules must be zipped together for the lambda function package.

Configuration: index.handler, and exisiting role/ button role.

My AWS IoT button went offline with the errors - red light - (short short short: There was an error connecting to the configured wireless network), when I fixed that (long short short: Cannot establish a secure connection with the server. This error is most likely due to an unknown or inactive certificate.), and then (long short long: Received HTTP 403 Forbidden This error is most likely returned because the certificate does not have permission to publish to that topic.) Eventually I got the button reconnected by just erasing the lambda code and entering it again.
