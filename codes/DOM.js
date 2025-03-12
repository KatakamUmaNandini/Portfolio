var x = document.getElementById("mydiv");
console.log(x);
console.log(document.getElementsByClassName("mydiv")[0]);

function update(){
    // var y = document.getElementsByClassName("myimg")[0];
    // y.src = "../Images/owlimage.jpg";
    var y = document.getElementsByClassName("img1")[0];
    y.setAttribute("src","../Images/owlimage.jpg");
}