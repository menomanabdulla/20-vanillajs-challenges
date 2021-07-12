
(()=>{
   
    const myObj = {
        ammount: ''
    }
    const allTip = [];
    const allPayable = [];

    const getId = (selector) => (
        document.getElementById(selector)
    )
    const chengeHandler = (slector) => {
        getId(slector).addEventListener('change', (event) => (
            myObj.ammount = event.target.value
        ))
    }

    const percentage = (value) => (
        value/100
    )

    const tipCalculator = (ammount) => {
       if( ammount < 50 ){
            return {
                tip: percentage(20)*ammount,
                percentage: '20'
            };
       }else if( ammount >=  50 && ammount < 200 ){
            return  {
                tip: percentage(15)*ammount,
                percentage: '15'
            };
       }else{
            return  {
                tip: percentage(10)*ammount,
                percentage: '10'
            };
       }
    }

    const createMenuItem = (item) =>{
        let li = document.createElement('li');
        li.textContent = item;
        return li
    }

    const arrayRender = ({myArray, selector}) => {
        while(getId(selector).hasChildNodes()){
            getId(selector).removeChild(getId(selector).firstChild);
        }
        myArray.map((item) => {
            getId(selector).appendChild(createMenuItem(item))
        })
    }

    chengeHandler('ammount');

    getId('calculateResult').addEventListener('click', (event) => {
        event.preventDefault();
        if(myObj.ammount){
            const {tip, percentage} = tipCalculator(Number(myObj.ammount));
            allTip.push(tip);
            allPayable.push(Number(myObj.ammount)+tip);
            getId('result').innerText = `$${myObj.ammount}'s ${percentage} percent is $${tip}`
            arrayRender({
                myArray: allTip,
                selector: 'tipsList'
            })
            arrayRender({
                myArray: allPayable,
                selector: 'finalAmmountList'
            })
        }
        
    })
    

})()

