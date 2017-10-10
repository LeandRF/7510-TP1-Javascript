var Rules = function (facts) {

    this.facts = facts;

    this.getRules = function (db) {
        var actualRules = db.filter(isRule);
      

	  var rulesNames = actualRules.map(getRuleName);
      
    };


    var isRule = function (rule) {
		return rule.includes(":-")
    };

    var getRuleName = function (rule) {
        return rule.split("(", 1).toString()
    };

    this.haveRule = function (ruleName) {
        return this.rules.has(ruleName)
    };
}