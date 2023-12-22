import React from "react";
import { useSpring, animated } from "react-spring";
import Ex2UseSpring from "./Ex2UseSpring";
import Ex3UseSpring from "../Ex3UseSpring";

const DemoUseSpring = () => {
  const props = useSpring({
    color_text: "red",
    num: 20,
    scroll: 100,
    from: { color_text: "green", num: 0, scroll: 0 },
    config: { duration: 2000 },
  });

  return (
    <div>
      <h3>Change color text</h3>
      <animated.div style={{ color: props.color_text }}>
        I will fade it
      </animated.div>
      <hr />
      <h3>Change number</h3>
      <animated.h4 style={{ color: props.color_text }}>{props.num}</animated.h4>
      <animated.p style={{ fontSize: props.num, color: props.color_text }}>
        1
      </animated.p>
      <hr />
      <h3>scroll</h3>
      <animated.div scrollTop={props.scroll}>
        <p>hello</p>
      </animated.div>
      <div className="d-flex justify-content-around">
        <Ex2UseSpring />
        <Ex3UseSpring />
      </div>
    </div>
  );
};

export default DemoUseSpring;
