const express = require('express');
// const session = require('express-session');
const bodyParser = require('body-parser'); // Import body-parser
const routes = require('./routes/index.route')
const { logger, morganMiddleware } = require('./services/logger.service');
require('dotenv').config({ path: '.env.local' });

const app = express();
const cors = require('cors');

app.use(cors({
    origin: "*"
}));

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

app.use(morganMiddleware);
app.use(routes);
app.use('/', (req, resp) => {
    resp.status(200).json({
        status: "success user service ",
    })
})

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    // connectDB();
    logger.info(`Trello User Service Server running on port ${PORT}`);
});