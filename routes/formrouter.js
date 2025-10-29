const {Router} = require("express")
const router = Router()

module.exports = 
    router.get("/", (req, res) => {
        res.render("form")
    })
    /*  */
    router.post("/", (req, res) => {
        const messageUser = req.body.authorName
        const messageText = req.body.message
        messages.push({ text: messageText, user: messageUser, added: new Date() });
        res.redirect("/")
    })
    return router