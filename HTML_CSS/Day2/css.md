# CSS 란?
HTML 요소의 모양과 배치를 정하는 언어

- 글자 색, 크기, 폰트
- 여백, 정렬, 위치
- 레이아웃(Flex, Grid)
  - 화면에 요소를 어떻게 배치할지
- 반응형 디자인
  - 화면 크기에 따라 레이아웃이 자동으로 바뀌는 디자인

## Internal CSS
- HTML 파일 안 `<head>`에 `<style>` 태그를 넣고 그 안에 CSS를 쓰는 방법
- 기본 구조: `selector {property: value}`

```html
<head>
    <style>
        div {text-align: center;}
        header {font-size: x-large; font-weight: bold;}
    </style>
</head>
```

## Inline CSS
- 태그 안에 `style=""`로 직접 한 줄로 쓰는 방법
- 그 태그 하나에만 적용됨
- 여러 곳에 같은 스타일을 주려면 매번 써야 해서 불편함

```html
<p style="font-size: x-large; font-weight: bold;">오즈코딩스쿨</p>
```

## External CSS 각각의 방식에 대해서 정리하기
- CSS를 따로 `.css` 파일로 만들고 HTML에서 `<link>`로 불러오는 방법
- HTML과 CSS를 나눠서 관리할 수 있음
- css 파일 안에는 `<style>` 태그를 쓰지 않음

```html
<link rel="stylesheet" href="style.css">
```

| 방식 | 쓰는 곳 | 특징 |
|---|---|---|
| Inline | 태그 안 `style=""` | 그 태그 하나만 적용 |
| Internal | `<head>` 안 `<style>` | 그 HTML 파일 안에서만 적용 |
| External | 따로 만든 `.css` 파일 | 여러 HTML 파일에서 같이 쓸 수 있음 |

## CSS Selector(선택자)
어떤 HTML 요소에 스타일을 적용할지 정하는 규칙

- 전체 선택자: `*`
- 태그 선택자: `div`
- 클래스 선택자: `.class` (여러 곳에 쓸 수 있음)
- ID 선택자: `#id` (한 페이지에 한 번만)

결합자(관계) 선택자
- 자손 선택자 `div p`: div 안에 있는 모든 p
- 자식 선택자 `div > p`: div 바로 아래 자식 p만
- 인접 형제 `div + p`: div 바로 다음에 오는 p 하나
- 일반 형제 `div ~ p`: div 뒤에 오는 모든 형제 p

속성 선택자
- `a[href]`: href 속성이 있는 a 태그
- `input[type="text"]`: type이 text인 input 태그

가상 클래스 선택자 (요소의 상태로 선택)
- `:hover`: 마우스를 올렸을 때
- `:focus`: 포커스를 가졌을 때
- `:active`: 클릭하고 있는 순간
- `:nth-child()`: 부모 기준 n번째 자식

우선순위
- `!important` > inline style > id > class > 태그 > `*`
- 같은 우선순위면 나중에 쓴 코드가 적용됨

## style 속성
- 태그에 직접 스타일을 넣을 때 쓰는 속성 (`style="속성: 값;"`)
- 여러 개는 `;`로 구분
- background-color: 배경색

```html
<header style="font-size: x-large; font-weight: bold; background-color: red;">장성은</header>
```

## text 관련
### font-size
- 글자 크기
- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large` 또는 `px`로 지정

### font-weight
- 글자 두께
- `bold`: 굵게

### text-align, 
- 글자 정렬
- `left`, `center`, `right`
- 부모 div에 주면 안에 있는 글자에 같이 적용됨

## box model
모든 HTML 요소를 사각형 박스로 보고 크기와 여백을 계산하는 규칙
(바깥부터 margin → border → padding → content)

### margin
- 박스 바깥 여백 (다른 요소와의 거리)
- `margin-top`, `margin-bottom`처럼 한 방향만도 가능
- margin을 바꾸면 다른 요소도 같이 움직임

### padding
- 테두리와 내용 사이 안쪽 여백
- 배경색이 padding까지 칠해짐

### border
- 박스 테두리
- `border: 두께 종류 색` 순서 (예: `border: 2px solid blue;`)
- 종류: `solid`(실선), `dotted`(점선)

### content
- 실제 내용(글자, 이미지)이 들어가는 영역

### width
- 가로 크기
- 기본으로는 content만의 크기

### height
- 세로 크기
- 기본으로는 content만의 크기

### box-sizing
- 박스 크기를 계산하는 기준
- 기본값 `content-box`: width가 content만의 크기
  - width 100, padding 50, border 5면 실제 가로 = 100 + 50*2 + 5*2 = 210
- `border-box`: width 안에 padding, border까지 포함
  - width 100이면 실제 가로도 100

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```