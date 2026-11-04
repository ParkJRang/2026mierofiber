// 1. 메인슬라이드 구현

// 변수선언
const m_img = document.querySelectorAll('#visual_slide > div');
const l_btn = document.querySelector('#visual_slide .s_btn li:first-child');
const r_btn = document.querySelector('#visual_slide .s_btn li:last-child');
const ctrl_btn = document.querySelectorAll('#visual_slide .ctrl_btn li');

let n = 0;//인덱스값 초기화(컨트롤 버튼 클릭시 인덱스값 0, 첫번째 목록이기 때문)

//3초마다 반복 호출을 위한 움직이는 슬라이드 함수
function fadeInOut(){
  m_img.forEach(img=>{
    // img.style.display='none'; //보이는 이미지 숨기기
    img.style.opacity='0';
  });

  //컨트롤버튼 서식 제거
  ctrl_btn.forEach(btn=>{
    btn.classList.remove('on');
  });

  if(n===3){//n값이 3이라면(마지막 슬라이드 이미지라면)
    n=0; //0으로 초기화하고(처음 슬라이드가 나오도록 함)
  }else{
    n++; //1씩 증가하여 슬라이드가 나오도록 함.
  };

  //해당 인덱스값(n)에 해당하는 컨트롤 보튼에 on서식 적용
  ctrl_btn[n].classList.add('on');
  m_img[n].style.opacity='1';
  console.log(n);
};


// 이미지 슬라이드 (좌측버튼 클릭시 움직이는 함수)
function fadeInOut2(){
  m_img.forEach(img=>{
    img.style.opacity='0'; //보이는 이미지 숨기기
  });

  //컨트롤버튼 서식 제거
  ctrl_btn.forEach(btn=>{
    btn.classList.remove('on');
  });

  if(n===0){//n값이 0이라면(처음 슬라이드 이미지라면)
    n=3; //3으로 초기화하고(마지막 슬라이드가 나오도록 함)
  }else{
    n--; //1씩 감소하여 슬라이드가 나오도록 함.
  };
  //해당 인덱스값(n)에 해당하는 컨트롤 보튼에 on서식 적용
  ctrl_btn[n].classList.add('on');
  m_img[n].style.opacity='1';
};

//매 3초마다 함수 반복호출하여 실행
//setInterval객체(반복할 내용, 시간)
let Timer = setInterval(fadeInOut, 3000);

//컨트롤 버튼에 마우스 오버시 시간 제거
ctrl_btn.forEach(btn=>{
  btn.addEventListener('mouseenter',function(){
    clearInterval(Timer);
  });
});

//컨트롤 버튼에 마우스 아웃시 다시 시간 생성
ctrl_btn.forEach(btn=>{
  btn.addEventListener('mouseleave',function(){
    Timer = setInterval(fadeInOut, 3000);
  });
});

//컨트롤 버튼을 클릭하면 해당 슬라이드 이미지가 나오도록 함
ctrl_btn.forEach((btn, idx)=>{
  btn.addEventListener('click', function(){
    console.log(idx);
    //보이는 슬라이드 이미지 모두 숨기기
    m_img.forEach(img=>{
      img.style.opacity='0';
    });
    //컨트롤버튼 서식 모두 제거
    ctrl_btn.forEach(b=>{
      b.classList.remove('on');
    });
    n=idx;
    //해당 n번째 이미지 나오게 하기
    m_img[n].style.opacity='1';
    ctrl_btn[n].classList.add('on');//컨트롤 버튼 서식 적용
  });
});

//좌/우측 버튼 클릭시 해당 함수 호출하여 슬라이드 움직이게 하기
//조건 : 버튼에 마우스 오버시 기존 '시간객체' 제거

l_btn.addEventListener('click',function(){
  clearInterval(Timer);//시간객체 제거
  fadeInOut2();
});
r_btn.addEventListener('click', function(){
  clearInterval(Timer);//시간객체 제거
  fadeInOut();
});

//좌/우측 버튼에서 마우스 이탈시 Timer객체 다시 살려서 자동으로 움직이게 하기
const s_btn_area = document.querySelector('#visual_slide .s_btn');
s_btn_area.addEventListener('mouseleave', function(){
  clearInterval(Timer);//시간객체 제거
  Timer = setInterval(fadeInOut, 3000);//시간객체 다시 살리기
});


// 2. 탭 컨텐츠 구현
// 변수선언
const tab_list = document.querySelectorAll('.tcon ul li a');
const tab_cont = document.querySelectorAll('.tcon ul li div');
// 이제 querySelectorAll 등으로 목록 전체가 한 기능을 공유할 땐 하나의 변수에 담음

// 초기값 : 첫번째 컨텐츠만 보이게 하고, 첫번째 a태그에 't_on'클래스 추가
// 지금은 css로 적용했기 때문에 이론상 불필요(스크립트 연습용)
// tab_cont.forEach((el, index)=>{
//   if(index===0){
//     el.style.display='block';//첫번째 div 보이게 
//     tab_list[index].classList.add('t_on');//첫번째 탭메뉴에 't_on'클래스 적용
//   }else{
//     el.style.display='none';//첫번째 이외 div 숨기기
//   }
// });

//사용자가 탭메뉴 클릭시 이벤트가 동작하면서 모든 컨텐츠를 숨기고, 클릭한 해당 탭메뉴 컨텐츠만 표시하기
tab_list.forEach((tab, i)=>{
  tab.addEventListener('click',(e)=>{
    e.preventDefault(); //a태그 기본 링크 이동 막기(새로고침 방지)
    //모든 컨텐츠 숨기고, 모든 탭메뉴의 't_on'클래스 서식 제거
    tab_cont.forEach((content)=>{
      content.style.display='none';
    });
    tab_list.forEach((t)=>{
      t.classList.remove('t_on');
    });
    //선택한 메뉴만 't_on'클래스 서식 적용 후 바로 뒤에 배치된 div 컨텐츠 보이게 하기
    tab_cont[i].style.display='block';
    tab_list[i].classList.add('t_on');
    //3번째 탭메뉴 선택시, 탭컨텐츠 영역의 높이가 늘어나게 하기
    if(i===2){
      tab_cont[i].parentElement.parentElement.parentElement.style.height='600px';
    }else{
      tab_cont[i].parentElement.parentElement.parentElement.style.height='450px';
    }
  });
});