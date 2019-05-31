import React from "react";

const TypedMsg = props => {
  return (
    <>
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
    </>
  );
};

export default TypedMsg;
