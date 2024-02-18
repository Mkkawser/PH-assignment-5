const cards = document.querySelectorAll(".cards");
const seatCount = document.getElementById("seat-count");
const totalSeat = document.querySelector(".totalSeat");
const coupon = document.querySelector(".coupon");
let total = document.getElementById("total-price");
let grand = document.getElementById("grand-total");
let seatName = new Set();
let seat = 0;
let totalPrice = 0;

let seatNames = document.querySelector(".seatName");
let seatClass = document.querySelector(".seatClass");
let seatPrice = document.querySelector(".seatPrice");

let couponOff = document.querySelector(".couponOff");
let couponOffP = document.querySelector(".couponOffP");
let couponPrice = 0;
let couponCnt = 1;

let mobileNumber = document.querySelector(".mobileNumber");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    if (seat > 3) {
      alert(`Can't Occopid more than 4 seat`);
      return;
    }

    if (card.style.backgroundColor == "rgb(29, 209, 0)") {
      card.style.backgroundColor = "#f2f2f2";
      (seat -= 1), (totalPrice -= 550);
      seatName.delete(card.innerHTML);
    } else {
      (seat += 1), (totalPrice += 550);
      card.style.backgroundColor = "rgb(29, 209, 0)";
      seatName.add(card.innerHTML);
    }
    // console.log(seat,totalPrice);
    seatCount.innerText = seat;
    totalSeat.innerHTML = 40 - seat;
    total.innerHTML = totalPrice;
    grand.innerHTML = totalPrice - couponPrice;

    // Select Your Seat
    // console.log(seatName);
    seatNames.innerHTML = "";
    seatPrice.innerHTML = "";
    seatClass.innerHTML = "";
    for (const value of seatName) {
      const p = document.createElement("p");
      p.innerText = value;
      seatNames.append(p);

      const q = document.createElement("p");
      q.innerText = "Bussiness";
      seatClass.append(q);

      const r = document.createElement("p");
      r.innerText = 550;
      seatPrice.append(r);
    }
  });
}

function couponCode(e) {
  let x = Number(total.innerHTML);
  let y = coupon.value;
  if (x == 0) {
    alert("Percess First");
    return;
  }
  if (coupon.value == "NEW15") {
    couponPrice = Math.round(totalPrice * 0.15);
    document.querySelector(".btndis").disabled = true;
  }
  if (coupon.value == "Couple 20") {
    couponPrice = Math.round(totalPrice * 0.2);
    document.querySelector(".btndis").disabled = true;
  }
  couponOff.innerHTML = `OFF (${y})`;
  couponOffP.innerHTML = -couponPrice;
  grand.innerHTML = grand.innerHTML - couponPrice;
}

mobileNumber.addEventListener("change", function (e) {
  let x = e.target.value;
  if (x.length == 11) {
    document.querySelector(".confirmdis").disabled = false;
  }
});

function confirmBox() {
  // document.querySelector(".confirmdis").disabled = true;
}
function showModal(){
  
}