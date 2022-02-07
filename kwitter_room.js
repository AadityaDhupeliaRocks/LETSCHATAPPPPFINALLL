
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyC4k70VqDA-iRIehB5bBSj0P3CwXRfdmFI",
      authDomain: "kwitter-4b302.firebaseapp.com",
      databaseURL: "https://kwitter-4b302-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b302",
      storageBucket: "kwitter-4b302.appspot.com",
      messagingSenderId: "662115564166",
      appId: "1:662115564166:web:c1ec1643000eea8ddf6f07"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

            purpose : "adding Room name"

      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";


}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("room_name - ")
      "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)' #"+Room_names+"></div> <hr> "
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();

function redirectToRoomName(name) {

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}



