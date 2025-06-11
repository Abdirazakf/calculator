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
        case "%":
            if(!nextNumFlag){
                num1 = (parseFloat(num1)/100).toString()
                screen.textContent = num1
            } else if (nextNumFlag){
                num2 = (parseFloat(num2)/100).toString()
                screen.textContent = num2
            }
            break;
        case "+/-":
            if (!nextNumFlag){
                num1 = (-parseFloat(num1)).toString()
                screen.textContent = num1
            } else if (nextNumFlag){
                num2 = (-parseFloat(num2)).toString()
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
            break;
        case "del":
            if(!nextNumFlag){
                num1 = String(num1).slice(0,-1)
                screen.textContent = num1
            } else {
                num2 = String(num2).slice(0,-1)
                screen.textContent = num2
            }
            break;
    }

    if (equalPressed){
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

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
                    answer = "ERROR"
                }
                break;
        }
        screen.textContent = answer
        equalPressed = false
        nextNumFlag = false
        num1 = ""
        num2 = ""
    }
}