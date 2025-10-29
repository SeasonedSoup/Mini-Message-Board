const db = require("../db/queries")

 function getMessageForm(req, res) {
    res.render("form")
}

async function getMessages() {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages })
}

module.exports = {getMessageForm, getMessages}