//변수선언
const t_btn = document.querySelector('.toggle');
const spans = document.querySelectorAll('.toggle span');
const gnb = document.querySelector('.gnb');
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

