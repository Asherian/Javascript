//create an object to track the value
const Calculator = {
    //display 0 on the screen
    Display_Value: "0",
    //hold the first operand, setting to null to start
    First_Operand: null,
    //check whether or not second operand is input
    Wait_Second_Operand: false,
    //hold the operator, setting to null default
    operator: null,
};
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //checking to sif Wait_second_Operand is true and set, display_value to the key clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrite Display_Value if the current value is 0
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}
//section to handle decimal points
function Input_Decimal(dot) {
    //ensures accdiental clicking of decimal point, doesn't cause bugs in your operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //if display_value doesn't include a decimal point add a decimal point
        Calculator.Display_Value += dot;
    }
}
//section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when an operator key pressed convert current number dispalyed on the screen to a number displayed into a number and store result in Calculator.First_Operand
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if(operator) {//check if an operator exist
        const Value_Now = First_Operand || 0;
        const result = Perform_Calculation[operator](Value_Now,Value_of_Input);

        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand/Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand*Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand+Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand-Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//function to update screen
function Update_Display() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}
Update_Display();
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})