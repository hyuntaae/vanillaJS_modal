/*

****** 🚀 기능 정의 🚀 ******

modal-btn 버튼 클릭 시
- modal에 show 클래스 추가

close-btn 버튼 클릭 시
- modal에 붙은 show 클래스 제거

 */


document.querySelector('.modal-btn').addEventListener('click', function(){
    document.querySelector('.modal').classList.add('show')
})

document.querySelector('.close-btn').addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('show')
})

/* 

****** 🕹 기능 추가 🕹 ******

modal의 modal-content를 제외한 나머지 배경을 눌렀을 때 모달창이 닫히도록 구현히고 싶음

modal 클릭 시
- modal에 붙은 show 클래스 제거


document.querySelector('.modal').addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('show')
})


****** 🚨 문제 발생 🚨 ******

- modal의 검정 배경을 눌렀을때 모달창이 닫히기는 함.
- 그런데 modal 안에 있는 modal-content, 그 안에 있는 텍스트를 눌러도 모달창이 닫힘.
- 나는 정확히 modal-content를 제외한 배경 부분을 눌렀을때만 닫히게 하고 싶음.

- 문제 원인 = 이벤트 버블링

- 내가 modal-content, 그 안에 있는 요소들을 클릭했을때 이벤트 버블링 때문에
  이들의 상위요소인 modal까지 클릭한게 되었고 그 modal에 붙어 있던 이벤트리스너가
  동작해서 모달창을 닫아주게 된것임.

- 즉, modal안에 있는 다른 요소를 클릭하면 이벤트 버블링이 일어나서
  브라우저가 그 상위요소인 modal까지 클릭을 했다고 인지함. 
  따라서 modal이 클릭됐으므로 modal에 붙어있던 이벤트리스너가 동작함
  그래서 modal에 붙은 클래스를 제거하며 모달창이 닫히게 됨

****** 🔥 문제 해결 🔥  ******

- addEventListener('click', function(요기){})의 콜백함수에 파라미터를 추가하면
  이벤트 관련 함수를 사용할 수 있음. 파라미터 이름은 보통 e를 사용함
- e.target 이라는 함수를 사용하면 실제 이벤트가 발생한 곳을 알려줌
- 따라서 if문을 사용해서 실제 클릭한 곳이 modal 일 경우 모달창을 닫아주세요
  라고 코드 짜면 해결 할 수 있을듯 함.
- 물론 이벤트 버블링 자체를 막은건 아니고 이벤트 버블링이 일어난다고 해도
  사용자가 실제로 클릭한 곳을 찾아내서 해당 부분에서만 이벤트가 발생하도록 만든것임

*/

document.querySelector('.modal').addEventListener('click', function(e){
    if(e.target == document.querySelector('.modal')) {
        document.querySelector('.modal').classList.remove('show')
    }
})


/*

******  추가  ******

- 이벤트 관련 함수중에 e.currentTarget 이란것도 있다.
  e.target 은 실제 이벤트가 발생한 요소를 알려준다면 e.currentTarget 은 이벤트리스너를 가진 요소를 알려준다.
- 위 상황에서 나는 이벤트 리스너가 달린 modal에만 이벤트를 발생시키고 싶으므로 
  현재 이벤트가 발생한 요소 == 이벤트리스너가 달린 요소 // e.target == e.currentTarget 이렇게 써도 된다.


document.querySelector('.modal').addEventListener('click', function(e){
    if(e.target == e.currentTarget) {
        document.querySelector('.modal').classList.remove('show')
    }
})

*/



