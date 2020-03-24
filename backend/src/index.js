
const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());

// Utiliza o json no body
app.use(express.json());
app.use(routes);






app.listen(3000);


