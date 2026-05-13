let cards = []
let sum = 0
let hasBlackJack = false//(default)
let isAlive = false//(default)
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let acecount=0
// let sound=new Audio("ye-le-laude.mp3")
// let new_sound=new Audio("movie_1.mp3")
let newBtn=document.getElementById("new-btn")
//in real blackjack==>  Ace = 11 ya 1 (depending on sum)

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1//Math.random=Ye 0 se 1 ke beech random decimal number deta hai 0 is included but 1 is excluded
    //Math.floor=Ye decimal number ko neeche wale integer mein convert karta hai
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        acecount+=1 
        return 11
    } else {
        return randomNumber
    }
}
// | Method  | Kahan kaam karta hai | Kya karta hai |
// | ------- | -------------------- | ------------- |
// | push    | End                  | Add           |
// | pop     | End                  | Remove        |
// | unshift | Start                | Add           |
// | shift   | Start                | Remove        |

function startGame() {
    isAlive = true
    hasBlackJack=false
    acecount=0
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


// Render = screen pe cheez dikhana / update karna==> jaise:cards dikhana,sum update karna,message change karna
function renderGame() {
    if (sum > 21 && acecount>0) {
    sum -= 10
    acecount-=1
}
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        hasBlackJack = false
        isAlive=true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        // sound.play()
        // isAlive=true
    } else {
        message = "You're out of the game!"
        isAlive = false
        hasBlackJack = false
        // new_sound.play()
        
    }
    messageEl.textContent = message

    if (isAlive === false || hasBlackJack === true) {
        newBtn.style.display = "none" // <-- Ye button ko screen se hata dega
    } else {
        newBtn.style.display = "inline-block" // <-- Ye button ko screen par rakhega
    
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()      
    }
}

