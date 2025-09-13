
function viewPatientsNo(){
let totalPatients = document.body.querySelector(".totalPatients")
let dones = Array.from(document.querySelectorAll(".done"))
totalPatients.innerHTML = (`Total Patients :${dones.length}`)
}

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
    setTimeout(()=>{b.remove()},2000)
})
})


function viewPatientsNo(){
let totalPatients = document.body.querySelector(".totalPatients")
let dones = Array.from(document.querySelectorAll(".done"))
totalPatients.innerHTML = (`Total Patients :${dones.length}`)
}

let terminates = Array.from(document.querySelectorAll(".terminate"))
console.log(terminates)

terminates.forEach((element)=>{
    
element.addEventListener('click',(e)=>{
    let b = e.target.parentElement.parentElement
    b.remove()
})
})



// ROUTS to different pages

let logout = document.body.querySelector(".logout")
logout.addEventListener('click',()=>{
window.location.href = ("./login.html")
})

let home = document.body.querySelector(".logo")
home.addEventListener('click',()=>{
window.location.href = ("./index.html")
})

