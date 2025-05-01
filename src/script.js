let deckId

fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(res => res.json())
.then(data => {
    deckId = data.deck_Id
})

