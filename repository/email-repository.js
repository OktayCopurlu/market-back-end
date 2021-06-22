const email = require("../models/emailModel");

const create = async (pEmail) => {
  try {
    const newEmail = await new email(pEmail);
    return await newEmail.save()
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };
