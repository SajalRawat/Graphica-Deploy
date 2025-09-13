const hospitalBtn = document.getElementById("hospitalBtn");
const patientBtn = document.getElementById("patientBtn");
const signin = document.querySelector(".login");
let role = "Hospital"

toggleActive(hospitalBtn, patientBtn);

hospitalBtn.addEventListener("click", () => {
role = "Hospital"
  toggleActive(hospitalBtn, patientBtn);
});

patientBtn.addEventListener("click", () => {
  role = "P"
  toggleActive(patientBtn, hospitalBtn);
});

function toggleActive(activeBtn, inactiveBtn) {
  activeBtn.style.backgroundColor = "black";
  activeBtn.style.color = "white";
  inactiveBtn.style.backgroundColor = "white";
  inactiveBtn.style.color = "black";
}

signin.addEventListener('click',()=>{
if (role=="Hospital") {
            window.location.href = "owndashboard.html";
        }
        else {
            window.location.href = "pdashboard.html";
        }
})

