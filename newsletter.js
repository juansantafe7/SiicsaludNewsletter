window.addEventListener('scroll', function() {
    var arrowLink = document.getElementById('arrowLink');
    if (window.scrollY > 100) { // Cambia 100 a la posición en la que quieres mostrar el enlace
      arrowLink.style.display = 'block';
    } else {
      arrowLink.style.display = 'none';
    }
  });

  const shareButtons = document.querySelectorAll('.share-button');
  const shareOptions = document.querySelectorAll('.share-option');

shareButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    this.classList.toggle('active');
    shareOptions[index].classList.toggle('active');
  });
});