import React, { Component } from "react";

import Button from "react-bootstrap/Button";

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

class Body extends Component {
  constructor() {
    super();

    this.state = {
      view: "HeartRate"
    };
  }

  render() {
    let blog = <p />;

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
      <>
        <div className="main-head">
          <nav className="main-nav">
            <a
              className="rt-btn"
              onClick={() => {
                this.setState({ view: "HeartRate" });
              }}
            >
              HeartRate
            </a>

            <a
              className="rt-btn"
              onClick={() => {
                this.setState({ view: "Timeline" });
              }}
            >
              Timeline
            </a>

            <a
              className="rt-btn"
              onClick={() => {
                this.setState({ view: "About Me" });
              }}
            >
              About Me
            </a>
          </nav>
          <article className="content">{blog}</article>
        </div>
      </>
    );
  }
}

export default Body;
