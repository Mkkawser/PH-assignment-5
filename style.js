const cards = document.querySelectorAll(".cards");
const seatCount = document.getElementById("seat-count");
const total = document.getElementById("total-price");
const totalSeat = document.querySelector(".totalSeat");
let seatName = new Set();
let seat = 0;
let totalPrice = 0;

let seatNames = document.querySelector(".seatName");
let seatClass = document.querySelector(".seatClass");
let seatPrice = document.querySelector(".seatPrice");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    if (seat > 3) {
      alert(`Can't Occopid more than 4 seat`);
      return;
    }

    if (card.style.backgroundColor == "rgb(29, 209, 0)") {
      card.style.backgroundColor = "#f2f2f2";
      seat -= 1,totalPrice-=550;
      seatName.delete(card.innerHTML);
    } else {
      seat += 1,totalPrice+=550;
      card.style.backgroundColor = "rgb(29, 209, 0)";
      seatName.add(card.innerHTML);
    }
    console.log(seat,totalPrice);
    seatCount.innerText = seat;
    totalSeat.innerHTML = 40 - seat;
    total.innerHTML=totalPrice;


    // Select Your Seat
    console.log(seatName);
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
