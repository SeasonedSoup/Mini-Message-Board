const {Router} = require("express")
const router = Router()

const db = require("../db/queries");
router.get("/", (req, res) => { res.render("form") });
router.post("/", (req, res) => {
    const { authorName, message } = req.body;
    db.createMessage(authorName, message)
    res.redirect("/");
});
module.exports = router;