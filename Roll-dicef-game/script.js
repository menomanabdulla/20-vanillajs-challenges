
(()=>{

    //utility
    const getId = (selector) => (
        document.getElementById(selector)
    )

    const playerOne={
        primaryScore: 0,
        currentScore: 0,
        state: true,
        scoreCalculation: () => {
            return this.primaryScore += this.currentScore;
        }
    }
    const playerTwo={
        primaryScore: 0,
        currentScore: 0,
        state: false
    }
    playerTwo.scoreCalculation = playerOne.scoreCalculation;
   
    const rollDice = () => {
       const randomNumber = Math.floor(Math.random()*6) + 1;
       getId('dice').innerText = randomNumber;
       if(playerOne.state){
            randomNumber == 1 ? (
                playerOne.currentScore = 0, 
                playerOne.state = false, 
                playerTwo.state = true,
                getId('player02').classList.add('active'),
                getId('player01').classList.remove('active')
            ) : (
                playerOne.currentScore += randomNumber,
                getId('player01').classList.add('active'),
                getId('player02').classList.remove('active')
            );
            getId('player01__current__score').innerText = playerOne.currentScore;
        }else{
            randomNumber == 1 ? (
                playerTwo.currentScore = 0, 
                playerTwo.state = false, 
                playerOne.state = true,
                getId('player01').classList.add('active'),
                getId('player02').classList.remove('active')
                ) : (
                playerTwo.currentScore += randomNumber,
                getId('player02').classList.add('active'),
                getId('player01').classList.remove('active')
            );
            getId('player02__current__score').innerText = playerTwo.currentScore;
        }
    }

    const Hold = () => {
        if(playerOne.state){
            playerOne.primaryScore += playerOne.currentScore;
            playerOne.currentScore = 0;
            playerOne.state = false;
            playerTwo.state = true;
            playerOne.primaryScore >= 100 ?(
                getId('player01__title').innerText = 'Winner',
                getId('player01__current__score').innerText = 0,
                getId('player01__score').innerText = playerOne.primaryScore,
                getId('controllerBLock').classList.add('hide'),
                getId('dice').classList.add('hide')
            ):(
                getId('player02').classList.add('active'),
                getId('player01').classList.remove('active'),
                getId('player01__score').innerText = playerOne.primaryScore,
                getId('player01__current__score').innerText = 0,
                getId('dice').innerText = 0
            )
           
        }else{
            playerTwo.primaryScore += playerTwo.currentScore;
            playerTwo.currentScore = 0;
            playerTwo.state = false;
            playerOne.state = true;
            playerTwo.primaryScore >= 100 ?(
                getId('player02__title').innerText = 'Winner',
                getId('player02__current__score').innerText = 0,
                getId('player02__score').innerText = playerTwo.primaryScore,
                getId('controllerBLock').classList.add('hide'),
                getId('dice').classList.add('hide')
            ):(
                getId('player01').classList.add('active'),
                getId('player02').classList.remove('active'),
                getId('player02__score').innerText = playerTwo.primaryScore,
                getId('player02__current__score').innerText = 0,
                getId('dice').innerText = 0
            )
        }
    }


    getId('rollDiceBtn').addEventListener('click', (event) => {
        rollDice();
    })
    getId('holdBtn').addEventListener('click', (event) => {
        Hold();
    })

})()

