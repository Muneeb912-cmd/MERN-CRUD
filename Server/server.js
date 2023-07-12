const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require('body-parser');
const cors = require('cors')
const { body, validationResult } = require('express-validator');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    res.send('Successful!')
})

// app.get('/Myform',(req,res) => {
//     res.send('/Client/src/MyForm.js')
// })

app.post('/get_data_from_client', body('email').isEmail().normalizeEmail(),
    (req, res) => {
        console.log(req.body.firstname)
        console.log(req.body.lastname)
        console.log(req.body.birthday)
        console.log(req.body.email)
        console.log(req.body.phonenumber)
        console.log(req.body.password)
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(req.body.email)
        }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})