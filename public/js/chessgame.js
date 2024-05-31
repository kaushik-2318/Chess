const socket = io();

socket.emit("churan")

socket.on("chran paapdi", function(){
    console.log("churan paapdi received");
})