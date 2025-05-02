let deckId
let myScore=0
let computerScore=0
const compScore=document.querySelector('.computer-score')
const playerScore=document.querySelector('.my-score')
const message = document.querySelector('.message')
const draw = document.querySelector('.draw')


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

            if(data.remaining===0){
                draw.disabled=true;
            }



            const card1=data.cards[0].value
            const card2=data.cards[1].value


            let res=winnerDetermination(card1,card2);

            if(data.remaining===0){
                message.innerText=`
                       ${finalWinnerDetermination(myScore,computerScore)}     
                `
            }else{
                message.innerText=`
                    ${res}
                `
            }


            compScore.innerText=`
                Computer Score : ${computerScore}
            `
            playerScore.innerText=`
                My Score : ${myScore}
            `

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
    const value=["1","2","3","4","5","6","7","8","9","JACK","KING","QUEEN","ACE"]
    const index1=value.indexOf(card1)
    const index2=value.indexOf(card2)

    let result
    if(index1>index2){
        computerScore++;
        result="Computer Win!"
    }else if(index2>index1){
        myScore++;
        result="You Win!"
    }else{
        result="Draw!"
    }

    return result;


}

function finalWinnerDetermination(myScore,computerScore){
    if(myScore<computerScore){
        return "Computer Wins the War"
    }else if(computerScore<myScore){
        return "You Won the War!"
    }else{
        return "Draw Both Won!"
    }
}

