console.log('js sourced');
var fabForm = angular.module('fabForm',[]);
fabForm.controller('FormController', function(){

var form = this;
// array for all the messages
form.allMessages = [];
// single message with as object {name: name, message:message} to be added to array
form.object = {};

form.addInfo = function(name, message){
form.object.name = name;
form.object.message = message;
console.log("name of object", name);
console.log("message of object", message);
// angular.copy is a function that takes in the object data that allows it
// not to be overwritten
var content = angular.copy(form.object);
form.allMessages.push(content);
console.log(form.allMessages);
};

form.delete = function(index){
  form.allMessages.splice(index,1);
};

});
