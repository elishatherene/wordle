const answer = words[Math.floor(Math.random()*words.length)].toLowerCase(); // randomizes the answer's index
storageCounter = 1; // is concatenated to a string to increment the row the letters are being inserted in

if (!localStorage.getItem("totalcorrect")) {
  localStorage.setItem("totalcorrect", 0);
}

document.getElementsByTagName("body")[0].addEventListener("keydown", game);

// for touchscreen devices
for (let j = 0; j < document.getElementsByClassName("keys").length; j++) {
  document.getElementsByClassName("keys")[j].addEventListener("click", game);
}

function game(e) {
  // to type and insert letters
  if (e.key !== "Shift" && e.key !== "Meta" && e.key !== "Backspace" && e.key !== "Spacebar" && e.key !== "Enter" && e.key !== "Alt" && e.target.innerText !== "BACK" && e.target.innerText !== "ENTER" && e.key !== "Caps Lock") {
    sessionStorage.setItem("classname", ("spots_"+storageCounter));
    spots = document.getElementsByClassName(sessionStorage.getItem("classname")); // the spot the letters are being put in
    for (let i = 0; i < 5; i++) {
      console.log(e.key); // not for touchscreen devices - returns undefined
      console.log(e.target.innerText); // for touchscreen
      if (spots[i].innerText == "") {
        if (navigator.appVersion.includes("iPhone")) {
          spots[i].innerText = e.target.innerText;
          break;
        }
        else {
          spots[i].innerText = e.key;
          break;
        }
      }
      else {continue;}
    }
  }

  // to delete letters
  if (e.key == "Backspace" || e.target.innerText == "BACK") {
    for (let i = 4; i >= 0; i--) {
      if (spots[i].innerText !== "") {
        spots[i].innerText = "";
        break;
      }
      else {continue;}
    }
  }

  // to enter the guess
  if (e.key == "Enter" || e.target.innerText == "ENTER") {
    guess = "";
    for (let i = 0; i < 5; i++) {
      guess += spots[i].innerText;
    }
    guess = guess.toLowerCase();
    console.log(guess);

    // if right
    if (guess == answer) {
      j = 0;
      while (j < 5) {
        spots[j].style.backgroundColor = "seagreen";
        j++;
      }
      document.getElementById("correct_answer").innerHTML = "Congratulations! You won! The answer was: <u>" + answer + "</u>";
      var total = parseInt(localStorage.getItem("totalcorrect"));
      console.log(total);
      total += 1;
      console.log(total);
      localStorage.setItem("totalcorrect", total);
      gameStyling();
    }
    // conditional gaming logic if not right
    else {
      for (let i = 0; i < 5; i++) {
        // correct letter in the right spot
        if (guess[i] == answer[i]) {
          spots[i].style.backgroundColor = "seagreen";
        }
        // correct letter wrong spot
        else if (answer.includes(guess[i])) {
          spots[i].style.backgroundColor = "goldenrod";
        }
        // wrong letter
        else {
          spots[i].style.backgroundColor = "grey";
        }
      }
      // lost at the end of the game
      if (guess !== answer && sessionStorage.getItem("classname") == "spots_6") {
        document.getElementById("correct_answer").innerHTML = "You lost. The answer was: <u>" + answer + "</u>";
        gameStyling();
      }
    storageCounter++; // increments the class #, ("spot_"+storageCounter)
    }
  }
}

// CSS based on OS
if (navigator.appVersion.includes("iPhone")) {
  let slots = document.getElementsByClassName("spots");
  for (let i = 0; i < slots.length; i++) {
    slots[i].style.height = "100px";
    slots[i].style.width = "100px";
    slots[i].style.fontSize = "50px";
  }
} else {document.getElementById("keyboard").style.display = "none";}

document.getElementById("btn").addEventListener("click", function() {
  window.location.reload();
})

function gameStyling() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("container").style.opacity = "0.5";
  document.getElementById("top_row").style.opacity= "0.5"; // for touchscreen
  document.getElementById("middle_row").style.opacity= "0.5"; // for touchscreen
  document.getElementById("bottom_row").style.opacity= "0.5"; // for touchscreen
  document.getElementById("total_correct").innerHTML = "Total Amount Correct: " + localStorage.getItem("totalcorrect");
}
