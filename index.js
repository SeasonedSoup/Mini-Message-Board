const express = require("express")
const path = require("path")

const PORT = 8000;

const router = require("./routes/formrouter")
const app = express();
//set view engine

const messageController = require('./controllers/controller')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

//parses form data to req.body or sum
app.use(express.urlencoded({ extended: true }));
app.use("/new", router)

//app
app.get("/", messageController.getMessages);

app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log("Listening at port 8000")
})
