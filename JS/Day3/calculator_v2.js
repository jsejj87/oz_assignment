// 1. 필요한 요소 찾아오기
const display = document.querySelector("#display");
const powerBtn = document.querySelector(".on-off");
 
// 2. 기억해둘 값들
let isOn = false;          // 전원 켜짐 여부
let firstNumber = "";      // 연산자 누르기 전 숫자
let operator = "";         // 누른 연산자 (+ - * /)
let waitingSecond = false; // 다음 숫자를 새로 입력할 차례인지
 
// 처음엔 전원 꺼진 상태라 화면 비우기
display.value = "";
 
// 3. 전원 켜기/끄기
function togglePower() {
    if (isOn === false) {
        isOn = true;
        display.value = "0";
        powerBtn.classList.add("on");     // 초록색으로
    } else {
        isOn = false;
        display.value = "";
        powerBtn.classList.remove("on");  // 원래 색으로
    }
    firstNumber = "";
    operator = "";
    waitingSecond = false;
}
 
// 4. C: 화면 0으로
function clearDisplay() {
    if (isOn === false) return;
 
    display.value = "0";
    firstNumber = "";
    operator = "";
    waitingSecond = false;
}
 
// 5. 숫자 붙이기
function appendNumber(num) {
    if (isOn === false) return;
 
    // 연산자 누른 직후면 새 숫자로 시작
    if (waitingSecond === true) {
        display.value = "0";
        waitingSecond = false;
    }
 
    // 점(.)이 이미 있으면 또 못 넣게
    if (num === "." && display.value.includes(".")) return;
 
    // 화면이 0이면 바꾸고, 아니면 뒤에 붙이기
    if (display.value === "0" && num !== ".") {
        display.value = num;
    } else {
        display.value = display.value + num;
    }
}
 
// 6. 연산자 저장
function appendOperator(op) {
    if (isOn === false) return;
 
    firstNumber = display.value;  // 지금 화면 숫자 기억
    operator = op;                // 누른 연산자 기억
    waitingSecond = true;         // 다음 숫자 입력 대기
}
 
// 7. Enter: 계산하기
function performCalculate() {
    if (isOn === false) return;
    if (operator === "") return;  // 연산자 안 눌렀으면 계산 안 함
 
    const a = Number(firstNumber);    // 글자 → 숫자
    const b = Number(display.value);
    let result;
 
    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result = "Error";
        } else {
            result = a / b;
        }
    }
 
    display.value = result;
    operator = "";
    waitingSecond = true;
}
 