var Facts = function () {
    Facts.prototype = Array.prototype;



    this.getFacts = function (db) {
        this.facts = db.filter(isFact)
    };

    var isFact = function (fact) {
        return !fact.includes(":-")
    };

    this.checkQuery = function (query) {
        var result = this.facts.filter(
            function (fact) {                
                return fact.indexOf(query) !== -1
            }
        );
        return result.length !== 0
    };

};

module.exports = Facts;
