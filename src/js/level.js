import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter().then();

const path = "../json/level.json";
const cardSection = document.querySelector(".card");

fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const leveList = data;
    console.table(data);
    leveList.forEach(levelCardTemplate);
  });

function levelCardTemplate(item) {
  let div = document.createElement("div");
  div.setAttribute("class", "level-section");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "card-side1");
  let section = document.createElement("section");
  section.setAttribute("class", "welcome-banner1");
  let img = document.createElement("img");
  img.setAttribute("src", item.image);
  img.setAttribute("class", "intro-img");
  img.setAttribute("alt", item.name);
  let hr = document.createElement("hr");
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "subtittle");
  let p = document.createElement("p");
  p.setAttribute("class", "home-text");

  h1.textContent = item.name;
  p.textContent = item.description;

  div.appendChild(div1);
  div1.appendChild(section);
  section.appendChild(hr);
  section.appendChild(img);
  section.appendChild(h1);
  section.appendChild(p);

  cardSection.appendChild(div);

  // return `<div class="level-section">
  //         <div class="card-side1">
  //           <section class="welcome-banner1">
  //             <img
  //               class="intro-img"
  //               src= "${item.image}"
  //               alt="${item.name}"
  //             />
  //             <hr />
  //             <h1 class="subtittle">${item.name}</h1>
  //             <hr />
  //             <p class="home-text">
  //               ${item.description}
  //             </p>
  //           </section>
  //         </div>
  //         </div>`;
}
