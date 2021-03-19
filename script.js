//burger-menu

let burger = document.getElementById("burger");
let imgClose = document.getElementById("close");
let imgOpen = document.getElementById("open");
let menu = document.getElementById("menu");

let open = false;


function openBurger() {
    if (open) {
      menu.style.height = 0;
      imgOpen.style.display = "inline";
      imgClose.style.display = "none";
    } else {
      menu.style.height = "155px";
      imgOpen.style.display = "none";
      imgClose.style.display = "inline";
    }
    open = !open;
  }
  
  burger.addEventListener("click", openBurger);
