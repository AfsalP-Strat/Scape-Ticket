//Cart

const MyCartButton = document.querySelector(".payable");
const MyCart = document.querySelector(".payable__hider");
const MoveUp = document.querySelector(".payable__dwnarwimg");

MyCartButton.addEventListener("click", () => {
  MyCart.classList.toggle("sd-show");
  MoveUp.classList.toggle("moveup");
  //   MyCart.style = "display: block";
  //   console.log("One");
});
