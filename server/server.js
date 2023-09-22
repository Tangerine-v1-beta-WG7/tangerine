const express = require('express');
const path = require('path');
const fs =require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('the server works!!');
})


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
