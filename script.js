const img = document.getElementById('main-img');
const mainHeader = document.getElementById('main-header');
const title = document.getElementById('description');
const placeUrl = document.getElementById('location-url');
const mainBtn = document.getElementById('main-btn');
const secondBtn = document.getElementById('second-btn');
const next = document.getElementById('next-pick');
const finalPick = document.getElementById('final-pick');
const choice1 = document.getElementById('choice-1');
const choice2 = document.getElementById('choice-2');
const choice3 = document.getElementById('choice-3');
const choice4 = document.getElementById('choice-4');



const nextPick = (array) => {
  if(array === activ) {
    randomPlace(food);
  } else if(array === food){
    randomPlace(fun);
  } else {
    finalChoice();
  }
}

const pickAgain = (arr) => {
  if(arr === activ){
    randomPlace(activ);
  } else if (arr === food){
    randomPlace(food);
  } else {
    randomPlace(fun);
  }
}


const finalChoice = ()=> {
  placeUrl.setAttribute('hidden', true);
  mainBtn.setAttribute('hidden', true);
  secondBtn.setAttribute('hidden', true);
  // finalPick.removeAttribute('hidden');
  img.setAttribute('hidden', true);
  title.setAttribute('hidden', true);
  next.setAttribute('hidden', true);
  mainHeader.innerText = 'Your final choice is!';
  choice1.removeAttribute('hidden');
  choice2.removeAttribute('hidden');
  choice4. removeAttribute('hidden');

  choice1.innerText = `Activity: ${choice[0].id} called ${choice[0].name}`;
  choice2.innerText = `Activity: ${choice[1].id} called ${choice[1].name}`;

  if(choice[2]){
    choice3.removeAttribute('hidden');
    choice3.innerText = `Activity: ${choice[2].id} called ${choice[2].name}`;
  }

  choice4.innerText = `Place screen shot this and send it back to the master planner! If you want to do anything different let me know.`;
  
}

const randomPlace = (arr) => {
  let array = arr;
  const pick = Math.floor(Math.random() * array.length);
  img.src = `${array[pick].image}`;
  title.innerText = array[pick].name;
  placeUrl.href = array[pick].url;
  placeUrl.removeAttribute('hidden');
  img.removeAttribute('hidden');
  title.removeAttribute('hidden');
  secondBtn.removeAttribute('hidden');
  
  if(mainBtn.getAttribute('hidden') === true){
    mainBtn.removeAttribute('hidden');
  } else {
    mainBtn.setAttribute('hidden', true)
  }
  
  next.removeAttribute('hidden');
  if(array === fun){
    mainHeader.innerText = 'This one is optional.'
  } else {
    mainHeader.innerText = 'Are you happy with this selection?';
  }
  next.innerText = 'Pick again';
  next.onclick = ()=> randomPlace(array);
  secondBtn.innerText = `Happy with this?`;
  secondBtn.onclick = ()=>{
    choice.push(array[pick]);
    nextPick(array);
  };
  console.log(choice);
  
  
}

function startAdventure(){
  mainHeader.innerText = "Here we go! Hit the random pick button!";
  mainBtn.innerText = 'Random Pick!';
  mainBtn.removeEventListener('click', startAdventure);
  mainBtn.addEventListener('click', () => randomPlace(activ));
  
}


mainBtn.addEventListener('click', startAdventure);
