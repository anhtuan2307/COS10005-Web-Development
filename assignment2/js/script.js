// Validate Register Form

function validateForm() {
    // Validate First Name
    if (registerform.First_Name.value == "") {
        alert("First Name must be filled out");
        return false;
    }

    // Validate Last Name
    if (registerform.Last_Name.value == "") {
        alert("Last Name must be filled out");
        return false;
    }

    // Validate Username
    if (registerform.Username.value == "") {
        alert("Username must be filled out");
        return false;
    }

    // Validate Password
    var password = document.getElementsByName("Password")[0].value;
    if (password.length < 9) {
        alert("Password must be at least 9 characters long.");
        return false;
    }

    // Validate Gender
    var genderSelect = document.getElementById("genderSelect");
    var selectedGender = genderSelect.options[genderSelect.selectedIndex].value;

    if (selectedGender === "") {
        alert("Please select your gender.");
        return false;
    }

    // Validate Email
    var email = document.registerform.Email.value;
    if (email == "") {
        alert("Please provide your Email!");
        document.registerform.Email.focus();
        return false;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid Email");
        return false;
    }

    // Validate Radio Buttons (Notify)
    var notifyOptions = document.getElementsByName("notified");
    var notifySelected = false;

    for (var i = 0; i < notifyOptions.length; i++) {
        if (notifyOptions[i].checked) {
            notifySelected = true;
            break;
        }
    }

    if (!notifySelected) {
        alert("Please let us know if you want to get news");
        return false;
    }

    // Validate Checkbox Group (What You Want To Hear From Us)
    var newsCheckboxes = document.getElementsByName("news[]");
    var atLeastOneChecked = false;

    for (var i = 0; i < newsCheckboxes.length; i++) {
        if (newsCheckboxes[i].checked) {
            atLeastOneChecked = true;
            break;
        }
    }

    if (!atLeastOneChecked) {
        alert("Please tell us what you want to know.");
        return false;
    }

    // Form is valid, allow submission
    return true;
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Register Form

//  Order Form

function ShowHideDivdev() {
    var chkYes = document.getElementById("chkYes");
    var chkdelivery = document.getElementById("chkdelivery");
    chkdelivery.style.display = chkYes.checked ? "block" : "none";
}

function ShowHideDivpay() {
    var chkpayonlYes = document.getElementById("chkpayonlYes");
    var chkpayonl = document.getElementById("chkpayonl");
    chkpayonl.style.display = chkpayonlYes.checked ? "block" : "none";
    threecardsid.style.display = chkpayonlYes.checked ? "flex" : "none";

}

function showDiv() {
    document.getElementById('orderformDiv').style.display = "block";
}

function goBack() {
    document.getElementById('orderformDiv').style.display = "none";
}

function copyAddress() {
    
    var deliveryAddress = document.getElementById("DeliveryAddress").value;
    var billingAddressInput = document.getElementById("billingAddressInput");
    var sameAsDeliveryCheckbox = document.getElementById("sameAsDelivery");

    // Set the value of the billing address input to the delivery address if the checkbox is checked
    if (sameAsDeliveryCheckbox.checked && deliveryAddress.trim() === "") {
        // Display an alert
        alert("Please enter your delivery address first");
        // Uncheck the checkbox
        sameAsDeliveryCheckbox.checked = false;
        // Clear the billing address input
        billingAddressInput.value = "";
    } else {
        // Copy the value of the delivery address input to the billing address input
        billingAddressInput.value = deliveryAddress;
}
}

// Add an event listener to the form submission
function validateOrderForm() {

    if (nameoforderform.Full_Name.value == "") {
        alert("Please enter your name");
        return false;
    }

    var Postcode = document.getElementsByName("Postcode")[0].value;
    if (Postcode.length != 4) {
        alert("Postcode must be 4 digit.");
        return false;
    }

    if (nameoforderform.Phone.value == "") {
        alert("Please enter your phone number");
        return false;
    }

    if (nameoforderform.Mail.value == "") {
        alert("Please enter your mail");
        return false;
    }
    
    var cardType = document.querySelector('input[name="TypeOfCard"]:checked').value;
    var PayOnl = document.getElementById('PayOnl').value;
    var maxLength;

    // Determine the maximum length based on card type
    if (cardType === 'Visa' || cardType === 'MasterCard') {
        maxLength = 16;
    } else if (cardType === 'American Express') {
        maxLength = 15;
    }

    // Check if the card number length exceeds the limit
    if (PayOnl.length > maxLength) {
        alert('The card number length exceeds the limit for ' + cardType);
        return false; 
    }
    // If all validations pass, return true to allow form submission
    return true;



}

function showOrderForm(img) {
    // Show the orderformDiv
    document.getElementById('orderformDiv').style.display = 'block';
    
    // Get the source and alt text of the clicked image
    var imgSrc = img.src;
    var imgAlt = img.alt;
    
    // Create an image element
    var flavourImg = document.createElement('img');
    flavourImg.src = imgSrc;
    flavourImg.alt = imgAlt; 
    
    var selectedFlavourDiv = document.getElementById('selectedFlavour');
    selectedFlavourDiv.innerHTML = '';
    
    // Append the image to the selectedFlavour div
    selectedFlavourDiv.appendChild(flavourImg);
}

//  Order Form

