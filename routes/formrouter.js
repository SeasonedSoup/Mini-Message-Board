const {Router} = require("express")

const router = Router()

router.get("/new", (req, res) => {
    res.render("form")
})

router.post("/new", (req, res) => {
    const messageUser = req.body.authorName
    const messageText = req.body.message
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/")
})
module.exports = router;