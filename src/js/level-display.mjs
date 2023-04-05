export default class levelDisplay {
    constructor(power, data){
        this.power = power;
        this.data = data;
        
    }
    async init() {
        this.characterLevelDisplay(this.power, this.data);
      }
      characterLevelDisplay(power,data){
        const charLevel = document.getElementById("char-level");
        const charImg = document.getElementById("level-pic");
        const usopp = document.getElementById("usopp");
        const charDecription = document.getElementById("char-description");
        // KING PIRATE LEVEL
        if (power >= 27000){
          charLevel.textContent = data[8].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[8].image);
          img.setAttribute("alt", data[8].name);
          img.setAttribute("class", "level-pic");
          charDecription.textContent = data[8].description;
          charImg.appendChild(img);
          // YONKOU
      } else if (power >= 25000){
        charLevel.textContent = data[7].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[7].image);
          img.setAttribute("alt", data[7].name);
          img.setAttribute("class", "level-pic");
          charDecription.textContent = data[7].description;
          charImg.appendChild(img);
          // ADMIRAL
      }else if (power >= 22000){
        charLevel.textContent = data[6].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[6].image);
          img.setAttribute("alt", data[6].name);
          img.setAttribute("class", "level-pic");
          charDecription.textContent = data[6].description;
          charImg.appendChild(img);
          // SHICHIBUKAI
      }else if (power >= 19000){
        charLevel.textContent = data[5].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[5].image);
          img.setAttribute("alt", data[5].name);
          img.setAttribute("class", "level-pic");
          charDecription.textContent = data[5].description;
          charImg.appendChild(img);
          // YONKOU COMMANDER
      }else if (power >= 16000){
        charLevel.textContent = data[4].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[4].image);
          img.setAttribute("alt", data[4].name);
          img.setAttribute("class", "level-pic");
          charDecription.textContent = data[4].description;
          charImg.appendChild(img);
          // VICE ADMIRAL
      }else if (power >= 13000){
        charLevel.textContent = data[3].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[3].image);
          img.setAttribute("alt", data[3].name);
          img.setAttribute("class", "level-pic");
          charImg.appendChild(img);
          let img1 = document.createElement("img");
          img1.setAttribute("src", data[9].image);
          img1.setAttribute("alt", data[9].name);
          img1.setAttribute("class", "level-picture");
          usopp.appendChild(img1);
          charDecription.textContent = data[3].description;
          // SUPERNOVA
      }else if (power >= 10000){
        charLevel.textContent = data[2].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[2].image);
          img.setAttribute("alt", data[2].name);
          img.setAttribute("class", "level-pic");
          charImg.appendChild(img);
          charDecription.textContent = data[2].description;
          // A CREW MEMBER
      }else if (power >= 7000){
        charLevel.textContent = data[1].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[1].image);
          img.setAttribute("alt", data[1].name);
          img.setAttribute("class", "level-pic");
          charImg.appendChild(img);
          charDecription.textContent = data[1].description;
          let img1 = document.createElement("img");
          img1.setAttribute("src", data[9].image);
          img1.setAttribute("alt", data[9].name);
          img1.setAttribute("class", "level-picture");
          usopp.appendChild(img1);
          // SÃO CHARLOS
      }else if (power >= 4000 || power < 4000){
        charLevel.textContent = data[0].name;
          let img = document.createElement("img");
          img.setAttribute("src", data[0].image);
          img.setAttribute("alt", data[0].name);
          img.setAttribute("class", "level-pic");
          charDecription.textContent = data[0].description;
          let img1 = document.createElement("img");
          img1.setAttribute("src", data[9].image);
          img1.setAttribute("alt", data[9].name);
          img1.setAttribute("class", "level-picture");
          usopp.appendChild(img1);
          charImg.appendChild(img);
      }
    }
}