// 공통 js
// 변수
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let m_area = document.querySelector('main');
let f_area = document.querySelector('footer');

// 헤더 관련 스크립트
// 메인메뉴 li태그 각각 클릭시 해당 서브만 보이게 함
for(let i=0;i<gnb.length;i++){
  //console.log(i);
  gnb[i].addEventListener('click',()=>{
    //해당 메뉴 서브메뉴 변수
    const child = gnb[i].children;
    //console.log(child[1]);

    //li태그안에 있는 .sub중 선택한 것만 표시
    for(let j=0;j<sub.length;j++){
      sub[j].style.display='none';
    };
    child[1].style.display='block';
    //jQuery방식의 경우
    //$(this).find('.sub').show();
  });
};
//메인, 푸터 영역 클릭시 .gnb의 .sub숨기기
m_area.addEventListener('click',()=>{
  for(let j=0;j<sub.length;j++){
      sub[j].style.display='none';
    };
});
f_area.addEventListener('click',()=>{
  for(let j=0;j<sub.length;j++){
      sub[j].style.display='none';
    };
});


// 푸터 관련 스크립트
// 탑버튼 표시/비표시
const t_btn = document.querySelector('.top_btn');
window.addEventListener('scroll', function(){
  // console.log(window.scrollY);//1000정도면 적당
  let ws = window.scrollY;
  if(ws>=1000){
    t_btn.style.display='block';
  }else{
    t_btn.style.display='none';
  }
});

// 탑버튼 클릭시 상단으로 부드럽게 올라가기 하기
t_btn.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    behavior:'smooth' //부드럽게
  });
});
