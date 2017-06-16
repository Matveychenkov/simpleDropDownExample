(function () {

var x = document.getElementsByClassName('acc__link');

// close all points by click

function closeAll() {
var y = document.getElementsByClassName('acc__link');
for (var i=0; i<y.length; i++) {
  var x = y[i].nextElementSibling,
  z = y[i].firstElementChild;
  z.classList.remove('acc__text_orange');
  x.style.display = "none";
  x.classList.remove('active');
}
};

// add event by click

[].forEach.call(x, function(el) {
  el.addEventListener("click", function(e) {
   e.preventDefault();
   var drop = el.nextElementSibling,
       container = el.firstElementChild;
    if (drop.classList.contains('active')) {
 closeAll(); 
      drop.style.display = "none";
    } else {
      closeAll(); 
 container.classList.add('acc__text_orange');
     drop.classList.add('active');
      drop.style.display = "block";
    }
   console.log('клик');
  })
});

 }());