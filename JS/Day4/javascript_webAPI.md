# Web API

## Web API의 정의
브라우저가 JavaScript에 제공하는 기능 모음

- JavaScript 언어 자체에 있는 기능이 아니라, 브라우저가 빌려주는 기능
- 그래서 브라우저 밖(VS Code 터미널의 node 등)에서는 `localStorage` 같은 걸 쓸 수 없음
- 웹 페이지가 브라우저 기능과 상호작용하도록 도와줌
- 사용자 이벤트, 화면 제어, 저장, 네트워크 통신 등을 가능하게 함

## Web API의 예시
1. DOM API : 화면(HTML 요소) 다루기
2. Event API : 클릭, 입력 같은 사용자 행동 감지
3. Timer API : 시간 맞춰 실행
4. Storage API : 브라우저에 데이터 저장
5. Fetch API : 서버와 통신

---

## DOM API
HTML 화면을 JS로 찾고, 만들고, 바꾸고, 지우는 기능

- DOM : 브라우저가 HTML을 읽어서 JS가 다룰 수 있게 만들어 둔 구조
- `document.querySelector()` : 요소 찾기 (`#아이디`, `.클래스`, `태그`)
- `textContent` : 요소 안의 글자 바꾸기
- `innerHTML` : 요소 안의 HTML 통째로 바꾸기
- `document.createElement()` : 새 요소 만들기
- `appendChild()` : 만든 요소를 붙이기
- `remove()` : 요소 지우기
- `classList.add()`, `classList.remove()` : 클래스 넣고 빼기
- `style` : 스타일 바꾸기

```javascript
const title = document.querySelector("#title");
title.textContent = "안녕하세요";       // 글자 바꾸기

const list = document.querySelector("#list");
const li = document.createElement("li"); // li 새로 만들기
li.textContent = "새 항목";
list.appendChild(li);                    // list 안에 붙이기

li.classList.add("active");              // 클래스 추가
li.style.color = "red";                  // 글자색 바꾸기
```

---

## Event API
클릭, 입력 같은 사용자 행동을 감지하는 기능

- `addEventListener("이벤트", 함수)` : 그 이벤트가 생기면 함수 실행
- 자주 쓰는 이벤트
  - `click` : 클릭했을 때
  - `input` : 입력창에 글자를 칠 때마다
  - `change` : 입력값이 바뀌고 확정됐을 때
  - `keydown` : 키보드를 눌렀을 때
  - `mouseover` : 마우스를 올렸을 때

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
    console.log("버튼 클릭");
});

// 화살표 함수로 써도 같음
button.addEventListener("click", () => {
    console.log("버튼 클릭");
});
```

---

## Timer API
시간에 맞춰 함수를 실행하는 기능

- `setTimeout(함수, 시간)` : 일정 시간 뒤에 한 번 실행
- `setInterval(함수, 시간)` : 일정 시간마다 반복 실행
- 시간 단위는 ms (1000 = 1초)
- 둘 다 타이머 번호(timerId)를 돌려줌
- `clearTimeout(timerId)`, `clearInterval(timerId)` : 그 번호로 타이머 멈추기
- 버튼을 여러 번 눌러도 타이머가 하나만 돌게 할 때도 timerId를 씀

```javascript
setTimeout(function () {
    console.log("3초 후 실행");
}, 3000);

const timerId = setInterval(function () {
    console.log("1초마다 실행");
}, 1000);

// 멈추고 싶을 때 실행
clearInterval(timerId);
```

---

## Storage API
서버 없이 브라우저에 데이터를 저장하는 기능

- key / value 형태로 저장
- 값은 문자열만 저장됨
- 내 컴퓨터, 그 브라우저, 그 사이트에서만 보임
- 저장된 내용은 개발자도구 → Application 탭에서 확인 가능
- `localStorage` : 브라우저를 껐다 켜도 남아 있음 (설정값, 관심목록 등)
- `sessionStorage` : 탭을 닫으면 사라짐 (잠깐 쓰는 임시 데이터)
- 두 개 사용법은 똑같음
- 없는 key를 `getItem` 하면 `null`이 나옴
- 객체·배열은 `JSON.stringify()`로 문자열로 바꿔서 저장, 꺼낼 때 `JSON.parse()`로 다시 바꿈

```javascript
localStorage.setItem("name", "Alex");   // 저장
localStorage.getItem("name");           // 꺼내기
localStorage.removeItem("name");        // 하나 지우기
localStorage.clear();                   // 전부 지우기

const user = { name: "Alex", age: 20 };
localStorage.setItem("user", JSON.stringify(user));         // 객체 → 문자열로 저장
const savedUser = JSON.parse(localStorage.getItem("user")); // 문자열 → 객체로 꺼내기
console.log(savedUser.name);
```

---

## Fetch API
서버에 요청을 보내고 응답을 받는 기능

- HTTP 규칙으로 요청을 보내고 응답을 받음
- 비동기로 동작함
  - 서버 응답은 시간이 걸려서, 기다리지 않고 다음 코드를 먼저 실행
  - 응답이 오면 `.then()` 안의 코드가 실행됨
- 첫 번째 `.then` : 받은 응답(JSON 글자)을 `.json()`으로 JS 객체로 바꿈
- 두 번째 `.then` : 바뀐 데이터를 가지고 원하는 작업
- 아무것도 안 적으면 GET(데이터 가져오기) 요청
- 데이터를 보낼 때는 `method: "POST"`처럼 두 번째 칸에 적음

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())   // JSON → 객체로 변환
    .then(data => console.log(data));    // 변환된 데이터 사용

console.log("이게 먼저 찍힘");             // 비동기라 fetch 결과보다 먼저 실행

// POST로 데이터 보내기
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "제목", body: "내용", userId: 1 })
})
    .then(response => response.json())
    .then(data => console.log(data));
```