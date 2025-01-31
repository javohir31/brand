const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav")

burgerMenu.addEventListener("click", () => {
  console.log("Clicked");
  // if (nav.classList.contains("active")) {
  //   nav.classList.remove("active")
  // } else {
  //   nav.classList.add("active")
  // }
  nav.classList.toggle("active")
  burgerMenu.classList.toggle("active")
});


AOS.init();

// loader
setTimeout(() => {
  console.log("Time is out");
  document.querySelector("#loader").style.display = "none"
  document.querySelector("header").style.display = "block"
  document.querySelector("main").style.display = "block"
  document.querySelector("footer").style.display = "block"
}, 3000)

// DIALOG
const modal = document.querySelector(".login-modal")
const showModal = document.querySelector(".login-btn")
const closeModal = document.querySelector(".close ")
const loginSubmitBtn = document.querySelector(".submit")
const loginForm = document.querySelector(".login-form")
showModal.addEventListener("click", () => {
  modal.showModal()
})

closeModal.addEventListener("click", () => {
  modal.close()
})


loginSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  loginForm.reset()
  modal.close()

})

const modalDialog = document.querySelector(".get-modal")
const showModalDialog = document.querySelector(".quote_btn")
const closeModalDialog = document.querySelector(".close-get-modal")
const loginSubmitBtnDialog = document.querySelector(".close-btn-get-modal")
const loginFormDialog = document.querySelector(".login-form")

showModalDialog.addEventListener("click", () => {
  modalDialog.showModal()
})

closeModalDialog.addEventListener("click", () => {
  modalDialog.close()
})



loginSubmitBtnDialog.addEventListener("click", ()=> {
  modalDialog.close()
  console.log("hiiii");
  
})