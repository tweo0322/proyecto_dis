// menu.js

document.addEventListener('DOMContentLoaded', function () {
  const btnHamburguesa = document.getElementById('btnHamburguesa');
  const menuDesplegable = document.getElementById('menuDesplegable');
  
  btnHamburguesa.addEventListener('click', function(e) {
    e.stopPropagation();
    menuDesplegable.classList.toggle('activo');
  });
  document.addEventListener('click', function(e) {
    if (!menuDesplegable.contains(e.target)) {
      menuDesplegable.classList.remove('activo');
    }
  });
});
