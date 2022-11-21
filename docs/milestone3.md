Database Documentation:
  
  We are using PostgresSQL with Heroku, 11/16 -> Aidan set up a database on Heroku and edited the server with a /db API to view the tables
  Also set up a free MongoDB Database if we decide Postgres is not the way to go(NoSQL vs. SQL)
  
  Eventually went with the PostgreSQL database. Using the mini tier in Heroku as the Hobb-Dev tier goes out Nov. 28th.
  
  The database is currently provisioned with one table, containing user information retrieved during registration. Below is an image of two example users in the database. They are identified by their name, email, and password, as well as an auto-incremental identification number. 
  
  ![alt text](https://github.com/aferrara31/cs326-final-team-eta/blob/main/docs/img/db1.PNG?raw=true)
  
  
  ![alt text](https://github.com/aferrara31/cs326-final-team-eta/blob/main/docs/img/db2.PNG?raw=true)
  
  
  
  
  
  
  Division of Labor: 
  
  Aidan Ferrara: Created, provisioned, and set up the PostgreSQL database. Implemented the functionality for the /register and /login api to send and retrieve data from the database. Created the userInfo table in the Database which houses important users information such as name, email, password, and identification number. This information can be used for login and registration as well as their contribution to the website. My tasks were to deal with connecting the registration and login as well as setting up the database. I contributed work to this milestone everyday since the end of milestone 2.

Raunak Bandyopadhyay: Set up the server and integrate the multi-pages into the website. Added methods to add a forum post. Managed the database for the learning page.