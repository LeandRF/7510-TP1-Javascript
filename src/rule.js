var Rules = function (facts) {

    this.facts = facts;
    //this.Rules.prototype = Array.prototype;

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


    this.checkQuery = function (query) {
        var qName = getqName(query);
        var qParams = getqParams(query);

        var rule = this.rules.get(qName);

        var ruleParams = getqParams(rule);

	var ruleFacts = rule.split(" :- ")[1];



        var replacedFacts = replaceMap(ruleFacts, 

        replacedFacts = replacedFacts.split("), ");
        return withQ(replacedFacts)
    };



    var replaceMap = function (ruleFacts, params) {
        var replacedFacts = ruleFacts;
        params.forEach(
            function (value, key) {
                replacedFacts = replaceAll(replacedFacts, key, value)
            }
        );
        return replacedFacts
    };
 

    var withQ = function (queries) {
        var result = queries.filter(
            function (query) {
                return !facts.checkQuery(query)
            }
        );
        return result.length === 0
     }
};
 
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
 }
 
var getqParams = function (query) {
    var ini = query.indexOf("(");
    var fin = query.indexOf(")");
    return query.substring(ini + 1, fin)
};

var getqName = function (query) {
    return query.split("(", 1).toString()
};

        var map = new Map();
        for (var i = 0; i < keys.length; i++) {
            map.set(keys[i], values[i])
        }
        return map
    };

module.exports = Rules;
