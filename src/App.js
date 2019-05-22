import React, { Component } from "react";

//Components
/* import Body from "./HR/Body"; */
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Ads from "./HR/Data/Ads";

import MyStory from "./HR/Components/MyStory";
import HeartRate from "./HR/Components/HeartRate";
import Timeline from "./HR/Components/Timeline";
import HealthQuiz from "./HR/Components/HealthQuiz/HealthQuiz";
import quizQuestions from "./HR/Components/HealthQuiz/quizQuestions";
import Result from "./HR/Components/HealthQuiz/Result";

//MEDIA
import fatDog from "./MEDIA/fatdogwalk.mp4";

//Libraries
import update from "react-addons-update";
//TwitterEmbeddedLibrary
import { TwitterTimelineEmbed } from "react-twitter-embed";

import "./App.scss";

//React-Gif-Player
/* var ReactDOM = require("react-dom");
var GifPlayer = require("react-gif-player");

const tarHRZonbyAge = {}; */

class App extends Component {
  constructor() {
    super();

    this.state = {
      view: "HeartRate",
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: ""
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  render() {
    let display;
    if (this.state.view === "About Me") {
      display = <MyStory />;
    }
    if (this.state.view === "HeartRate") {
      display = <HeartRate />;
    }
    if (this.state.view === "Timeline") {
      display = <Timeline />;
    }
    if (this.state.view === "Health Quiz") {
      console.log("Rrrrestult::::", this.state.result);
      if (this.state.result.length > 0) {
        console.log("results greater than 0: ", this.state.result);
        display = (
          <>
            {" "}
            <Result quizResult={this.state.result} />;{" "}
            <img
              src="https://i.imgur.com/poHHbRK.jpg"
              onClick={() => {
                this.setState({
                  counter: 0,
                  questionId: 1,
                  question: "",
                  answerOptions: [],
                  answer: "",
                  answersCount: {},
                  result: ""
                });
              }}
            />
          </>
        );
      }
      if (this.state.result === "") {
        display = (
          <>
            <HealthQuiz
              answer={this.state.answer}
              answerOptions={this.state.answerOptions}
              questionId={this.state.questionId}
              question={this.state.question}
              questionTotal={quizQuestions.length}
              onAnswerSelected={this.handleAnswerSelected}
            />
          </>
        );
      }
    }

    return (
      <div className="wrapper">
        <header className="main-head">
          {" "}
          Remember to always put safety as your #1 priority: Do not over exert
          yourself
        </header>
        <nav className="main-nav">
          <ul>
            <li>
              <a
                className="rt-btn"
                onClick={() => {
                  this.setState({ view: "HeartRate" });
                }}
              >
                HeartRate
              </a>
            </li>
            <li>
              <a
                className="rt-btn"
                onClick={() => {
                  this.setState({ view: "Timeline" });
                }}
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                className="rt-btn"
                onClick={() => {
                  this.setState({ view: "About Me" });
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="rt-btn"
                onClick={() => {
                  this.setState({ view: "Health Quiz" });
                }}
              >
                Health Quiz
              </a>
            </li>
          </ul>
        </nav>
        <article className="content">
          <h1>Target Heart Rate Zone Chart</h1>
          <p>
            I see trainers at the gym every day asking obese people to over
            exert themselves. All that is going to do is cause injury and
            prevent true weight loss. So remember as long as you are within the
            target heart rate it doesn't matter what activity you're doing as
            long as you keep up with your diet plan and stay within the target
            heart rate zone during exercise you are well on your way.
          </p>
          {display}
        </article>
        <aside className="side">
          Sidebar{" "}
          <TwitterTimelineEmbed
            className="tweet"
            autoHeight={true}
            sourceType="profile"
            screenName="theweicode"
            options={{ height: 300 }}
            noHeader={true}
            noFooter={true}
          />
        </aside>
        <div className="ad">Advertising</div>
        <footer className="main-footer">The footer</footer>
      </div>

      /*  <div className="wrapper">
      <Body />
    </div> */
    );
  }
}
export default App;
