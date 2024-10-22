$('#myCarousel').carousel({
    interval: 5000
})

$('#myCarousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

    var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});



  document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
      accordion.querySelector(".accordion-header").addEventListener("click", function() {
        var body = this.nextElementSibling;

        if (body.style.display === "block") {
          body.style.display = "none";
          this.querySelector("span").textContent = "+"; // Change icon to "+"
        } else {
          // Hide all other accordion bodies
          document.querySelectorAll(".accordion-body").forEach(function(body) {
            body.style.display = "none";
          });
          document.querySelectorAll(".accordion-header span").forEach(function(span) {
            span.textContent = "+";
          });

          body.style.display = "block";
          this.querySelector("span").textContent = "-"; // Change icon to "-"
        }
      });
    });
  });

