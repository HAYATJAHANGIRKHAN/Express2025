// Express Import
const express = require('express');
const app = express();
//used to parse req.body in express -> PUT OR  POST
const bodyParser = require('body-parser');

// Middleware (For JSON Parsing)
// app.use(express.json()); 
// specifically parse JSON data & add it to the request.body object
application.use(bodyParser.json());


// Server Start on this port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Routes
app.get('/', (req, res) => {
    res.send('HAYAT JAHNGIR KHAN');
});

app.get('/about', (req, res) => {
    res.send('mohd sulaiman');
});

app.get('/contact', (req, res) => {
    res.send('mohd sulaiman 0300-1234567');
});


app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;  
    console.log(name);
    console.log(brand);
    res.send("Car submitted successfully");
});


    // {
    // console.log("Received Data:", req.body);  // Debugging ke liye print karo

    // Check if req.body is empty
//     if (!req.body || Object.keys(req.body).length === 0) {
//         return res.status(400).json({ error: "Request body is empty or invalid" });
//     }

//     // Destructure safely
//     const { name, brand } = req.body;
//     if (!name || !brand) {
//         return res.status(400).json({ error: "Missing name or brand" });
//     }

//     res.json({ message: `Car added: ${name} of brand ${brand}` });
// });


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
})