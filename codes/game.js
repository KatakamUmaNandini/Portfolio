let n = window.prompt("Enter any number");
let x = 0; 
let y = 0;
var rbutton = document.createElement("button");
rbutton.innerHTML = "Right";
var dbutton = document.createElement("button");
dbutton.innerHTML = "Down";
var lbutton = document.createElement("button");
lbutton.innerHTML = "Left";
var ubutton = document.createElement("button");
ubutton.innerHTML = "Up";
function displaytable(){
    var table = document.createElement("table");
    table.style.border = "1px solid black";
    for(var i = 0;i < n; i++){
        var row = document.createElement("tr");
        row.style.border = "1px solid black";
        for(var j = 0; j < n; j++){
            var td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.width = "50px";
            td.style.height = "50px";
            row.appendChild(td);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}
displaytable();
document.body.appendChild(rbutton);
document.body.appendChild(dbutton);
document.body.appendChild(lbutton);
document.body.appendChild(ubutton);
rbutton.addEventListener("click",function()
    {
        right();
    }
);
dbutton.addEventListener("click",function()
    {
        down();
    }
);
lbutton.addEventListener("click",function()
    {
        left();
    }
);
ubutton.addEventListener("click",function()
    {
        up();
    }
);
var trows = document.getElementsByTagName("tr");
trows[0].cells[0].style.backgroundColor = "blue";
function right(){
    if(y === n-1){
        alert("Index Exceeded");
        return;
    }
    trows[x].cells[y].style.backgroundColor='white';
    y += 1;
    trows[x].cells[y].style.backgroundColor = "blue";
    
}
function down(){
    if(x === n-1){
        alert("Index Exceeded");
        return;
    }
    trows[x].cells[y].style.backgroundColor = "white";
    x += 1;
    trows[x].cells[y].style.backgroundColor = "blue";
}
function left(){
    if(y === 0){
        alert("Index Exceeded");
        return;
    }
    trows[x].cells[y].style.backgroundColor = "white";
    y -= 1;
    trows[x].cells[y].style.backgroundColor = "blue";
    
}
function up(){
    if(x === 0){
        alert("Index Exceeded");
        return;
    }
    trows[x].cells[y].style.backgroundColor = "white";
    x -= 1;
    trows[x].cells[y].style.backgroundColor = "blue";
    
}
