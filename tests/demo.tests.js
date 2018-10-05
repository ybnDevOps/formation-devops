var should = require("should");
var User = function(name, nickname){
    this.name = name;
    this.nickname = nickname;
}; 
describe("Checking if the user is created correctly", function(){
    it("should create the user with the correct name", function(){
        var tom = new User("tom", "tommy");
        tom.name.should.be.equal("tom");
        tom.nickname.should.be.equal("tommy");
    });
});
