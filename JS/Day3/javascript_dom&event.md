### HTML → 브라우저 → DOM → JS

- **HTML: 원본 파일**
- **브라우저: HTML을 읽어서 DOM을 만듦**
- **DOM: 브라우저가 만든 객체 구조**
- **JS: DOM을 수정 → 화면이 바뀜**

# DOM(Document Object Model) 이란?
**- HTML 문서를 JavaScript가 다룰 수 있게 만든 객체 구조**
**1. 왜 필요한가
HTML 파일은 그냥 글자라서 JS가 직접 고칠 수 없음
→ 그래서 브라우저가 HTML을 JS가 다룰 수 있는 형태로 바꿔둠
→ 이게 DOM**

**2. 어떻게 생겼나
HTML 태그 하나하나가 객체가 되고, 감싸는 관계대로 연결됨 (트리 구조)**

**html
 └ body
    ├ h1
    └ button**

**3. JS는 DOM을 어떻게 쓰나
document로 찾아서 바꿈**

**javascript
const h1 = document.querySelector("h1")
h1.textContent = "바뀜"**

**4. 화면과의 관계
브라우저는 DOM을 보고 화면을 그림
→ JS가 DOM 객체를 바꾸면 화면도 바뀜(JS가 HTML직접수정하는것이 아님)
**
**5. 주의
DOM은 메모리에만 있음
→ 새로고침하면 사라지고 원본 HTML로 다시 만들어짐**

**한 줄 요약
HTML(원본) → 브라우저가 DOM으로 바꿈 → JS가 DOM을 고침 → 화면이 바뀜**


# Selector(선택자)로 DOM 요소 가져오기
## 1. 왜 가져오나

- 브라우저가 HTML을 읽고 DOM을 이미 만들어 둠
- JS로 바꾸거나 이벤트를 걸려면 먼저 **대상 요소를 찾아와야 함**
- 찾은 요소는 변수에 담아두고 씀

## 2. 선택자 문법 (CSS와 같음)

| 쓰는 법 | 의미 | 예시 |
|---|---|---|
| `"태그"` | 태그 이름으로 찾기 | `"p"`, `"button"` |
| `"#아이디"` | id로 찾기 | `"#text"` |
| `".클래스"` | class로 찾기 | `".item"` |

- id: 페이지에 하나뿐 → 딱 하나 집을 때
- class: 여러 개에 같은 이름 가능 → 묶어서 다룰 때

## 3. 주요 메서드 3개

### ① getElementById("아이디")

- id로 요소 **1개** 선택
- `#` 안 붙임

```html
<h1 id="text">Hello</h1>
```

```javascript
const el = document.getElementById("text");  // id가 "text"인 h1을 가져옴
```

### ② querySelector("선택자")

- 선택자로 요소 **1개** 선택
- 조건에 맞는 것 중 **위에서 첫 번째**만 가져옴
- 없으면 `null`

```html
<h1 id="text">Hello</h1>
<p class="item">사과</p>
<p class="item">바나나</p>
```

```javascript
const title = document.querySelector("#text");  // id가 text인 h1
const first = document.querySelector(".item");  // class가 item인 것 중 첫 번째 → 사과
const p = document.querySelector("p");          // p 태그 중 첫 번째 → 사과
```

### ③ querySelectorAll("선택자")

- 선택자로 요소 **전부** 선택
- `NodeList`(묶음)로 가져옴, 없으면 빈 NodeList
- 하나씩 쓰려면 `forEach`로 돌리거나 `[인덱스]`로 꺼냄

```html
<p class="item">사과</p>
<p class="item">바나나</p>
```

```javascript
const items = document.querySelectorAll(".item");  // 사과, 바나나 둘 다

// 하나씩 꺼내서 실행 (el = 지금 꺼낸 요소)
items.forEach(el => {
    console.log(el.textContent);  // 사과, 바나나 차례로 출력
});

// 인덱스로 하나만 꺼내기 (0부터 시작)
console.log(items[1].textContent);  // 바나나
```

## 4. 가져온 다음 하는 일

```javascript
el.textContent = "Hello, DOM";     // 글자 바꾸기
el.style.color = "red";            // 스타일 바꾸기
el.addEventListener("click", 함수) // 이벤트 연결
```

## 5. 헷갈리기 쉬운 것

- `document` = DOM 전체 (메서드 아님)
- `querySelector` = 찾는 메서드
- `("button")` = 글자가 아니라 **button 요소 자체**를 찾음
- `const el`의 `el`은 그냥 이름표 → 아무 이름이나 가능

