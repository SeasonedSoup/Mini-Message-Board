const express = require("express")
const path = require("path")

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

const router = require("./routes/formrouter")(messages)
const app = express();
//set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

//parses form data to req.body or sum
app.use(express.urlencoded({ extended: true }));
app.use("/new", router)


//app
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
});

app.get("/messages/:id", (req, res) => {
    const message = messages[req.params.id]
    res.render("details", {message})
})

app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log("Listening at port 8000")
})
