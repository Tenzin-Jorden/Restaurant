// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBokcqTJKyXqSAjNyxZY5FLDs1C3F6QXVI",
    authDomain: "rest-648b4.firebaseapp.com",
    databaseURL: "https://rest-648b4.firebaseio.com",
    projectId: "rest-648b4",
    storageBucket: "rest-648b4.appspot.com",
    messagingSenderId: "938368529737",
    appId: "1:938368529737:web:cafd17571f115571b35698"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const flex = document.getElementById("flex");
const date = document.getElementById("date1");
const selection1 = document.getElementById("mySelect");
const wedd = document.getElementById("wedd");
const day = document.getElementById("day");






let messageref = firebase.database().ref("Reservation");


function showError(input, message) {
    const error = input.parentElement;
    error.className = "form-controller error";
    const small = error.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const success = input.parentElement;
    success.className = "form-controller success";
}

function checkemail(email) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email.value)) {
        showSuccess(email);
        savemessage(name.value, email.value, date.value, selection1.value, wedd.value, day.value);
    } else {
        showError(email, "Email is not valid");
        email.value = '';
    }
}

function checkfield(inputarr) {
    inputarr.forEach(function (input) {
        if (input.value === "") {
            showError(input, `${getfield(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checklength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getfield(input)} must be greater than ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(input, `${getfield(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function getfield(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkfield([name, email]);
    checklength(name, 3, 15);
    checkemail(email);
    name.value = '';
    email.value = '';
});

function savemessage(name, email, date, selection1, wedd, day) {
    var newmessage = messageref.push();
    newmessage.set({
        name: name,
        email: email,
        date: date,
        No_of_people: selection1,
        Type: wedd,
        day: day,
    });
}



