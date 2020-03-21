# burger
Eat Da Burger! App

Purpose:
To allow one to virtually order a burger, consume the burger, and reorder a consumed burger

Functionality:
Allows a user to input a burger name, which adds it to an 'ordered burger' column
From there the burger can be devoured, which puts it in the 'order again' column
The user can choose to 'order again' which puts it back in the 'ordered burger' column

Content Structure
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars


Heroku Link:
https://desolate-sea-53948.herokuapp.com/