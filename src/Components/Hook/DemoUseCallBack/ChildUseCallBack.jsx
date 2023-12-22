import React, { memo } from "react";
//set memo giúp tránh rerender lại những thứ ko cần thiết(component tĩnh) qua việc set state
const ChildUseCallBack = (props) => {
  let title = "abc";
  let object = { id: 1, name: "cba" };
  console.log(title);
  console.log(object);

  console.log("ChildUseCallBack re-render");
  return (
    <div>
      <small>{props.alertLike()}</small>
      <br />
      <textarea rows="" cols=""></textarea>
      <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
};

export default memo(ChildUseCallBack);
