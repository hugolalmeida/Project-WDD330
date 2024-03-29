let slideInd = 0;

export function showSlides() { 
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInd++;
  if (slideInd > slides.length) {
    slideInd = 1;
  }
  // let randomImg = Math.floor(Math.random() * slides.length);
  slides[slideInd - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if(callback) {
      callback(data);
  }
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#main-footer");
  
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

// save data to local storage
export function setLocalStorage(key, data) {
  const storageData = {
    data: data
  };
  localStorage.setItem(key, JSON.stringify(storageData));
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  const storageData = JSON.parse(localStorage.getItem(key));
  if (storageData === null) {
    return null;
  }
  return storageData.data;
}


export function sumList(list){
  let total = 0;
  for(let i=0; i<list.length;i++){
    
    total += list[i];
  }
  
  
  return total;
}