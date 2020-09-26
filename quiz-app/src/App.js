import React, { Component } from "react";
import "./App.css";
import quizApi from "./quizApi";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  //A function to invoke quizApi and proceeds to populate the questionBank state  with the result
  getQuestions = () => {
    quizApi().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  //A function to get the score and the responses of the question
  rightAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div>
        <h2 className="mainTitle">Welcome to Quiz App</h2>
        <div className="container">
          <div className="subTitle"> Let's Start !!</div>
          {this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(
              ({ question, answers, correct, questionId }) => (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={questionId}
                  selected={(answer) => this.rightAnswer(answer, correct)}
                />
              )
            )}
          {this.state.responses === 5 ? (
            <Result score={this.state.score} playAgain={this.playAgain} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
