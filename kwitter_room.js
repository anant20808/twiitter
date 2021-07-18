var firebaseConfig = {
  apiKey: "AIzaSyCNKw8qRzkeXLsV57VOkMotBKqmAKNXILc",
  authDomain: "fir-of-hacking.firebaseapp.com",
  databaseURL: "https://fir-of-hacking-default-rtdb.firebaseio.com",
  projectId: "fir-of-hacking",
  storageBucket: "fir-of-hacking.appspot.com",
  messagingSenderId: "383464676811",
  appId: "1:383464676811:web:a92e278fad30af9ff96a4e",
  measurementId: "G-P60CTY9271"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML= "Welcome " + username + "!";


function Addroom(){

  roomname = document.getElementById("addroom").value;
  localStorage.setItem("roomname",roomname);
  firebase.database().ref("/").child(roomname).update({
    purpose : "adding roomname"
  })
}


function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname")
window.location="index.html";

}
