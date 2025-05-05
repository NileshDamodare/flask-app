const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://backend:8000/api', req.body);
        res.send(`Response from backend: ${JSON.stringify(response.data)}`);
    } catch (error) {
        res.send(`Error: ${error.message}`);
    }
});

app.listen(3000, () => {
    console.log('Frontend running on port 3000');
});
