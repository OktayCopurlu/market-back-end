const router = require("express").Router();
const { createNewEmail,sendNewEmail } = require("../services/email-service");

router.post("/", async (req, res) => {
  try {
    const body = await req.body;
    const createEmailAtDB = await createNewEmail(body);
    const sendEmail = await sendNewEmail(body)
    return await res.json("email has sent successfully");
  } catch (error) {
    return await res.json("email couldnt sent");
  }
});

module.exports = router;
