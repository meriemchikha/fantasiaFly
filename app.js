//importer variable env
require("dotenv").config();

//importer express
const express = require("express");
//importer router
const router = require("./routes/router");
//recup variable d'environement
const port = process.env.APP_PORT;
//instancier express
const app = express();
app.use(express.json());

 app.use(router);

//creer notre server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});