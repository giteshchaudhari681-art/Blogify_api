require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


const {requestLogger,errorHandler} = require('./middleware');
const mainRouter = require('./routes');


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);
app.use(cors());


app.get('/', (req, res) => {
   res.send('Welcome to Blogify Api');
});

app.get('/about', (req, res) => {
    res.send("About Page!");
});

app.use('/api/v1', mainRouter);

app.get('/error-test', async (req, res, next) => {
    next(new Error("This is a thrown error"));
})


app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
