//getElementByIdを使う
const title1 = document.getElementById("title");
console.log(title1);

//querySelectorを使う
const title2 = document.querySelector("#title");
console.log(title2);

//クラス名でElementを取得
// const containers = document.getElementsByClassName("container");
// console.log(containers);

//querySelectorによるElementの取得
const container = document.querySelector(".container");
console.log(container);

//querySelectorAll
const containers = document.querySelectorAll(".container");
console.log(containers);

//divの生成
// const divEl = document.createElement("div");
// console.log(divEl);

//DOMの追加
//div配下にpタグの生成
const divEl = document.createElement("div");

const pEl = document.createElement("p");

divEl.appendChild(pEl);
console.log(divEl);
