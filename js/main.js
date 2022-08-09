// 1-masala.
// var number = prompt("Ixtiyoriy raqam kiriting")

// if(number > 50){
//   alert("Siz kottasiz");
// }else if(number == 50){
//   alert("Yoshingiz 50 ga teng");
// }
// else{
//   alert("Siz kichginasiz")
// }



// **************************************

var elUserName = document.querySelector(".user-name");
var elUserMoney = document.querySelector(".user-money");
var elAllCost = document.querySelector(".all-cost");
var elUserShirt = document.querySelector(".user-shirt");
var elUserPants = document.querySelector(".user-pants");
var elUserShoe = document.querySelector(".user-shoe");
var elHeading = document.querySelector(".no-money");
var elBox = document.querySelector(".box");

// ko'ylaklar
var userNameInfo = prompt("Salom, ismingizni kiriting:");
var userMoney = prompt(userNameInfo + " mablag'ingizni kiriting:");

userMoney = Number(userMoney)
// alert(typeof userMoney)
var shirt = prompt("Nechta ko'ylak olmoqchisiz?");
var pants = prompt("Nechta shim olmoqchisiz?");
var shoe = prompt("Nechta tufli olmoqchisiz?");
var count = 0;
var shirtPrice = 100000;
var pantPrice = 150000;
var shoePrice = 130000;
var shirtDiscount = 0.1;
var pantsDiscount = 0.15;
var shoeDiscount = 0.2;



var firstPrice = (shirtPrice - (shirtPrice * shirtDiscount)) * shirt;
var secondPrice = (pantPrice - (pantPrice * pantsDiscount)) * pants;
var thirdPrice = (shoePrice - (shoePrice * shoeDiscount)) * shoe;

count = firstPrice + secondPrice + thirdPrice;

if(userMoney > count){
  alert("Xaridingiz uchun rahmat, pulingiz xarid uchun yetdi.")
  elAllCost.textContent = count + '\t';
  elUserName.textContent = userNameInfo + '\t';
  elUserMoney.textContent = userMoney + '\t';
  elUserShirt.textContent = shirt + '\t';
  elUserPants.textContent = pants + '\t';
  elUserShoe.textContent = shoe + '\t';
}
else{
  alert("Afsus, pulingiz yetmadi!")
  elBox.style.display = "none";
  elHeading.innerHTML = "<h1>Pulingiz yetmas ekan</h1>"
}