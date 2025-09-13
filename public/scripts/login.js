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
        alert("⚠️ Please enter both username and password.");
        return;
    }

    let valid = false;

    if (role === "Hospital" && username === "hospital123" && password === "hospass") {
        valid = true;
    } else if (role === "Patient" && username === "patient123" && password === "patpass") {
        valid = true;
    }

    if (valid) {
        alert(`✅ Login successful as ${role}`);
        window.location.href = "dashboard.html";
    } else {
        alert("❌ Invalid username or password for " + role);
    }
});


document.querySelector('.signin').addEventListener('click',()=>{window.location.href="./signup.html"})