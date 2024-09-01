const nums = [10, 20, 30];
const nums2 = [1, 20, 22, 24, 5];
const strings1 = ['hi', 'hello', 'good'];

nums[nums.length-1] = 99;

console.log(nums);

function getLastValue(array){
  console.log(array[array.length-1]);
}

getLastValue(nums);
getLastValue(nums2);
getLastValue(strings1);

function arraySwap(array){
  let firstIndex = array[0];
  let lastIndex = array[array.length-1];

  array[0] = lastIndex;
  array[array.length-1] = firstIndex;

  console.log(array);
}

arraySwap(nums);
arraySwap(nums2);
arraySwap(strings1);

for(let i = 0; i <= 10; i += 2){
  console.log(i);
  i == 10 && console.log('End of 11d');
}

for(let i = 5; i >= 0; i --){
  console.log(i);
  i == 0 && console.log('End of 11e');
}

let i11d = 0;

while(i11d <= 10){
  console.log(i11d)
  i11d == 10 && console.log('End of 11f 1st Loop');
  i11d += 2;
}

let i11e = 5; 

while(i11e >= 0){
  console.log(i11e);
  i11e == 0 && console.log('End of 11f 2nd Loop');
  i11e --;
}

function addOne(array){
  const newArray = [];
  for(let i = 0; i < array.length; i++ ){
    const newValue = array[i] + 1;
    newArray.push(newValue);
  }

  console.log(newArray);
}

nums3 = [1,2,3];
nums4 = [-2, -1, 0, 99];

addOne(nums3);
addOne(nums4);

function addNum(array, num){
  const newArray = [];
  for(let i= 0; i < array.length; i++){
    const newValue = array[i] + num;
    newArray.push(newValue);
  }
  console.log(newArray);
}

addNum(nums3, 2);
addNum(nums3, 3);
addNum(nums4, 2);

function addArrays(array1, array2){
  let newArray = [];
  for(let i = 0; i < array1.length; i++){
    let newValue = array1[i] + array2[i]; 
    newArray.push(newValue);
  }
  console.log(newArray);
}

const array3 = [1, 1, 2];
const array4 = [1, 1, 3];
const array5 = [1, 2, 3];
const array6 = [4, 5, 6];

addArrays(array3, array4);
addArrays(array5, array6);

function countPositive(nums){
  let positiveNums = 0;
  for(let i = 0; i < nums.length; i++){
    nums[i] > 0 && positiveNums ++;
  }
  console.log(positiveNums);
}

nums5 = [1, -3, 5];
nums6 = [-2, 3, -5, 7, 10];

countPositive(nums5);
countPositive(nums6);

function minMax(nums){
  if (nums == false) {
    return console.log('min: null, max: null')
  }
  
  let min = nums[0];
  let max = nums[0];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] <= min){
      min = nums[i];
    } else if(nums[i] >= max){
      max = nums[i];
    }
  }
  console.log(`min:${min}, max:${max}`);
}

minMax(nums5);
minMax(nums6);
minMax([]);
minMax([3]);

function countWords(words){
  const wordObject = {};
  for(i=0; i < words.length; i++){
    const word = words[i];

    if(wordObject[word]){
      wordObject[word]++;
    } else{
      wordObject[word] = 1;
    }
  }

  console.log(wordObject);
}

const words = ['apple', 'grape', 'apple', 'apple'];

countWords(words);


function searchForSearch(searchArray){
  let searchIndex = '';
  
  for(let i = 0; i < searchArray.length; i++){
    if(searchArray[i] == 'search') {
      searchIndex = i;
      break;
    }
  }
  
  if(searchIndex == ''){
    return console.log(-1);
  }

  return console.log(searchIndex);
}

const searchWord = ['hello','world','search','good','search'];
const searchWord2 = ['not', 'found']

searchForSearch(searchWord);
searchForSearch(searchWord2);

function findIndex(array, word){
  let arrayIndex = '';
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      arrayIndex = i;
      break;
    }
  }
  if(arrayIndex == ''){
    return console.log(-1);
  }

  return console.log(arrayIndex);
}

function unique(array){
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    const word = array[i];
    if(newArray.includes(word)){
      continue
    }else{
      newArray.push(word);
    }
  }

  return console.log(newArray);
}

const colors = ['green','red','blue','red'];
const colors2 = ['green','red','blue','red'];
const colors3 = ['red','green','green','red'];

findIndex(colors,'red');
findIndex(colors,'yellow');
unique(colors2);
unique(colors3);

function removeEgg(foods){
  const noEggFood = [];
  for(let i = 0; i < foods.length; i++){
    if(foods[i] == 'egg'){
      continue
    } else {
      noEggFood.push(foods[i]); 
    }
  }
  console.log(noEggFood);
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];

removeEgg(foods);

function removeFirstTwoEggs(foods){
  let eggCount = 0;
  const reduceEggFood = [];
  for(let i = 0; i < foods.length; i++){
    if(foods[i] == 'egg' && eggCount != 2){
      eggCount++;
      continue;
    } else if (eggCount == 2){
      reduceEggFood.push(foods[i]);
    } else {
      reduceEggFood.push(foods[i]);
    }
  }

  return console.log(reduceEggFood);
}

removeFirstTwoEggs(foods);

function removeLastTwoEggs(foods){
  let reversefood = foods.slice();
  reversefood = reversefood.reverse();

  let eggCount = 0;
  const reduceEggFood = [];
  
  for(let i = 0; i < reversefood.length; i++){
    if(reversefood[i] == 'egg' && eggCount != 2){
      eggCount++;
      continue;
    } else if (eggCount == 2){
      reduceEggFood.push(reversefood[i]);
    } else {
      reduceEggFood.push(reversefood[i]);
    }
  }

  return console.log(reduceEggFood.reverse());
}


removeLastTwoEggs(foods);
console.log(foods);

function FizzBuzz(){
  const fizzBuzzArray = [];
  for(let i = 1; i <= 20; i++){
    if( i % 5 === 0 && i % 3 ===0 ){
      fizzBuzzArray.push('FizzBuzz');
    } else if(i % 3 === 0){
      fizzBuzzArray.push('Fizz');
    } else if (i % 5 === 0){
      fizzBuzzArray.push('Buzz');
    } else {
      fizzBuzzArray.push(i);
    }
  }
  return console.log(fizzBuzzArray);
}

FizzBuzz();
