import React from "react";
import { useSpring, animated } from "react-spring";

const Ex2UseSpring = () => {
  let props = useSpring({
    color: [131, 111, 255], //mã màu thay đổi
    from: {
      color: [238, 99, 99], //mã màu mạc định
    },
    config: { duration: 2000, delay: 0.5 },
  });

  //tăng độ dài,font chữ
  let propsFont = useSpring({
    from: {
      width: "0%",
      height: "0%",
      fontSize: "10px",
    },
    to: async (next, cancel) => {
      await next({ width: "100%", height: "100%", fontSize: "50px" });
      await next({ width: "50%", height: "50%", fontSize: "10px" });
      await next({ width: "100%", height: "100%", fontSize: "50px" });
    },
    config: { duration: 300 },
  });
  return (
    <div>
      <animated.div
        style={{
          color: props.color.interpolate((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        Ex2UseSpring
      </animated.div>
      <hr />
      <animated.span style={propsFont}>
        <span>Hellooo</span>
        <p>abcccba</p>
      </animated.span>
    </div>
  );
};

export default Ex2UseSpring;
