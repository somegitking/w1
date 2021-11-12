//
// console.log("lotto...................")
// console.log("lotto...................")
// console.log("lotto...................")
// console.log("lotto...................")
//
// const btn = document.getElementById("btn")
//
// console.log(btn)
//
// btn.addEventListener("click",(event) => {
//     console.log(event)
//
//     const target = document.getElementById("resultDiv")
//
//     const balls = makeLottoNum()
//
//     //clear all <h3> tags
//     target.innerHTML =''
//
//     for (const num of balls) {
//         const tag = document.createElement("h3")
//         const textNode = document.createTextNode(num)
//         tag.appendChild(textNode)
//         target.appendChild(tag)
//     }
//
//
// }, false)
//
//
// function makeLottoNum(){
//
//     const numArr = [2,13,21,32,35,40]
//
//     return numArr
// }



//이벤트 관련 false 의미 확인헤 보기


// 콜백함수 스타일
// 1. =>{}
// 2. ,function()
// 3. , doA


const btn = document.getElementById("btn")


console.log(btn)


//function doA() {}
// btn.addEventListener("click", doA이 방법은 윈도우로 들어가므로 추천하지 않음.

//함수자체 선언하는 방법
//btn.addEventListener("click",function(){})

//. 화살표함수사용

btn.addEventListener("click",(event) => {
    console.log(event)

    const target = document.getElementById("resultDiv") //target에 "h3"을 넣는다.


    const balls = makeLottoNum()   //배열 즉, 루프를 돌릴수있다

    //clear all <h3> tags
    target.innerHTML =''

    for (const num of balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }


}, false) // 무조건 뒤에 false 작성.

//여기까지 작성되어있는 부분은 이벤트발생의 표준이다.

//하단부터는 함수를 통한 로또 발생
function makeLottoNum() {

    let LottoNos = []
    let DrawNos = []
    for (let i = 0; i < 45; i++) {
        LottoNos[i] = i + 1
    }

    console.log(LottoNos)
//2. 숫자를 랜덤하게 추첨하여 추첨된 인덱스 번호를 splice를 이용해서 삭제

    for (i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * LottoNos.length)

        const num = LottoNos[index]
        console.log(num)

        if (DrawNos.indexOf(num) >= 0) {
            console.log("중복 발생")
            i--
            continue
        }

        DrawNos.push(num)



    }
    return DrawNos
}

