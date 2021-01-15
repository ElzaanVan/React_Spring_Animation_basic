import React from "react";
import { useSpring, animated } from "react-spring";

function Component1() {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 }
  });

  return (
    <animated.div style={props}>
      <div style={c1style}>
        <h1>HELLO</h1>
        <p>FRONT END DEVELOPER</p>
      </div>
    </animated.div>
  );
}

const c1style = {
  color: "white",
  background: "steelblue",
  padding: "10px"
};

export default Component1;
