document.addEventListener("DOMContentLoaded", function () {
    const lengthInput = document.getElementById("length");
    const lengthDisplay = document.getElementById("length-display");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const specialCheckbox = document.getElementById("special");
    const generateBtn = document.getElementById("generate-btn");
    const passwordDisplay = document.getElementById("password-display");

    lengthInput.addEventListener("input", function () {
        lengthDisplay.textContent = lengthInput.value;
    });

    generateBtn.addEventListener("click", function () {
        const length = lengthInput.value;
        const useUppercase = uppercaseCheckbox.checked;
        const useLowercase = lowercaseCheckbox.checked;
        const useNumbers = numbersCheckbox.checked;
        const useSpecial = specialCheckbox.checked;

        if (!useUppercase && !useLowercase && !useNumbers && !useSpecial) {
            passwordDisplay.textContent = "Please select at least one character type.";
            return;
        }

        const password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecial);
        passwordDisplay.textContent = password;
    });
});



// Şifre oluşturma kısımı 
function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecial) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "1234567890";
    const specialChars = "<>!^+%&/()=?*{}[]$#@-";

    let combinedChars = "";
    if (useUppercase) combinedChars += uppercaseChars;
    if (useLowercase) combinedChars += lowercaseChars;
    if (useNumbers) combinedChars += numberChars;
    if (useSpecial) combinedChars += specialChars;

    let password = "";
    const charsLength = combinedChars.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsLength);
        password += combinedChars.charAt(randomIndex);
    }
    return password;
}


//kopyalama işlemi
document.addEventListener("DOMContentLoaded", function () {

    const copyBtn = document.getElementById("copy-btn");
    copyBtn.addEventListener("click", copyPasswordToClipboard);

    function copyPasswordToClipboard() {
        const passwordDisplay = document.getElementById("password-display");
        const passwordText = passwordDisplay.textContent;

        //clipboard API
        navigator.clipboard.writeText(passwordText)
            .then(() => {
                // Başarıyla panoya kopyalandığında yapılacaklar
                alert("Password copied to clipboard: " + passwordText);
            })
            .catch((err) => {
                // Hata durumunda yapılacaklar
                console.error("Failed to copy password to clipboard: " + err);
            });
    }
});


