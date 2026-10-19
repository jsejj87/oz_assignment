# JavaScript 기초 정리

## 0. JavaScript 실행 방법

- HTML: 구조 / CSS: 디자인 / **JS: 동작**
- 실행 방법
  - 브라우저 개발자 도구(F12) → Console 탭에서 바로 실행
  - HTML에 `<script src="./app.js"></script>`로 연결
  - 터미널에서 `node app.js` (Node.js = 브라우저 없이 JS를 실행해주는 프로그램)
- 출력: `console.log()` (파이썬의 `print()`)

```javascript
console.log("Hello from app.js");
```

---

## 1. 자료형

| 자료형 | 설명 | 예시 |
|---|---|---|
| `number` | 숫자 (정수, 실수 구분 없음) | `10`, `21.5` |
| `string` | 문자열 (`""`, `''` 둘 다 가능) | `"alex"`, `'Hello'` |
| `boolean` | 참/거짓 | `true`, `false` |
| `null` | 개발자가 **일부러** 비워둔 값 | `null` |
| `undefined` | 값이 **아직** 정해지지 않은 상태 | `let score;` |

```javascript
let a = 10;
let username = "alex";
let isStudent = true;
let selectedUser = null;
let score;

console.log(typeof a);            // number
console.log(typeof username);     // string
console.log(typeof isStudent);    // boolean
console.log(typeof selectedUser); // object (JS의 오래된 특징)
console.log(typeof score);        // undefined
```

---

## 2. 변수 선언

- `let`: 값 변경 가능
- `const`: 값 변경 불가 (상수), 선언할 때 값을 꼭 넣어야 함
- 파이썬은 변수를 만들 때 값을 꼭 넣어야 하지만, JS는 `let`으로 선언만 해도 됨 (값은 `undefined`)

```javascript
let age = 20;
age = 21;        // 가능

const pi = 3.14;
// pi = 3.15;    // 에러! const는 값을 바꿀 수 없음

let score;       // 선언만 가능 → undefined
```

---

## 3. 산술 연산

```javascript
let n1 = 10;
let n2 = 3;

console.log(n1 + n2); // 13
console.log(n1 - n2); // 7
console.log(n1 * n2); // 30
console.log(n1 / n2); // 3.3333333333333335
console.log(n1 % n2); // 1 (나머지)
```

### Math 내장 객체

```javascript
console.log(Math.floor(10 / 3)); // 3 (내림 → 몫 구할 때 사용)
console.log(Math.round(3.6));    // 4 (반올림)
console.log(Math.ceil(3.2));     // 4 (올림)
```

---

## 4. 비교 연산

- 결과는 항상 `boolean` (true / false)

```javascript
console.log(10 > 5);   // true
console.log(10 <= 5);  // false

// 산술 연산이 비교보다 먼저 계산됨 → 괄호 없어도 됨
let result = 10 + 20 > 5 + 10; // 30 > 15
console.log(result); // true
```

### `==` vs `===`

- `==` : 값만 비교 (자료형이 다르면 자동으로 바꿔서 비교)
- `===` : 값 + 자료형까지 비교 → **이걸 쓰는 걸 권장**

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false
```

> 파이썬은 `10 == "10"`이 False. JS는 타입을 자동으로 바꿔서 비교하기 때문에 더 주의해야 함

---

## 5. 논리 연산

```javascript
let age = 20;
let hasId = true;

console.log(age >= 19 && hasId); // AND : 둘 다 true여야 true
console.log(age < 19 || hasId);  // OR  : 하나라도 true면 true
console.log(!hasId);             // NOT : true ↔ false 반대로
```

- `&&` = 파이썬의 `and`
- `||` = 파이썬의 `or`
- `!` = 파이썬의 `not`

---

## 6. 문자열 연산

### `+` 이어붙이기

```javascript
let firstName = "Alex";
let lastName = "Kim";

console.log("Hello, " + firstName + " " + lastName + "!"); // Hello, Alex Kim!
```

### 템플릿 리터럴

- 백틱(키보드 숫자 1 왼쪽 키)으로 감싸고, 변수는 `${변수명}`으로 넣음
- `+`로 이어붙이는 것보다 읽기 쉬움

```javascript
console.log(`Hello, ${firstName} ${lastName}!`); // Hello, Alex Kim!
```

### number + string (Python과 차이)

```javascript
console.log(10 + "10"); // "1010" (숫자가 문자열로 바뀌어서 이어붙여짐)
```

> 파이썬에서 `10 + "10"`은 자료형이 달라서 **에러**

---

## 7. 조건문

- 파이썬의 `if / elif / else` → JS는 **`if / else if / else`**
- 조건은 `()` 안에, 실행할 코드는 `{}` 안에

```javascript
let age = 20;

