const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.get('/', (req, res) => {
    res.json({
        "server": true
    })
})
app.post('/create-pdf', (req, ress) => {
    pdf.create(pdfTemplate(req.body.data), {       
        "width":"795px","height":"1122px"}).toFile('./resume.pdf', (err, res) => {
            if (err) {
                return console.log(err)
            }
            ress.json({"success":true})
        });
});
app.get('/resume', (req, res) => {
    res.download(`${__dirname}/resume.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));