// 1-masala.
// Foydalanuvchidan yoshni so'raydigan dastur tuzing. Yosh 50 dan katta bo'lsa, 'siz kattasiz' deb chiqarib bersin. 50 dan past bo'lsa, 'siz yoshsiz' deb chiqarsin
var number = prompt("Yoshingizni kiriting")

if(number > 50){
  alert("Sizning yoshingiz katta ekan");
}else if(number == 50){
  alert("Yoshingiz 50 ga teng");
}
else{
  alert("Siz yosh ekansiz")
}




// __________________________________________________________





// 2-masala.
// Somsaning narxini so'raydigan dastur tuzing. Narx 3000 ming so'mdan katta bo'lsa, 'somsa qimmat' deb chiqarib bersin. 3000 ming so'mdan kichgina bo'lsa, 'somsa arzon' deb chiqarib bersin.

var somsaPrice = prompt("Go'shtli somsa qancha aka?")
if(somsaPrice > 3000){
  alert("Qimmat ekan")
}
else{
  alert("Somsa arzon ekan")
}



// __________________________________________________________




// 3-4-masala.
// Parolni tekshiradigan dastur. Foydalanuvchi 'sarimsoqpiyoz' parolini kiritgan bo'lsa, u bilan salomlashing. Boshqa narsa kiritgan bo'lsa, unga 'xato' deb yozing

var inputUserName = prompt("Ismingizni kiriting: ")
var password = prompt("Parolni kiriting: (sarimsoqpiyoz)");
if(password == "sarimsoqpiyoz"){
  alert("Assalomu alaykum " + inputUserName)
}
else{
  alert("Parol noto'g'ri kiritildi!")
}



// __________________________________________________________



// 5-masala.
// Foydalanuvchi yoshini kiritishi kerak. Yoshi 0 dan 30 gacha bo'lsa, unga 'yosh ekansiz' deb chiqaring. Yoshi 30 dan 60 gacha bo'lsa, 'siz navqironsiz' deb chiqaring. Yoshi 60 dan yuqori bo'lsa, 'Yoshingiz katta ekan' deb chiqaring.
var inputUserAge = prompt("Yoshingizni kiriting: (Avvalgi masala emas.)")
if(inputUserAge.length != 0){
  if(inputUserAge > 0 && inputUserAge <= 30){
    alert("Yosh ekansiz")
  }
  else if(inputUserAge > 30 && inputUserAge <= 60){
    alert("Siz navqironsiz");
  }
  else if(inputUserAge > 60){
    alert("Yoshingiz ancha katta ekan");
  }
  else{
    alert("Noto'g'ri qiymat kiritildi")
  }
}
else{
  alert("Iltimos, so'rovnomani to'ldiring...")
}


// __________________________________________________________



// 6-masala.
// Foydalanuvchidan ismini so'rang. Agar ismi "Ali" bo'lsa, unga "Salom og'a" deb javob yozing. Ismi "Ahmad" bo'lsa, unga "Ko'rinmayapsan do'stim, nima qilayapsan?" deb yozing.
var userNameInput = prompt("Assalomu alaykum, ismingizni kiriting: (Ali, Ahmad)")
if(userNameInput.length != 0){
  if(userNameInput == "Ali"){
    alert("Salom og'a")
  }
  else if(userNameInput = "Ahmad"){
    alert("Ko'rinmayapsan do'stim, nima qilayapsan?")
  }
  else{
    alert("Assalomu alaykum " + userNameInput)
  }
}
else{
  alert("Iltimos, so'rovnomani to'ldiring!")
}


// __________________________________________________________

// Darsda ishlangan masala.
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
