//ADD YOUR FIREBASE LINKS HERE
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
UserName = localStorage.getItem("Human");
document.getElementById("UserName").innerHTML = "Welcome " + UserName 

function AddRoom() {
    var Room_name = document.getElementById("Room_Name").value;
    firebase.database().ref("/").child(UserName).update({
          purpose: "adding user"
    });
localStorage.setItem("Room_Name",Room_name);
 window.location="kwitterpage.html"
};

function getData() {
    firebase.database().ref("/").on('value',
          function (snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                      childKey = childSnapshot.key;
                      Room_names = childKey;
                      //Start code
                      console.log("Room Name_ " + Room_names);
                      row = "<div class = 'room_name' id=" + Room_names + "onClick='redirectToRoomName(this.id)'>#" + Room_names + "<div><hr>";
                      document.getElementById("output").innerHTML=row
                      //End code
                });
          });
}
getData();
function redirectToRoomName(Name){
console.log(Name);
localStorage.setItem("Room Name",Name)
window.location="kwitterpage.html"
}
