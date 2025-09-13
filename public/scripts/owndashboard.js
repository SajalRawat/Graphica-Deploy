let dones = Array.from(document.querySelectorAll(".done"))
console.log(dones)

dones.forEach((element)=>{
    
element.addEventListener('click',(e)=>{
    e.target.innerHTML="CheckUp Completed"
    e.target.style = "background-color:green;"
    let b = e.target.parentElement.parentElement
    console.log(e.target);
    b.style = '  background-color: rgba(192, 235, 192, 0.295);backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); '
    console.log(b)
})
})


let totalPatients = document.body.querySelector(".totalPatients")
totalPatients.innerHTML = (`Total Patients :${dones.length}`)




