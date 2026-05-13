let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let acecount=0
let newBtn=document.getElementById("new-btn")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        acecount+=1 
        return 11
    } else {
        return randomNumber
    }
}
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
       
    } else {
        message = "You're out of the game!"
        isAlive = false
        hasBlackJack = false
      
    }
    messageEl.textContent = message

    if (isAlive === false || hasBlackJack === true) {
        newBtn.style.display = "none" 
    } else {
        newBtn.style.display = "inline-block" 
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

