const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ApiController = require('./controller/ApiController');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiController = new ApiController();
app.post('/api/v1/send-email', apiController.sendEmail);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
