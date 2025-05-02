let deckId

document.querySelector("#deck").addEventListener("click",()=>{fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(res => res.json())
.then(data => {

    deckId = data.deck_id


})})


document.querySelector(".draw").addEventListener("click",()=>{
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector(".remaining").innerText=`Remaining cards : ${data.remaining}`
            document.querySelector("#card1").innerHTML = `
                <img class="cards" src="${data.cards[0].image}" alt="card-img"/>
            `;
            document.querySelector("#card2").innerHTML = `
                <img class="cards" src="${data.cards[1].image}" alt="card-img"/>
            `;
        })

})

function winnerDetermination(card1,card2){
    const value=["1","2","3","4","5","6","7","8","9","J","K","Q","A"]
    const index1=value.indexOf(card1)
    const index2=value.indexOf(card2)

    let result
    if(index1>index2){
        result="Computer Win!"
    }else if(index2>index2){
        result="You Win!"
    }else{
        result="Draw!"
    }

    return result;


}

