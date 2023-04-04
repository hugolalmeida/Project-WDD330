import { loadHeaderFooter,  getLocalStorage, sumList} from "./util.mjs";
import levelDisplay from "./level-display.mjs";
loadHeaderFooter().then();

// PATH
const path = "../public/json/level.json";

// LOCALSTORAGE ITENS
const userName = document.getElementById("user-name");
const userGender = document.getElementById("gender");
const userPower = document.getElementById("power");
const userRace = document.getElementById("race");
const userProfession = document.getElementById("profession");
const fStyle = document.getElementById("f-style");
const akumaNoMi = document.getElementById("akumanomi");
const haki = document.getElementById("haki");
const hakiLevel = document.getElementById("h-level");

const model = document.getElementById("model");


// GET DATAS FROM LOCALSTORAGE
let powerList = getLocalStorage("power");
let profList = getLocalStorage("profession");
let hakiList = getLocalStorage("hakis");
let hakiLevelList = getLocalStorage("haki-level");

userName.textContent = getLocalStorage("user-name");
userGender.textContent = getLocalStorage("gender");
userRace.textContent = getLocalStorage("race");
akumaNoMi.textContent = getLocalStorage("akuma-no-mi");
model.textContent = getLocalStorage("model");
fStyle.textContent = getLocalStorage("style");
userProfession.textContent = profList.join(" | ");
haki.textContent = hakiList.join(" | ");
hakiLevel.textContent = hakiLevelList.join(" | ");
let totalPower = sumList(powerList);
userPower.textContent = totalPower;


fetch(path)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const levelList = data;
    console.table(data);
    const displayLevel = new levelDisplay(totalPower, levelList);
    displayLevel.init();
  });








