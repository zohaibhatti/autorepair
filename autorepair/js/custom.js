// window.addEventListener("scroll", function() {
//   const navbar = document.querySelector(".transparent-navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });
;

// <!========================================
            // START BACK TO TOP 
// ======================================== >
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
// <!========================================
            // END BACK TO TOP
// ======================================== >
