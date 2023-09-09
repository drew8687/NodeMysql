const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
    host : "localhost" ,
    user: "root" ,
    password: "",
    database:"crud"

})
app.get("/student",(req, res) => {
    const sql = "SELECT * FROM student" ;
    db.query(sql,(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
         

    })
})
app.listen(8081, () => {
    console.log("Listening...");
   
})
