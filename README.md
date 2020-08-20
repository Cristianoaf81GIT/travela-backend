# Project Travela backend. 
## Instructions:
  1. clone this repository:  ```bash$ git clone https://github.com/Cristianoaf81GIT/travela-backend.git```
  2. Install all dependencies: ```bash$ npm i -s``` 
  3. edit file env_file and change: 
    
      - APPPORT = 3000       // express server port 
      - DBPASS = admin       // mongodb user pass 
      - DBUSER = admin       // mongodb user name 
      - DBHOST = 127.0.0.1   // mongodb server ip 
      - DBPORT = 27017       // mongodb server port 
      - DBAUTHSOURCE = admin // authentication database name 
      - if your mongodb doesn't have users try this: 
        - edit file **connectionProvider.js** located at: 
          src/config/database and change: 
         ```javascript  
          const db = mongoose.connect(mongoURL <- this,...})           

            to  

          const db = mongoose.connect(AltmongoURL,...}) 
          ```               
          **AltmongoURL** is a pre-existing variable that contain alternative mongo url.

  4. after changes rename file **env_file** to **.env**
  5. install pm2 globally: ```bash$ npm i -g pm2``` or user it with npx.  
  6. start application with npm start ( to stop use: ```bash$ pm2 stop travela-backend``` ) 
  7. to monitor app use: ```bash$ pm2 monit``` or use **npx** (```bash$ npx pm2 monit```).


# Project sctructure
  ```
    
    .  
    ├── node_modules   
    ├── package.json 
    ├── package-lock.json 
    ├── README.md 
    └── src 
        ├── api 
        │   └── travel 
        │       ├── controller 
        │       │   └── travelController.js 
        │       ├── exception
        │       │   └── malformedException.js 
        │       ├── model
        │       │   └── travel.model.js 
        │       ├── schema
        │       │   └── travel.schema.js 
        │       └── service
        │           └── travel.service.js 
        ├── config 
        │   ├── database 
        │   │   └── connectionProvider.js 
        │   ├── middlewares 
        │   │   └── customMiddlewares.js 
        │   ├── portconfig.js 
        │   └── routes 
        │       ├── paths.js 
        │       └── routes.js 
        └── index.js 
  ```


# License 
   - [GPL-V3](https://choosealicense.com/licenses/gpl-3.0/)