if (age >= 19) {
    console.log("성인입니다.");
} else if (age >= 8) {
    console.log("학생입니다.");
} else {
    console.log("어린이입니다.");
}
```

### truthy / falsy

- **falsy (false로 취급, 6개)**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- **truthy**: falsy를 뺀 나머지 전부 (`"0"`, `[]`, `{}`도 truthy)

```javascript
if ("0") {
    console.log("실행됨"); // "0"은 문자열이라 truthy
}
```

---

## 8. 반복문

### for

- `(시작값; 조건; 증가식)`
- `i++` 는 `i += 1` 과 같음

```javascript
// 파이썬: for i in range(10):
for (let i = 0; i < 10; i++) {
    console.log(i); // 0 ~ 9
}
```

### while

- 조건이 true인 동안 반복, false가 되면 멈춤
- 안에서 조건을 바꿔주지 않으면 **무한 루프** 주의

```javascript
let n = 0;
while (n < 3) {
    console.log(n); // 0, 1, 2
    n++;
}
```

> 반복 횟수가 정해져 있으면 `for`, 언제 끝날지 모르면 `while`

---

## 9. 배열 (Array)

- 여러 값을 순서대로 묶은 것 (파이썬의 리스트)
- 인덱스는 0부터 시작

```javascript
let numbers = [1, 2, 3, 4];

console.log(numbers[0]);          // 1
console.log(numbers.at(-1));      // 4 (뒤에서 첫 번째)
console.log(numbers.length);      // 4 (개수)
console.log(numbers.slice(1, 3)); // [2, 3] (끝 인덱스는 포함 안 됨)
```

### 배열 + 반복문

```javascript
// 값 하나씩 꺼내기
for (const num of numbers) {
    console.log(num);
}

// 인덱스로 꺼내기
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 합계 구하기
let sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log(sum); // 10
```

---

## 10. 객체 (Object)

- 하나의 대상에 대한 정보를 **이름(key) : 값(value)** 으로 묶은 것 (파이썬의 딕셔너리)
- 배열은 순서가 중요한 데이터, 객체는 이름이 중요한 데이터

```javascript
let user = {
    name: "alex",
    age: 20
};
```

### 객체 다루기

```javascript
// 속성 읽기
console.log(user.name);     // alex
console.log(user["age"]);   // 20

// 속성 추가하기
user.email = "alex@test.com";

// 속성 수정하기
user.age = 21;

// 속성 제거하기
delete user.email;

// 속성이 있는지 확인하기 (in)
console.log("name" in user);  // true
console.log("email" in user); // false
```

### 객체 순회

```javascript
for (const key in user) {
    console.log(key, user[key]);
}
```

---

## 11. 함수 (Function)

- 구조: 입력 → 처리 → 출력
- 기능: 코드를 묶어서 **재사용**
- 함수는 **호출해야** 실행됨, `return`은 결과를 돌려주고 함수를 끝냄

```javascript
// 함수 정의
function add(n1, n2) {
    return n1 + n2;
}

// 함수 호출(call)
let result = add(4, 10);
console.log(result); // 14
```

### 함수를 값처럼 다루기

```javascript
let foo = add;          // 함수 자체를 저장 → foo(2, 4) 하면 6
let bar = add(2, 4);    // 실행 결과(6)를 저장 → bar(2, 4) 는 에러

// 함수를 다른 함수에 넘기기
function runFunction(f, arg1, arg2) {
    return f(arg1, arg2);
}

console.log(runFunction(add, 4, 2)); // 6
```

---

## Python vs JavaScript 한눈에 보기

| 구분 | Python | JavaScript |
|---|---|---|
| 출력 | `print()` | `console.log()` |
| 변수 선언 | `age = 20` | `let age = 20;` |
| 조건문 | `if / elif / else` | `if / else if / else` |
| 블록 | 들여쓰기 | `{ }` |
| 타입 확인 | `type(값)` | `typeof 값` |
| `10 + "10"` | 에러 | `"1010"` |
| `10 == "10"` | False | true |
| 리스트 / 딕셔너리 | list / dict | 배열 / 객체 |
