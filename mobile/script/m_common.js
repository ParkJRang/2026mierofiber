//변수선언
const t_btn = document.querySelector('.toggle');
const spans = document.querySelectorAll('.toggle span');
const gnb = document.querySelector('.gnb');
let m_menu = document.querySelectorAll('.gnb > ul> li > a');
let a = 0; //gnb 펼치기/숨기기 기능 구현용 변수

t_btn.addEventListener('click',function(){
  this.classList.toggle('active');//toggle 버튼에 'active'라는 on/off되는 서식을 임의로 생성
  if(this.classList.contains('active')){//만약 .toggle에 'active'클래스가 존재한다면
    spans[0].classList.add('act_rotate01');
    spans[1].classList.add('act_remove');
    spans[2].classList.add('act_rotate02');
  }else{//그렇지 않다면(toggle형태로 넣은 서식이라 한번 클릭하면 off되어 없어지게 됨)
    spans[0].classList.remove('act_rotate01');
    spans[1].classList.remove('act_remove');
    spans[2].classList.remove('act_rotate02');
  }
  
  if(a==0){
    gnb.style.display='block';
    console.log(a);
    a=1;
  }else{
    gnb.style.display='none';
    a=0;
  }
});

//메인메뉴 클릭시 해당 서브메뉴만 나오게하기
console.log(m_menu);
m_menu.forEach(function(item){
  item.addEventListener('click', function(e){
    // alert('클릭');
    const sub = item.nextElementSibling;//서브메뉴 변수
    if(sub&&sub.classList.contains('sub')){
      e.preventDefault();
    }
    //다른 서브메뉴 숨기기
    m_menu.forEach(function(otherItem){
      if(otherItem!==item){
        const otherSub = otherItem.nextElementSiblisng;
        //다른 서브메뉴 숨기기
        if(otherSub&&otherSub.classList.contains('sub')){
          otherSub.classList.remove('act');
        }
        const otherIcon = otherItem.querySelector('.fa-angle-down');
        //아이콘 방향 반대로 돌리기
        if(otherIcon){
          otherIcon.classList.remove('rotate');
        }
      }
    });
    sub.classList.toggle('act');//클릭 서브메뉴 여닫기
    //현재 클릭한 메뉴 화살표 아이콘 회전하기
    const icon = item.querySelector('.fa-angle-down');
    if(icon){
      icon.classList.toggle('rotate');
    }
  });
});
