const hamburger = document.querySelector("#hamburger");
const mobileNavLinks = document.querySelector(".mobileNavLinks");
const closeMenu = document.querySelector(".closeMenu");

hamburger.addEventListener("click", () => {
       if (mobileNavLinks.style.display === "none") {
              mobileNavLinks.style.display = "flex"
       } else {
              mobileNavLinks.style.display = "none";
       }
});

closeMenu.addEventListener("click", () => {
              if (mobileNavLinks.style.display === "none") {
                mobileNavLinks.style.display = "flex";
              } else {
                mobileNavLinks.style.display = "none";
              }

})

