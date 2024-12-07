let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.remove("ri-eye-off-line")
        eyeIcon.classList.add("ri-eye-line")
    } else {
        password.type = "password";
        eyeIcon.classList.remove("ri-eye-line")
        eyeIcon.classList.add("ri-eye-off-line")
    }
}