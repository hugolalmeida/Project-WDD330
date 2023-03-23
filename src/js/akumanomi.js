import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter().then();

const path = "../json/akumanomi.json";
const parameciaDiv = document.querySelector(".card2-wrapper");
const logiaDiv = document.querySelector(".card3-wrapper");
const zoanDiv = document.querySelector(".card4-wrapper");

fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // const leveList = data;
    console.table(data);
    // leveList.forEach(levelCardTemplate);
  });

function akumanomiTemplate() {
  // <div class="card2 swiper-slide">
  //                 <div class="face face1">
  //                     <div class="content">
  //                         <img src="/baranomi.jpg">
  //                         <h3>Kage Kage no Mi</h3>
  //                     </div>
  //                 </div>
  //                 <div class="face face2">
  //                     <div class="content">
  //                      <h4>Gecko Moriah</h4>
  //                         <p>Gives the user the ability to manifest and control shadows of living creatures, including their own, as physical and tangible forms. The user, becoming a Ruler of Shadows, can steal the shadows of other beings and insert them into different bodies, living or dead, which in the latter case enables the creation of zombies.</p>
  //                     </div>
  //                 </div>
  //             </div>
  //
  //
}
