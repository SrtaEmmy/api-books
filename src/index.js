const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");

//swagger(documentation)
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
      definition: {
      openapi: "3.0.0",
      info: {
        title: "Node MySql API",
        version: "1.0.0"
      },
      servers: [
        {
          url: "http://localhost:3000"
        }
      ]
   },
   apis:  [`${path.join(__dirname, "./routes/*.js")}`]
};

//settings
app.set("port", process.env.PORT || 3000);

//start server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());  
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));


//route
app.use("/api/books", require("./routes/books"))

app.get("/", (req, res)=>{
   res.send("Welcome to my API")
});
