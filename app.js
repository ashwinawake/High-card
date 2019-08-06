
const randomElement = document.querySelector(".computer p");
const card1Element = document.querySelector(".card1");
const card2Element = document.querySelector(".card2");
let randomName = {};
let bool = false;

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
  getCard();
}

let deck={};

function getCard(){

  let api = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
  fetch(api)
  .then((response)=>{
    let data = response.json();
    return data;
  }).then((data)=>{
    deck.id = data.deck_id;
  }).then(()=>{
    let cardapi = `https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=2`;
    fetch(cardapi)
    .then((response)=>{
       let data1 = response.json();
       return data1;
    }).then((data1)=>{
      deck.image1 = data1.cards[0].image;
      deck.image2 = data1.cards[1].image;
      card1Element.innerHTML = `<img src=${deck.image1}></img>`;
      card2Element.innerHTML = `<img src=${deck.image2}></img>`;
    })
  })
}

getRandomName();
