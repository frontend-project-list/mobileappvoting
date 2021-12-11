var events = require('events');
var eventEmitter = new events.EventEmitter();
const mail = require("./Mailer");

var sendEmail = function (students) {
  students.map(student =>{
    return mail({
        address : student.email,
        subject : "Registerd as a student",
        html : `<b>succesfully registerd as a student on the Voting app </b></br> next time you login please use this password </br> <i>${student.password}<i></b>`
      }) 
  })
}

eventEmitter.on('sendEmail', sendEmail);


module.exports = eventEmitter;