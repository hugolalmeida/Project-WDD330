import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter().then();

const path = "../json/race.json";
const path1 = "../json/akumanomi.json";
// BUTTONS////////
const nRaceButton = document.querySelector(".next1");
const nProfessionButton = document.querySelector(".next2");
const nStyleButton = document.querySelector(".next3");
const nFruitButton = document.querySelector(".next4");
const start = document.querySelector(".start");

// SECTIONS
const genderSection = document.querySelector(".build-section");
const welcomeSection = document.querySelector(".welcome-build");
// const generalSection = document.querySelector(".general-section");
const raceSection = document.querySelector(".race-section");
const races = document.getElementById("races");
const professionSection = document.querySelector(".profession-section");
const professions = document.getElementById("professions");
const styleSection = document.querySelector(".style-section");
const styles = document.getElementById("styles");
const parameciaSection = document.querySelector(".paramecia-section");
const paramecias = document.getElementById("paramecias");
const logiaSection = document.querySelector(".logia-section");
const logias = document.getElementById("logias");
const zoamSection = document.querySelector(".zoam-section");
const zoams = document.getElementById("zoams");

start.addEventListener("click", function () {
  welcomeSection.style.display = "none";
  genderSection.style.display = "flex";
});
genderSection.innerHTML = genderTemplate();
genderSection.querySelector(".next").addEventListener("click", function () {
  genderSection.style.display = "none";
  raceSection.style.display = "block";
});

nRaceButton.addEventListener("click", function () {
  raceSection.style.display = "none";
  professionSection.style.display = "block";
});
nProfessionButton.addEventListener("click", function () {
  professionSection.style.display = "none";
  styleSection.style.display = "block";
});
nStyleButton.addEventListener("click", function () {
  styleSection.style.display = "none";
  parameciaSection.style.display = "block";
  logiaSection.style.display = "block";
  zoamSection.style.display = "block";
});

fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let raceList = data["race"];
    let professionList = data["profession"];
    let styleList = data["style"];
    console.table(data["style"]);
    raceList.forEach(raceTemplate);
    professionList.forEach(professionTemplate);
    styleList.forEach(styleTemplate);
  });

fetch(path1)
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

function genderTemplate() {
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
        <button class="next">Next</button>
 `;

  return gender;
}
let checkId = 1;
function raceTemplate(data) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("id", `myCheckbox${checkId}`);
  input.setAttribute("name", "race");
  let label = document.createElement("label");
  label.setAttribute("class", "check-img");
  label.setAttribute("for", `myCheckbox${checkId}`);
  let img = document.createElement("img");
  img.setAttribute("src", data.image);
  img.setAttribute("alt", data.name);
  let div = document.createElement("div");
  div.setAttribute("class", "price");
  let img1 = document.createElement("img");
  img1.setAttribute("src", "../images/Berrysymbol.svg.png");
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

  if (checkId != 0) {
    checkId += 1;
  }
}

let checkId1 = 1;
function professionTemplate(data) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `myCheckboxx${checkId1}`);
  input.setAttribute("name", "profession");
  let label = document.createElement("label");
  label.setAttribute("class", "check-img");
  label.setAttribute("for", `myCheckboxx${checkId1}`);
  let img = document.createElement("img");
  img.setAttribute("src", data.image);
  img.setAttribute("alt", data.name);
  let div = document.createElement("div");
  div.setAttribute("class", "price");
  let img1 = document.createElement("img");
  img1.setAttribute("src", "../images/Berrysymbol.svg.png");
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
  professions.appendChild(li);

  if (checkId1 != 0) {
    checkId1 += 1;
  }
}

let checkId2 = 1;
function styleTemplate(data) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("id", `myCheckboxxx${checkId2}`);
  input.setAttribute("name", "fighting-style");
  let label = document.createElement("label");
  label.setAttribute("class", "check-img");
  label.setAttribute("for", `myCheckboxxx${checkId2}`);
  let img = document.createElement("img");
  img.setAttribute("src", data.image);
  img.setAttribute("alt", data.name);
  let div = document.createElement("div");
  div.setAttribute("class", "price");
  let img1 = document.createElement("img");
  img1.setAttribute("src", "../images/Berrysymbol.svg.png");
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
  styles.appendChild(li);

  if (checkId2 != 0) {
    checkId2 += 1;
  }
}

let checkId3 = 1;
function parameciaTemplate(data) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("id", `myCheckboxf${checkId3}`);
  input.setAttribute("name", "akuma-no-mi");
  let label = document.createElement("label");
  label.setAttribute("class", "check-img");
  label.setAttribute("for", `myCheckboxf${checkId3}`);
  let img = document.createElement("img");
  img.setAttribute("src", data.image);
  img.setAttribute("alt", data.name);
  let div = document.createElement("div");
  div.setAttribute("class", "price");
  let img1 = document.createElement("img");
  img1.setAttribute("src", "../images/Berrysymbol.svg.png");
  img1.setAttribute("alt", "berry");
  img1.setAttribute("class", "berry-icon");
  let span = document.createElement("span");

  label.innerHTML = `${data.name}<br>`;
  //   span.textContent = data.price;

  li.appendChild(input);
  li.appendChild(label);
  label.appendChild(img);
  div.appendChild(img1);
  div.appendChild(span);
  li.appendChild(div);
  paramecias.appendChild(li);

  if (checkId3 != 0) {
    checkId3 += 1;
  }
}
function logiaTemplate(data) {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("id", `myCheckboxf${checkId3}`);
  input.setAttribute("name", "akuma-no-mi");
  let label = document.createElement("label");
  label.setAttribute("class", "check-img");
  label.setAttribute("for", `myCheckboxf${checkId3}`);
  let img = document.createElement("img");
  img.setAttribute("src", data.image);
  img.setAttribute("alt", data.name);
  let div = document.createElement("div");
  div.setAttribute("class", "price");
  let img1 = document.createElement("img");
  img1.setAttribute("src", "../images/Berrysymbol.svg.png");
  img1.setAttribute("alt", "berry");
  img1.setAttribute("class", "berry-icon");
  let span = document.createElement("span");

  label.innerHTML = `${data.name}<br>`;
  // span.textContent = data.price;

  li.appendChild(input);
  li.appendChild(label);
  label.appendChild(img);
  div.appendChild(img1);
  div.appendChild(span);
  li.appendChild(div);
  logias.appendChild(li);

  if (checkId3 != 0) {
    checkId3 += 1;
  }
}
function zoamTemplate(data) {
  const models = data.model;

  for (const model of models) {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", `myCheckboxf${checkId3}`);
    input.setAttribute("name", "akuma-no-mi");
    let label = document.createElement("label");
    label.setAttribute("class", "check-img");
    label.setAttribute("for", `myCheckboxf${checkId3}`);
    let img = document.createElement("img");
    img.setAttribute("src", model.image);
    img.setAttribute("alt", data.name + "Model: " + model.nick);
    let div = document.createElement("div");
    div.setAttribute("class", "price");
    let img1 = document.createElement("img");
    img1.setAttribute("src", "../images/Berrysymbol.svg.png");
    img1.setAttribute("alt", "berry");
    img1.setAttribute("class", "berry-icon");
    let span = document.createElement("span");

    label.innerHTML = `${data.name} <br> ${model.nick}<br>`;
    // span.textContent = model.price;

    li.appendChild(input);
    li.appendChild(label);
    label.appendChild(img);
    div.appendChild(img1);
    div.appendChild(span);
    li.appendChild(div);
    zoams.appendChild(li);

    if (checkId3 != 0) {
      checkId3 += 1;
    }
  }
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
