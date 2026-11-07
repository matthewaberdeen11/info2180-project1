/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const email = document.querySelector(".newsletter input ");
    const message = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        address = email.value.trim();

        if (address == ""){
            message.textContent = "Please enter a valid email";
        }else {
            message.textContent = `Thank you! Your email address ${address} has been added to our mailing list!`;
        }
        c
    })
});