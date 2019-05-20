import React, { Component } from "react";

//Components
/* import Body from "./HR/Body"; */
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import MyStory from "./HR/Components/MyStory";
import HeartRate from "./HR/Components/HeartRate";
import Timeline from "./HR/Components/Timeline";

//Libraries
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

import "./App.scss";

const tarHRZonbyAge = {};

class App extends Component {
  constructor() {
    super();

    this.state = {
      view: "HeartRate"
    };
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
            {display}
          </p>
        </article>
        <aside className="side">
          Sidebar{" "}
          <TwitterTimelineEmbed
            className="tweet"
            autoHeight="true"
            sourceType="profile"
            screenName="theweicode"
            options={{ height: 300 }}
            noHeader="true"
            noFooter="true"
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
