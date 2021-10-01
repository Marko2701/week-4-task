const form = document.querySelector(".main__form");
const emailInput = document.querySelector(".main__input");
const errorMsg = document.querySelector(".main__input-msg");
const errorText = document.querySelector(".main__input-text");

form.addEventListener("submit", e => {
    e.preventDefault();

    if(emailInput.value.length === 0) {
        errorText.textContent="Oops! Please add your email";
        errorMsg.classList.add("main__input-msg--active");
    }

    else if(!validateEmail(emailInput.value)) {
        errorText.textContent="Oops! Please check your email";
        errorMsg.classList.add("main__input-msg--active");
    }

    else {
        emailInput.value = "";
        errorMsg.classList.remove("main__input-msg--active");
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


