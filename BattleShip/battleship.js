const bubble1 = document.getElementById("bubble1");
const bubble2 = document.getElementById("bubble2");
const buttons = document.getElementsByClassName("button");
const table1 = document.getElementById('table1');
const cellsOne = table1.getElementsByTagName("td");
const replayButton = document.getElementById("buttonReplay");
const gameOverScreen = document.getElementById("gameOver");
const chooseDifficulty = document.getElementById("chooseDifficulty");
const rules = document.getElementById("rules");
const buttonStart = document.getElementById("buttonStart");
const difficultyRules = document.getElementById("difficultyRules");
const quote = document.getElementById("quote");
let numberOfShots = 0;
let maximumShots = 0;
let randomNumber = 1;
let boatsLength = {
    1: 0,
    2: 0,
    3: 0,
};
Object.keys(buttons).map((val, i, arr) => {return buttons[val].addEventListener("click", startBattle)});
replayButton.addEventListener("click", replay);

function createBoat() {
let boatLength = Math.floor(Math.random() * (4 - 2 + 1) + 2)
let rowIndex = Math.floor(Math.random() * 8);
let cellIndex = Math.floor(Math.random() * 8);
let whichDirection = Math.floor(Math.random() * 4)+1;
table1.rows[rowIndex].cells[cellIndex].classList.add("boat" + randomNumber.toString())
table1.rows[rowIndex].cells[cellIndex].innerHTML += randomNumber;


    if (boatLength === 2) {
        switch(whichDirection) {
            case 1://north
                    if (rowIndex === 0) {
                        table1.rows[rowIndex +1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +1].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex -1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex -1].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }
            case 2://south
                    if (rowIndex === 7) {
                        table1.rows[rowIndex -1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex -1].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex +1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +1].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }
            case 3://east
                    if (cellIndex === 7) {
                        table1.rows[rowIndex].cells[cellIndex-1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-1].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex].cells[cellIndex+1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+1].innerHTML += randomNumber;
                        break;
                    }
            case 4://west
                    if (cellIndex === 0) {
                        table1.rows[rowIndex].cells[cellIndex+1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+1].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex].cells[cellIndex-1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-1].innerHTML += randomNumber;
                        break;
                    }
        }//end of switch
};
    if (boatLength === 3) {
       switch(whichDirection) {
            case 1://north
                    if (rowIndex <= 1) {
                        table1.rows[rowIndex +1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +2].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +1].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex +2].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex -1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex -2].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex -1].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex -2].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }
            case 2://south
                    if (rowIndex >= 6) {
                        table1.rows[rowIndex -1].cells[cellIndex].classList.add("boat" + randomNumber.toString()) 
                        table1.rows[rowIndex -2].cells[cellIndex].classList.add("boat" + randomNumber.toString()) 
                        table1.rows[rowIndex -1].cells[cellIndex].innerHTML += randomNumber; 
                        table1.rows[rowIndex -2].cells[cellIndex].innerHTML += randomNumber;   
                        break;
                    }else{
                        table1.rows[rowIndex +1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +2].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +1].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex +2].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }
            case 3://east
                    if (cellIndex >= 6) {
                        table1.rows[rowIndex].cells[cellIndex-1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex-2].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex].cells[cellIndex+1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex+2].innerHTML += randomNumber;
                        break;
                    }
            case 4://west
                    if (cellIndex <= 1) {
                        table1.rows[rowIndex].cells[cellIndex+1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex+2].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex].cells[cellIndex-1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex-2].innerHTML += randomNumber;
                        break;
                    }

        }//end of switch
    };
    if (boatLength === 4) {
       switch(whichDirection) {
            case 1://north
                    if (rowIndex <= 2) {
                        table1.rows[rowIndex +1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +2].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +3].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +1].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex +2].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex +3].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex -1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex -2].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex -3].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex -1].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex -2].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex -3].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }
            case 2://south
                    if (rowIndex >= 5) {
                        table1.rows[rowIndex -1].cells[cellIndex].classList.add("boat" + randomNumber.toString()) 
                        table1.rows[rowIndex -2].cells[cellIndex].classList.add("boat" + randomNumber.toString()) 
                        table1.rows[rowIndex -3].cells[cellIndex].classList.add("boat" + randomNumber.toString()) 
                        table1.rows[rowIndex -1].cells[cellIndex].innerHTML += randomNumber; 
                        table1.rows[rowIndex -2].cells[cellIndex].innerHTML += randomNumber; 
                        table1.rows[rowIndex -3].cells[cellIndex].innerHTML += randomNumber; 
                        break;
                    }else{
                        table1.rows[rowIndex +1].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +2].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +3].cells[cellIndex].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex +1].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex +2].cells[cellIndex].innerHTML += randomNumber;
                        table1.rows[rowIndex +3].cells[cellIndex].innerHTML += randomNumber;
                        break;
                    }
            case 3://east
                    if (cellIndex >= 5) {
                        table1.rows[rowIndex].cells[cellIndex-1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-3].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex-2].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex-3].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex].cells[cellIndex+1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+3].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex+2].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex+3].innerHTML += randomNumber;
                        break;
                    }
            case 4://west
                    if (cellIndex <= 2) {
                        table1.rows[rowIndex].cells[cellIndex+1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+3].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex+1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex+2].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex+3].innerHTML += randomNumber;
                        break;
                    }else{
                        table1.rows[rowIndex].cells[cellIndex-1].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-2].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-3].classList.add("boat" + randomNumber.toString())
                        table1.rows[rowIndex].cells[cellIndex-1].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex-2].innerHTML += randomNumber;
                        table1.rows[rowIndex].cells[cellIndex-3].innerHTML += randomNumber;
                        break;
                    }

        }//end of switch
    };
    
