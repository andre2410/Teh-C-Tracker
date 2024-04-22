const express = require('express');
const {mongodbConnection} = require('./database');
require('dotenv').config();

const app = express();
const port = 3000;

mongodbConnection().then(() => {
    app.listen(port, () =>{
        console.log(`Server listening on port ${port}`);
    });
})
.catch((error) => {
    console.log("Connection failed: ", error);
});

//Endpoint
app.get('/api/data', async (req, res) => {
    try {
        const { collection } = await mongodbConnection();
        const data = await collection.find().toArray();
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({error: 'Cannot fetch data'});
    }
});

module.exports = app;