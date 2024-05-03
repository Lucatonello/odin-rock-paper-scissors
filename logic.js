let user_score = 0;
let computer_score = 0;
let user_choice;

    function get_computer_choice() {
        let computer_choice = Math.floor(Math.random() * 3) + 1;
        if (computer_choice == 1) {
            computer_choice = "Rock";
        }
        else if (computer_choice == 2) {
            computer_choice = "Paper";
        }
        else {
            computer_choice = "Scissors";
        }
        return computer_choice;    
    }

    document.getElementById("rock").addEventListener("click", () => {
        user_choice = "Rock";
        play_round(user_choice, get_computer_choice());
    })
    document.getElementById("paper").addEventListener("click", () => {
        user_choice = "Paper";  
        play_round(user_choice, get_computer_choice());
    })
    document.getElementById("scissors").addEventListener("click", () => {
        user_choice = "Scissors";
        play_round(user_choice, get_computer_choice());
    })

   
    function play_round(user_choice, computer_choice) {
        let winner = null;
        if (
            (user_choice == "Rock" && computer_choice == "Scissors") ||
            (user_choice == "Paper" && computer_choice === "Rock") ||
            (user_choice == "Scissors" && computer_choice == "Paper")
        ) {
            winner = "user";
        } else if (
            (computer_choice == "Rock" && user_choice == "Scissors") ||
            (computer_choice == "Paper" && user_choice == "Rock") ||
            (computer_choice == "Scissors" && user_choice == "Paper")
        ) {
            winner = "computer";
        } else {
            winner = "tie";
        }
    
        if (winner == "user") {
            user_score+=1;
        } else if (winner == "computer") {
            computer_score+=1;
        }

        document.getElementById("user-choice").textContent = user_choice;
        document.getElementById("computer-choice").textContent = computer_choice;
        document.getElementById("user-score").textContent = user_score;
        document.getElementById("computer-score").textContent = computer_score;

        if (user_score == 5) {
            document.getElementById("final-winner").textContent = "You win!";
        }
        else if (computer_score == 5) {
            document.getElementById("final-winner").textContent = "You lose!";
        }
            
    }
    