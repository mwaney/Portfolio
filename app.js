let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

function openTab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxUBpuNGYWNriNOVbG2RN4jOVQ2chsMPbYmFQ-bBrihnGFRbucRtrDYI4WuTNeDVMqs/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
