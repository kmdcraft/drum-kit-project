
//setting i < doc....length lets you add more buttons later if needed and you don't have to change any numbers.
   for (let i=0; i<(document.querySelectorAll(".drum").length); i++) {
      document.querySelectorAll("button")[i].addEventListener('click', handleClick);
   }

function handleClick() {
   let audio = new Audio('sounds/tom-1.mp3');
   audio.play();
}