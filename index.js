const express = require("express")
const path = require("path")
const {Router} = require("express")

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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views", "index"), { title: "Mini Messageboard", messages: messages })
});
  
app.get("/new", (req, res) => {

});
app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log("Listening at port 8000")
})