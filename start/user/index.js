// module.exports = exports = this
var db = require('./db');
var log = require('logger')(module);

// db.connect();

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") + ", " + who.name);
};

console.log("user.js is requiered!");
// exports
exports.User = User;

// console.log(module);

module.exports = User;


