const API_URL = "https://api4.binance.com/api/v3/ticker/24hr"

const coinList = document.querySelector("#coin-list")
const search = document.querySelector("#search")
const allTab = document.querySelector("#all-tab")
const favTab = document.querySelector("#fav-tab")

let coins = []           // 서버에서 받아온 USDT 코인 목록
let currentTab = "all"   // 지금 보고 있는 탭 ("all" 또는 "fav")

// localStorage에서 관심항목 꺼내기 (없으면 빈 배열)
let favorites = JSON.parse(localStorage.getItem("favorites")) || []

// 숫자에 쉼표 넣기
function formatNumber(value) {
    return Number(value).toLocaleString(undefined, { maximumFractionDigits: 8 })
}

// 1. 서버에서 데이터 가져오기
function loadCoins() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            // USDT로 끝나는 것만, 거래 중지된(가격 0) 코인은 빼기
            coins = data.filter(coin => coin.symbol.endsWith("USDT") && Number(coin.lastPrice) > 0)
            render()
        })
}

// 2. 화면에 목록 그리기
function render() {
    coinList.innerHTML = ""

    const keyword = search.value.toUpperCase()

    for (const coin of coins) {
        // 검색어가 안 들어간 코인은 건너뛰기
        if (!coin.symbol.includes(keyword)) {
            continue
        }

        const isFav = favorites.includes(coin.symbol)

        // 관심항목 탭인데 관심항목이 아니면 건너뛰기
        if (currentTab == "fav" && !isFav) {
            continue
        }

        const percent = Number(coin.priceChangePercent)
        const percentClass = percent >= 0 ? "up" : "down"
        const percentText = (percent >= 0 ? "+" : "") + percent.toFixed(2) + "%"

        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td class="star ${isFav ? "on" : ""}">${isFav ? "★" : "☆"}</td>
            <td><b>${coin.symbol}</b></td>
            <td>${formatNumber(coin.lastPrice)}</td>
            <td class="${percentClass}">${percentText}</td>
            <td>${formatNumber(coin.highPrice)}</td>
            <td>${formatNumber(coin.lowPrice)}</td>
        `

        // 별 누르면 관심항목 추가/삭제
        tr.querySelector(".star").addEventListener("click", () => {
            toggleFavorite(coin.symbol)
        })

        coinList.appendChild(tr)
    }
}

// 3. 관심항목 추가/삭제 + localStorage 저장
function toggleFavorite(symbol) {
    if (favorites.includes(symbol)) {
        favorites = favorites.filter(item => item != symbol)
    } else {
        favorites.push(symbol)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
    render()
}

// 4. 검색: 글자 칠 때마다 다시 그리기
search.addEventListener("input", () => {
    render()
})

// 5. 탭 전환
allTab.addEventListener("click", () => {
    currentTab = "all"
    allTab.classList.add("active")
    favTab.classList.remove("active")
    render()
})

favTab.addEventListener("click", () => {
    currentTab = "fav"
    favTab.classList.add("active")
    allTab.classList.remove("active")
    render()
})

// 처음 한 번 불러오고, 그다음부터 1초마다 다시 불러오기
loadCoins()
setInterval(loadCoins, 1000)