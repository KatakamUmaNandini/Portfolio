var caretaker = new Promise(function(Success,Error){
    Success("I am Succeeded");
    Error("This is an error");
})
// console.log(caretaker);
caretaker.then(function(value){
    console.log(value);
},function(error){
    console.log(error);
})