function func(){
    var a = document.getElementById("name");
    if(confirm("I CAN'T ABLE TO THINK OF A NAME\nIF YOU HATE THIS NAME\nTHEN YOU CAN CHANGE IT BY PRESSING OK")){
        var b = prompt("NAME YOU WANNA CHANGE");
        var c=document.getElementById("name");
        c.innerHTML=b;

    }
    else{
        
    }
    
    
}

function overview(){
    
    var t = document.getElementById("baar");
    t.innerHTML = "";
    
    
}
function login(){
window.location.href = "login.html"
}
function reload(){
    window.location.reload(true);
}



let sel =document.getElementsByClassName("sel")

console.log(sel.length)

function darkmode(flag){
    let darkel=document.getElementById("dark");

    let sel =document.getElementsByClassName("sel")
  let name=document.getElementById("name");
    if(flag==0){
        document.body.style.backgroundImage="linear-gradient(to bottom right,#181818,#555)"
        darkel.setAttribute("onclick","darkmode(1)");
       for(i=0;i<sel.length;i++){
           sel[i].style.backgroundColor="rgba(155, 155, 155, 0.26)";

    }
    name.style.color="#555";



    }
    else if(flag==1){
        document.body.style.backgroundImage=""
        darkel.setAttribute("onclick","darkmode(0)");
        for(i=0;i<sel.length;i++){
            sel[i].style.backgroundColor="";
     }
     name.style.color="";
 

        
    }
   
}

function home(){
    window.location="index.html"
}
