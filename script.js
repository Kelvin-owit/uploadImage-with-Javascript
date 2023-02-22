// alert("working");

var profilePic = document.getElementById("profile-pic");
var inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};
