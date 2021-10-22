const router = require("express").Router();
const { createNewEmail,sendNewEmail } = require("../services/email-service");

router.post("/", async (req, res) => {
  try {
    const body = await req.body;
    const createEmailAtDB = await createNewEmail(body);
    const sendEmail = await sendNewEmail(body)
    return  res.json("email has sent successfully");
  } catch (error) {
    return  res.json("email couldnt sent");
  }
});

module.exports = router;
