const { create } = require("../repository/email-repository");
const nodemailer = require("nodemailer");

const createNewEmail = async (pEmail) => {
  try {
    return await create(pEmail);
  } catch (error) {
    console.log(error);
  }
};

const sendNewEmail = async (pEmail) => {
  const { name, email, title, message } = await pEmail;
  try {
    const subject = await title;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "selimhalim12@gmail.com",
        pass: "12991299",
      },
    });
    transporter.sendMail({
      from: "selimhalim12@gmail.com",
      to: "selimhalim12@gmail.com",
      subject,
      html: `<h1>${name}</h1>
        <h4>${message}</h4>
        <h5>${email}</h5>`,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createNewEmail, sendNewEmail };
