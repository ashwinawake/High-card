
const randomElement = document.querySelector(".computer p");
let randomName = {};

function getRandomName(){
  let api = `https://uinames.com/api/`;
  fetch(api)
  .then((response)=>{
    let data = response.json();
    return data;
  }).then((data)=>{
    randomName.name = data.name;
  }).then(()=>{
    displayRandomname(randomName.name);
  });
}

function displayRandomname(name) {
  randomElement.innerHTML = `${name}`;
}

getRandomName();
