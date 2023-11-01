# Backend 
This is the backend of our application. We are building it with javascript, nodeJS and mongoDB. 

# Software 
- npm 
- mongoDB 
- mongoose 


# Endpoints
- api/blogs `GET`
- api/blogs `POST`
- api/blogs `UPDATE`
- api/blogs `DELETE`

# How to get started 
To start the server we begin by running `npm install`. This command installs all the dependencies need to start. Then we need a defined `DATABASE_URL` which is usually stored at `.env` file which is injected into `app.js` during start. 
When `npm install` is finished we can run `npm start` which runs a script with `nodemon`. Nodemon is a piece of software that refreshes the server after an update has been made to our backend code. 