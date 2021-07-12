
(()=>{
    const myObj = {
        markMass: '',
        markHeight: '',
        johnMass: '',
        johnHeight: ''
    }

    const getId = (selector) => (
        document.getElementById(selector)
    )

    const onchangeHandeler = ({slector,textSelector,message}) => {
        getId(slector).addEventListener('change', (event) => {
            myObj[slector] = event.target.value
            getId(textSelector).innerText = message+myObj[slector];
        })
    }

    const bmiCalculator = ({mass, height}) => {
        return BMI = (parseInt(mass) / (parseInt(height)*parseInt(height)));
    }

    onchangeHandeler(
        {
           slector: 'markMass',
           textSelector: 'markMassText',
           message: "Mark's Mass is = "
        }
    )
    onchangeHandeler(
        {
           slector: 'markHeight',
           textSelector: 'markHeightText',
           message: "Mark's Height is = "
        }
    )
    onchangeHandeler(
        {
           slector: 'johnMass',
           textSelector: 'johnMassText',
           message: "John's Mass is = "
        }
    )
    onchangeHandeler(
        {
           slector: 'johnHeight',
           textSelector: 'johnHeightText',
           message: "John's Height is = "
        }
    )

    //onchangeHandeler('markHeight',)
    getId('calculateResult').addEventListener('click', (event) => {
        const marksBMI =  bmiCalculator({
            mass: myObj.markMass,
            height: myObj.markHeight
        });
        const johnsBMI =  bmiCalculator({
            mass: myObj.johnMass,
            height: myObj.johnHeight
        });
        console.log(marksBMI)
        console.log(johnsBMI)
        if( marksBMI && johnsBMI ){
            marksBMI > johnsBMI ? getId('result').innerText = "Mark's BMI is higher then Jhon's BMI" : getId('result').innerText = "Jhon's BMI is higher then Mark's BMI"
        }
    })
})()
