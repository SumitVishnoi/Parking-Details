// Select input fields and the submit button from the DOM
const myName = document.querySelector("#name")
const myEmail = document.querySelector("#email")
const myPhone = document.querySelector("#phone")
const mySubject = document.querySelector("#subject")
const myMessage = document.querySelector("#message")

const submitBtn = document.querySelector("#contact-submit")

// Add an event listener to the submit button for the 'click' event
submitBtn.addEventListener('click', () => {

     // Check if any of the fields are empty
    if(myName.value == "" || myEmail.value == "" || myPhone.value == "" || mySubject.value == "" || myMessage.value == "") {
        alert("All fields are mandatory !") // Alert if any field is empty
        return false    // Stop execution if validation fails
    } 
    // Check if the name is at least 5 characters long
    else if(myName.value.length < 5) {
        alert("Please enter your full name !")  // Alert if name is too short
        return false    // Stop execution if validation fails
    }
    // Validate the phone number to ensure it is exactly 10 digits and contains only numbers
    else if(myPhone.value.length < 10 || myPhone.value.length >10 || isNaN(myPhone.value)) {
        alert("Please enter a valid Phone Number !")   // Alert if phone number is invalid
        return false    // Stop execution if validation fails
    }
    
     else {
        alert("Thanks !")
        return true     // Allow form submission to proceed
    }
})



