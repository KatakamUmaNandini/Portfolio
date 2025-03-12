let c = 0;
var array = [
    {
        "Name" : "Rama",
        "Rollno" : "22MH1A05I5",
        "Marks"  : 90
    },
    {
        "Name" : "Rama",
        "Rollno" : "22MH1A05I5",
        "Marks"  : 90
    },
    // {
    //     "Name" : "Rama",
    //     "Rollno" : "22MH1A05I5",
    //     "Marks"  : 90
    // },
    {
        "Name" : "Rama",
        "Rollno" : "22MH1A05I5",
        "Marks"  : 90
    },
    {
        "Name" : "Rama",
        "Rollno" : "22MH1A05I5",
        "Marks"  : 90
    }

];
let index = 1;
let uindex = 1;
function displaytable(){
    var division = document.createElement("div");
    division.innerHTML = '';
    var table = document.createElement("table");
    
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    // var trow = document.createElement("tr");
    // var trow2 = document.createElement("tr");
    //const trow3 = document.createElement("tr");
    // var td1 = document.createElement("td");
    // var td2 = document.createElement("td");
    var th = document.createElement("th");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    th.style.border = "1px solid black";
    th1.style.border = "1px solid black";
    th2.style.border = "1px solid black";
    th3.style.border = "1px solid black";
    th4.style.border = "1px solid black";
    th.textContent = "Name";
    th1.textContent = "Rollno";
    th2.textContent = "Marks";
    th3.textContent = "DeleteOption";
    th4.textContent = "UpdateOption";
    thead.appendChild(th);
    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    thead.appendChild(th4);
    // td1.textContent = "Uma";
    // td2.textContent = "Nandini";
    
    for(var i = 0; i < array.length; i++){
        
        var row = document.createElement("tr");
        row.setAttribute("id",index);
        var rowdata = array[i];
        for(var j = 0; j<5; j++){
            var td = document.createElement("td");
            if(j == 0){
                td.textContent = rowdata["Name"];
            }
            if(j == 1){
                td.textContent = rowdata["Rollno"];
            }
            if(j === 2){
                 td.textContent = rowdata["Marks"];
             }
            if(j === 3){
                var dbutton = document.createElement("button");
                dbutton.innerHTML = "Delete";
                td.appendChild(dbutton);
                dbutton.setAttribute("onclick",`Delete(${index})`);
                index += 1;
            }
            if(j === 4){
                var ubutton = document.createElement("button");
                ubutton.innerHTML = "Update";
                ubutton.setAttribute("onclick",`Update(${uindex})`);
                td.appendChild(ubutton);
                uindex += 1;
            }
            td.style.border = "1px solid black";
            row.appendChild(td);
        }
        row.style.border = "1px solid black";
        tbody.appendChild(row);
    }
    
    
    //tbody.appendChild(trow3);
    //var hbody = document.getElementsByTagName("body")[0];
    // var table = document.getElementsByClassName("table")[0];
    table.style.border = "1px solid black";
    // document.body.appendChild(thead);
    // document.body.appendChild(tbody);
    table.appendChild(thead);
    table.appendChild(tbody);
    division.appendChild(table);
    document.body.appendChild(division);
    
    
}
function display(){
    document.getElementsByTagName('div')[0].innerHTML = '';

    // Display "Hello"
    document.getElementsByTagName('div')[0].textContent = "Hello";
}
const buttonclick = document.getElementsByTagName("button")[0];
    // if(c == 0){
    //     buttonclick.onclick = function(){
    //         displaytable();
    //         c = 1;
    //     };
        
    // }
    // else{
        
    //     buttonclick.onclick = function(){
    //         display();
    //         c = 0;
    //     };
    // }
function pushobject(){ 
    // var x = {
    //     "Name" : window.prompt("Enter your name"),
    //     "Rollno" : window.prompt("Enter your rollno"),
    //     "marks" : window.prompt("Enter your marks")
    // };
    // array.push(x);
    
    var name = window.prompt("Enter name");
    var rollno = window.prompt("Enter rollno");
    var marks = window.prompt("Enter marks");
    var trow = document.createElement("tr");
    trow.setAttribute("id",index);
    
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var dbutton = document.createElement("button");
    var ubutton = document.createElement("button");
    td1.textContent = name;
    td2.textContent = rollno;
    td3.textContent = marks;
    dbutton.innerHTML = "Delete";
    ubutton.innerHTML = "Update";
    dbutton.setAttribute("onclick",`Delete(${index})`);
    index += 1;
    ubutton.setAttribute("onclick",`Update(${uindex})`);
    uindex += 1;
    td4.appendChild(dbutton);
    td5.appendChild(ubutton);
    
    td1.style.border = "1px solid black";
    td2.style.border = "1px solid black";
    td3.style.border = "1px solid black";
    td4.style.border = "1px solid black";
    td5.style.border = "1px solid black";
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    var tbody = document.getElementsByTagName("tbody")[0];
    tbody.appendChild(trow);
    // var index1 = 5;
    // dbutton.setAttribute("onclick",`Deletenew(${index1})`);
    // index1 += 1;
}

buttonclick.addEventListener("click", function() {
    if(c === 0){
        displaytable();
        c += 1;
    }
    else{
        pushobject();
        
    }
});
function Delete(id){
    // console.log(id);
    var tbody = document.getElementsByTagName("tbody")[0];
    console.log(tbody);
    var trow = document.getElementById(id);
    console.log(trow);
    tbody.removeChild(trow);
}
// function Deletenew(index){
//     var tbody = document.getElementsByTagName("tbody")[0];
//     console.log(tbody);
//     var trow = document.getElementById(id);
//     console.log(trow);
//     tbody.removeChild(trow);
//     index -= 1
// }
function Update(index){
    // var tbody = document.getElementsByTagName("tbody")[0];
    // var trow = document.getElementById(index);
    // array[index].Name = window.prompt("Enter modified Name");
    // array[index].Rollno = window.prompt("Enter rollno to modify");
    // array[index].Marks = window.prompt("Enter Marks");
    // displaytable();
    var tbody = document.getElementsByTagName("tbody")[0];
    var trow = document.getElementById(index);
    trow.cells[0].textContent = window.prompt("Enter modified Name");
    trow.cells[1].textContent = window.prompt("Enter rollno to modify");
    trow.cells[2].textContent = window.prompt("Enter Marks to modify");
}
 