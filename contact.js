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



const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const no = document.getElementById('number');
const feed = document.getElementById('subject');
const form = document.getElementById('form');

let messageref = firebase.database().ref("Contact");



form.addEventListener('submit', (e) => {
    e.preventDefault();

    savemessage(fname.value, lname.value, no.value, feed.value);

    fname.value = '';
    lname.value = '';
    no.value = '';
    feed.value = '';

});


function savemessage(fname, lname, no, feed) {
    var newmessage = messageref.push();
    newmessage.set({
        first_name: fname,
        last_name: lname,
        number: no,
        feed: feed,
    });
}