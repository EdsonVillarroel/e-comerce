// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCaXxg9_9ikgYJ4Ig9awleYWmn4fRnkOf4",
    authDomain: "e-commerce-f8c4a.firebaseapp.com",
    projectId: "e-commerce-f8c4a",
    storageBucket: "e-commerce-f8c4a.appspot.com",
    messagingSenderId: "51753311621",
    appId: "1:51753311621:web:0b3f668b5001e2f05c78ec"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
