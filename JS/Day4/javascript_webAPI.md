# Web API
## Web API의 정의
**브라우저가 JavaScript에 제공하는 기능 모음**
- JavaScript 언어 자체가 아니라 브라우저 환경의 API
- 웹 페이지가 브라우저 기능과 상호작용하도록 도와줌
- 사용자 이벤트, 화면 제어, 네트워크 통신 등을 가능하게 함
## Web API의 예시
1. DOM API
document.querySelector, element.textContent
2. Event API
addEventListener
3. Timer API
setTimeout, setInterval
4. Storage API
localStorage, sessionStorage
5. Fetch API
서버와 통신 (fetch)
## DOM API
HTML 요소를 찾고, 내용을 바꾸는 기능

- `document.querySelector()` : 요소 찾기
- `element.textContent` : 요소 안의 글자 바꾸기

```javascript
const title = document.querySelector("#title");
title.textContent = "안녕하세요";
```

## Event API
클릭, 입력 같은 사용자 행동을 감지하는 기능

- `addEventListener("이벤트", 함수)` : 이벤트가 생기면 함수 실행

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
    console.log("버튼 클릭");
});
```

## Timer API
시간에 맞춰 함수를 실행하는 기능

- `setTimeout` : 일정 시간 뒤에 한 번 실행
- `setInterval` : 일정 시간마다 반복 실행
- `clearInterval(timerId)` : 반복 멈추기 (timerId는 타이머 번호)

```javascript
setTimeout(function () {
    console.log("3초 후 실행");
}, 3000);

const timerId = setInterval(function () {
    console.log("1초마다 실행");
}, 1000);

clearInterval(timerId);
```

## Storage API
서버 없이 브라우저에 데이터를 저장하는 기능

- key / value 형태로 저장, 값은 문자열만 저장됨
- `localStorage` : 브라우저를 껐다 켜도 남아 있음
- `sessionStorage` : 탭을 닫으면 사라짐
- 객체는 `JSON.stringify()`로 문자열로 바꿔서 저장, 꺼낼 때 `JSON.parse()`로 다시 객체로 바꿈

```javascript
localStorage.setItem("name", "Alex");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

const user = { name: "Alex", age: 20 };
localStorage.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem("user"));
```

## Fetch API
서버에 요청을 보내고 응답을 받는 기능

- 비동기로 동작함 (요청 보내놓고 기다리지 않고 다음 코드 먼저 실행)
- 응답이 오면 `.then()`에서 결과를 처리

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));
```