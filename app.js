const navcontainer=document.getElementById("myheader")
window.addEventListener("scroll",function(){
    if(window.scrollY>50){
        navcontainer.classList.add("sticky")
    }
    else{
        navcontainer.classList.remove("sticky")
    }
})







