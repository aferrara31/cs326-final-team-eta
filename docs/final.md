Title: TerraView

Subtitle: https://terraviews.herokuapp.com

Semester: Fall 2022

Overview: interactive web application that provides students with a fun and social way to hone their science skills. The target audience would be students in middle and high school.


Team Members: 

Aidan Ferrara : aferrara31

Kevin Smith : kevinmsmith131

Raunak Bandyopadhyay : raurosaur



User Interface: 

Aidan Ferrara Pages:

Login/Registration,

![alt text](https://github.com/aferrara31/cs326-final-team-eta/blob/main/docs/img/loginUI.PNG?raw=true)

![alt text](https://github.com/aferrara31/cs326-final-team-eta/blob/main/docs/img/RegUI.PNG?raw=true)

Profile,

![alt text](https://github.com/aferrara31/cs326-final-team-eta/blob/main/docs/img/profileUI.PNG?raw=true)

Home,
Learning


APIs: 

Aidan Ferrara's API's:

Routes in index.js:
>> '/db', shows the names and emails in the db, usually wouldnt include this in an application however, it allows the grader the opportunity to see our data
>> '/profile/:email', renders specific profile for logged in user

Routes in /routes/web.js:
>> '/', goes directly to login page
>> '/login', same as above
>> '/register', renders registration html and registers a user with db
>> '/profile', renders general profile


Database: 

We went with a postgresql database due to the ease of use with heroku. Our plan is a mini-plan database with credenials stored in secrets.json. 
Aidan created a table which stores user information and is used for login/registration as well as profile aspects. An example of a user and a picture of the database columns and attributes can be seen in the pictues below:

![alt text](https://github.com/aferrara31/cs326-final-team-eta/blob/main/docs/img/terradb.PNG?raw=true)



URL Routes/Mappings: 

/routes/web.js, web apis

/controllers/users.js, javascript and database queries for login/registration


Authentication/Authorization:

Aidan set up the user authentication for this project. We went with the bcrypt library over the minicrypt library as it was in our minds easier to debug as there may be more documentation on it.
When a user enters a plain-text password in the registration form the password is saved in our databased as an encrypted password. To achieve this we used a hash algorithm with a salt and the plain-text password.
When a user enters the password in the login form the password is hashed and compared with the stored encrypted password, if the match it redirects you '/home'.

We thought about adding tokens for authentication, however, that was beyond the scope of the course. 


Division of Labor:

Aidan Ferrara:

Milestone 1: Wireframes for the Login/Registration Page and the Learning Page. HTML and CSS for the Login/Registration Page and Learning Page. We all contributed to the home page, and I handled the categories section.

Milestone 2: I created the Login/Register, Learning Page, and Homepage API's for Part 0. I also contributed by setting up the server on Heroku and deploying our web application. In our index.js file which uses the API's, I used Express.js to code the following get and post API's. 
  >.get("/", (req, res) => res.render("pages/HomePage"))
  
  >.get("/login", (req, res) => res.render("pages/LoginPage"))
  
  >.post("login", (req, res) => res.send(getFakerData()))
  
  >.get("/register", (req, res) => res.render("pages/RegistrationPage"))
  
  >.get("/learning", (req, res) => res.render("pages/LearningPage"))
 
 I tried to send fake data but could not get it to work.
 
Milestone 3: Created, provisioned, and set up the PostgreSQL database. Implemented the functionality for the /register and /login api to send and retrieve data from the database. Created the userInfo table in the Database which houses important users information such as name, email, password, and identification number. This information can be used for login and registration as well as their contribution to the website. My tasks were to deal with connecting the registration and login as well as setting up the database. I contributed work to this milestone everyday since the end of milestone 2.

Final Milestone: Set up user authentication, attached to the database, added functionality and html for a profile page. 


Conclusion: A conclusion describing your team’s experience in working on this project. This should include what you learned through the design and implementation process, the difficulties you encountered, what your team would have liked to know before starting the project that would have helped you later, and any other technical hurdles that your team encountered.
