/* eslint-disable*/
/* warning message 끄고 싶을때 사용한다.  eslint-disable*/


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //변수 할당,  어떤한 값을 매번 갱신하기 위해...
  let post = 'TItle: 변수로 읽어오기 ';
  
  // let num = [1, 2];
  // x = num[0] ==> 1
  // y = num[1] ==> 2
  // //같은 문법
  // let [x, y] = [1, 2]
  // 결론은 useState가 두개의 return값을 갖는 함수 이다.
  let [a, b] = useState('useState Test...');
  // a는 변수명, b는 state변경을 도와주는 함수.
  let [listtitle, listtitle_fn] = useState('여자 코트 추천');
  //그럼 왜 변수를 안쓰고 useState를 쓰느냐? 실시간 변경시 HTML도 자동 변경하기 위해
  // state는 HTML이 자동 재 렌더링 된다.

  // let [logo, setLogo] = useState("ReactBlog");
  // let [title1, setLogo1] = useState("남자코드 추천");
  // let [title2, setLogo2] = useState("강남 우동맛집");
  // let [title3, setLogo3] = useState("파이썬독학");
  let [title, setTitle] = useState(["남자코트 추천", "강남 우동맛집","파이썬독학"]);
  let [like_cnt, addLikeCnt] = useState([0,0,0,0]);
  // let [like_cnt, addLikeCnt] = useState(0);
  function addLikeCnt1(){
    console.log('addLikeCnt 함수 호출됨');
    console.log(like_cnt[0],', ',like_cnt[1],', ',like_cnt[2], '총합 : ', like_cnt[3]);
    like_cnt[0] = like_cnt[0] +1;
    like_cnt[3] = like_cnt[3] +1;
    addLikeCnt([...like_cnt]);
    // console.log(like_cnt);
    // addLikeCnt(like_cnt + 1);
  }

  
  function setTitle1() {
    if (title[0][0] == '남'){
      title[0] = "여자 스커트 추천"
      setTitle( [...title])
    }
    else{
      title[0] = "남자코트 추천"
      setTitle( [...title])
    }
  }

  
  function sortTitle() {
   console.log(title);
   let sorttitle = [...title]
   sorttitle.sort()
   setTitle(sorttitle)
  }

  return (
    // 리턴문 안에는 하나의 tag만 존재해야함. 
    // 즉 <div></div> 안에서 중첩은 상관없다.
    <div className="App">
      <div className='black-nav'>
        <h2> 블로그임 H2</h2> 
        { /*        
        <h2>{logo}</h2> 
        그러나 제목과 같이 자주 변경되지 않는 것은 static하게 hard coding 해도 된다.
          다만 같은 문귀가 여러 군데 동일하게 사용되어야 하면 변수로 쓸수 있다.
        */}

        {/* //style 속성을 css가 아니라 직접...줄수도 있다. */}
        <h4 style={ //jsx sytple은 {{key:value, }}
          {color:'red',
          fontSize:'20px',
          height:'20px'}
        }> style 속성을 css가 아니라 직접...줄수도 있다</h4>
      </div>
      <div className='black-nav2'>
        <h3>{post}</h3>
      </div>
      <div className='black-nav2'>
        <h4 
        //style 속성을 css가 아니라 직접...줄수도 있다.
          style={ //jsx sytple은 {{key:value, }}
            {color:'red',
            fontSize:'30px',
            height:'40px'}
          }
        >
          test {like_cnt[0]}, {like_cnt[1]}, {like_cnt[2]},{like_cnt[3]}
          {/* test {like_cnt} */}
        </h4>
      </div>
      <div className='black-nav2'>
        <button onClick={sortTitle}> 제목 sorting 하기</button>
      </div>
      <div className='list'>
      {/* <span onClick={ 함수명 }>❤</span>
      <span onClick={ function() {실행할 코드} }>❤</span>
      <span onClick={ () => {실행할 코드} }>❤</span> */}
        <h4>{title[0]} <span onClick={ addLikeCnt1}> 👍 좋아요</span> {like_cnt[0]} </h4>
        <p>2월 17일 발행</p>
        <p>{a}</p>
        <button onClick={setTitle1 }
          // onClick={() => {console.log('button clicked')} }
          // onPress={() => {console.log('button pressed')} }
        > 여길누르세요 제목이 수정됩니다.</button>        
      </div>
      <div className='list'>
        <h4>{title[1]} <span onClick={ () => {
          like_cnt[1] = like_cnt[1] +1;
          like_cnt[3] = like_cnt[3] +1;
          addLikeCnt([...like_cnt]);

        }}
        > 👍 좋아요</span> {like_cnt[1]} </h4>
        <p>2월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]} <span onClick={ () => {
          like_cnt[2] = like_cnt[2] +10;
          like_cnt[3] = like_cnt[3] +10;
          addLikeCnt([...like_cnt]);
          }}> 👍 좋아요</span> {like_cnt[2]} </h4>
        <p>2월 19일 발행</p>

      </div>
      <div className='modal'>
        <h4>제목 Modal1.  div normal.</h4>
        <p>날씨</p>
        <p>상세내용</p>
      </div>
      {/* div가 너무 많아 혼동된다. Component를 만들어 보자.  컴포넌트 함수는 현재 함수 밖에서...
      1. function 만들고
      2. return() 안에 html 담고
      3. 함수명을 태그 처럼  <함수명></함수명> 사용하기
      3-1. 함수명은 첫글자는 대문자로 하자.*/}
      <Modal></Modal>
      <Modal/>

      {/* <Modal/> 위와 동일하다.
      그럼 언제 component를사용하는가?
      1. 함수와 유사하게...자주 반복되는 html 축약하고 싶을때
      2. 큰 페이지들
      3. 자주 변경되는 것들
      */}


      {/* <div className="Div_test">        
        <p className="Flex_item">helloflex helloflex helloflex</p>
        <div className="Flex_item">abcabcabcabcabcabcabc</div>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          >helloflex</a>
      </div> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br></br>
          왜 안돌지????
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ^^; Nice to 밑 유
        </a>
      </header>
      
      
    </div>
  );
}

//컴포넌드 만들기. app()과 동일하다 
// return문 안에는 하나듸 tag만 가능. 안에서 중복 처리는 무관.
function Modal(){
  // return안에 Html이 들어 간다.
  return (
    <div className='modal'>
      <h4>제목 Modal2.  from component... normal.</h4>
      <p>날씨</p>
      <p>상세내용</p>
     </div>
  )
}

function Test1(){
  return (
    <div>
      <div>
      <p>하나의 div만 가능.</p>
      </div>
      <div>
        <p> 굳이 2개가 필요하다면...  맨위아래를 다시 div로 묵는다.</p>
      </div>
    </div>
  )
}

function Test2(){
  return (
    <>
      {/* <p>의미 없는  div 대신 널..비어있는 tag사용가능 현재 return문의 위아래 처림. Test1과 비교하라</p> */}
      <div>
      <p>하나의 div만 가능.</p>
      </div>
      <div>
        <p> 굳이 2개가 필요하다면...  맨위아래를 다시 div로 묵는다.</p>
      </div>
    </>
  )
}

export default App;
