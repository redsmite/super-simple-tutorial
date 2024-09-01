const add = function(){
  console.log(2+3);
};

add();
add();

function runTwice(fun){
  fun();
  fun();
}

runTwice(function(){
  console.log('12b');
})
runTwice(add);

document.querySelector('.js-button').addEventListener('click',()=>{
  clickButton();
})

const clickButton = ()=>{
  const buttonElement = document.querySelector('.js-button');
  buttonElement.innerHTML = 'Loading...';
  setTimeout(function(){
    buttonElement.innerHTML='Finished!';
  },1000);
};

let timeoutID;

document.querySelector('.js-cart').addEventListener('click',()=>{
  addtoCart();
})

const addtoCart = ()=>{
  if(timeoutID){
    clearTimeout(timeoutID);
  }
  const message = document.querySelector('.js-message');
  message.innerHTML = 'Added';
  timeoutID = setTimeout(function(){
    message.innerHTML = '';
  }, 2000);
}

let messageCounter = 0;

document.querySelector('.js-add-message').addEventListener('click',()=>{
  addMessageCounter();
});

document.querySelector('.js-remove-message').addEventListener('click',()=>{
  removeMessageCounter();
});

const  addMessageCounter =()=>{
  messageCounter ++;
}

const removeMessageCounter =()=>{
  messageCounter --;
}

setInterval(()=>{
  if(messageCounter > 0){
    document.title = `New Messages (${messageCounter})`;
    setTimeout(function(){
      document.title = 'App';
    },1000)
  }
    
},2000);

const multiply = (param1,param2)=>console.log(param1 * param2);

multiply(2,3);
multiply(7,10);

function countPositive(nums){
  let positiveNum = 0;
  nums.forEach((value)=>{
    value >= 0 && positiveNum ++;
    }
  )
  console.log(positiveNum);
}

countPositive([1,-3,5]);
countPositive([-2,3,-5,7,10]);

function addNum(array,num){
  console.log(array.map(value=> value + num));
}

addNum([1,2,3], 2);
addNum([-2,-1,0,99], 2);

function removeEgg(foods){
  let eggCount = 0; 
  let filteredFood = foods.filter((value)=>{
    if(value === 'egg' && eggCount < 2){
      eggCount++;
      return false;
    }
    return true;
  })
  console.log(filteredFood);
}

removeEgg(['egg','apple','egg','egg','ham']);

