import React, { useState } from "react";

const DemoUseStateHook = () => {
  let [state, setState] = useState({ like: 0 });
  return (
    <div className="container">
      <h3>UseState Hook</h3>
      <p>
        +Đối vs react function component khi ta tạo 1 state và setState thì
        thường dùng thuộc tính useState từ React Hook <br />
        +Khi setState thì sẽ render lại tất cả những gì có trong component
      </p>
      <p>
        Như vd dưới, khi ta setState lại 'like' thì Component sẽ render lại và
        bỏ qua lifeCycle
      </p>
      <div className="card text-start w-25">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="pic"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: "red" }}>{state.like}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setState({
                like: state.like + 1,
              });
              //console.log(state.like);
            }}
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoUseStateHook;
