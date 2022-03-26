const express = require('express')
const cors = require('cors');
const app = express();
const PORT = 8000;
const DATABASE = "authors_db"

//middleware
app.use(express.json(), cors(), express.urlencoded({ extended: true }));

// database connection
//METHOD 1
//require('./server/config/mongoose.config')
//METHOD 2
require('./server/config/mongoose.config')(DATABASE);

// connect the routes
require("./server/routes/pirates.routes")(app);



app.listen(PORT, () => { console.log(`-------! Listening on port:${PORT} !------`); }
)