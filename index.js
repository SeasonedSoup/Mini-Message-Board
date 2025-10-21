const express = require("express")
const path = require("path")
const router = require("./routes/formrouter")
const PORT = 8000;
const messages = [
    {
        text: "Hi There !",
        user: "John",
        added: new Date()
    },
    {
        text: "Hello World !",
        user: "Charles",
        added: new Date()
    },
];
const app = express();
//set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

//parses form data to req.body or sum
app.use("/new", router)
app.use(express.urlencoded({ extended: true }));

//app
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
});

app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log("Listening at port 8000")
})