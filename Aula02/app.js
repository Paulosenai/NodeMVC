const express = require("express");
const client = require("./config/db");
const routers = require("./view/routers");

const app = express();
app.use(express.json());
app.use(routers);

client.query("select 1")
.then(() => {
    console.log("sucess");
    app.listen(8082, function(){
        console.log("server is running on http://localhost:8082");
    });
})
.catch( erro => console.log("Db connection failed \n"+erro))