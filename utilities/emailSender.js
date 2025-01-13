const nodemailer = require("nodemailer");

const emailSender = async (toEmail, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_HOST_PASS}`,
      },
    });

    const mailOptions = {
      from: `${process.env.EMAIL}`,
      to: `${toEmail}`,
      subject: `${subject}`,
      html: `${message}`,
    };
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    // console.log(error);
    return error;
  }
};
module.exports = emailSender;
