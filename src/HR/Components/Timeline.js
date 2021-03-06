import React from "react";
import Typed from "react-typed";

const Timeline = props => {
  return (
    <div>
      <Typed strings={["Here you can find anything"]} typeSpeed={40} />
      <br />

      <Typed
        strings={[
          "Search for products",
          "Search for categories",
          "Search for brands"
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
    </div>
  );
};

export default Timeline;
