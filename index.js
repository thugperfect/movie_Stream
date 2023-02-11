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
function login(){
    window.location.href = "video.html"
}