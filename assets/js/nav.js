document.onscroll = function(){
    
    if(document.getElementById("nav").getBoundingClientRect().bottom <= 100){
        document.getElementById("nav").classList.add("scroll");
    } else {
        document.getElementById("nav").classList.remove("scroll");
    };
}
document.getElementById("toggle-nav").onclick = function(e){
    e.preventDefault();
    document.getElementById("nav").classList.toggle("open")
}
document.getElementById("hamburger").onclick = function(e){
    e.preventDefault();
    document.getElementById("nav").classList.toggle("open")
}