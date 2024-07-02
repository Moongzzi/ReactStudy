import './App.css'
import { useState } from 'react'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // let [[글제목1, 글제목2, 글제목3], b] = useState(['남자코트 추천', '강남 우동 맛집', '남자코트 추천']);
  let [따봉, 따봉올리기] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={() => {
        //글제목변경(new (copy = 글제목).sort());
        let copy = 글제목;
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className='list' onClick={() => {글제목변경(['여자코트 추천', 글제목2, 글제목3])}}>
        <h4>{글제목[0]} <span onClick={ () => {따봉올리기(따봉+1)} }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal); }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(!modal); setTitle(i);}}>
                {a}
                <span onClick={ (e) => { 
                  e.stopPropagation();
                  let temp = [...따봉];
                  temp[i] =  temp[i] + 1;
                  따봉올리기(temp);
                }}>👍</span> {따봉[i]} 
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let temp = [...글제목];
                temp.splice(i, 1)
                글제목변경(temp);
              }}> 삭제 </button>
            </div>
          )
        })
      }

      <input onChange={(e) => { 
        입력값변경(e.target.value);
        }}/>

      <button onClick={() => {
        let temp = [...글제목];
        //temp.push(입력값);
        temp.splice(0,0, 입력값);
        글제목변경(temp);
      }}> 추가 </button>

      {
        modal == true ? 
        <Modal 
          글제목={글제목}
          글제목변경={글제목변경}
          title = {title}/> : null
      }

    </div>
  );
}

function Modal(props){
  return (
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App