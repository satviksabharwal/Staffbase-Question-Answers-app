import "./index.css";
import data from "./data.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionData } from "./Redux/action/selectedUserAction";

function App() {
  // const [question, setQuestion] = useState({});
  const [tempTitle, setTempTitle] = useState("");
  const [tempQuestion, setTempQuestion] = useState("");
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.selectedQuestion);

  useEffect(() => {
    console.log("data"+data.data);
    dispatch(setQuestionData(data.data));
    // setQuestion(data.data);
    console.log(questionsList);
  }, [questionsList,dispatch]);

  const OnClickAsk = () => {
    console.log(tempTitle, tempQuestion);
    let que = {
      "title": tempTitle,
      "que": tempQuestion,
      "ans": ""
    } 
    let tempQuestions = questionsList; 
    tempQuestions.push(que);
    dispatch(setQuestionData(tempQuestions));
  }

  return (
    <div className="App">
      <div className="App_createQuestion">

        <label htmlFor="textTitle">Title</label>
        <input id ="textTitle" type="text" placeholder="Question Title" onChange={(e) => setTempTitle(e.target.value)}/>
        <label htmlFor="textQuestion">Question</label>
        <textarea id= "textQuestion" placeholder="Enter your question here" onChange={(e) => setTempQuestion(e.target.value)}></textarea>
        <button onClick={OnClickAsk}>Ask Question</button>
      </div>
      <div className="App_questions">{
        Object.keys(questionsList).length !== 0 && questionsList.map((que, index) => (
          <div className="cardBox">
            <h3>{`${index+1} : ${que.que}`}</h3>
            <h4>{`${que.ans}`}</h4>
          </div>
        ))
         }</div>
    </div>
  );
}

export default App;
