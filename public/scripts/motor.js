function reveal() {
    var reveals = document.querySelectorAll(".arnold");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 350;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("bounce");
      } else {
        reveals[i].classList.remove("bounce");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);