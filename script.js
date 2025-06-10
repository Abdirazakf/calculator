const screen = document.querySelector(".numbers")
const buttonValue = document.querySelectorAll(".button-container button")

let num1 = ""
let num2 = ""
let operator = ""
let answer = 0
let nextNumFlag = false
let equalPressed = false

buttonValue.forEach(buttons => buttons.addEventListener("click",operate))

function operate(event){
    const value = event.target.textContent
    console.log(value)

    switch(value){
        case "0":
            if(!nextNumFlag){
                num1 += "0"
                screen.textContent = num1
            } else {
                num2 += "0"
                screen.textContent = num2
            }
            break;
        case "1":
            if(!nextNumFlag){
                num1 += "1"
                screen.textContent = num1
            } else {
                num2 += "1"
                screen.textContent = num2
            }
            break;
        case "2":
            if(!nextNumFlag){
                num1 += "2"
                screen.textContent = num1
            } else {
                num2 += "2"
                screen.textContent = num2
            }
            break;
        case "3":
            if(!nextNumFlag){
                num1 += "3"
                screen.textContent = num1
            } else {
                num2 += "3"
                screen.textContent = num2
            }
            break;
        case "4":
            if(!nextNumFlag){
                num1 += "4"
                screen.textContent = num1
            } else {
                num2 += "4"
                screen.textContent = num2
            }
            break;
        case "5":
            if(!nextNumFlag){
                num1 += "5"
                screen.textContent = num1
            } else {
                num2 += "5"
                screen.textContent = num2
            }
            break;
        case "6":
            if(!nextNumFlag){
                num1 += "6"
                screen.textContent = num1
            } else {
                num2 += "6"
                screen.textContent = num2
            }
            break;
        case "7":
            if(!nextNumFlag){
                num1 += "7"
                screen.textContent = num1
            } else {
                num2 += "7"
                screen.textContent = num2
            }
            break;
        case "8":
            if(!nextNumFlag){
                num1 += "8"
                screen.textContent = num1
            } else {
                num2 += "8"
                screen.textContent = num2
            }
            break;
        case "9":
            if(!nextNumFlag){
                num1 += "9"
                screen.textContent = num1
            } else {
                num2 += "9"
                screen.textContent = num2
            }
            break;
        case ".":
            if(!nextNumFlag){
                num1 += "."
                screen.textContent = num1
            } else {
                num2 += "."
                screen.textContent = num2
            }
            break;
        case "+":
            nextNumFlag = true
            operator = "+"
            break;
        case "-":
            nextNumFlag = true
            operator = "-"
            break;
        case "*":
            nextNumFlag = true
            operator = "*"
            break;
        case "÷":
            nextNumFlag = true
            operator = "÷"
            break;
        case "=":
            equalPressed = true
            break;
        case "AC":
            num1 = ""
            num2 = ""
            answer = 0
            operator = ""
            nextNumFlag = false
            screen.textContent = 0
    }
    if (num1){
        num1 = parseFloat(num1)
        console.log("num1: ",num1)
    }

    if (num2){
        num2 = parseFloat(num2)
        console.log("num2: ",num2)
    }

    if (equalPressed){
        switch(operator){
            case "+":
                answer = num1 + num2
                break;
            case "-":
                answer = num1 - num2
                break;
            case "*":
                answer = num1 * num2
                break;
            case "÷":
                if (num2 != 0){
                    answer = num1 / num2
                } else {
                    alert("ERROR: Can't divide by zero")
                }
                break;
        }
        console.log("Answer: ", answer)
        screen.textContent = answer
        equalPressed = false
        nextNumFlag = false
        num1 = ""
        num2 = ""
    }
}