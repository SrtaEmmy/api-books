const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    database: "books",
    user: "root",
    password: "",
});

connection.connect((error)=>{
    if (!error) {
        console.log("DB is connected");
    }else{
        throw error;
    }
});


module.exports = connection;



