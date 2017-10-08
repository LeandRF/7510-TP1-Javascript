var Fact = function(name, args) {
     this.name = name;
     this.args = [args];
};
 

var facts = [];
var rules =[];
	
this.checkQuery = function (params) {
	 
        return true;
    }

this.parseDB =  function(db){
	//CheckDB else => false

	db.map(function(line){(CheckRule(line) ? AddRule(line): AddFact(line))});	
};

function CheckRule(line){	
    line.includes(":-");
};

function AddRule(line)
{
	//TODO
};

function ParseFact(line){
	var ini = line.indexOf("(");  		
	var last = line.indexOf(")");   	
	return [line.substring(0,ini), line.substring(ini+1,last)];
}
function AddFact(line){
	var fact = ParseFact(line);		
	for (i = 0; i < facts.length; i++) { 			
    		if(facts[i].name == fact[0]) { facts[i].args.push(fact[1])					
					return;
				}
		}
	facts.push(new Fact(fact[0],fact[1]));
};



module.exports = Interpreter;
