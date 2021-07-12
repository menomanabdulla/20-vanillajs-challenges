
(()=>{
    const gameObj = {
        johnGame:{
            game01: '',
            game02: '',
            game03: ''
        },
        mikeGame:{
            game01: '',
            game02: '',
            game03: ''
        },
        maryGame:{
            game01: '',
            game02: '',
            game03: ''
        }
    }

    const getId = (selector) => (
        document.getElementById(selector)
    )

    const onchangeHandeler = ({id,slector,gameName}) => {
        getId(id).addEventListener('change', (event) => {
            gameObj[gameName][slector] = event.target.value
        })
    }

    const averageCalculator =  ({value01, value02, value03}) => {
        return average = (Number(value01)+Number(value02)+Number(value03))/3;
    }

    onchangeHandeler(
        {
           slector: 'game01',
           gameName: 'johnGame',
           id: 'jhonGame01'
        }
    )
    onchangeHandeler(
        {
           slector: 'game02',
           gameName: 'johnGame',
           id: 'jhonGame02'
        }
    )
    onchangeHandeler(
        {
           slector: 'game03',
           gameName: 'johnGame',
           id: 'jhonGame03'
        }
    )

    onchangeHandeler(
        {
           slector: 'game01',
           gameName: 'mikeGame',
           id: 'mikeGame01'
        }
    )
    onchangeHandeler(
        {
           slector: 'game02',
           gameName: 'mikeGame',
           id: 'mikeGame02'
        }
    )
    onchangeHandeler(
        {
           slector: 'game03',
           gameName: 'mikeGame',
           id: 'mikeGame03'
        }
    )

    onchangeHandeler(
        {
           slector: 'game01',
           gameName: 'maryGame',
           id: 'maryGame01'
        }
    )
    onchangeHandeler(
        {
           slector: 'game02',
           gameName: 'maryGame',
           id: 'maryGame02'
        }
    )
    onchangeHandeler(
        {
           slector: 'game03',
           gameName: 'maryGame',
           id: 'maryGame03'
        }
    )

    getId('calculateResult').addEventListener('click', (event) => {
        const johnGameAverage = averageCalculator({
            value01: gameObj.johnGame.game01,
            value02: gameObj.johnGame.game02,
            value03: gameObj.johnGame.game03
        })
        const mikeGameAverage = averageCalculator({
            value01: gameObj.mikeGame.game01,
            value02: gameObj.mikeGame.game02,
            value03: gameObj.mikeGame.game03
        })
        const maryGameAverage = averageCalculator({
            value01: gameObj.maryGame.game01,
            value02: gameObj.maryGame.game02,
            value03: gameObj.maryGame.game03
        })

        if(johnGameAverage || mikeGameAverage || maryGameAverage){
            if(johnGameAverage > mikeGameAverage && johnGameAverage > maryGameAverage){
                getId('result').innerText = "John's Team is winner"
            }else if(mikeGameAverage > johnGameAverage && mikeGameAverage > maryGameAverage){
                getId('result').innerText = "Miks's Team is winner"
            }else if(maryGameAverage > johnGameAverage && maryGameAverage > mikeGameAverage){
                getId('result').innerText = "Mary's Team is winner"
            }else{
                getId('result').innerText = "The result is drawn"
            }
        }
    })
})()
