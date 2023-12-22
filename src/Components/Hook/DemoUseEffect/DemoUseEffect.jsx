import React, { useState, useEffect } from "react";
import ChildHookEffect from "./ChildHookEffect";

const DemoUseEffect = () => {
  let [num, setNum] = useState(1);
  let [like, setLike] = useState(1);
  //useEffect hàm chạy sau khi giao diện render lại thay cho didMount vs didUpdate trong mọi trường hợp
  //   useEffect(() => {
  //     console.log("didMount");
  //     console.log("didUpdate");
  //   });

  //cách viết thay thế cho component didMount
  useEffect(() => {
    console.log("didMount");
  }, []);
  console.log("Render");
  console.log(like);

  //cách viết thay thế component didUpdate
  useEffect(() => {
    let value = num;
    console.log("didUpdate khi num thay đổi", value);
  }, [num]); //num là giá trị nếu bị thay đổi sau render thì useEffect này sẽ chạy

  let handleChange = () => {
    setNum(num++);
  };
  return (
    <div className="container">
      <h3>useEffect Hook</h3>
      <p>
        +useEffcet cho phép thực hiện side effect (thay đổi các state ngoài hàm)
        bên trong các function component
        <br />
        +useEffcet chạy sau khi dom cập nhật(chạy sau khi render xong)
        <br />
        +có thể gọi nhiều lần trong 1 function component
        <br />
        **** useEffcet có thể ứng vs 3 trạng thái lifeCycle chạy sau khi render
        là : didMount,didUpdate,willUnmount
      </p>
      <p>ta có demo: (kiểm tra ở inspect)</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleChange();
        }}
      >
        +
      </button>
      <p>{num}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>

      {like === 1 ? <ChildHookEffect /> : ""}
    </div>
  );
};

export default DemoUseEffect;
