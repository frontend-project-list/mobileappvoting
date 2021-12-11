const nodemailer = require("nodemailer");

module.exports = async function(mail){
  try{

    let testAccount = nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, //
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASSWORD, 
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'IPRC KIGALI',
      to: mail.address, 
      subject: mail.subject,
      text: mail.text, 
      html: mail.html, 
    });
    return info;

  }catch(err){
      return false
  }
}