//check collision
let boatsByClass = document.getElementsByClassName("boat" + randomNumber.toString());
for (let i=0; i<boatsByClass.length; i++) {
    if (boatsByClass[i].innerHTML.length > 1) {
        for (let j=0; j<cellsOne.length; j++) {
            cellsOne[j].innerHTML = cellsOne[j].innerHTML.replace(randomNumber.toString(), "");
            cellsOne[j].classList.remove(("boat" + randomNumber.toString()));
        };
        createBoat();
        return;

        
        
    };
};
boatsLength[randomNumber] = boatLength;
randomNumber++
};
function displayBubble2(text, image) {
    bubble2.style.opacity = 1;
    bubble2.style.visibility = "visible";
    document.getElementById("speechInBubble2").innerHTML = text;
    document.getElementById("portrait2").style.backgroundImage = image;
    setTimeout(function(){ bubble2.style.opacity = 0;}, 2000);
};
function displayBubble1(text, image) {
    bubble1.style.opacity = 1;
    bubble1.style.visibility = "visible";
    document.getElementById("speechInBubble1").innerHTML = text;
    document.getElementById("portrait1").style.backgroundImage = image;
    setTimeout(function(){ bubble1.style.opacity = 0;}, 2000);
};
function shotFired(clickedEvent) {
    if (clickedEvent.target.getAttribute("class") == "boat1") {
            clickedEvent.target.classList.add("hited");
            clickedEvent.target.innerHTML = "HIT !";
            clickedEvent.target.removeEventListener("click", shotFired);
            boatsLength[1]--
        if (boatsLength[1] === 0) {displayBubble1("Boat sunked, Captain !", 'url("https://st4.depositphotos.com/20277160/22359/v/1600/depositphotos_223597290-stock-illustration-vector-angry-bearded-pirate-head.jpg")')};
    }else if (clickedEvent.target.getAttribute("class") == "boat2") {
            clickedEvent.target.classList.add("hited");
            clickedEvent.target.innerHTML = "HIT !";
            clickedEvent.target.removeEventListener("click", shotFired);
            boatsLength[2]--
        if (boatsLength[2] === 0) {displayBubble1("Boat sunked, Captain !", 'url("https://st4.depositphotos.com/20277160/22359/v/1600/depositphotos_223597290-stock-illustration-vector-angry-bearded-pirate-head.jpg")')};
    }else if (clickedEvent.target.getAttribute("class") == "boat3") {
            clickedEvent.target.classList.add("hited");
            clickedEvent.target.innerHTML = "HIT !";
            clickedEvent.target.removeEventListener("click", shotFired);
            boatsLength[3]--
        if (boatsLength[3] === 0) {displayBubble1("Boat sunked, Captain !", 'url("https://st4.depositphotos.com/20277160/22359/v/1600/depositphotos_223597290-stock-illustration-vector-angry-bearded-pirate-head.jpg")')};
    }else {
            clickedEvent.target.innerHTML = "Missed !";
            clickedEvent.target.classList.add("missed");
            clickedEvent.target.removeEventListener("click", shotFired);
    }
    numberOfShots++;
    
    switch (true) {
        case (numberOfShots === maximumShots):
            gameOver("You lost !", "url('https://images7.alphacoders.com/291/thumb-1920-291140.jpg')");
            break;
        case (numberOfShots * 2 >= maximumShots && numberOfShots *2 <= maximumShots +1):
            displayBubble2("We have fired half our canonballs, Captain !");
            break;
        case (numberOfShots === maximumShots -5):
            displayBubble2("Five shot left, Captain !")
            break;
        case (boatsLength[1] === 0 && boatsLength[2] === 0 && boatsLength[3] === 0 ):
            document.getElementById("gameOver").style.backgroundSize = "cover";
            gameOver("You won !", "url('http://getwallpapers.com/wallpaper/full/0/a/b/639726.jpg')")
    }

};
function gameOver(output, result) {
Object.keys(cellsOne).map((val, i, arr) => {return cellsOne[val].innerHTML = ""});
Object.keys(cellsOne).map((val, i, arr) => {return cellsOne[val].removeAttribute("class")});
gameOverScreen.style.backgroundImage = result;
gameOverScreen.innerHTML = output;
gameOverScreen.style.opacity = 1;
gameOverScreen.style.visibility = "visible";
replayButton.style.opacity = 1;
replayButton.style.visibility = "visible";
};
function startBattle(clickEvent) {
displayBubble1("Gniaaaaark", 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_cPhXphJYWXkcAYg6JWRmgJ3NtFjgUYq2J5qr6Dd5h9MalFxfw&s")');
Object.keys(cellsOne).map((val, i, arr) => {return cellsOne[val].addEventListener("click", shotFired)});
let difficulty = parseInt(clickEvent.target.value);

switch (difficulty) {
    case 1: 
        maximumShots = 25;
        createBoat();
        difficultyRules.innerHTML = "EASY > One boat to sunk, 25 canonballs.";
        quote.innerHTML = "“Not all treasure is silver and gold.”";
        break;
    case 2:
        maximumShots = 35;
        createBoat();
        createBoat();
        difficultyRules.innerHTML = "MEDIUM > Two boats to sunk, 45 canonballs.";
        quote.innerHTML = "“ It's more fun to be a pirate than to join the navy.”";
        break;
    case 3:
        maximumShots = 50;
        createBoat();
        createBoat();
        createBoat();
        difficultyRules.innerHTML = "HARD > Three boats to sunk, 50 canonballs.";
        quote.innerHTML = "“I am a man of fortune and must seek my fortune.”";
        break;
        
        
}
Object.keys(cellsOne).map((val, i, arr) => {return cellsOne[val].innerHTML = ""});
chooseDifficulty.style.opacity = 0;
chooseDifficulty.style.visibility = "hidden";
rules.style.opacity = 1;
rules.style.visibility = "visible";
loading()
};
function replay(){
numberOfShots = 0;
maximumShots = 0;
randomNumber = 1;
Object.keys(boatsLength).map((val, i, arr) => {return boatsLength[val] = 0});
gameOverScreen.style.opacity = 0;
gameOverScreen.style.visibility = "hidden";
chooseDifficulty.style.opacity = 1;
chooseDifficulty.style.visibility = "visible";
replayButton.style.opacity = 0;
replayButton.style.visibility = "hidden";
};
function loading() {
$(".meter > span").each(function() {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate({
      width: $(this).data("origWidth") // or + "%" if fluid
    }, 7000);
    
});
setTimeout(function(){
displayBubble2("Read carefully !", 'url("https://images-eu.ssl-images-amazon.com/images/I/91q9T-dPXzL.png")');
buttonStart.style.opacity = 1;
buttonStart.style.visibility = "visible";
buttonStart.addEventListener("click", displayOcean)
}, 7000);
};
function displayOcean() {
    buttonStart.style.opacity = 0;
    buttonStart.style.visibility = "hidden";
    rules.style.opacity = 0;
    rules.style.visibility = "hidden";
};




