let passwordEl = document.getElementById("password-el")
const GenerateBtn = document.getElementById("generate-btn")
const CopyBtn = document.getElementById("copy-btn")

var slider = document.getElementById("PasswordRange");
    var output = document.getElementById("passwordLength");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

GenerateBtn.addEventListener("click", function() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let Plength = output.innerHTML - 1
    let password = ""

    function PasswordGenerator(c){
        for (let i = 0; i <= Plength; i++) {
            let randompassword = Math.floor(Math.random()*c.length) 
            password += c.substring(randompassword, randompassword + 1)
        }
           
        passwordEl.textContent = password      
    }
    
    let symbolsCheck = document.getElementById("Symbols").checked
    let NumbersCheck = document.getElementById("Numbers").checked

    if (symbolsCheck == true && NumbersCheck == false) {
        let chars2 = 'abcdefghijklmnopqrstuvwxyz!@!^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        PasswordGenerator(chars2)
    } else if (NumbersCheck == true && symbolsCheck == false) {
        let chars3 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        PasswordGenerator(chars3)
    } else if (NumbersCheck == true && symbolsCheck == true) {
        let chars4 = "0123456789abcdefghijklmnopqrstuvwxyz!@!^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        PasswordGenerator(chars4)
    } else if (NumbersCheck == false && symbolsCheck == false) {
        PasswordGenerator(chars)
    }

})


function copyFunction() {
    var copyText = document.getElementById("passwordEl").value;
    copyText.select();
    copyText.setSelectionRange(0, 999); /* For mobile devices */
    navigator.clipboard.writeText(copyText);
}
