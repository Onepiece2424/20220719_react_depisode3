// //getElementByIdを使う
// const title1 = document.getElementById("title");
// console.log(title1);

// //querySelectorを使う
// const title2 = document.querySelector("#title");
// console.log(title2);

// //クラス名でElementを取得
// // const containers = document.getElementsByClassName("container");
// // console.log(containers);

// //querySelectorによるElementの取得
// const container = document.querySelector(".container");
// console.log(container);

// //querySelectorAll
// const containers = document.querySelectorAll(".container");
// console.log(containers);

// //divの生成
// // const divEl = document.createElement("div");
// // console.log(divEl);

// //DOMの追加
// //div配下にpタグの生成
// const divEl = document.createElement("div");

// const pEl = document.createElement("p");

// const h2El = document.createElement("h2");

// // divEl.appendChild(pEl);
// // divEl.appendChild(h2El);

// divEl.prepend(pEl);
// divEl.prepend(h2El);
// console.log(divEl);

//ボタンの設定
const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

const divEl = document.querySelector(".container");
divEl.appendChild(buttonEl);

//DOMの削除
//h1タグを削除
const h1El = document.getElementById("title");
const bodyEl = document.querySelector("body");

bodyEl.removeChild(h1El);

//body配下を全削除
// bodyEl.textContent = null;
