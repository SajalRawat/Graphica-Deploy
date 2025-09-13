const hospitalBtn = document.getElementById("hospitalBtn");
const patientBtn = document.getElementById("patientBtn");
const signin = document.querySelector(".login");
let role = "Hospital"

const hospitalFields = document.querySelectorAll(".hospitalField");
const patientFields = document.querySelectorAll(".patientField");

function showHospital() {
  hospitalFields.forEach(f => f.style.display = "flex");
  patientFields.forEach(f => f.style.display = "none");
}

function showPatient() {
  patientFields.forEach(f => f.style.display = "flex");
  hospitalFields.forEach(f => f.style.display = "none");
}


toggleActive(hospitalBtn, patientBtn);

hospitalBtn.addEventListener("click", () => {
    showHospital();
role = "Hospital"
  toggleActive(hospitalBtn, patientBtn);
});

patientBtn.addEventListener("click", () => {
    showPatient();
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

