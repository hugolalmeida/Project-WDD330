import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter().then();

const start = document.querySelector(".start");
const welcomeSection = document.querySelector(".welcome-build");
const generalSection = document.querySelector(".general-section");


start.addEventListener("click", function(){
welcomeSection.style.display = "none";
     generalSection.innerHTML = genderTemplate();

});




function genderTemplate(){
    const gender = `<div class="build-section">
            <form id="form">
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
            <button type="submit" form="form">Next</button>
            </div>
            <div class="preview">
            <button >Preview</button>
            </div>
            </div>
            </form>
        </div> `;
        return gender;
}