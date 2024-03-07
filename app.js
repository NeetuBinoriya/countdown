const endDate = "09 March 2024 09:27 PM"
document.getElementById('endDate').innerHTML = endDate;
const inputs = document.querySelectorAll("input")
const clock = () =>{
    const end = new Date(endDate)
    const now = new Date() 
    const diff = (end - now) / 1000;
    
    if(diff < 0 ) return;
    // console.log(diff);
    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours
    inputs[1].value = Math.floor(diff / 3600 ) % 24;
    // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
}
clock()

/*
    1 day = 24 hours
    1 hour = 60 min
    60 min = 3600 sec
*/
setInterval(()=>{
    clock()
}, 1000)