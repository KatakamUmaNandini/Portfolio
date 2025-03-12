// {
//     let x = parseInt(windows.prompt("Enter first number "));
//     let y = parseInt(windows.prompt("Enter second number "));
//     if(x>y){
//         console.log(x);
//     }
//     else{
//         console.log(y);
//     }
// }
// var a = [10,22,11,2,43,5454,54,3634,542,2,245,4,54,52,435];
// a.map(ele => {
//     console.log(ele);
// })
// for(var i = 0; i<a.length; i++){
//     console.log(a[i]);
// }
// {
//     var a = 87;
//     var c = 0;
//     for(var i=2;i<a;i++){
//         if(a%i==0){
//             c += 1;
//         }
//     }
//     if(c != 0){
//         console.log("Non-prime");
//     }
//     else{
//         console.log("Prime");
//     }
// }



// DATE METHODS

// var x = new Date();
// document.write(x.getDate());
// document.write("hello\nworldk");
// document.write(x.getMonth())
// document.write(x.getFullYear());
// document.write(x.getHours());
// document.write(x.getMinutes());
// document.write(x.getSeconds());
// document.write(x.getMilliseconds());
// document.write("Hello"+"<br>"+"World");

// FUNCTIONS

// function sum(a,b){
//     return a+b;
// }
// var c = sum(3,4);
// document.write(c);


// var x = {
//     "age" : 18,
//     "rollnumber" : "22MH!A05I5",
//     Details: function(){
//         document.write("Hello");
//     }
// }
// x.Details();   
// document.write(x.age);

// ERROR HANDLING

// try{
//     {
//         let x = 10;
//     }
//     console.log(x);
//     throw false;
// }
// catch(e){
//     console.log(e);
// }
// finally{
//     console.log("It's an error!");
// }


// var x = {
//     "name": "Uma"
// }
// export default x;
{
    var a = parseInt(window.prompt("Enter 'a' value: "));
    var b = parseInt(window.prompt("Enter 'b' value: "));
    var c = parseInt(window.prompt("Enter 'c' value: "));
    var s = (a+b+c)/2;
    var ans = s*(s-a)*(s-b)*(s-c);
    var rans = Math.sqrt(ans);
    document.write(ans);
}