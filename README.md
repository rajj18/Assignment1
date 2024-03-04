# Assignment

## Description
This project is a Node.js application for Restaurant Listing Platform.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>

## Navigate to the project Directory
2. cd Assignment1

# Install Dependencies
3. npm install

# Start the server
4. npm start

    "The server will start running on port 5000 by default. You can access the API endpoints using Postman  directly in your browser."


"SCRIPTS":
    npm run server: Start the server using nodemon.
    npm start: Alias for npm run server.



"DEPENDENCIES":
    bcrypt: ^5.1.1
    dotenv: ^16.4.5
    express: ^4.18.3
    jsonwebtoken: ^9.0.2
    mongoose: ^8.2.0
    nodemon: ^3.1.0


## Testing API's in Postman

We need to get the Token after the user login and then pass it to the bearer token in Authorization section, for testing API's.
example-: {
    "success": true,
    "message": "Login Successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTU1ZTEyZjhjNDgyZDhkMDU3NDE3ZSIsImlhdCI6MTcwOTU3MjQ4MSwiZXhwIjoxNzEwMTc3MjgxfQ.bqi6p6k1QOfuqNhSfyVSGZohXBCg9_DS1hdl9y8fVx4",
    "user": {
        "_id": "65e55e12f8c482d8d057417e",
        "userName": "Luffy",
        "email": "luffy@gmail.com",
        "address": "indore",
        "phone": "1234123412",
        "usertype": "admin",
        "createdAt": "2024-03-04T05:37:22.617Z",
        "updatedAt": "2024-03-04T05:37:22.617Z",
        "__v": 0
    }
} 

