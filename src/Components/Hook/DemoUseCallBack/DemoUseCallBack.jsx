import React, { useCallback, useState } from "react";

import ChildUseCallBack from "./ChildUseCallBack";

const DemoUseCallBack = () => {
  let [like, setLike] = useState(1);
  const alertLike = () => {
    return `you have ${like} like`;
  };
  let callBackRender = useCallback(alertLike, [like]);
  return (
    <div className="mt-5 container">
      like:{like}
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tym
      </span>
      <br />
      <br />
      <p className=" w-50">
        set memo giúp tránh rerender lại những thứ ko cần thiết(component tĩnh)
        qua việc setState
        <br />
        ta có vd về 1 component child(xem ở inspect)
        <br />
        khi này ta có setState ở component chính ntn thì ở component đã set memo
        sẽ ko re-render lại
        <br />
        nhưng khi truyền 1 props mới(có thể từ component cha xuống) thì bên memo
        sẽ ko hiểu đc và vẫn sẽ re render lại.tóm lại memo dùng để ngăn re
        render khi đó là giá trị 1 cấp .Để giải quyết vấn đề đó ta dùng
        useCallBack
        <br />
        useCallBack dùng cho tình huống truyền 1 props là 1 hàm(function) và
        muốn re render lại hay ko thì add thộc tính muốn thay đổi vào [...]
      </p>
      <ChildUseCallBack alertLike={callBackRender} />
    </div>
  );
};

export default DemoUseCallBack;
