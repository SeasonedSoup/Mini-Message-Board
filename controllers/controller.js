const db = require("../db/queries")

export function getMessageForm(req, res) {
    res.render("form")
}

export async function getAllMessages() {
    
}
