// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var items = {
    all: function(cb) {
      orm.all("item", function(res) {
        cb(res);
      });
    },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("item", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("item", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("item", condition, function(res) {
      cb(res);
    });
  },
  truckCount: function(condition, cb){
    orm.truckCount("item", condition, function(res) {
      cb(res);
    })
  }
};

var suppliers = {
  all: function(cb) {
    orm.all("supplier", function(res) {
      cb(res);
    });
  },
// The variables cols and vals are arrays.
create: function(cols, vals, cb) {
  orm.create("supplier", cols, vals, function(res) {
    cb(res);
  });
},
update: function(objColVals, condition, cb) {
  orm.update("supplier", objColVals, condition, function(res) {
    cb(res);
  });
}
};



// Export the database functions for the controller (catsController.js).
module.exports = 
{
  items,
  suppliers
}

