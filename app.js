// document.querySelector('.modal-btn').addEventListener('click', function(){
//     document.querySelector('.modal').classList.add('show')
// })

// document.querySelector('.close-btn').addEventListener('click', function(){
//     document.querySelector('.modal').classList.remove('show')
// })

function modalOnC(x) {
    document.querySelector(x).addEventListener('click', function(){
        document.querySelector('.modal').classList.toggle('show')
    })
}

modalOnC('.modal-btn');
modalOnC('.close-btn');

// 열고 닫는 기능을 함수로 만들었다.
// 매개변수로 어떤 버튼을 누르는지 적어주면 열고 닫음이 가능해진다.