let menu = document.createElement("I");
menu.setAttribute("class", "fas fa-bars");
let on = false;
function refresh(){
    if(window.innerWidth < 570){
            document.querySelector("header").appendChild(menu);
            document.querySelector("nav").style.width = "400%";
            document.querySelector("nav").style.marginLeft = "-150%";
            document.querySelector("nav").style.opacity = "0";
            on = false;
            window.onclick = click;   
    }
    else{
        document.querySelector("nav").style.width = "auto";
        document.querySelector("nav").style.marginLeft = "unset";
        document.querySelector("nav").style.opacity = "1";
        window.onclick = (event)=>{
            event.stopPropagation();
        }
        if(document.querySelector("header").contains(document.querySelector(".fa-bars"))){
            document.querySelector(".fa-bars").remove();
            
        }
}
}
window.onresize = ()=>{
    document.querySelector(".width").innerHTML = window.innerWidth;
    refresh();
}
if(performance.getEntriesByType("navigation")){
    refresh();
}
function click(event){
    console.log(event.target.tagName)
        if(event.target.className === "fas fa-bars" && on === false){
            on = true;
            document.querySelector("nav").style.width = "100%";
            document.querySelector("nav").style.marginLeft = "0%";
            document.querySelector("nav").style.opacity = "1";  
    
        }else if(event.target.tagName != "UL" && event.target.tagName != "A"){
            document.querySelector("nav").style.width = "400%";
            document.querySelector("nav").style.marginLeft = "-150%";
            document.querySelector("nav").style.opacity = "0";
            on = false;
        }
}  
