const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
     auth: {
       user: process.env.Gmail,
       pass: process.env.Password,
             }
         });

        const info = await transporter.sendMail({
            from: 'TalentFlex solutions || by Harshita Mandowara',
            to: email,
            subject: title,
            html: body
        });

        // console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) {
        console.log('Error while sending mail (mailSender) - ', email);
    }
}

module.exports = mailSender;