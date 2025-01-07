



const Question = () => {
  // 답변 클릭 시 문제 받아오기

  // 문제 자르기



  return (
    <div className="container">
      {/* 프로그래스바 추후 추가 */}
      <div className="question-box">
        <h4>1/12</h4>
        <h3>문제 1.</h3>
        <p className="question">ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</p>
        <button className="answer-btn">답변1</button>
        <button className="answer-btn">답변2</button>
      </div>
    </div>
  );
}

export default Question;