//creates an object to keep track of values
const Calculator= {
    //this displays 0 on the screen 
    Display_Value: '0',
    //this will hold the first operand for any expression, we set it to null for now
    First_Operand: null,
    //this checks wheather or not the second operamd has been input
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

//this modifies the value each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand }= Calculator;
    // we are checking to see if Wait_Second_Operand is true and ser
    //Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites Display_Value if the current value is 0
        //otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//this section handles decimal points
function Input_Decimal(dot) {
    //this ensures that accidental clicking of the decimal point
    //doesnt cause bugs in your operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_Value does not contain a decimal point
        //we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

//this secion handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator} = Calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in
    //Calculator.First_Operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value);
    //check if an operator already exists and if Wait_Second_Operand is true
    //then update the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator alreadu exists
    const Value_Now = First_Operand || 0;
    //if operator exists, property lookup is performed for the operator
    // in the PErform_Calculation object and the function that mayches the
    //operator is executed
    let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
    //here we add a fixed amount of numbers after the decimal
    result = Number(result).toFixed(9)
    //this will remove any trailing 0's
    result = (result * 1).toString()
    Calculator.Display_Value = parseFloat(result);
    Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Secont_Operand) => First_Operand / Secont_Operand,
    '*': (First_Operand, Secont_Operand) => First_Operand * Secont_Operand,
    '-': (First_Operand, Secont_Operand) => First_Operand - Secont_Operand,
    '=': (First_Operand, Secont_Operand) => Secont_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//this section monitors button clicks
const keys = document.querySelector('.calculator-screen');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element
    //that was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //ensures that AC clears the numbers from the calculator
    if (target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
