
  
  export default class ProductData  {
    constructor(category) {
      this.category = category;
      this.path = `../public/json/${this.category}.json`;
    }
    getData() {
     return fetch(this.path)
  .then(function (response) {
    return response.json();
  })
  .then((data) => data)

    }
    
    
}