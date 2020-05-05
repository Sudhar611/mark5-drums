for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playthesound(this.innerHTML);
    buttonanimation(this.innerHTML)
  });
}

document.addEventListener("keydown",function(event){

    playthesound(event.key);
    buttonanimation(event.key)
})

function playthesound(soundselection) {

  switch (soundselection) {
    case "w":
      var au = new Audio("sounds/tom-1.mp3");
      au.play();
      break;
    case "a":
      var au = new Audio("sounds/tom-2.mp3");
      au.play();
      break;
    case "s":
      var au = new Audio("sounds/tom-3.mp3");
      au.play();
      break;
    case "d":
      var au = new Audio("sounds/tom-4.mp3");
      au.play();
      break;
    case "j":
      var au = new Audio("sounds/crash.mp3");
      au.play();
      break;
    case "k":
      var au = new Audio("sounds/kick-bass.mp3");
      au.play();
      break;
    case "l":
      var au = new Audio("sounds/snare.mp3");
      au.play();
      break;
    default:console.log(soundselection);

  }

}

function buttonanimation(selectedbutton){

  var activebutton=document.querySelector("."+selectedbutton);

  activebutton.classList.add("pressed");

  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },200);

}
