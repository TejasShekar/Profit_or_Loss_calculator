const initialPrice = document.querySelector("#initial-p");
const stocksQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-p");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calcProfitAndLoss(i, q, c) {
  if (i > c) {
    var loss = (i - c) * q;
    var lossPercent = (loss / i) * 100;
    loss = loss.toFixed(2);
    lossPercent = lossPercent.toFixed(2);
    output.innerText = `The loss is ${loss} and loss percentage is ${lossPercent}%`;
  } else if (i < c) {
    var profit = (c - i) * q;
    var profitPercent = (profit / i) * 100;
    profit = profit.toFixed(2);
    profitPercent = profitPercent.toFixed(2);
    output.innerText = `The profit is ${profit} and profit percentage is ${profitPercent}%`;
  } else {
    output.innerText = `No pain no gain and no gain no pain`;
  }
}

function clickHandler() {
  var i = Number(initialPrice.value);
  var q = Number(stocksQuantity.value);
  var c = Number(currentPrice.value);

  calcProfitAndLoss(i, q, c);
}
checkBtn.addEventListener("click", clickHandler);
