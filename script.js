

let bar = document.getElementById("bar");
let cont = document.getElementById("cont");
let a =document.getElementsByTagName("a");
bar.addEventListener("click", () => {
    if (cont.style.display === "block") {
        cont.style.display = "none";
        bar.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        cont.style.display = "block";
        bar.innerHTML = `<i class="fa-solid fa-x"></i>`;
    }
});







let light=document.getElementById("light");
let body=document.getElementsByTagName("body")[0];
let aa=document.querySelectorAll("a");
console.log(aa);
console.log(body);
light.addEventListener("click",()=>{
    if(body.style.color == "black"){
        aa.forEach(element => {
            element.style.color="White";
        });
        body.style.color="white";
        body.style.backgroundColor="#31363F";
        
    }else{
        aa.forEach(element => {
            element.style.color="black";
        });
        body.style.color="black";
        body.style.backgroundColor="white";
        
    }
})












let submit=document.getElementById("submit");
let input=document.getElementById("input");
let email=document.getElementById("email");
let msg=document.getElementById("msg");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    input.value="";
    email.value="";
    msg.value="";
})