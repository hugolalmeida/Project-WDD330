import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter().then();

const path = "../json/akumanomi.json";
const parameciaDiv = document.querySelector(".card-wrapper");
// const logiaDiv = document.querySelector(".card3-wrapper");
// const zoanDiv = document.querySelector(".card4-wrapper");

fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const akumaList = data["paramecia"];
    console.table(data["paramecia"]);
    akumaList.forEach(parameciaTemplate);
    // leveList.forEach(logiaTemplate);
    // leveList.forEach(zoamTemplate);
  });

function parameciaTemplate(paramecia) {
  let div = document.createElement("div");
  div.classList.add("card", "swiper-slide");
  let div1 = document.createElement("div");
  div1.classList.add("face", "face1");
  let div2 = document.createElement("div");
  div2.setAttribute("class", "content");
  let img = document.createElement("img");
  img.setAttribute("src", paramecia.image);
  img.setAttribute("alt", paramecia.name);
  let h3 = document.createElement("h3");
  h3.setAttribute("class", "subtittle");
  let div3 = document.createElement("div");
  div3.classList.add("face", "face2");
  let div4 = document.createElement("div");
  div4.setAttribute("class", "content");
  let h4 = document.createElement("h4");
  h4.setAttribute("class", "subtittle");
  let p = document.createElement("p");
  p.setAttribute("class", "home-text");
  //  VALUING CONTENTS
  h3.textContent = paramecia.name;
  h4.textContent = paramecia.user;
  p.textContent = paramecia.description;

  // APPENDING CONTENTS
  div.appendChild(div1);
  div.appendChild(div3);
  div1.appendChild(div2);
  div2.appendChild(img);
  div2.appendChild(h3);
  div3.appendChild(div4);
  div4.appendChild(h4);
  div4.appendChild(p);

  parameciaDiv.appendChild(div);
}

// function logiaTemplate(item) {
//   let div = document.createElement("div");
//   div.classList.add('card2', 'swiper-slide');
//   let div1 = document.createElement("div");
//   div1.classList.add('face', 'face1');
//   let div2 = document.createElement("div");
//   div2.setAttribute("class", "content");
//   let img = document.createElement("img");
//   img.setAttribute("src", item.logia.image);
//   img.setAttribute("alt", item.logia.name);
//   let h3 = document.createElement("h3");
//   let div3 = document.createElement("div");
//   div3.classList.add('face', 'face1');
//   let div4 = document.createElement("div");
//   div4.setAttribute("class", "content");
//   let h4 = document.createElement("h4");
//   let p = document.createElement("p");

//   //  VALUING CONTENTS
//   h3.textContent = item.logia.name;
//   h4.textContent = item.logia.user;
//   p.textContent = item.logia.description;

//   // APPENDING CONTENTS
//   div.appendChild(div1);
//   div.appendChild(div3);
//   div1.appendChild(div2);
//   div2.appendChild(img);
//   div2.appendChild(h3);
//   div3.appendChild(div4);
//   div4.appendChild(h4);
//   div4.appendChild(p);

//   // logiaDiv.appendChild(div);
// }
// function zoamTemplate(item) {
//   let div = document.createElement("div");
//   div.setAttribute("class", "card2");
//   div.setAttribute("class", "swiper-slide");
//   let div1 = document.createElement("div");
//   div1.setAttribute("class", "face");
//   div1.setAttribute("class", "face1");
//   let div2 = document.createElement("div");
//   div2.setAttribute("class", "content");
//   let img = document.createElement("img");
//   img.setAttribute("src", item.zoam.model.image);
//   img.setAttribute("alt", item.zoam.name + "Model: " + item.zoam.model.nick);
//   let h3 = document.createElement("h3");
//   let div3 = document.createElement("div");
//   div3.setAttribute("class", "face");
//   div3.setAttribute("class", "face2");
//   let div4 = document.createElement("div");
//   div4.setAttribute("class", "content");
//   let h4 = document.createElement("h4");
//   let h41 = document.createElement("h4");
//   let p = document.createElement("p");

//   //  VALUING CONTENTS
//   h3.textContent = item.zoam.name;
//   h41.textContent = "Model: " + item.zoam.model.nick;
//   h4.textContent = item.zoam.model.user;
//   p.textContent = item.zoam.model.desc;

//   // APPENDING CONTENTS
//   div.appendChild(div1);
//   div.appendChild(div3);
//   div1.appendChild(div2);
//   div2.appendChild(img);
//   div2.appendChild(h3);
//   div3.appendChild(div4);
//   div4.appendChild(h41);
//   div4.appendChild(h4);
//   div4.appendChild(p);

//   zoanDiv.appendChild(div);
// }
