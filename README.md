Hello!
#OVERVIEW_OF_MERN_APP
[Imgur](https://i.imgur.com/dkbrU9T.gifv)

In this project, I will attempt to show you how to create a basic MERN (MongoDB/Express/React/Node.js) Stack application. In order to run the project download it and open with any code editor(my preference is Visual Studio)
Then run the below command in sequence.

1. npm install                 // Install dependencies for REACT
2. cd backend && npm install   // Go to backend folder and install dependencies
3. npm start                   // run REACT 
3. cd backend && npm start     // go to backend folder and run NODE 

 Before you test this out make sure to change the mongoURI and secret in backend/config/keys.js file.
 
 In this project,
 
 For Node i have used dependencies :
 1. bcrypy                     // for password hashing
 2. cors                       // to allow communicartion betweeen client and server
 3. jsonwebtokens              // for session management
 4. mongoose                   // to connect to MongoDB
 5. nodemon                    // helps to automatically restart node after changing some program and saving it
 6. passport and passport-jwt  // for authentication
  
In REACT, I used MaterialUI for building components, Redux for state management and Axios to fetch data from our NODE server.

