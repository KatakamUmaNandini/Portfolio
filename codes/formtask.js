var object = {
    FirstName : "",
    // SecondName: ""

}
function changefun(event){
    object.FirstName = event.target.value;
}
function dataprint(event){
    console.log(object);
}