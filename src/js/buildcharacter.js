import { loadHeaderFooter } from "./util.mjs";
import { setLocalStorage, getLocalStorage } from "./util.mjs";

loadHeaderFooter().then();

const path = "../json/race.json";
const path1 = "../json/akumanomi.json";
// BUTTONS////////
const nRaceButton = document.querySelector(".next1");
const nProfessionButton = document.querySelector(".next2");
const nStyleButton = document.querySelector(".next3");
const nFruitButton = document.querySelector(".next4");
const nHakiButton = document.querySelector(".next5");
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
const akumanomiSection = document.querySelector(".akuma-no-mi");
const parameciaSection = document.querySelector(".paramecia-section");
const paramecias = document.getElementById("paramecias");
const logiaSection = document.querySelector(".logia-section");
const logias = document.getElementById("logias");
const zoamSection = document.querySelector(".zoam-section");
const zoams = document.getElementById("zoams");
const hakiSection = document.querySelector(".haki-div");
const hakis = document.querySelector(".hakis");

const money = document.querySelector(".berries");
money.textContent = 120000;

akumanomiSection.appendChild(parameciaSection);
akumanomiSection.appendChild(logiaSection);
akumanomiSection.appendChild(zoamSection);

start.addEventListener("click", function () {
  welcomeSection.style.display = "none";
  genderSection.style.display = "flex";
});
genderSection.innerHTML = genderTemplate();
genderSection.querySelector(".next").addEventListener("click", function () {
  let myName = userName.value;
  userName.value = "";
  let charGender = [];
  setLocalStorage("user-name", myName);
  let selectedCheckBoxes = selectedBoxesRadio(this.form);
  charGender.push(selectedCheckBoxes);
  setLocalStorage("gender", charGender);
  genderSection.style.display = "none";
  raceSection.style.display = "block";
});

nStyleButton.addEventListener("click", function () {
  styleSection.style.display = "none";
  akumanomiSection.style.display = "flex";
});
nFruitButton.addEventListener("click", function () {
  akumanomiSection.style.display = "none";
  hakiSection.style.display = "flex";
});
nHakiButton.addEventListener("click", function () {
  document.location.href = "../buildchar/charactersheet.html";
});
// LIST TO PUT IN STORAGE
const userName = document.querySelector(".name");
const powerList = [];
const priceList = [];

// FETCH PATHS

fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const raceList = data["race"];
    const professionList = data["profession"];
    const styleList = data["style"];
    const hakiList = data["haki"];
    console.table(data["style"]);
    raceList.forEach(raceTemplate);
    professionList.forEach(professionTemplate);
    styleList.forEach(styleTemplate);
    hakiList.forEach(hakiTemplate);
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

fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let profList = data["profession"];
    let raceList = data["race"];
    let styleList = data["style"];
    let hakiList = data["haki"];
    console.table(data);
    // BUTTON TO PUSH ALL ELEMENTS SELECTED INTO THE LOCAL STORAGE
    nProfessionButton.addEventListener("click", function () {
      professionSection.style.display = "none";
      styleSection.style.display = "flex";
      let selectedCheckBoxes = selectedBoxes(this.form);
      const professionList = [];

      profList.forEach(function (r, k) {
        if (selectedCheckBoxes.includes(r.name)) {
          professionList.push(r.name);
          powerList.push(r.power);
          priceList.push(r.price);
          setLocalStorage("profession", professionList);
          setLocalStorage("power", powerList);
          setLocalStorage("price", priceList);
        } else {
          return false;
        }
      });
    });

    nRaceButton.addEventListener("click", function () {
      raceSection.style.display = "none";
      professionSection.style.display = "block";
      let selectedCheckBoxesr = selectedBoxesRadio(this.form);
      const races = [];
      raceList.forEach(function (r, k) {
        if (selectedCheckBoxesr.includes(r.name)) {
          races.push(r.name);
          powerList.push(r.power);
          priceList.push(r.price);
          setLocalStorage("race", races);
          setLocalStorage("power", powerList);
          setLocalStorage("price", priceList);
        } else {
          return false;
        }
      });
    });
  });

function genderTemplate() {
  const gender = `
            <label id="name">
                Name: <br><input class="name" type="text"  required>
            </label>
            <h2>Gender</h2>
            <div class="gender-choice">
            <div id="male">
                <label>
                    <input type="radio" name="gender" value="male" ><span>Male</span>
                </label>
            </div>
            <div id="female">
                <label>
                    <input type="radio" name="gender" value="female"><span>Female</span>
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
  input.setAttribute("value", data.name);
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
  input.setAttribute("class", "checkStorage");
  input.setAttribute("name", "profession");
  input.setAttribute("value", data.name);
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
  input.setAttribute("value", data.name);
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
  input.setAttribute("value", data.name);
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
  span.textContent = data.price;

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
  input.setAttribute("value", data.name);
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
  span.textContent = data.price;

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
    input.setAttribute("value", data.name);
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
    span.textContent = model.price;

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

function hakiTemplate(data) {
  const levels = data.level;
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  div.setAttribute("class", "haki-type");
  div.appendChild(h2);
  for (const level of levels) {
    let label = document.createElement("label");
    label.setAttribute("class", "label");
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", data.name);
    let span1 = document.createElement("span");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "price");
    let img1 = document.createElement("img");
    img1.setAttribute("src", "../images/Berrysymbol.svg.png");
    img1.setAttribute("alt", "berry");
    img1.setAttribute("class", "berry-icon");
    let span = document.createElement("span");

    span1.textContent = level.name;
    span.textContent = level.price;

    div.appendChild(label);
    label.appendChild(input);
    label.appendChild(span1);
    div.appendChild(div1);
    div1.appendChild(img1);
    div1.appendChild(span);
  }
  h2.textContent = data.name;
  hakis.appendChild(div);
}

function selectedBoxes(form) {
  let selectedBoxesArr = [];
  let inputFields = form.getElementsByTagName("input");
  let inputFieldsNumber = inputFields.length;

  for (let i = 0; i < inputFieldsNumber; i++) {
    if (inputFields[i].type == "checkbox" && inputFields[i].checked == true)
      selectedBoxesArr.push(inputFields[i].value);
  }
  return selectedBoxesArr;
}
function selectedBoxesRadio(form) {
  let selectedBoxesArr = [];
  let inputFields = form.getElementsByTagName("input");
  let inputFieldsNumber = inputFields.length;

  for (let i = 0; i < inputFieldsNumber; i++) {
    if (inputFields[i].type == "radio" && inputFields[i].checked == true)
      selectedBoxesArr.push(inputFields[i].value);
  }
  return selectedBoxesArr;
}
