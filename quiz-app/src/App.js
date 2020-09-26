import React, { Component } from "react";
import "./App.css";
import quizApi from "./quizApi";

class App extends Component {
  state = {
    questionBank: [],
  };

  //A function to invoke quizApi and proceeds to populate the questionBank state  with the result
  getQuestions = () => {
    quizApi().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="mainTitle"> Quiz App</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => <h4>{question}</h4>
          )}
      </div>
    );
  }
}

export default App;
