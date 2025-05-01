let deckId

document.querySelector("#deck").addEventListener("click",()=>{fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(res => res.json())
.then(data => {
    console.log(data)
    deckId = data.deck_id
    console.log(deckId)

})})


document.querySelector(".draw").addEventListener("click",()=>{
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

})

