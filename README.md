## Course Management Application: Standalone React Application on Heroku

An application developed in ReactJs standAlone on Heroku


# Installaiton Help:

## You will need to install these to you system :
  - Node.js and npm  [here](https://www.npmjs.com/get-npm).(check `with node -v and npm -v`)


## How To run locally :
  - `npm install` : To install client side dependencies
  - `npm start`: To Run application (proxy has to be setup in this case)


Our file structure will look like this :

    - CourseManagement-React
      - node_modules
        - ...various modules...
      - public
        - index.html
      - src
        - components
           - .... various components and Tests.....
        - index.js  
      - .gitignore
      - Procfile
      - Static.json
      - package.json
      - app.json (not implemented)
      - ReadME
   
#### Project Structure and Heroku Insight:
1. We host the application by setting the proxies for the request in local and Heroku.
  - For local the proxy is set in package.json
  - For Heroku the proxy is set on static.json
2. It uses the [this](https://github.com/mars/create-react-app-buildpack.git) Builpack which internally hosts the application through express and using other buildpacks.
3. To use the following dependency you can either declare it at creation of heroku application or in `app.json` (check its documentation)
4. We have used [Semantic-React-UI] which provides plethora of options for components creation(https://react.semantic-ui.com/introductio)

#### Settings to change :
##### Proxy URL:
  
  - HEROKU: We have to set the Config Variables (for now `API_URL`) in  `apps/$(Application-Name)/settings` to `$(Node Server)` .
  - LOCAl: We have to change in `Package.json` at line `30`  and set `"target": YOUR_TARGET_SERVER`
  
# Future Work:
## Page Components:
   - Login
   - Signup
   - Profile
   - Course Lists
   - Course Detail
   
## Course Detail UI Components:
  - Fix Navbar with login ,logout , course-Details, Course-List and profile
  - Fix Sidebar with Sections(with delete option) and add New section field
  - Tabs with Topics inside each Section (with delete option) and add New topic field
  - Display Page with :
    -   Previously created Widget with an option of drag & drop, edit and delete
    -   Add New Widget dropdown
    -   Modal to add new Widget
   


