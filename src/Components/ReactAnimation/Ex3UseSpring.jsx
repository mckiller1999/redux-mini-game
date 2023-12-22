import React from "react";
import { useSprings, animated } from "react-spring";

const Ex3UseSpring = () => {
  let arrOpacity = [
    { opacity: 0.2, color: "red", content: "FullStack", num: 100 },
    { opacity: 0.3, color: "green", content: "Backend", num: 200 },
    { opacity: 0.5, color: "blue", content: "Frontend", num: 300 },
    { opacity: 0.7, color: "orange", content: "NodeJs", num: 400 },
    { opacity: 1, color: "purple", content: "ReactJs", num: 500 },
  ];

  let propsAnimation = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => ({
      opacity: item.opacity,
      color: item.color,
      content: item.content,
      num: item.num,
      from: {
        opacity: 0,
        color: item.color,
        content: item.content,
        num: 0,
      },
      config: { duration: 3000 },
    }))
  );
  const renderContent = (propsAnimation) => {
    let resArr = [
      //   <animated.h2 key={1} style={propsAnimation}>
      //     {propsAnimation.num}
      //   </animated.h2>,
      //   <animated.span style={propsAnimation}>
      //     {propsAnimation.content}
      //   </animated.span>,
    ];
    for (let key in propsAnimation) {
      if (key === "content" || key === "num")
        resArr.push(
          <animated.span className={"mx-1"} style={propsAnimation}>
            {propsAnimation[key]}
          </animated.span>
        );
    }
    return resArr;
  };
  return (
    <div>
      {propsAnimation.map((item, index) => {
        return <div key={index}>{renderContent(item)}</div>;
      })}
    </div>
  );
};

export default Ex3UseSpring;
