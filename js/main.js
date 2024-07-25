// selecet form
var form = document.querySelector("form");

// selecet input type text
var textInput = document.querySelector('input[type="text"]');
var textErr = document.querySelector(".text-err");
var txtPattern = /^[a-zA-Z]{5,18}\d{2}$/;
var textVaild = false;
textInput.addEventListener("blur", function (e) {
    if (!e.target.value.match(txtPattern)) {
        textErr.style.display = "block";
        textErr.classList.add("username-msg");
        this.focus();
        this.select();
    } else {
        textErr.style.display = "none";
        textErr.classList.remove("username-msg");
        textVaild = true;
    }
});

// selecet input type password
var passInput = document.querySelector('input[type="password"]');
var passwordErr = document.querySelector(".password-err");
var passPattren = /^\d{8}$/;
var passVaild = false;
passInput.addEventListener("blur", function (e) {
    if (!e.target.value.match(passPattren)) {
        passwordErr.style.display = "block";
        passwordErr.classList.add("username-msg");
        this.focus();
        this.select();
    } else {
        passwordErr.style.display = "none";
        passwordErr.classList.remove("password-msg");
        passVaild = true;
    }
});

// select input type email
var emailInput = document.querySelector('input[type="email"]');
var emailErr = document.querySelector(".email-err");
var emailPattern = /^[a-zA-Z0-9._+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var emailValid = false;
emailInput.addEventListener("blur", function (e) {
    if (!e.target.value.match(emailPattern)) {
        emailErr.style.display = "block";
        emailErr.classList.add("email-msg");
        this.focus();
        this.select();
    } else {
        emailErr.style.display = "none";
        emailErr.classList.remove("email-msg");
        emailValid = true;
    }
});

// select input type phone number
var phoneInput = document.querySelector("input#phone");
var phoneErr = document.querySelector(".phone-err");
var phonePattern = /^(010|011|012|015)\d{8}$/;
var phoneValid = false;
phoneInput.addEventListener("blur", function (e) {
    if (!e.target.value.match(phonePattern)) {
        phoneErr.style.display = "block";
        phoneErr.classList.add("phone-msg");
        this.focus();
        this.select();
    } else {
        phoneErr.style.display = "none";
        phoneErr.classList.remove("phone-msg");
        phoneValid = true;
    }
});

// select input type radio
var genderInput = document.querySelectorAll("input[type='radio']");
var genderErr = document.querySelector(".gender-err");
var genderPattern = /^(male|female)$/;
var genderValid = false;

for (var i = 0; i < genderInput.length; i++) {
    genderInput[i].addEventListener("blur", function (e) {
        if (!e.target.value.match(genderPattern)) {
            genderErr.style.display = "block";
            genderErr.classList.add("gender-msg");
            this.focus();
            this.select();
        } else {
            genderErr.style.display = "none";
            genderErr.classList.remove("gender-msg");
            genderValid = true;
        }
    });
}

form.addEventListener("submit", function (e) {
    if (
        textVaild === false ||
        passVaild === false ||
        emailValid === false ||
        emailValid === false ||
        phoneValid === false ||
        genderValid === false
    ) {
        e.preventDefault();
    }

    // email - phone eg - gender
});
