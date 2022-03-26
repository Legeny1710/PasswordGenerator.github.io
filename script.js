const passwordEl = document.getElementById("password-el")
const GenerateBtn = document.getElementById("generate-btn")
const CopyBtn = document.getElementById("copy-btn")

GenerateBtn.addEventListener("click", function() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@!^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let max = 8
    let password = ""

    for (let i = 0; i <= max; i++) {
        let randompassword = Math.floor(Math.random()*chars.length) 
        password += chars.substring(randompassword, randompassword + 1)
    }
       
    passwordEl.textContent = password     
        
})

function copyFunction() {
    let copyText = document.getElementById("password-el")
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}