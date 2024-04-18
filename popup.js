
function openPopup(imgSrc) {
  var popup = document.getElementById('popup');
  var fullImg = document.getElementById('fullImg');
  fullImg.src = imgSrc;
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}
