document.addEventListener("DOMContentLoaded", () => {
  const appointmentForm = document.getElementById("appointmentForm");
  const bookingInfoDiv = document.querySelector(".bookingInfoDiv");
  const availableOPDs = document.querySelector(".totalPatients");
  let nextOPDNumber = 13;
  let currentBookings = bookingInfoDiv.querySelectorAll(".bookingInfo").length;
  availableOPDs.textContent =`Available OPDs: ${currentBookings}`;

  appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const opd = document.getElementById("opd").value;
    const dateValue  = document.getElementById("date").value;
    const [year, month, day] = dateValue.split("-");
    const formattedDate = `${day}-${month}-${year.slice(-2)}`;
    bookingInfoDiv.innerHTML += `
      <div class="bookingInfo">
        <div class="hospitalID">Hospital ID: H12345</div>
        <div class="yourOPD">Your OPD No: ${nextOPDNumber}</div>
        <div class="currentOPD">Current OPD No: ${nextOPDNumber - 1}</div>
        <div class="OPDType">OPD Type: ${opd}</div>
        <div class="date">Date: ${formattedDate}</div>
      </div>
    `;
    nextOPDNumber++;
    currentBookings++;
    availableOPDs.textContent = `Available OPDs: ${currentBookings}`;
  });

  document.querySelector(".logout").addEventListener('click', () => {
    window.location.href = "./login.html";
  });

  document.querySelector(".logo").addEventListener('click', () => {
    window.location.href = "./index.html";
  });
});