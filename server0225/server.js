// server instantiate
const express = require('express');
const app = express();

// activate the server on 3000 port
app.listen(3000, () => {
    console.log('✅ Server is running on port 3000');
});
// Routes
app.get('/', (req, res) => {
    res.send('HAYAT JAHNGIR KHAN');
});

app.get('/about', (req, res) => {
    res.send('mohd sulaiman')
});

app.get('/contact', (req, res) => {
    res.send('mohd sulaiman 0300-1234567')
});

app.post('/api/cars', (req, res) => {
    const car = req.body;
    console.log(car);
    res.send(`Car added: ${car.model}`);
})

