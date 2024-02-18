const cards = document.querySelectorAll(".cards");
const seatCount = document.getElementById("seat-count");
let totalSeat = 40;
let seatName = [];
let seat = 0;

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    seatName.push(cards.innerHTML);
    if (card.style.backgroundColor == "rgb(29, 209, 0)") {
      card.style.backgroundColor = "#f2f2f2";
      seat = seat + 1;
    } else card.style.backgroundColor = "rgb(29, 209, 0)";
  });
  seatCount.innerText = seat;
}

seatCount.addEventListener("change", function () {
  console.log(seatCount.innerHTML);
});
