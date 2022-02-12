if (!localStorage.getItem("wordindex")) {
  localStorage.setItem("wordindex", 0); // runs once unless localStorage is cleared in which case the high score is cleared and everything
}

// gets the day of the year e.g. January 3rd = 3 or December 31st = 365 and sets index to that number to iterate through the word list
let date = new Date();
let month = date.getMonth();
let day = date.toString();
day = day.split(" ");
day = day[2];
day = parseInt(day);
day = ((month*30) + day);
let index = parseInt(localStorage.getItem("wordindex"));
index = day;
if (index > words.length) {
  localStorage.setItem("wordindex", 0);
  newWord();
}
localStorage.setItem("dailyanswer", words[index].toLowerCase());
localStorage.setItem("wordindex", index);
dailyAnswer = localStorage.getItem("dailyanswer");

dailyStorageCounter = 1; // is concatenated to a string to increment the row the letters are being inserted in

function dailyGame(e) {
  if (e.key !== "Shift" && e.key !== "Meta" && e.key !== "Backspace" && e.key !== "Spacebar" && e.key !== "Enter" && e.key !== "Alt" && e.target.innerText !== "BACK" && e.target.innerText !== "ENTER" && e.key !== "Caps Lock") {
    sessionStorage.setItem("dailyclassname", ("daily_spots_"+dailyStorageCounter));
    dailySpots = document.getElementsByClassName(sessionStorage.getItem("dailyclassname"));
    for (let i = 0; i < 5; i++) {
      console.log(e.key); // not for touchscreen devices - returns undefined
      console.log(e.target.innerText); // for touchscreen
      if (dailySpots[i].innerText == "") {
        if (navigator.appVersion.includes("iPhone")) {
          dailySpots[i].innerText = e.target.innerText;
          break;
        }
        else {
          dailySpots[i].innerText = e.key;
          break;
        }
      }
      else {continue;}
    }
  }

  // to delete letters
  if (e.key == "Backspace" || e.target.innerText == "BACK") {
    for (let i = 4; i >= 0; i--) {
      if (dailySpots[i].innerText !== "") {
        dailySpots[i].innerText = "";
        break;
      }
      else {continue;}
    }
  }

  // to enter the guess
  if (e.key == "Enter" || e.target.innerText == "ENTER") {
    dailyGuess = "";
    for (let i = 0; i < 5; i++) {
      dailyGuess += dailySpots[i].innerText;
    }
    dailyGuess = dailyGuess.toLowerCase();
    console.log(dailyGuess);

    // if right
    if (dailyGuess == dailyAnswer) {
      let j = 0;
      while (j < 5) {
        dailySpots[j].style.backgroundColor = "seagreen";
        j++;
      }
      document.getElementById("correct_answer").innerHTML = "Congratulations! You won! The answer was: <u>" + dailyAnswer + "</u>";
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
        if (dailyGuess[i] == dailyAnswer[i]) {
          dailySpots[i].style.backgroundColor = "seagreen";
        }
        // correct letter wrong spot
        else if (dailyAnswer.includes(dailyGuess[i])) {
          dailySpots[i].style.backgroundColor = "goldenrod";
        }
        // wrong letter
        else {
          dailySpots[i].style.backgroundColor = "grey";
        }
      }
      // lost at the end of the game
      if (dailyGuess !== dailyAnswer && sessionStorage.getItem("dailyclassname") == "daily_spots_6") {
        document.getElementById("correct_answer").innerHTML = "You lost. The answer was: <u>" + dailyAnswer + "</u>";
        gameStyling();
      }
      dailyStorageCounter++; // increments the class #, ("spot_"+dailyStorageCounter)
    }
  }
}
