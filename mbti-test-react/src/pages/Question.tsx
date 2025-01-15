import axios from "axios";
import { useEffect, useState } from "react";


const Question = () => {
  const [question, setQuestion] = useState({
    question_cnts: "",
    question_type: ""
  });
  const [answerList, setAnswerList] = useState([{
    answer_seq: "",
    answer_cnts: "",
    answer_type: ""
  }]);
  const [param, setParam] = useState({
    question_seq: 1
  });


  // 답변 클릭 이벤트
  function handleNextAnswer(answer_type: string) {
    

  }

  // 문제 받아오기
  function getQuestionList() {
    axios.post('/api/mbti/getQuestionList', param)
    .then((res) => setQuestion(res.data[0]))
    .catch(err => console.log(err))
  }

  // 질문 받아오기
  function getAnswerList() {
    axios.post('/api/mbti/getAnswerList', param)
    .then((res) => setAnswerList(res.data))
    .catch(err => console.log(err))
  }

  // 문제 자르기


  useEffect(() => {
    // 초기화
    setParam({question_seq: 1});
    // 문제 받아오기
    getQuestionList();
    // 질문 받아오기
    getAnswerList();
  }, []);

  useEffect(() => {
    console.log("questionList =>",question);
    console.log("answerList =>",answerList);
  }, [question]);

  return (
    <div className="container">
      {/* 프로그래스바 추후 추가 */}
      <div className="question-box">
        <h4>1/12</h4>
        <h3>문제 1.</h3>
        <h4 className="question">{question?.question_cnts}</h4>
        {/* 답변 버튼 */}
        { answerList.map((item, index) =>{
          return (
            <button className="answer-btn" key={index} onClick={() => {handleNextAnswer(item.answer_type)}}>{item.answer_cnts}</button>
          )})
        }
      </div>
    </div>
  );
}

export default Question;