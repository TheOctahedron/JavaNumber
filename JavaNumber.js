const name = prompt("Welcome to JavaNum. simple project.\nEnter Your Nickname: ")
console.log("Nice to see you, " + name)
setTimeout(function() {
    let random_number = Math.floor(Math.random() * 10) +1
    console.log("The number (1-10) has been guessed, try to guess it.")

    setTimeout (function() {
        let answer = prompt("\n\n> ")
        let number = Number(answer)
        if (number === random_number) {
            console.log("\n\nYou guessed the number!")
        } else {
            console.log("\n\nYou guessed wrong! the number was: " + random_number)
        }
    },
        1000);
}, 1000);