const n = document.getElementsByClassName("name")[0]
const email = document.getElementsByClassName("email")[0]
const password = document.getElementsByClassName("password")[0]
const arr = [];
function Objconstructor(username,useremail,userpasswd){
    const person = {};
    person.Name = username;
    person.Email = useremail;
    person.Password = userpasswd;
    arr.push(person);
}
function signUp(){
    Objconstructor(n.value,email.value,password.value);
    n.value=''
    email.value=''
    password.value=''
    console.log(arr);
}
var c = 0
function signin(){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].Name === n.value){
            if(arr[i].Email === email.value){
                if(arr[i].Password === password.value){
                    window.alert("login successful");
                    c += 1;
                }
            }
        }
    }
    if(c == 0){
        window.alert("Invalid Details");
    }
}

