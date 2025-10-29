const db = require("../db/queries")

 function getMessageForm(req, res) {
    res.render("form")
}

async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages });
  } catch (err) {
    console.error("Error in getMessages:", err);
    res.status(500).send("Database or render error");
  }
}

module.exports = {getMessageForm, getMessages}