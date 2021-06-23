function addUser() {
    var UserName = document.getElementById("Input_User").value;
    localStorage.setItem("Human", UserName);
    window.location = "kwitter_room.html";
}