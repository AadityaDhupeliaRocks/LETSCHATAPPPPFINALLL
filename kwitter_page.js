

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
    room_name = localStorage.getItem("room_name");




    function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"

    }

function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name: user_name, 
            message: msg, 
            like:0


      });

      document.getElementById("msg").value = "";
      
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//Start code


 console.log(firebase_message_id);
 console.log(message_data); 
 name = message_data['name'];
 message = message_data['message']
 like = message_data ['like'];
 name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
 like_buttton = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
 row = name_with_tag + message_with_tag + like_buttton + span_with_tag;
 document.getElementById("output").innerHTML = row;



//End code
      } });  }); }
getData();

function updateLike(message_id) {

      console.log("clicked on like buttton -" + message_id);
      buttton_id = message_id;
      likes = document.getElementById(buttton_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);


      firebase.database().ref(room_name).child(message_id).update({

            like: updated_likes
      });
}
