# HTML 태그 정리 (day1)

## 1. 기본 구조

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    화면에 보이는 내용
</body>
</html>
```

- `<head>`: 페이지 정보를 넣는 곳. 화면에는 안 보임 (글자 인코딩, 제목 등)
- `<body>`: 실제 화면에 보이는 내용을 넣는 곳
- `<meta charset="UTF-8">`: 한글이 안 깨지게 해줌
- `<title>`: 브라우저 탭에 보이는 제목

## 2. 텍스트

- `<h1>` ~ `<h6>`: 제목. 숫자가 작을수록 글자가 큼
- `<p>`: 문단(글)
- `<hr>`: 가로 구분선. 닫는 태그 없음
- `<br>`: 줄바꿈. 닫는 태그 없음

## 3. 링크 `<a>`

```html
<a href="https://google.com">구글</a>
```

- anchor의 줄임말
- `href`에 이동할 주소를 넣음

## 4. 이미지 `<img>`

```html
<img src="./photo.jpg" alt="밤하늘" width="500">
```

- `src`: 이미지 경로 (내 컴퓨터 파일이나 인터넷 주소 둘 다 가능)
- `alt`: 이미지가 안 나올 때 대신 보여주는 글
- 닫는 태그 없음

## 5. 리스트

- `<ul>`: 순서 없는 목록 (점으로 표시)
- `<ol>`: 순서 있는 목록 (숫자로 표시)
- `<li>`: 목록 안의 항목 하나

```html
<ul>
    <li>Python</li>
    <li>HTML</li>
</ul>

<ol type="i" start="1">
    <li>Apple</li>
    <li>Banana</li>
</ol>
```

- `type`: 번호 모양 바꾸기 (`1`, `a`, `A`, `i`)
- `start`: 몇 번부터 시작할지

## 6. 테이블

```html
<table border="1">
    <thead>
        <tr>
            <th>이름</th>
            <th>이메일</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>alex</td>
            <td>alex@example.com</td>
        </tr>
    </tbody>
</table>
```

- `<table>`: 표 전체
- `<thead>`: 표의 제목 줄 묶음
- `<tbody>`: 표의 내용 줄 묶음
- `<tr>`: 한 줄 (table row)
- `<th>`: 제목 칸 (굵게 가운데 정렬됨)
- `<td>`: 내용 칸

## 7. 폼 (입력 받기)

사용자한테 입력을 받아서 서버로 보낼 때 씀

```html
<form action="https://httpbin.org/post" method="post">
    <label for="newEmail">이메일</label>
    <input id="newEmail" type="email" name="newEmail" placeholder="이메일">
    <button>회원가입</button>
</form>
```

- `<form>`: 입력칸들을 묶어서 서버로 보내는 틀
  - `action`: 데이터를 보낼 주소
  - `method`: 보내는 방식 (get / post)
- `<input>`: 입력칸. 닫는 태그 없음
  - `type`: text, password, email, search 등
  - `name`: 서버로 보낼 때 붙는 이름
  - `placeholder`: 입력칸 안에 흐리게 보이는 안내 글
- `<label>`: 입력칸 이름표. `for`와 input의 `id`를 같게 하면 연결됨
- `<button>`: 버튼. form 안에서 누르면 데이터가 전송됨

### GET vs POST

- GET: 주소창에 데이터가 보임 (예: 구글 검색 `?q=검색어`)
- POST: 주소창에 안 보이게 보냄 (예: 회원가입, 비밀번호)

## 8. 구역 나누기

- `<div>`: division(구역). 화면을 나누는 상자
- 시맨틱 태그: `<header>`, `<main>`, `<footer>`
  - div랑 역할은 같지만 이름만 봐도 어떤 구역인지 알 수 있어서 더 보기 좋음

## 9. 인라인 스타일

```html
<p style="font-size: x-large; font-weight: bold; text-align: center;">장성은</p>
```

- 태그 안에 `style` 속성으로 바로 꾸미기
- `font-size`: 글자 크기 / `font-weight`: 글자 굵기 / `text-align`: 정렬
- `&#169;`: © 기호