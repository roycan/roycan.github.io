window.onload = function() {
    //check if there is a current player session

    if (!sessionStorage.getItem('current')) {
        window.location = 'index.html';
    } else {
        email = sessionStorage.getItem('current');
        var player = JSON.parse(localStorage.getItem(email));
        document.getElementById('player-display').innerHTML = player.name;
        document.getElementById('total_points').innerHTML = 'Your total points is: ' + player.points;

        console.log(player);

    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    var categories = ["Anime Movies", "Animals", "English Words", "Anime Characters", "Songs"]; //add more categories if needed


    var selectedCategory;
    var words; //words based on random cat
    var word, originalWord; //select word
    var guess; //user guess
    var lives; //remaining lives when user make mistakes
    var counter; //counter
    var space; //

    //our alphabet
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");



    function savePlayerPoints(points) {


        if (player && points) {

            player.points = parseInt(player.points + points);

            //set user 
            localStorage.setItem(player.email, JSON.stringify(player));
            document.getElementById('total_points').innerHTML = 'Your total points is: ' + player.points;

        }
    }



    // create alphabet ul list
    var buttons = function() {
            myButtons = document.getElementById('buttons');
            letters = document.createElement('ul');

            for (var i = 0; i < alphabet.length; i++) {
                letters.id = 'alphabet';
                list = document.createElement('li');
                list.id = 'letter';
                list.innerHTML = alphabet[i];
                check();
                myButtons.appendChild(letters);
                letters.appendChild(list);
            }
        }
        //const months = ["January", "February", "March", "April", "May", "June", "July"];

    //const random = Math.floor(Math.random() * months.length);
    //console.log(random, months[random]);

    // OnClick Function
    check = function() {
        list.onclick = function() {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }

            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1; //decrease lives
                comments();
                //animate();
                nextCanvas(lives);
            } else {
                comments();
            }
        }
    }

    // Show lives
    comments = function() {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
            //show answer
            document.getElementById('hold').innerHTML = '';
            showAnswer();


        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
                //Count points
                savePlayerPoints(lives);

            }
        }
    }

    showAnswer = function() {
            wordHolder = document.getElementById('hold');
            correct = document.createElement('ul');

            for (var i = 0; i < word.length; i++) {

                correct.setAttribute('id', 'my-word');
                guess = document.createElement('li');
                guess.setAttribute('class', 'guess');
                if (word[i] === "-") {
                    guess.innerHTML = "-";
                    space = 1;
                } else {
                    guess.innerHTML = originalWord[i];
                }

                geusses.push(guess);
                wordHolder.appendChild(correct);
                correct.appendChild(guess);
            }
        }
        // Create geusses ul
    result = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
    var man = document.getElementById('next-hangman');
    //render hangman images switching based on guesses;
    var nextCanvas = function(lives) {

            if (lives < 10 && lives >=0 ) {
                man.src = 'images/hang' + (10 - lives) + '.png';
            }

            
            console.log(man);
        }
        // Play
    var playNow = function() {

        randomCategoryIndex = Math.floor(Math.random() * categories.length);
        randomCategory = categories[randomCategoryIndex];
        words = dbwords[randomCategoryIndex];

        word = words[Math.floor(Math.random() * words.length)].toLowerCase();
        originalWord = word = word.replace(/\s/g, "-");

        geusses = [];
        lives = 10;
        counter = 0;
        space = 0;

        //word = word.replace(/\s/g, "-");
        console.log(randomCategory);
        console.log(originalWord);
        document.getElementById('catagoryName').innerHTML = 'The category is : ' + randomCategory;
        //setup buttons
        buttons();
        result();
        comments();
        //selectCat();
        nextCanvas();

    }

    playNow();

    // Reset

    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);

        man.src = 'images/hang.png';
        playNow();
    }


}