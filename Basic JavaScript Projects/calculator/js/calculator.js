//creates an object to keep track of values
const calculator = {
    //this displays 0 on the screen
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    //this checks wheather or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

//this modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = calculator
    //we are checking to see if Wait_Second_Operand is true and set
    //Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true){
        calculator.Display_Value=digit;
        calculator.Wait_Second_Operand=false;
    } else {
        //this overwrites Display_Value if the current value is 0
        //otherwise it adds onto it
        calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
}

//this section handels deciman points
function Input_Decimal(dot) {
    //rhis ensures that accidental clicking of the decimal point
    //doesnt cause bugs in you operation
    if (calculator.Wait_Second_Operand === true) return;
    if (!calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_Value does not contain a decimal point
        //we want to add a decimal point
        calculator.Display_Value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in
    //calculator.First_operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second_operand is true,
    //then update the operator and exist from the function
    if (operator && calculator.Wait_Second_Operand) {
        calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists. property lookup is performed for the operator
        //in the Perfomr_Calculation object and the function that matches the 
        //operator is excuted
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove any trailing 0's
        result = (result * 1).toString()
        calculator.Display_Value = parseFloat(result);
        calculator.First_Operand = parseFloat(result);
    }
    calculator.Wait_Second_Operand = true;
    calculator.operator = Next_Operator;
}

const Perfomr_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_reset() {
    calculator.Display_Value = "0";
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand = false;
    calculator.operator = null;
}

//this function updates the screen with contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.Value = calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //this target variable is an object that represents the element
    //that was clicked
    const {target} = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')){
        Handle_Operator(target.Value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')){
        Input_Decimal(target.Value);
        Update_Display();
        return;
    }
    //ensures that AC clears the number from the calculator
    if (target.classList.contains('all-clear')){
        calculator.Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.Value);
    Update_Display();
})

