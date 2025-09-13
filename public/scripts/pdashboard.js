document.addEventListener("DOMContentLoaded", () => {
  const appointmentForm = document.getElementById("appointmentForm");
  const bookingInfoDiv = document.querySelector(".bookingInfoDiv");
  let nextOPDNumber = 13;

  appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const opd = document.getElementById("opd").value;
    const dateValue  = document.getElementById("date").value;
    const book = document.querySelector(".bookingInfoDiv");
    const [year, month, day] = dateValue.split("-");
    const formattedDate = `${day}-${month}-${year.slice(-2)}`;
    book.innerHTML = book.innerHTML+`
      <div class="bookingInfo">
      <div class="hospitalID">Hospital ID: H12345</div>
      <div class="yourOPD">Your OPD No: ${nextOPDNumber}</div>
      <div class="currentOPD">Current OPD No: ${nextOPDNumber - 1}</div>
      <div class="OPDType">OPD Type: ${opd}</div>
      <div class="date">Date: ${formattedDate}</div>
      </div>
    `;
  });
});


let logout = document.body.querySelector(".logout")
logout.addEventListener('click',()=>{
window.location.href = ("./login.html")
})

let home = document.body.querySelector(".logo")
home.addEventListener('click',()=>{
window.location.href = ("./index.html")
})