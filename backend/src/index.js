require('dotenv').config();

const express = require('express');

const { dbMiddleware } = require('./middleware/database');

const app = express();

app.use(express.json());
app.use(dbMiddleware)

const port = process.env.PORT || 5000;


app.get('/', (req,res) => {
    res.send("Welcome");
})

app.use('/login', require('./api/login'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});