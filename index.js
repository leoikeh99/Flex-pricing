var checkBox = document.getElementById("check");
var price1 = document.getElementById("price1");
var price2 = document.getElementById("price2");
var price3 = document.getElementById("price3");

checkBox.addEventListener("click", function () {
  if (checkBox.checked == true) {
    document.querySelector(".slider").style.animationName = "slideFoward";
    price1.textContent = "$19.99";
    price2.textContent = "$24.99";
    price3.textContent = "$39.99";
  } else {
    document.querySelector(".slider").style.animationName = "slideBackward";
    price1.textContent = "$199.99";
    price2.textContent = "$249.99";
    price3.textContent = "$319.99";
    document.querySelector(".p3").style.padding = "15px 73px";
  }
});
