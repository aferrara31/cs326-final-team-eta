Project API Planning:

Login/Register API's:

  >get: "/", "/api/logout"
  
  >get/post: "/api/login", "/api/users", "/api/users/new"
  
Learning Page API's:

   >get: "/user/id/learning/delete"
    
   >get/Post: "/user/id/learning/view", "/user/id/learning/new"
   
Home Page API's:
   >get : "/"
   
   
Link to Heroku hosted application:
https://terraview.herokuapp.com/


Division of Labor:

Aidan Ferrara: I created the Login/Register, Learning Page, and Homepage API's for Part 0. I also contributed by setting up the server on Heroku and deploying our web application. In our index.js file which uses the API's, I used Express.js to code the following get and post API's. 
  >.get("/", (req, res) => res.render("pages/HomePage"))
  
  >.get("/login", (req, res) => res.render("pages/LoginPage"))
  
  >.post("login", (req, res) => res.send(getFakerData()))
  
  >.get("/register", (req, res) => res.render("pages/RegistrationPage"))
  
  >.get("/learning", (req, res) => res.render("pages/LearningPage"))
 
 I tried to send fake data but could not get it to work.

 Raunak Bandyopadhyay:

 Updated UI for user for a forum post. Data collected in a form, stored in a database. Added server methods to handle requests
  
