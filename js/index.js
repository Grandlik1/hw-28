let calculator = {
    read: function(){
            let firstNumber = prompt()
            let secondNumber = prompt()
        if(isNaN(firstNumber) && isNaN(secondNumber)  ){
            alert("вы не ввели число")
        }else{
            firstNumber = Number(firstNumber)
            secondNumber = Number(secondNumber)
            return this.number = {
                firstNumber ,
                secondNumber
            }
        }
    },
    sum: function(){
        let sum = this.number.firstNumber + this.number.secondNumber
        return sum;
    },
    mul: function(){
        let mul = this.number.firstNumber * this.number.secondNumber
        return mul;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