# Event 란?

- 웹 페이지에서 일어나는 **모든 동작이나 상태 변화**
- 사용자 행동: 클릭(`click`), 입력(`input`), 키보드(`keydown`, `keyup`), 스크롤(`scroll`)
- 브라우저 동작: 페이지 로드(`load`), DOM 로드 완료(`DOMContentLoaded`), 창 크기 변경(`resize`)

## EventListener(이벤트 리스너)

#### EventListener(이벤트 리스너) 란?

- 특정 요소에 특정 이벤트가 일어나는지 **기다리다가**, 일어나면 정해둔 함수를 실행하는 것
- add(추가) + Event(사건) + Listener(듣는 것)

#### EventListener(이벤트 리스너) 를 사용하는 목적, 이유

- 사용자의 행동을 감지해서 반응하게 하려고 (상호작용)
- 읽기만 하는 페이지 → 움직이는 페이지로 바꾸려고
- 예: 버튼 누르면 글자 바꾸기, 입력값 확인하기

#### EventListener(이벤트 리스너) 정의하기

```javascript
요소.addEventListener("이벤트 이름", 실행할 함수)
```

```html
<button>클릭</button>
```

```javascript
const btn = document.querySelector("button");  // 1. 요소 찾기

function buttonAlert() {                       // 2. 실행할 함수 만들기
    alert("버튼이 클릭됨");
}

btn.addEventListener("click", buttonAlert);    // 3. 요소 + 이벤트 + 함수 연결
```

- 함수 이름 뒤에 **괄호 붙이지 않기**
  - `buttonAlert` → 클릭하면 실행 (O)
  - `buttonAlert()` → 클릭 전에 바로 실행되고 `undefined`가 등록됨 (X)

#### EventListener(이벤트 리스너) 응용

**버튼 누르면 글자·색 바꾸기**

```html
<h1 class="text">Hello</h1>
<button id="change">변경</button>
```

```javascript
const h1 = document.querySelector(".text");
const button = document.querySelector("#change");

button.addEventListener("click", function () {
    h1.textContent = "Hello JavaScript";
    h1.style.color = "red";
});
```

**입력값을 화면에 추가하기**

```html
<input id="name-input" />
<button>확인</button>
```

```javascript
const input = document.querySelector("#name-input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const p = document.createElement("p");  // <p></p> 새로 만들기
    p.textContent = input.value;            // 입력한 값을 글자로 넣기
    document.body.appendChild(p);           // 화면(body)에 붙이기
});
```

**빈 값이면 경고 (조건문)**

```javascript
function printName() {
    if (input.value.trim() === "") {  // 공백 지운 값이 비어 있으면
        alert("이름을 입력하세요");
        return;                       // 아래 코드 실행 안 하고 끝냄
    }
}
```

# 마우스 감지란?

- 마우스가 요소에 **올라가거나 벗어나는 것**을 감지하는 이벤트
- `mouseover`: 마우스를 올렸을 때
- `mouseout`: 마우스가 벗어났을 때

#### 마우스 감지 사용

```html
<p id="box">마우스를 올려보세요</p>
```

```javascript
const box = document.querySelector("#box");

function changeBackgroundColor(color) {
    box.style.backgroundColor = color;
}

box.addEventListener("mouseover", () => changeBackgroundColor("skyblue"));
box.addEventListener("mouseout", () => changeBackgroundColor("orange"));
```

- 함수에 값을 넘겨야 할 땐 화살표 함수로 감싸기
  - `changeBackgroundColor("skyblue")`만 쓰면 바로 실행돼버림

# 화살표 함수란?

- 함수를 **짧게 쓰는 문법**
- `function` 대신 `=>` 사용
- 이벤트 리스너처럼 함수를 넘겨줄 때 많이 씀

#### 화살표 함수 사용

**기본 함수 → 화살표 함수**

```javascript
// 기본 함수
function add(a, b) {
    return a + b;
}

// 화살표 함수
const add = (a, b) => {
    return a + b;
};

// 한 줄이면 중괄호, return 생략 가능
const add = (a, b) => a + b;
```

**이벤트 리스너에 사용**

```javascript
// 기본 함수
button.addEventListener("click", function () {
    console.log("클릭됨");
});

// 화살표 함수
button.addEventListener("click", () => {
    console.log("클릭됨");
});

// 한 줄
button.addEventListener("click", () => console.log("클릭됨"));
```

- 그 자리에서 바로 만들어 넘기는 함수라, 이름을 따로 안 붙여도 됨