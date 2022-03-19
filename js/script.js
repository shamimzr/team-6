// --------------------- location --------------------
function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
      alert("Geolocation is not supported by your browser.");
  }
}

function showPosition(position) {
  alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}

getLocation();

// -------------modal -----------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



