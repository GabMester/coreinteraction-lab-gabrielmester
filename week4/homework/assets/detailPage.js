var cold = document.getElementById('cold');
var hot = document.getElementById('hot');

$('select').on('change', function () {
  document.body.style.webkitFilter = 'blur(3px)'
});