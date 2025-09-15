
// copied this solution from a Youtube video 'Subtle, yet Beautiful Scroll Animations'//

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       if(entry.isIntersecting){
        console.log(entry.target)
        entry.target.classList.add("show")

       } 
       
    })

}, {})

// copied this solution from w3 schools since we havent started learning JS //
const todoElements = document.querySelectorAll(".hidden")
todoElements.forEach(el => observer.observe(el))

function myFunction() {
    const x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const x = document.getElementById("pwd");
    if (x) {
        x.type = "password";
        x.value = "";
    }
});