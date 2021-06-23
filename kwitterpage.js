var firebaseConfig = {
    apiKey: "AIzaSyCJdA14Do5lp0_Hw_MWsm4F0jRm6pXUKRU",
    authDomain: "kwitter-364be.firebaseapp.com",
    databaseURL: "https://kwitter-364be-default-rtdb.firebaseio.com",
    projectId: "kwitter-364be",
    storageBucket: "kwitter-364be.appspot.com",
    messagingSenderId: "148839624368",
    appId: "1:148839624368:web:8b9a56bcd9c55dd5fbd575",
    measurementId: "G-3HQZMW366F"
};
firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("Human")
roomName = localStorage.getItem("Room_Name")

function Send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name: userName,
        Message: msg,
        like: 0
    });
    document.getElementById("msg").value = ""
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            //Start code
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                messageData = childData;
                console.log(firebase_message_id);
                console.log(messageData)
                name = messageData['name']
                Message = messageData['Message']
                like = messageData['like']
                nameWithTag = "<h4>" + name + "<img class='user_tick' src = 'tick.png'> </h4>"
                messageWithTag = "<h4 class='message_h4'>" + Message + "</h4>"
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span></button></hr>"
                row = nameWithTag + messageWithTag + like_button + spanWithTag
                document.getElementById("output").innerHTML += row
            }
            //End code
        });
    });
}
getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
  
    firebase.database().ref(roomName).child(message_id).update({
      like: updated_likes
    });
  
  }

function LogOut() {
    localStorage.removeItem("Human");
    localStorage.removeItem("Room_Name");
    window.location = "index.html"
}