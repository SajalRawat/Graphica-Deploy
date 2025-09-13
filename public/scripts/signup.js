const hospitalBtn = document.getElementById("hospitalBtn");
const patientBtn = document.getElementById("patientBtn");

const hospitalFields = document.querySelectorAll(".hospitalField");
const patientFields = document.querySelectorAll(".patientField");

showHospital();
toggleActive(hospitalBtn, patientBtn);

hospitalBtn.addEventListener("click", () => {
  showHospital();
  toggleActive(hospitalBtn, patientBtn);
});

patientBtn.addEventListener("click", () => {
  showPatient();
  toggleActive(patientBtn, hospitalBtn);
});

function showHospital() {
  hospitalFields.forEach(f => f.style.display = "flex");
  patientFields.forEach(f => f.style.display = "none");
}

function showPatient() {
  patientFields.forEach(f => f.style.display = "flex");
  hospitalFields.forEach(f => f.style.display = "none");
}

function toggleActive(activeBtn, inactiveBtn) {
  activeBtn.style.backgroundColor = "black";
  activeBtn.style.color = "white";
  inactiveBtn.style.backgroundColor = "white";
  inactiveBtn.style.color = "black";
}
