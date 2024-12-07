var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove("ri-moon-fill")
        icon.classList.add("ri-sun-line")
    } else{
        icon.classList.remove("ri-sun-line")
        icon.classList.add("ri-moon-fill")
    }
}