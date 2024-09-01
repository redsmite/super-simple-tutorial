function testClassList(){
  const button = document.querySelector('.js-button');
    
    if (button.classList.contains('js-button')) {
        console.log("The button has the 'js-button' class.");
    } else {
        console.log("The button does not have the 'js-button' class.");
    }
}

function clickToggle(className){
  let button = document.querySelector(`.${className}`);

  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
}