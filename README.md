1. In this application was used this technologies:

- react
- react-router-dom
- material-ui
- emotion

2. To start apllication you need clone this repisotory, install node_modules
   with comand npm install and after that you can start application with comand
   npm start. Node version must be upper then 14.17.
3. Some comments about functionality, in this application we have simple routing
   and API requests to get users tweets data. Also was created simple filter, in
   this filter you have 3 variants of filtering (all users, users wich we
   followed, users we can following). For example, if we followed for 3 users,
   and choose filter 'Followings', and unfollow from some user, this user will
   stay in ui while we don't change filter value (was implemented with this
   logic because user can change his mind and follow user again, also I didn't
   see directly requirements for filter functionality).
