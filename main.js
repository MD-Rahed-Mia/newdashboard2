

let context = document.querySelectorAll(".context");

let menu = document.querySelectorAll(".navigation_bar li");


menu.forEach(function (e) {

  e.addEventListener("click", function () {
    let selectedItem = e.querySelector("a").textContent.toLowerCase();

    menu.forEach(function (d) {
      d.classList.remove("active");
    })

    e.classList.add("active");

    context.forEach(function (d) {

      context.forEach(function (params) {
        params.style.display = 'none';
      })

      if (selectedItem == 'orders') {
        document.querySelector(".orders").style.display = 'block';
      }else if(selectedItem == 'dashboard'){
        document.querySelector(".dashboard").style.display = 'block';
      }

    })
  })
})