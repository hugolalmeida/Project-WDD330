import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter().then();

const path = "../json/akumanomi.json";
const parameciaDiv = document.querySelector(".fruits");
const logiaDiv = document.querySelector(".fruits1");
const zoanDiv = document.querySelector(".fruits2");

fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const parameciaList = data["paramecia"];
    const logiaList = data["logia"];
    const zoamList = data["zoam"];
    console.table(data);
    parameciaList.forEach(parameciaTemplate);
    logiaList.forEach(logiaTemplate);
    zoamList.forEach(zoamTemplate);
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

function logiaTemplate(logia) {
  let div = document.createElement("div");
  div.classList.add("card", "swiper-slide");
  let div1 = document.createElement("div");
  div1.classList.add("face", "face1");
  let div2 = document.createElement("div");
  div2.setAttribute("class", "content");
  let img = document.createElement("img");
  img.setAttribute("src", logia.image);
  img.setAttribute("alt", logia.name);
  let h3 = document.createElement("h3");
  let div3 = document.createElement("div");
  div3.classList.add("face", "face2");
  let div4 = document.createElement("div");
  div4.setAttribute("class", "content");
  let h4 = document.createElement("h4");
  h4.setAttribute("class", "subtittle");
  let p = document.createElement("p");
  p.setAttribute("class", "home-text");

  //  VALUING CONTENTS
  h3.textContent = logia.name;
  h4.textContent = logia.user;
  p.textContent = logia.description;

  // APPENDING CONTENTS
  div.appendChild(div1);
  div.appendChild(div3);
  div1.appendChild(div2);
  div2.appendChild(img);
  div2.appendChild(h3);
  div3.appendChild(div4);
  div4.appendChild(h4);
  div4.appendChild(p);

  logiaDiv.appendChild(div);
}
function zoamTemplate(zoam) {
  const models = zoam.model;

  for (const model of models) {
    let div = document.createElement("div");
    div.classList.add("card", "swiper-slide");
    let div1 = document.createElement("div");
    div1.classList.add("face", "face1");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "content");
    let img = document.createElement("img");
    img.setAttribute("src", model.image);
    img.setAttribute("alt", zoam.name + "Model: " + model.nick);
    let h3 = document.createElement("h3");
    let div3 = document.createElement("div");
    div3.classList.add("face", "face2");
    let div4 = document.createElement("div");
    div4.setAttribute("class", "content");
    let h41 = document.createElement("h4");
    h41.setAttribute("class", "subtittle");
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "subtittle");
    let p = document.createElement("p");
    p.setAttribute("class", "home-text");

    //  VALUING CONTENTS
    h3.textContent = zoam.name;
    h41.textContent = "Model: " + model.nick;
    h4.textContent = model.user;
    p.textContent = model.desc;

    // APPENDING CONTENTS
    div.appendChild(div1);
    div.appendChild(div3);
    div1.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(h3);
    div3.appendChild(div4);
    div4.appendChild(h41);
    div4.appendChild(h4);
    div4.appendChild(p);

    zoanDiv.appendChild(div);
  }
}
