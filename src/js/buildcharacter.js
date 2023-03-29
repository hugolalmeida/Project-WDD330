import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter().then();

const path = "../public/json/race.json"

// BUTTONS////////
const next = document.querySelector(".next");
const start = document.querySelector(".start");

// SECTIONS
const genderSection = document.querySelector(".build-section");
const welcomeSection = document.querySelector(".welcome-build");
const generalSection = document.querySelector(".general-section");
const raceSection = document.querySelector(".race-section");
const races = document.getElementById("races");


start.addEventListener("click", function(){
welcomeSection.style.display = "none";
genderSection.style.display ="flex";
});
genderSection.innerHTML = genderTemplate();
generalSection.appendChild(genderSection);  


fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let raceList = data["race"];
    console.table(data); 
    raceList.forEach(raceTemplate);
    // next.addEventListener("click", function(){
        
    // });
  });
  



function genderTemplate(){
    const gender = `
            <label id="name">
                Name: <br><input type="text" required>
            </label>
            <h2>Gender</h2>
            <div class="gender-choice">
            <div id="male">
                <label>
                    <input type="radio" name="gender" value="male" required><span>Male</span>
                </label>
            </div>
            <div id="female">
                <label>
                    <input type="radio" name="gender" value="female" required><span>Female</span>
                </label>
            </div>
        </div>
        <div class="buttons">
        <div class="next">
            <button id="bnext">Next</button>
            </div>
            <div class="preview">
            <button >Preview</button>
            </div>
            </div>`;
        return gender;
}
let checkId = 1;
function raceTemplate(data){
    
    
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", `myCheckbox${checkId}`);
    input.setAttribute("name", "race");
    let label = document.createElement("label");
    label.setAttribute("class", "check-img");
    label.setAttribute("for",`myCheckbox${checkId}`);
    let img = document.createElement("img");
    img.setAttribute("src", data.image);
    img.setAttribute("alt", data.name);
    let div = document.createElement("div");
    div.setAttribute("class", "price");
    let img1 = document.createElement("img");
    img1.setAttribute("src", "../public/images/Berrysymbol.svg.png");
    img1.setAttribute("alt", "berry");
    img1.setAttribute("class", "berry-icon");
    let span = document.createElement("span");
    

    label.innerHTML = `${data.name}<br>`;
    span.textContent = data.price;

    li.appendChild(input);
    li.appendChild(label);
    label.appendChild(img);
    div.appendChild(img1);
    div.appendChild(span);
    li.appendChild(div);
    races.appendChild(li);
    
    if (checkId != 0){
        checkId += 1;
    };
// const race = `<li>
//       <input type="radio" id="myCheckbox1" name="race">
//       <label class="check-img" for="myCheckbox1"> <img src="${data.image}" alt="${data.name}"> <br> ${data.name}</label> 
//     </li>`;
    
    // races.appendChild(race);
}


// function getData(path, object){
//     fetch(path)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     let list = data[object];
//     console.table(data);
//     return list;
    
//   });
  
// }