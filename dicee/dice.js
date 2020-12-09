  // make the random number from 1 to 6
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
        // make the random dice image using the random number that we already make
        var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
        // if u save the image in other folder
        var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
        // select the image 1 
        var image1 = document.querySelectorAll("img")[0];
        // add attribute src to the image1
        image1.setAttribute("src", randomImageSource);

        // write the same things with image 2
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


        //If player 1 wins
        if (randomNumber1 > randomNumber2) {
          document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        } // if player 2 wins
        else if (randomNumber2 > randomNumber1) {
          document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        } // if it's draw
        else {
          document.querySelector("h1").innerHTML = "✨Draw!🌻";
        }