const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const blogRouter = require('./routes/blogRoutes');

const mongoString = process.env.DATABASE_URL;
const PORT = 3001;

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
	console.log(error);
});
database.once('connected', () => {
	console.log('Database connected');
});

const app = express();

app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {

	console.log("Server started at: ", PORT);
})

module.exports = app;