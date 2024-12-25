/// detecting button press
for ( var i=0; i < document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    var buttonInnerHTML = this.innerHTML ;

   makeSound (buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);
});

}




//detecting keyboard press


document.addEventListener("keydown",function(event){
    makeSound(event.key);// when a function called event is runned it has many props. Key is one of them. If key equals to input, then it is detected.
    buttonAnimation(event.key);
});

//create a function which should make a sound whenever some action is done 
function makeSound(key){

//using switch-case to get audio as per the input 
    switch (key) {
        case "w":
            var crash = new Audio ('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio ('sounds/kick-bass.mp3');
            kick.play();  
            break;  
         case "s":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();  
            break; 
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio ('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            break;
    }



}

// create a function for animation
function buttonAnimation(currentKey){

    var activeKey = document.querySelector("." + currentKey)

    // add class pressed ( see the properties in the css file).
    activeKey.classList.add("pressed");

    // setting a timeout function ( creating a function i.e., removing the class after 100ms)
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100); 
}
