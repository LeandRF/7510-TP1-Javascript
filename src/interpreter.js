var Facts = require('./fact');
var Rules = require('./rule');

var Interpreter = function () {
 
    this.facts = new Facts();    

    this.rules = new Rules(this.facts);
 
    this.parseDB = function (db) {
	
        this.facts.getFacts(db);
        this.rules.getRules(db)
    };

    this.checkQuery = function (query) {
        if (this.rules.haveRule(getQueryName(query)))
            return this.rules.checkQuery(query);
        else
            return this.facts.checkQuery(query);
    };
};

var getQueryName = function (query) {
    return query.split("(", 1).toString()
};

 module.exports = Interpreter;
