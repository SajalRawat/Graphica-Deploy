const hospitalBtn = document.querySelector(".hospital");
const patientBtn = document.querySelector(".patient");
let role = "Hospital";

hospitalBtn.addEventListener("click", () => {
    document.querySelector(".username").setAttribute("placeholder", "Enter Your Id");
    hospitalBtn.classList.add("clicked");
    patientBtn.classList.remove("clicked");
    role = "Hospital";
});

patientBtn.addEventListener("click", () => {
    document.querySelector(".username").setAttribute("placeholder", "Enter Your Email Id");
    patientBtn.classList.add("clicked");
    hospitalBtn.classList.remove("clicked");
    role = "Patient";
});

document.querySelector(".login").addEventListener("click", () => {
    const username = document.querySelector(".username").value.trim();
    const password = document.querySelector(".pass").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");}
    else{
        window.location.href = "owndashboard.html";
    }
 
}
)

document.querySelector('.signin').addEventListener('click',()=>{window.location.href="./signup.html"})