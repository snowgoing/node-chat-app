var moment = require('moment');

var date = moment();

console.log(date.format('MMM Do YYYY'));



// 10:35 am
// 6:01 am

console.log(date.format('h:mm a'));
var createdAt = 1341249;
var newDate = moment(createdAt).format('MMMM Do YYYY h:mm a');
console.log(newDate);
