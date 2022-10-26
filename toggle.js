const button = document.querySelector(".bi-grid-3x3");
const button2 = document.querySelector(".bi-square-fill")

button.addEventListener("click",event => {
button.style.color="blue"
button2.style.color="gray"
})

button2.addEventListener("click",event => {
    button.style.color="grey";
    button2.style.color="blue";
    })